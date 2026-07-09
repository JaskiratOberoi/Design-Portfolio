import { motion } from "framer-motion";

const lineVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
  },
};

export default function SectionHeading({ kicker, title, id }) {
  return (
    <div className="section-heading" id={id}>
      <motion.span
        className="section-heading__kicker"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {kicker}
      </motion.span>
      {/* viewport trigger lives on the h2: the masked line inside is clipped
         by overflow:hidden, so it never intersects on its own */}
      <motion.h2
        className="section-heading__title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <span className="line-mask">
          <motion.span className="line" variants={lineVariants}>
            {title}
          </motion.span>
        </span>
      </motion.h2>
    </div>
  );
}
