import { motion } from "framer-motion";
import { CLIENTS } from "../data.js";

export default function Clients() {
  const mid = Math.ceil(CLIENTS.length / 2);
  const left = CLIENTS.slice(0, mid);
  const right = CLIENTS.slice(mid);

  return (
    <section className="clients" aria-label="Brands and clients">
      <div className="clients__grid">
        <motion.ul
          className="clients__col"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {left.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </motion.ul>

        <motion.span
          className="clients__mark"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />

        <motion.ul
          className="clients__col clients__col--right"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {right.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
