import { motion } from "framer-motion";
import SectionHead from "./SectionHead.jsx";
import { WORK } from "../data.js";

const FEATURED_COUNT = 6;

export default function Work() {
  const featured = WORK.slice(0, FEATURED_COUNT);
  const archive = WORK.slice(FEATURED_COUNT);

  return (
    <section className="work" id="work">
      <SectionHead
        num="01"
        kicker="Selected work — freelance & big tech"
        title="Things I've shipped"
      />

      <div className="work__grid">
        {featured.map((project, i) => (
          <motion.a
            key={project.index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`work-card ${i % 4 === 0 || i % 4 === 3 ? "work-card--wide" : "work-card--narrow"}`}
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.1 }}
          >
            <div className="work-card__media">
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="work-card__head">
              <h3 className="work-card__title">{project.title}</h3>
              <span className="meta">{project.year}</span>
            </div>
            <p className="work-card__blurb">{project.blurb}</p>
            <div className="work-card__tags">
              {project.tags.map((tag) => (
                <span className="meta" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {archive.length > 0 && (
        <div className="work__more">
          <p className="work__more-label meta">More projects</p>
          {archive.map((project, i) => (
            <motion.a
              key={project.index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            >
              <span className="work-row__index">{project.index}</span>
              <span className="work-row__title">{project.title}</span>
              <span className="work-row__tags">
                {project.tags.slice(0, 2).map((tag) => (
                  <span className="meta" key={tag}>
                    {tag}
                  </span>
                ))}
              </span>
              <span className="work-row__year meta">{project.year}</span>
              <span className="work-row__arrow" aria-hidden="true">
                ↗
              </span>
            </motion.a>
          ))}
        </div>
      )}
    </section>
  );
}
