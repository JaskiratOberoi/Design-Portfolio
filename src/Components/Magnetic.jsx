import { useRef } from "react";

// Wraps a single child element; pulls it gently toward the cursor.
export default function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      className="magnetic"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
