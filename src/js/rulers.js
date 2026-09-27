/**
 * Design-tool rulers along the top and left edges. The origin is the left
 * edge / top of the first frame; the vertical ruler reads document position.
 * A marker follows the pointer, and Inspect highlights the selected span.
 */
import { $, cssVar } from "./util.js";

export function initRulers() {
  const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
  const cx = $("#ruler-x");
  const cy = $("#ruler-y");
  const firstFrame = $(".frame");
  if (!cx || !cy || !firstFrame) return { highlight() {} };

  const gx = cx.getContext("2d");
  const gy = cy.getContext("2d");
  let pointer = { x: -1, y: -1 };
  let hl = null;
  let dirty = true;
  let colors = {};
  let active = false;

  const readColors = () => {
    colors = {
      bg: cssVar("--paper"),
      tick: cssVar("--line-strong"),
      text: cssVar("--graphite"),
      accent: cssVar("--accent"),
      onAccent: cssVar("--on-accent"),
    };
  };

  const size = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth - 20;
    const h = window.innerHeight - 20;
    cx.width = w * dpr;
    cx.height = 20 * dpr;
    cy.width = 20 * dpr;
    cy.height = h * dpr;
    gx.setTransform(dpr, 0, 0, dpr, 0, 0);
    gy.setTransform(dpr, 0, 0, dpr, 0, 0);
    dirty = true;
  };

  const label = (g, text, x, y, rotate) => {
    g.save();
    g.translate(x, y);
    if (rotate) g.rotate(-Math.PI / 2);
    g.fillText(text, 0, 0);
    g.restore();
  };

  const marker = (g, value, pos, vertical) => {
    const text = String(Math.round(value));
    g.font = "9px 'Martian Mono', ui-monospace, monospace";
    const w = g.measureText(text).width + 8;
    g.fillStyle = colors.accent;
    if (vertical) {
      g.fillRect(3, pos - w / 2, 14, w);
      g.fillStyle = colors.onAccent;
      label(g, text, 13.5, pos + w / 2 - 4, true);
    } else {
      g.fillRect(pos - w / 2, 3, w, 14);
      g.fillStyle = colors.onAccent;
      g.fillText(text, pos - w / 2 + 4, 13.5);
    }
  };

  const draw = () => {
    dirty = false;
    const fr = firstFrame.getBoundingClientRect();
    const ox = fr.left - 20; // x origin in ruler space
    const docTop = fr.top + window.scrollY; // y origin in document space
    const W = cx.width;
    const H = cy.height;

    // ---- X ruler ----
    gx.fillStyle = colors.bg;
    gx.fillRect(0, 0, W, 20);
    if (hl) {
      gx.fillStyle = colors.accent;
      gx.globalAlpha = 0.16;
      gx.fillRect(hl.left - 20, 0, hl.width, 20);
      gx.globalAlpha = 1;
    }
    gx.strokeStyle = colors.tick;
    gx.fillStyle = colors.text;
    gx.font = "9px 'Martian Mono', ui-monospace, monospace";
    gx.lineWidth = 1;
    gx.beginPath();
    const startX = Math.floor(-ox / 10) * 10;
    for (let v = startX; ox + v < W; v += 10) {
      const x = Math.round(ox + v) + 0.5;
      const len = v % 100 === 0 ? 20 : v % 50 === 0 ? 8 : 4;
      gx.moveTo(x, 20);
      gx.lineTo(x, 20 - len);
      if (v % 100 === 0) gx.fillText(String(v), x + 3, 9);
    }
    gx.stroke();
    if (pointer.x >= 0) marker(gx, pointer.x - 20 - ox, pointer.x - 20, false);

    // ---- Y ruler ----
    gy.fillStyle = colors.bg;
    gy.fillRect(0, 0, 20, H);
    if (hl) {
      gy.fillStyle = colors.accent;
      gy.globalAlpha = 0.16;
      gy.fillRect(0, hl.top - 20, 20, hl.height);
      gy.globalAlpha = 1;
    }
    gy.strokeStyle = colors.tick;
    gy.fillStyle = colors.text;
    gy.font = "9px 'Martian Mono', ui-monospace, monospace";
    gy.beginPath();
    const scroll = window.scrollY;
    const top = scroll + 20 - docTop; // document value at ruler y=0
    const startY = Math.floor(top / 10) * 10;
    for (let v = startY; v - top < H; v += 10) {
      const y = Math.round(v - top) + 0.5;
      const len = v % 100 === 0 ? 20 : v % 50 === 0 ? 8 : 4;
      gy.moveTo(20, y);
      gy.lineTo(20 - len, y);
      if (v % 100 === 0) label(gy, String(v), 9, y - 3, true);
    }
    gy.stroke();
    if (pointer.y >= 0) marker(gy, pointer.y - 20 + top, pointer.y - 20, true);
  };

  const loop = () => {
    if (!active) return;
    if (dirty) draw();
    requestAnimationFrame(loop);
  };
  const mark = () => (dirty = true);

  const start = () => {
    if (active) return;
    active = true;
    readColors();
    size();
    requestAnimationFrame(loop);
  };
  const stop = () => {
    active = false;
  };

  window.addEventListener("pointermove", (e) => {
    pointer = { x: e.clientX, y: e.clientY };
    mark();
  }, { passive: true });
  document.addEventListener("pointerleave", () => {
    pointer = { x: -1, y: -1 };
    mark();
  });
  window.addEventListener("scroll", mark, { passive: true });
  window.addEventListener("resize", () => active && size());
  const recolor = () => {
    readColors();
    mark();
  };
  document.addEventListener("theme:change", recolor);
  document.addEventListener("tokens:change", recolor);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", recolor);
  mq.addEventListener("change", () => (mq.matches ? start() : stop()));
  if (mq.matches) (document.fonts?.ready ?? Promise.resolve()).then(start);

  return {
    highlight(rect) {
      hl = rect;
      mark();
    },
  };
}
