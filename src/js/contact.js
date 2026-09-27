/**
 * Contact form: validates inline, then opens the visitor's email app with a
 * pre-written message (no backend needed). Plus a copy-email button.
 */
import { $, copyText, toast } from "./util.js";

const EMAIL = "me@jaskiratoberoi.com";

export function initContact() {
  const form = $("#contact-form");
  const status = $("#form-status");
  const copyBtn = $("#copy-email");

  copyBtn?.addEventListener("click", async () => {
    const ok = await copyText(EMAIL);
    copyBtn.textContent = ok ? "Copied" : "Copy failed";
    toast(ok ? `${EMAIL} copied to your clipboard.` : `Copy failed. The address is ${EMAIL}.`);
    setTimeout(() => (copyBtn.textContent = "Copy email"), 2200);
  });

  if (!form) return;
  const fields = {
    name: { el: $("#f-name"), err: $("#f-name-err"), check: (v) => (v.trim() ? "" : "Add your name so I know who's writing.") },
    email: {
      el: $("#f-email"),
      err: $("#f-email-err"),
      check: (v) =>
        !v.trim() ? "Add an email address so I can reply." : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "That email address looks incomplete. Check for a missing @ or domain.",
    },
    message: {
      el: $("#f-msg"),
      err: $("#f-msg-err"),
      check: (v) => (v.trim().length >= 20 ? "" : "Add a little more detail, at least a sentence or two."),
    },
  };

  const validate = (key) => {
    const f = fields[key];
    const msg = f.check(f.el.value);
    f.err.textContent = msg;
    f.el.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  };

  Object.keys(fields).forEach((key) => {
    const f = fields[key];
    f.el.addEventListener("blur", () => f.el.value && validate(key));
    f.el.addEventListener("input", () => f.el.getAttribute("aria-invalid") === "true" && validate(key));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const results = Object.keys(fields).map(validate);
    if (results.includes(false)) {
      const firstBad = Object.values(fields).find((f) => f.el.getAttribute("aria-invalid") === "true");
      firstBad?.el.focus();
      status.classList.remove("is-ok");
      status.textContent = "A couple of fields need attention.";
      return;
    }
    const type = form.querySelector('input[name="type"]:checked')?.value || "Project";
    const subject = `Project inquiry: ${type}`;
    const body = `Hi Jas,\n\n${fields.message.el.value.trim()}\n\n${fields.name.el.value.trim()}\n${fields.email.el.value.trim()}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.classList.add("is-ok");
    status.textContent = `Your email app should open with the message ready to send. If nothing opens, write to ${EMAIL}.`;
  });
}
