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

      <div className="work__list">
        {featured.map((project, i) => (
          <motion.article
            key={project.index}
            className={`work-feature ${i % 2 === 1 ? "work-feature--flip" : ""}`}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              className="work-feature__media"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — view project`}
            >
              <img src={project.image} alt={project.title} loading="lazy" />
            </a>
            <div className="work-feature__body">
              <div className="work-feature__tags">
                {project.tags.map((tag) => (
                  <span className="meta" key={tag}>
                    {tag}
                  </span>
                ))}
                <span className="meta">{project.year}</span>
              </div>
              <h3 className="work-feature__title">{project.title}</h3>
              <p className="work-feature__blurb">{project.blurb}</p>
              <a
                className="btn-pill work-feature__cta"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View project
              </a>
            </div>
          </motion.article>
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
