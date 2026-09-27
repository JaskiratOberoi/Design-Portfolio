/**
 * Collaborator quotes as comment pins on a canvas, grouped by the company
 * where we worked together. One thread is open at a time.
 */
import { $, $$, clamp } from "./util.js";

const COMMENTS = [
  {
    initials: "CK",
    name: "Chandra Sekhar K",
    role: "Head of UX Design, Ikonz Studios. Managed Jas at Amazon",
    quote: "His ability to seamlessly integrate design principles with cutting-edge technology results in highly effective solutions that meet modern standards.",
  },
  {
    initials: "SM",
    name: "Sashank Macharla",
    role: "Design at Meta, previously Amazon",
    quote: "We could trust him to roll up his sleeves and get the job done right, no matter what obstacles arose.",
  },
  {
    initials: "GM",
    name: "Gregory Martin",
    role: "Sr. Design Technologist, Amazon",
    quote: "If you are seeking a front-end engineer with a high degree of both ability and motivation, consider Jaskirat for your team.",
  },
  {
    initials: "VB",
    name: "Vijayraj Bhatt",
    role: "Sr. UX Designer, Amazon",
    quote: "His expertise in creating highly interactive and dynamic prototypes has been invaluable, bridging the gap between design and engineering seamlessly.",
  },
  {
    initials: "FW",
    name: "Frank Wang",
    role: "Design Leader, Enterprise SaaS",
    quote: "He brought that rare intersection of design and engineering to discussions, and it showed. Any team would be lucky to have him.",
  },
  {
    initials: "AR",
    name: "Aman Rai",
    role: "Frontend Developer, Boomi",
    quote: "He's helped me see how design and development can (and should) go hand in hand.",
  },
];

export function initComments() {
  const board = $("#board");
  const card = $("#comment-card");
  if (!board || !card) return;
  const pins = $$(".pin", board);
  const avatar = $("#comment-avatar");
  const name = $("#comment-name");
  const role = $("#comment-role");
  const quote = $("#comment-quote");
  const count = $("#comment-count");
  let index = 0;

  const position = () => {
    if (board.clientWidth < 760) {
      card.style.transform = "";
      return;
    }
    const b = board.getBoundingClientRect();
    const p = pins[index].getBoundingClientRect();
    const cw = card.offsetWidth;
    const ch = card.offsetHeight;
    const px = p.left - b.left;
    const py = p.top - b.top;
    const others = pins
      .filter((_, n) => n !== index)
      .map((o) => {
        const r = o.getBoundingClientRect();
        return { l: r.left - b.left - 8, t: r.top - b.top - 8, r: r.right - b.left + 8, b: r.bottom - b.top + 8 };
      });
    // Try right, left, below, above the pin; keep the spot that hides fewest pins
    const candidates = [
      [px + p.width + 18, py - 12],
      [px - cw - 18, py - 12],
      [px - 12, py + p.height + 16],
      [px - 12, py - ch - 16],
      [px + p.width + 18, py - ch + p.height],
      [px - cw - 18, py - ch + p.height],
    ].map(([x, y]) => {
      x = clamp(x, 16, b.width - cw - 16);
      y = clamp(y, 16, b.height - ch - 16);
      const hits = others.filter((o) => o.l < x + cw && o.r > x && o.t < y + ch && o.b > y).length;
      const coversPin = px < x + cw && px + p.width > x && py < y + ch && py + p.height > y ? 10 : 0;
      return { x, y, score: hits + coversPin };
    });
    const best = candidates.reduce((a, c) => (c.score < a.score ? c : a));
    card.style.transform = `translate(${best.x}px, ${best.y}px)`;
  };

  const set = (i) => {
    index = (i + COMMENTS.length) % COMMENTS.length;
    const c = COMMENTS[index];
    pins.forEach((p, n) => p.setAttribute("aria-pressed", String(n === index)));
    avatar.textContent = c.initials;
    name.textContent = c.name;
    role.textContent = c.role;
    quote.innerHTML = `<p>“${c.quote}”</p>`;
    count.textContent = `${index + 1} of ${COMMENTS.length}`;
    position();
  };

  pins.forEach((p) => p.addEventListener("click", () => set(Number(p.dataset.i))));
  $("#comment-prev").addEventListener("click", () => set(index - 1));
  $("#comment-next").addEventListener("click", () => set(index + 1));
  board.addEventListener("keydown", (e) => {
    if (!e.target.classList.contains("pin")) return;
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      set(index + (e.key === "ArrowRight" ? 1 : -1));
      pins[index].focus();
    }
  });
  new ResizeObserver(() => position()).observe(board);
  document.addEventListener("tokens:change", () => requestAnimationFrame(position));
  set(0);
}
