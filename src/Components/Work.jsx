import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { WORK } from "../data.js";

export default function Work() {
  const [active, setActive] = useState(null);
  const previewRef = useRef(null);
  const sectionRef = useRef(null);

  const onMouseMove = (e) => {
    const preview = previewRef.current;
    const section = sectionRef.current;
    if (!preview || !section) return;
    const rect = section.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    preview.style.transform = `translate(${x + 32}px, ${y - 120}px)`;
  };

  return (
    <section
      className="work"
      id="work"
      ref={sectionRef}
      onMouseMove={onMouseMove}
    >
      <SectionHeading kicker="Selected work — ’21 → ’26" title="Things I've shipped" />

      <div className="work__list" onMouseLeave={() => setActive(null)}>
        {WORK.map((project, i) => (
          <motion.a
            key={project.index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`work-row ${active !== null && active !== i ? "work-row--dim" : ""}`}
            onMouseEnter={() => setActive(i)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
          >
            <span className="work-row__index">{project.index}</span>
            <span className="work-row__title">{project.title}</span>
            <span className="work-row__tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </span>
            <span className="work-row__year">{project.year}</span>
            <span className="work-row__arrow" aria-hidden="true">
              ↗
            </span>
            <span className="work-row__blurb">{project.blurb}</span>
          </motion.a>
        ))}

        <div
          ref={previewRef}
          className={`work__preview ${active !== null ? "work__preview--visible" : ""}`}
          aria-hidden="true"
        >
          {WORK.map((project, i) => (
            <img
              key={project.index}
              src={project.image}
              alt=""
              className={active === i ? "visible" : ""}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
