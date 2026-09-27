/**
 * Inspect mode: hover (or tap) any element to see its real box size, the
 * spacing to its parent, and its type + colour tokens, read from the live DOM.
 */
import { $, toast, frameThrottle } from "./util.js";

const TOKENS = ["--ink", "--graphite", "--paper", "--canvas", "--tint", "--accent", "--on-accent", "--line", "--line-strong", "--danger"];
const SKIP = new Set(["HTML", "BODY", "MAIN", "BR", "svg", "path"]);

export function initInspect({ onHighlight } = {}) {
  const btn = $("#inspect-toggle");
  const layer = $("#inspect");
  const box = $("#inspect-box");
  const size = $("#inspect-size");
  const gapsEl = $("#inspect-gaps");
  const card = $("#inspect-card");
  if (!btn || !layer) return;

  const root = document.documentElement;
  let on = false;
  let current = null;
  let pinned = false;
  let tokenMap = new Map();

  // Four reusable gap lines
  const gaps = ["top", "right", "bottom", "left"].map(() => {
    const g = document.createElement("div");
    g.className = "inspect__gap";
    const s = document.createElement("span");
    g.appendChild(s);
    gapsEl.appendChild(g);
    return g;
  });

  /* Resolve token values to rgb strings by probing */
  const resolveTokens = () => {
    const probe = document.createElement("span");
    probe.style.display = "none";
    document.body.appendChild(probe);
    tokenMap = new Map();
    TOKENS.forEach((t) => {
      probe.style.color = `var(${t})`;
      const v = getComputedStyle(probe).color;
      if (!tokenMap.has(v)) tokenMap.set(v, t);
    });
    probe.remove();
  };

  const toHex = (rgb) => {
    const m = rgb.match(/[\d.]+/g);
    if (!m) return rgb;
    const [r, g, b, a] = m.map(Number);
    const hex = "#" + [r, g, b].map((n) => Math.round(n).toString(16).padStart(2, "0")).join("").toUpperCase();
    return a !== undefined && a < 1 ? `${hex} ${Math.round(a * 100)}%` : hex;
  };
  const isClear = (c) => c === "transparent" || /rgba\(.*,\s*0\)$/.test(c) || /\/\s*0\)$/.test(c);
  const colorLabel = (c) => {
    const token = tokenMap.get(c);
    const sw = `<span class="inspect__swatch" style="background:${c}"></span>`;
    return `${sw}${token ? `var(${token})` : toHex(c)}`;
  };

  const layerName = (el) => {
    const tag = el.tagName.toLowerCase();
    const cls = el.classList[0];
    const text = (el.getAttribute("aria-label") || el.alt || el.textContent || "").trim().replace(/\s+/g, " ");
    const name = cls ? `${tag}.${cls}` : tag;
    return text && text.length < 42 ? `${name}  "${text}"` : name;
  };

  const pick = (x, y) => {
    let el = document.elementFromPoint(x, y);
    while (el && (SKIP.has(el.tagName) || el.closest("#inspect"))) el = el.parentElement;
    if (!el || el === document.body) return null;
    // Prefer a meaningful element over tiny inline wrappers
    if (el.getBoundingClientRect().width < 4 && el.parentElement) el = el.parentElement;
    return el;
  };

  const place = (el) => {
    const r = el.getBoundingClientRect();
    box.style.transform = `translate(${r.left}px, ${r.top}px)`;
    box.style.width = `${r.width}px`;
    box.style.height = `${r.height}px`;
    size.textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;

    // Spacing to the nearest ancestor that's actually larger
    let parent = el.parentElement;
    while (parent && parent !== document.body) {
      const pr0 = parent.getBoundingClientRect();
      if (pr0.width > r.width + 1 || pr0.height > r.height + 1) break;
      parent = parent.parentElement;
    }
    const pr = parent && parent !== document.body ? parent.getBoundingClientRect() : null;
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const specs = pr
      ? [
          { v: r.top - pr.top, s: { left: cx, top: pr.top, width: 1, height: r.top - pr.top } },
          { v: pr.right - r.right, s: { left: r.right, top: cy, width: pr.right - r.right, height: 1 } },
          { v: pr.bottom - r.bottom, s: { left: cx, top: r.bottom, width: 1, height: pr.bottom - r.bottom } },
          { v: r.left - pr.left, s: { left: pr.left, top: cy, width: r.left - pr.left, height: 1 } },
        ]
      : [];
    gaps.forEach((g, i) => {
      const spec = specs[i];
      if (!spec || spec.v < 1) {
        g.style.display = "none";
        return;
      }
      g.style.display = "block";
      Object.entries(spec.s).forEach(([k, v]) => (g.style[k] = `${v}px`));
      const label = g.firstChild;
      label.textContent = Math.round(spec.v);
      const vertical = i % 2 === 0;
      label.style.left = vertical ? "6px" : "50%";
      label.style.top = vertical ? "50%" : "6px";
      label.style.transform = vertical ? "translateY(-50%)" : "translateX(-50%)";
    });

    // Spec card
    const cs = getComputedStyle(el);
    const rows = [["Size", `${Math.round(r.width)} × ${Math.round(r.height)}`]];
    const hasText = el.childNodes && Array.from(el.childNodes).some((n) => n.nodeType === 3 && n.textContent.trim());
    if (hasText || /^(H\d|P|A|BUTTON|LABEL|LI|DT|DD|BLOCKQUOTE|CODE|INPUT|TEXTAREA)$/.test(el.tagName)) {
      const family = cs.fontFamily.split(",")[0].replace(/["']/g, "");
      rows.push(["Font", `${family} ${cs.fontWeight}`]);
      const lh = cs.lineHeight === "normal" ? "normal" : `${Math.round(parseFloat(cs.lineHeight))}`;
      rows.push(["Size / line", `${parseFloat(cs.fontSize).toFixed(0)}px / ${lh}`]);
      if (cs.fontStretch && cs.fontStretch !== "100%" && cs.fontStretch !== "normal") rows.push(["Stretch", cs.fontStretch]);
      rows.push(["Color", colorLabel(cs.color)]);
    }
    if (!isClear(cs.backgroundColor)) rows.push(["Fill", colorLabel(cs.backgroundColor)]);
    if (parseFloat(cs.borderTopWidth) > 0 && !isClear(cs.borderTopColor)) rows.push(["Stroke", `${parseFloat(cs.borderTopWidth)}px ${toHex(cs.borderTopColor)}`]);
    if (parseFloat(cs.borderTopLeftRadius) > 0) rows.push(["Radius", cs.borderTopLeftRadius]);
    const pad = [cs.paddingTop, cs.paddingRight, cs.paddingBottom, cs.paddingLeft].map((v) => Math.round(parseFloat(v)));
    if (pad.some(Boolean)) rows.push(["Padding", pad.join(" ")]);
    if (cs.display.includes("grid") || cs.display.includes("flex")) {
      rows.push(["Layout", `${cs.display}${cs.gap && cs.gap !== "normal" ? `, gap ${Math.round(parseFloat(cs.gap))}` : ""}`]);
    }

    card.innerHTML = `<h4>${escapeHtml(layerName(el))}</h4><dl>${rows
      .map(([k, v]) => `<dt>${k}</dt><dd>${k === "Color" || k === "Fill" ? v : escapeHtml(v)}</dd>`)
      .join("")}</dl>`;

    const cw = 250;
    const ch = card.offsetHeight;
    let left = r.right + 16;
    if (left + cw > window.innerWidth - 12) left = r.left - cw - 16;
    if (left < 12) left = Math.min(window.innerWidth - cw - 12, Math.max(12, r.left));
    let top = r.top;
    if (left === Math.min(window.innerWidth - cw - 12, Math.max(12, r.left))) top = r.bottom + 34;
    top = Math.min(Math.max(top, 84), window.innerHeight - ch - 12);
    card.style.transform = `translate(${left}px, ${top}px)`;

    onHighlight?.(r);
  };

  const show = (el) => {
    current = el;
    if (!el) return;
    layer.style.visibility = "visible";
    place(el);
  };

  const onMove = frameThrottle((x, y) => {
    if (pinned) return;
    const el = pick(x, y);
    if (el && el !== current) show(el);
  });
  const moveHandler = (e) => onMove(e.clientX, e.clientY);
  const scrollHandler = frameThrottle(() => current && place(current));

  const clickHandler = (e) => {
    if (e.target.closest(".nav") || e.target.closest(".toast")) return;
    e.preventDefault();
    e.stopPropagation();
    const el = pick(e.clientX, e.clientY);
    if (!el) return;
    pinned = e.pointerType !== "mouse" ? false : !pinned || el !== current;
    show(el);
  };

  const enable = () => {
    on = true;
    resolveTokens();
    root.classList.add("inspecting");
    btn.setAttribute("aria-pressed", "true");
    layer.style.visibility = "hidden";
    document.addEventListener("pointermove", moveHandler, { passive: true });
    document.addEventListener("click", clickHandler, true);
    window.addEventListener("scroll", scrollHandler, { passive: true });
    toast("Inspect is on. Hover anything to read its spec. Press I or Esc to exit.", 3800);
  };
  const disable = () => {
    on = false;
    pinned = false;
    current = null;
    root.classList.remove("inspecting");
    btn.setAttribute("aria-pressed", "false");
    document.removeEventListener("pointermove", moveHandler);
    document.removeEventListener("click", clickHandler, true);
    window.removeEventListener("scroll", scrollHandler);
    onHighlight?.(null);
  };
  const toggle = () => (on ? disable() : enable());

  btn.addEventListener("click", toggle);
  document.addEventListener("keydown", (e) => {
    const typing = e.target.closest?.("input, textarea, select, [contenteditable]");
    if (typing || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "i" || e.key === "I") {
      e.preventDefault();
      toggle();
    } else if (e.key === "Escape" && on) {
      disable();
    }
  });
  document.addEventListener("tokens:change", () => on && (resolveTokens(), current && place(current)));
  document.addEventListener("theme:change", () => on && (resolveTokens(), current && place(current)));
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
}
