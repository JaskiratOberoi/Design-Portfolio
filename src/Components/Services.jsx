import { motion } from "framer-motion";
import SectionHead from "./SectionHead.jsx";
import { SERVICES } from "../data.js";

export default function Services() {
  return (
    <section className="services" id="services">
      <SectionHead
        num="02"
        kicker="Freelance services — alongside my day job, done right"
        title="What I can do for you"
      />

      <div className="services__list">
        {SERVICES.map((service, i) => (
          <motion.article
            className="service-row"
            key={service.index}
            data-hover
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
          >
            <span className="service-row__num meta">[ {service.index} ]</span>
            <h3 className="service-row__title">{service.title}</h3>
            <div className="service-row__body">
              <p className="service-row__desc">{service.description}</p>
              <span className="service-row__deliverables">
                {service.deliverables.join(" · ")}
              </span>
            </div>
            <span className="service-row__icon clover" aria-hidden="true" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
