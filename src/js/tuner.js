/**
 * Page tokens panel: edits the same CSS custom properties the whole page is
 * built on, live, and exports the result as CSS.
 */
import { $, $$, storage, copyText, toast, currentTheme } from "./util.js";

const DEFAULTS = { accent: "redline", radius: 6, width: 112, density: 1 };
const ACCENTS = {
  redline: { light: "#C9300C", dark: "#FF6038" },
  cobalt: { light: "#2B4CF0", dark: "#7B8BFF" },
  signal: { light: "#0B7F55", dark: "#2FC48A" },
  ink: { light: "#121316", dark: "#ECEDE8" },
};
const KEY = "jso-tokens";

export function initTuner() {
  const root = document.documentElement;
  const radius = $("#t-radius");
  const width = $("#t-width");
  const density = $("#t-density");
  const out = { radius: $("#o-radius"), width: $("#o-width"), density: $("#o-density") };
  const codeEl = $("#tuner-css");
  if (!radius || !codeEl) return;

  let state = { ...DEFAULTS };
  try {
    state = { ...DEFAULTS, ...(JSON.parse(storage.get(KEY) || "null") || {}) };
  } catch {
    /* corrupted storage: fall back to defaults */
  }

  const renderCode = () => {
    const a = ACCENTS[state.accent] || ACCENTS.redline;
    const theme = currentTheme();
    const other = theme === "dark" ? "light" : "dark";
    codeEl.innerHTML =
      `:root {\n` +
      `  <span class="k">--accent:</span> <span class="v">${a[theme]}</span>; <span class="k">/* ${other}: ${a[other]} */</span>\n` +
      `  <span class="k">--radius:</span> <span class="v">${state.radius}px</span>;\n` +
      `  <span class="k">--display-wdth:</span> <span class="v">${state.width}</span>;\n` +
      `  <span class="k">--density:</span> <span class="v">${Number(state.density).toFixed(2)}</span>;\n` +
      `}`;
  };

  const apply = (persist = true) => {
    if (state.accent === "redline") root.removeAttribute("data-accent");
    else root.setAttribute("data-accent", state.accent);
    root.style.setProperty("--radius", `${state.radius}px`);
    root.style.setProperty("--display-wdth", String(state.width));
    root.style.setProperty("--density", String(state.density));

    radius.value = state.radius;
    width.value = state.width;
    density.value = state.density;
    out.radius.textContent = `${state.radius}px`;
    out.width.textContent = String(state.width);
    out.density.textContent = `${Number(state.density).toFixed(2)}×`;
    const radio = $(`input[name="accent"][value="${state.accent}"]`);
    if (radio) radio.checked = true;

    renderCode();
    if (persist) {
      const changed = Object.keys(DEFAULTS).some((k) => String(DEFAULTS[k]) !== String(state[k]));
      if (changed) storage.set(KEY, JSON.stringify(state));
      else storage.remove(KEY);
    }
    document.dispatchEvent(new CustomEvent("tokens:change", { detail: { ...state } }));
  };

  radius.addEventListener("input", () => {
    state.radius = Number(radius.value);
    apply();
  });
  width.addEventListener("input", () => {
    state.width = Number(width.value);
    apply();
  });
  density.addEventListener("input", () => {
    state.density = Number(density.value);
    apply();
  });
  $$('input[name="accent"]').forEach((r) =>
    r.addEventListener("change", () => {
      state.accent = r.value;
      apply();
    })
  );
  $("#tuner-reset").addEventListener("click", () => {
    state = { ...DEFAULTS };
    apply();
    toast("Tokens reset to the defaults.");
  });
  $("#tuner-copy").addEventListener("click", async () => {
    const ok = await copyText(codeEl.textContent);
    toast(ok ? "CSS copied to your clipboard." : "Copy failed. Select the code and copy it manually.");
  });
  document.addEventListener("theme:change", renderCode);
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", renderCode);

  apply(false);
}
