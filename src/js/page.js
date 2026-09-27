/**
 * Page-level behaviour: live frame dimensions, active frame + nav state,
 * scroll reveals, theme toggle, mobile menu and archive hover previews.
 */
import { $, $$, reducedMotion, storage, currentTheme, finePointer } from "./util.js";
import esi from "../assets/work/esi-800.webp";
import eproc from "../assets/work/eproc-533.webp";
import dashboard from "../assets/work/dashboard-800.webp";

/* Every [data-dim] shows the live size of its frame or card */
export function initDims() {
  const ro = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const box = entry.borderBoxSize?.[0];
      const w = Math.round(box ? box.inlineSize : entry.contentRect.width);
      const h = Math.round(box ? box.blockSize : entry.contentRect.height);
      entry.target._dim.textContent = `${w} × ${h}`;
    });
  });
  $$("[data-dim]").forEach((dim) => {
    const host = dim.closest(".card, .about__portrait, .frame");
    if (!host) return;
    host._dim = dim;
    ro.observe(host, { box: "border-box" });
  });
}

/* The frame in the middle of the viewport is "selected" */
export function initActiveFrame() {
  const links = new Map($$(".nav__links a").map((a) => [a.getAttribute("href").slice(1), a]));
  const frames = $$(".frame");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        frames.forEach((f) => f.classList.toggle("is-active", f === e.target));
        links.forEach((a, id) => a.setAttribute("aria-current", String(id === e.target.id)));
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  frames.forEach((f) => io.observe(f));
}

/* Reveal: only things below the fold start hidden, so the first frame is complete at rest */
export function initReveal() {
  if (reducedMotion() || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.remove("is-pending");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  $$(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top > window.innerHeight) {
      el.classList.add("is-pending");
      io.observe(el);
    }
  });
}

export function initTheme() {
  const btn = $("#theme-toggle");
  const root = document.documentElement;
  const label = () => {
    const t = currentTheme();
    btn.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };
  btn?.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    storage.set("jso-theme", next);
    label();
    document.dispatchEvent(new CustomEvent("theme:change", { detail: next }));
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    label();
    document.dispatchEvent(new CustomEvent("theme:change"));
  });
  // The host page may stamp data-theme too; keep the label honest.
  new MutationObserver(label).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  label();
}

export function initMenu() {
  const btn = $("#menu-toggle");
  const panel = $("#nav-links");
  if (!btn || !panel) return;
  const setOpen = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    panel.classList.toggle("is-open", open);
  };
  btn.addEventListener("click", () => setOpen(btn.getAttribute("aria-expanded") !== "true"));
  panel.addEventListener("click", (e) => e.target.closest("a") && setOpen(false));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      btn.focus();
    }
  });
}

/* Archive rows show a floating preview that trails the pointer */
export function initArchivePreview() {
  const preview = $("#archive-preview");
  if (!preview || !finePointer()) return;
  const img = preview.querySelector("img");
  const srcs = { esi, eproc, dashboard };
  let x = 0, y = 0, tx = 0, ty = 0, raf = 0, on = false;
  const loop = () => {
    x += (tx - x) * (reducedMotion() ? 1 : 0.2);
    y += (ty - y) * (reducedMotion() ? 1 : 0.2);
    preview.style.transform = `translate(${x}px, ${y}px) rotate(${reducedMotion() ? 0 : (tx - x) * 0.02}deg)`;
    raf = on ? requestAnimationFrame(loop) : 0;
  };
  $$(".archive__row").forEach((row) => {
    row.addEventListener("pointerenter", (e) => {
      img.src = srcs[row.dataset.preview] || "";
      tx = x = e.clientX + 28;
      ty = y = e.clientY - 90;
      on = true;
      preview.classList.add("is-on");
      if (!raf) raf = requestAnimationFrame(loop);
    });
    row.addEventListener("pointermove", (e) => {
      tx = e.clientX + 28;
      ty = e.clientY - 90;
    });
    row.addEventListener("pointerleave", () => {
      on = false;
      preview.classList.remove("is-on");
    });
  });
}
