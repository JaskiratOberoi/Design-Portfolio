import { motion } from "framer-motion";

export function Ticks() {
  return (
    <span className="ticks" aria-hidden="true">
      {Array.from({ length: 9 }, (_, i) => (
        <span key={i} />
      ))}
    </span>
  );
}

export default function SectionHead({ num, kicker, title, id }) {
  return (
    <div className="section-head" id={id}>
      <span className="section-head__num meta">[ {num} ]</span>
      <motion.div
        className="section-head__body"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span
          className="section-head__kicker"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {kicker}
        </motion.span>
        <h2 className="section-head__title">
          <span className="line-mask">
            <motion.span
              className="line"
              variants={{
                hidden: { y: "110%" },
                visible: {
                  y: "0%",
                  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 },
                },
              }}
            >
              {title}
            </motion.span>
          </span>
        </h2>
      </motion.div>
      <span className="section-head__ticks">
        <Ticks />
      </span>
    </div>
  );
}
