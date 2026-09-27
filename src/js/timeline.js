/**
 * Version history: career as a Gantt chart with a scrubbable playhead.
 * Overlapping roles sit on separate lanes; the detail cards show every role
 * active at the playhead.
 */
import { $, clamp, reducedMotion } from "./util.js";

const easeInOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

const ROLES = [
  { lane: 0, start: 2017, end: 2020, company: "Hansei By Design", short: "Hansei By Design", role: "Freelance Designer and Developer", period: "2017 to 2020", note: "Where it started: UI and UX, web design, frontend builds and content for freelance clients." },
  { lane: 1, start: 2019, end: 2020, company: "Hanu Software", short: "Hanu", role: "Cloud Engineer", period: "2019 to 2020", note: "Azure data platforms for Fortune 500 clients. Designed a chatbot admin portal." },
  { lane: 0, start: 2020, end: 2021, company: "Amazon Fintech", short: "Fintech", role: "Support Engineer III", period: "2020 to 2021", note: "Data pipelines, automation and BI reporting." },
  { lane: 0, start: 2021, end: 2025, company: "Amazon (Amazon Business)", short: "Amazon Business", role: "Design Technologist", period: "2021 to 2025", note: "Amazon India's first design technologist. Bridged 10+ designers and 20+ engineers across Hyderabad, Madrid, Austin and Seattle." },
  { lane: 1, start: 2024, end: 2025, company: "Boomi", short: "Boomi", role: "Senior Design Technologist", period: "2024 to 2025", note: "Designed and built the Magnetosphere (internal) and Exosphere (public) design systems. Mentored interns, designers and developers." },
  { lane: 2, start: 2024, end: null, company: "OpenRipples", short: "OpenRipples", role: "Senior Frontend and Design Engineer", period: "2024 to now", note: "A freelance services firm. I bring frontend and design engineering to client projects." },
  { lane: 0, start: 2025, end: null, company: "Ares Labs", short: "Ares Labs", role: "Director, UX Design and Software Engineering", period: "2025 to now", note: "Leading a team of 10 designers and developers. Architected the internal design system, cut SDLC iteration cycles by 70% with AI-powered tooling, and shipped a CRM that lifted net earnings 10%." },
];

const MONTHS = ["Jan", "Apr", "Jul", "Oct"];

export function initTimeline() {
  const gantt = $("#gantt");
  const axis = $("#gantt-axis");
  const lanesEl = $("#gantt-lanes");
  const playhead = $("#gantt-playhead");
  const phLabel = $("#gantt-playhead-label");
  const range = $("#gantt-range");
  const detail = $("#timeline-detail");
  if (!gantt || !range) return;

  const d = new Date();
  const now = Math.ceil((d.getFullYear() + d.getMonth() / 12) * 4) / 4;
  const MIN = 2017;
  const MAX = Math.max(now, 2026);
  range.max = String(MAX);
  range.value = String(MAX);
  const pct = (y) => ((y - MIN) / (MAX - MIN)) * 100;

  // Axis
  for (let y = MIN; y <= Math.floor(MAX); y++) {
    const t = document.createElement("span");
    t.className = "gantt__tick";
    t.style.left = `${pct(y)}%`;
    t.textContent = String(y);
    axis.appendChild(t);
  }

  // Lanes + bars
  const laneCount = Math.max(...ROLES.map((r) => r.lane)) + 1;
  const lanes = Array.from({ length: laneCount }, () => {
    const l = document.createElement("div");
    l.className = "gantt__lane";
    lanesEl.appendChild(l);
    return l;
  });
  const bars = ROLES.map((r) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "gantt__bar" + (r.end === null ? " is-now" : "");
    const end = r.end ?? MAX;
    b.style.left = `${pct(r.start)}%`;
    b.style.width = `calc(${pct(end) - pct(r.start)}% - 3px)`;
    b.textContent = r.short;
    b.setAttribute("aria-label", `${r.company}, ${r.role}, ${r.period}`);
    b.addEventListener("click", () => {
      stopIntro();
      set(Math.min(end - 0.25, r.start + (end - r.start) / 2), false, true);
    });
    lanes[r.lane].appendChild(b);
    return b;
  });

  let lastKey = "";
  const label = (v) => {
    if (v >= MAX - 0.001) return "Now";
    const y = Math.floor(v);
    return `${MONTHS[Math.round((v - y) * 4) % 4]} ${y}`;
  };

  const scroller = gantt.parentElement;
  const follow = (v) => {
    // Narrow screens scroll the chart sideways: keep the playhead in view
    if (scroller.scrollWidth <= scroller.clientWidth + 1) return;
    const x = (pct(v) / 100) * gantt.offsetWidth;
    scroller.scrollLeft = clamp(x - scroller.clientWidth / 2, 0, scroller.scrollWidth);
  };

  const set = (v, fromRange = false, keepInView = false) => {
    v = clamp(Math.round(v * 4) / 4, MIN, MAX);
    if (!fromRange) range.value = String(v);
    playhead.style.left = `${pct(v)}%`;
    if (keepInView) follow(v);
    phLabel.textContent = label(v);
    const active = ROLES.map((r) => r.start <= v && (r.end === null ? true : v < r.end));
    bars.forEach((b, i) => b.classList.toggle("is-active", active[i]));
    const key = active.map(Number).join("");
    if (key === lastKey) return;
    lastKey = key;
    const cards = ROLES.filter((_, i) => active[i])
      .reverse()
      .map(
        (r) => `<article class="role">
          <p class="role__period">${r.period}</p>
          <h4 class="role__company">${r.company}</h4>
          <p class="role__title">${r.role}</p>
          <p class="role__note">${r.note}</p>
        </article>`
      );
    detail.innerHTML = cards.join("");
  };

  range.addEventListener("input", () => {
    stopIntro();
    set(Number(range.value), true);
  });

  // Scrub by dragging on empty lane space
  let scrubbing = false;
  const fromX = (e) => {
    const r = lanesEl.getBoundingClientRect();
    return MIN + ((e.clientX - r.left) / r.width) * (MAX - MIN);
  };
  lanesEl.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".gantt__bar")) return;
    stopIntro();
    scrubbing = true;
    lanesEl.setPointerCapture(e.pointerId);
    set(fromX(e));
  });
  lanesEl.addEventListener("pointermove", (e) => scrubbing && set(fromX(e)));
  lanesEl.addEventListener("pointerup", () => (scrubbing = false));
  lanesEl.addEventListener("pointercancel", () => (scrubbing = false));

  set(MAX, false, true);

  // Intro: play the career once when the chart first scrolls into view
  let introRaf = 0;
  let introStopped = false;
  function stopIntro() {
    introStopped = true;
    cancelAnimationFrame(introRaf);
  }
  if (reducedMotion()) return;
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting || introStopped) return;
      io.disconnect();
      const t0 = performance.now();
      const dur = 2600;
      const step = (t) => {
        if (introStopped) return;
        const k = clamp((t - t0) / dur, 0, 1);
        set(MIN + (MAX - MIN) * easeInOut(k), false, true);
        if (k < 1) introRaf = requestAnimationFrame(step);
      };
      set(MIN, false, true);
      introRaf = requestAnimationFrame(step);
    },
    { threshold: 0.6 }
  );
  io.observe(gantt);
}
