import { MARQUEE_ITEMS } from "../data.js";

export default function Marquee() {
  const row = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((copy) => (
          <div className="marquee__group" key={copy}>
            {row.map((item, i) => (
              <span className="marquee__item" key={`${copy}-${i}`}>
                {item} <span className="marquee__star">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
