/**
 * Hero seam: one headline, two layers.
 * Left of the seam is the rendered design; right of it is the same type as
 * its spec, with live measurements taken from the real rendered glyphs.
 */
import { $, $$, clamp, reducedMotion, finePointer, frameThrottle, easeOutExpo, cssVar } from "./util.js";

const REST = 58; // resting seam position, in percent

export function initSeam() {
  const hero = $(".hero");
  const stage = $("#seam-stage");
  const seam = $("#seam");
  const ghost = $("#hero-ghost");
  const title = $("#hero-title");
  const redlines = $("#redlines");
  const code = $("#spec-code");
  if (!stage || !seam || !ghost) return;

  let pos = REST;
  let target = REST;
  let raf = 0;
  let introDone = false;
  let dragging = false;

  const logo = $("#logo");
  const write = (p) => {
    pos = p;
    stage.style.setProperty("--seam", `${p}%`);
    logo?.style.setProperty("--mseam", `${p.toFixed(1)}%`);
    const v = Math.round(p);
    seam.setAttribute("aria-valuenow", String(v));
    seam.setAttribute("aria-valuetext", `${v} percent design, ${100 - v} percent spec`);
  };

  const tick = () => {
    const next = pos + (target - pos) * 0.16;
    if (Math.abs(target - next) < 0.05) {
      write(target);
      raf = 0;
      return;
    }
    write(next);
    raf = requestAnimationFrame(tick);
  };
  const moveTo = (p, immediate = false) => {
    target = clamp(p, 0, 100);
    if (immediate || reducedMotion()) {
      cancelAnimationFrame(raf);
      raf = 0;
      write(target);
      return;
    }
    if (!raf) raf = requestAnimationFrame(tick);
  };
  const pctFromEvent = (e) => {
    const r = stage.getBoundingClientRect();
    return ((e.clientX - r.left) / r.width) * 100;
  };

  /* ---- Pointer: mouse follows, touch/pen drags ---- */
  stage.addEventListener("pointermove", (e) => {
    if (!introDone) return;
    if (dragging) return moveTo(pctFromEvent(e), true);
    if (e.pointerType === "mouse" && finePointer()) moveTo(pctFromEvent(e));
  });
  const startDrag = (e) => {
    if (e.pointerType === "mouse" && e.target !== seam && !seam.contains(e.target)) return;
    dragging = true;
    introDone = true;
    seam.classList.add("is-dragging");
    stage.setPointerCapture?.(e.pointerId);
    moveTo(pctFromEvent(e), true);
  };
  const endDrag = () => {
    dragging = false;
    seam.classList.remove("is-dragging");
  };
  seam.addEventListener("pointerdown", startDrag);
  stage.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") startDrag(e);
  });
  stage.addEventListener("pointerup", endDrag);
  stage.addEventListener("pointercancel", endDrag);

  /* ---- Keyboard ---- */
  seam.addEventListener("keydown", (e) => {
    const step = e.shiftKey ? 10 : 2;
    const map = { ArrowLeft: -step, ArrowDown: -step, ArrowRight: step, ArrowUp: step };
    if (e.key in map) {
      e.preventDefault();
      introDone = true;
      moveTo(target + map[e.key]);
    } else if (e.key === "Home") {
      e.preventDefault();
      moveTo(0);
    } else if (e.key === "End") {
      e.preventDefault();
      moveTo(100);
    }
  });

  /* ---- Fit: "handoff." always spans the frame; height is capped ---- */
  const fit = () => {
    const layer = stage.querySelector(".render-layer");
    const cs = getComputedStyle(layer);
    const avail = layer.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const line = title.querySelectorAll(".hero__line")[1];
    const fs = parseFloat(getComputedStyle(title).fontSize);
    const w = line.getBoundingClientRect().width;
    if (!w || !avail) return;
    const byWidth = (fs * avail * 0.995) / w;
    // Height budget: everything above the title + the foot (sub + CTAs)
    // must leave the CTAs inside the first viewport.
    const foot = hero.querySelector(".hero__foot");
    const stageTop = stage.getBoundingClientRect().top + window.scrollY;
    const pads = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
    const budget = window.innerHeight - stageTop - pads - (foot?.offsetHeight || 140) - 28;
    const byHeight = budget / 1.72;
    const next = clamp(Math.min(byWidth, Math.max(byHeight, 72)), 44, 420);
    // The CSS estimate is usually right; only override when it's off by >1.5%
    // so the headline never jumps (no layout shift).
    stage.style.removeProperty("--hero-fs");
    const cssFs = parseFloat(getComputedStyle(title).fontSize);
    if (Math.abs(cssFs - next) / next > 0.015) stage.style.setProperty("--hero-fs", `${next.toFixed(2)}px`);
  };

  /* ---- Canvas font metrics for baseline / cap / x-height ---- */
  const ctx = document.createElement("canvas").getContext("2d");
  const metrics = (fs) => {
    ctx.font = `800 ${fs}px Archivo, "Helvetica Neue", Arial, sans-serif`;
    const H = ctx.measureText("H");
    const x = ctx.measureText("x");
    const asc = H.fontBoundingBoxAscent ?? fs * 0.9;
    const desc = H.fontBoundingBoxDescent ?? fs * 0.22;
    return { asc, desc, cap: H.actualBoundingBoxAscent, xh: x.actualBoundingBoxAscent };
  };

  const el = (cls, style, label, labelStyle, labelCls = "") => {
    const d = document.createElement("div");
    d.className = `rl ${cls}`;
    Object.assign(d.style, style);
    if (label) {
      const s = document.createElement("span");
      s.className = `rl__label ${labelCls}`;
      s.textContent = label;
      Object.assign(s.style, labelStyle);
      d.appendChild(s);
    }
    return d;
  };

  const glyphRects = (lineEl) => {
    const node = lineEl.firstChild;
    const rects = [];
    if (!node || node.nodeType !== 3) return rects;
    const range = document.createRange();
    for (let i = 0; i < node.length; i++) {
      range.setStart(node, i);
      range.setEnd(node, i + 1);
      rects.push(range.getBoundingClientRect());
    }
    return rects;
  };

  const build = () => {
    const frag = document.createDocumentFragment();
    const sr = stage.getBoundingClientRect();
    const fs = parseFloat(getComputedStyle(ghost).fontSize);
    const lh = fs * 0.86;
    const m = metrics(fs);
    const lines = $$(".hero__line", ghost);
    const px = (v) => `${Math.round(v)}px`;
    const inkTops = []; // stage-relative cap top of each line

    lines.forEach((line, li) => {
      const r = line.getBoundingClientRect();
      // offsetTop/Left ignore the intro transform; dx undoes it for glyph rects
      const top = line.offsetTop;
      const left = line.offsetLeft;
      const dx = r.left - sr.left - left;
      const baseline = top + (lh - (m.asc + m.desc)) / 2 + m.asc;
      const capTop = baseline - m.cap;
      inkTops.push(capTop);

      // Glyph advance boxes, measured from the real text (kerning preserved)
      glyphRects(line).forEach((g) => {
        if (!g.width) return;
        frag.appendChild(
          el("rl--box", {
            left: px(g.left - sr.left - dx),
            top: px(capTop),
            width: px(g.width),
            height: px(m.cap),
          })
        );
      });

      if (li === 0) {
        // Font size bar, left of line 1
        frag.appendChild(
          el(
            "rl--v",
            { left: px(left - 14), top: px(capTop), height: px(m.cap) },
            `cap ${Math.round(m.cap)}`,
            { left: "-8px", top: "50%", transform: "translate(-100%, -50%)" }
          )
        );
      }
      if (li === lines.length - 1) {
        const x0 = left - 10;
        const width = r.width + 20;
        frag.appendChild(
          el("rl--h", { left: px(x0), top: px(baseline), width: px(width) }, "baseline", {
            right: "0",
            top: "4px",
          }, "rl__label--muted")
        );
        frag.appendChild(
          el("rl--h", { left: px(x0), top: px(capTop), width: px(width) }, "cap height", {
            right: "0",
            bottom: "4px",
          }, "rl__label--muted")
        );
        // Small screens get fewer annotations so labels never collide
        if (fs < 150) return;
        frag.appendChild(
          el("rl--h", { left: px(x0), top: px(baseline - m.xh), width: px(width), borderTopColor: "color-mix(in oklab, var(--accent) 55%, transparent)" }, "x-height", {
            right: "0",
            bottom: "4px",
          }, "rl__label--muted")
        );
        // Measured width of the word
        frag.appendChild(
          el(
            "rl--w",
            { left: px(left), top: px(baseline + Math.min(m.desc * 0.6, 28) + 6), width: px(r.width) },
            `${Math.round(r.width)} px`,
            { left: "50%", top: "6px", transform: "translateX(-50%)" }
          )
        );
      }
    });

    redlines.replaceChildren(frag);

    // Live CSS for the headline
    const wdth = Math.round(parseFloat(cssVar("--display-wdth")) || 112);
    code.innerHTML =
      `<span class="k">.hero-title</span> {\n` +
      `  <span class="k">font:</span> <span class="v">800 ${fs.toFixed(1)}px Archivo</span>;\n` +
      `  <span class="k">font-stretch:</span> <span class="v">${wdth}%</span>;\n` +
      `  <span class="k">line-height:</span> <span class="v">0.86</span>;\n` +
      `  <span class="k">letter-spacing:</span> <span class="v">-0.045em</span>;\n` +
      `}`;

    // Hide the code block if it would collide with either line of type
    code.style.visibility = "hidden";
    const cr = code.getBoundingClientRect();
    const codeLeft = cr.left - sr.left;
    const codeBottom = code.offsetTop + code.offsetHeight;
    const hitsLine1 = codeLeft - (lines[0].offsetLeft + lines[0].offsetWidth) < 32;
    const hitsLine2 = codeBottom > inkTops[1] - 16 && codeLeft < lines[1].offsetLeft + lines[1].offsetWidth;
    code.style.visibility = hitsLine1 || hitsLine2 ? "hidden" : "visible";
  };

  const refresh = frameThrottle(() => {
    fit();
    build();
  });

  new ResizeObserver(refresh).observe(stage);
  window.addEventListener("resize", refresh);
  document.addEventListener("tokens:change", refresh);

  /* ---- Intro: design fills the frame, then the spec sweeps in ---- */
  const ready = document.fonts?.ready ?? Promise.resolve();
  if (reducedMotion()) {
    ready.then(() => {
      fit();
      build();
      introDone = true;
    });
    return;
  }
  write(100);
  ready.then(() => {
    fit();
    build();
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("intro");
      const start = performance.now() + 450;
      const dur = 1500;
      const from = 100;
      const step = (now) => {
        const t = clamp((now - start) / dur, 0, 1);
        write(from + (REST - from) * easeOutExpo(t));
        if (t < 1 && !introDone) requestAnimationFrame(step);
        else {
          target = pos;
          introDone = true;
        }
      };
      requestAnimationFrame(step);
    });
  });
}
