import { useEffect } from "react";
import Lenis from "lenis";
import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Work from "./components/Work.jsx";
import Services from "./components/Services.jsx";
import Experience from "./components/Experience.jsx";
import Testimonials from "./components/Testimonials.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.12, smoothWheel: true });
    lenis.on("scroll", () => {});
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Cursor />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Experience />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}
