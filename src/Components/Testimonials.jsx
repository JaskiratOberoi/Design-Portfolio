import { motion } from "framer-motion";
import { TESTIMONIALS } from "../data.js";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            className="quote-card"
            key={t.name}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
          >
            <span className="quote-card__mark" aria-hidden="true">
              “
            </span>
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span className="quote-card__name">{t.name}</span>
              <span className="quote-card__role">{t.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
