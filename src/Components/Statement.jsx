import { motion } from "framer-motion";

export default function Statement() {
  return (
    <section className="statement" aria-label="Statement">
      <motion.h2
        className="statement__big"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        One brain, zero handoff <span className="clover clover--accent" aria-hidden="true" />
        <br />
        craft — with a human touch.
      </motion.h2>
      <motion.p
        className="statement__sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Design expertise and engineering craftsmanship in one head means big
        ideas become powerful, accessible human experiences — no telephone game
        between designer and developer, nothing lost in translation.
      </motion.p>
    </section>
  );
}
