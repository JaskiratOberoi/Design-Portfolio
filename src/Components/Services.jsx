import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { SERVICES, EMAIL } from "../data.js";

export default function Services() {
  return (
    <section className="services" id="services">
      <SectionHeading
        kicker="Freelance services — alongside my day job, done right"
        title="What I can do for you"
      />

      <div className="services__grid">
        {SERVICES.map((service, i) => (
          <motion.article
            className="service-card"
            key={service.index}
            data-hover
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.12 }}
          >
            <div className="service-card__top">
              <span className="service-card__index">{service.index}</span>
              <span className="service-card__plus clover" aria-hidden="true" />
            </div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__desc">{service.description}</p>
            <ul className="service-card__list">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

      <motion.p
        className="services__note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Evenings &amp; weekends are for building. <a href={`mailto:${EMAIL}`}>Tell me what you need</a> —
        if it's not a fit, I'll say so in one email, not five.
      </motion.p>
    </section>
  );
}
