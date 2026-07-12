import { useEffect } from "react";
import Lenis from "lenis";
import Cursor from "./components/Cursor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Work from "./components/Work.jsx";
import Services from "./components/Services.jsx";
import Clients from "./components/Clients.jsx";
import Statement from "./components/Statement.jsx";
import Engage from "./components/Engage.jsx";
import Experience from "./components/Experience.jsx";
import Testimonials from "./components/Testimonials.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  useEffect(() => {
    // static review mode (/?static) skips smooth scrolling entirely
    const isStatic = document.documentElement.classList.contains("static-mode");
    const lenis = isStatic ? null : new Lenis({ lerp: 0.12, smoothWheel: true });
    let rafId;
    if (lenis) {
      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    // honor deep links like /#work — React mounts after the browser's
    // native fragment scroll has already given up
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        if (lenis) lenis.scrollTo(target, { offset: -80, immediate: true });
        else window.scrollTo(0, target.offsetTop - 80);
      }
    }

    const onAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const target = document.querySelector(anchor.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -80 });
      else window.scrollTo(0, target.offsetTop - 80);
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener("click", onAnchorClick);
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Services />
        <Clients />
        <Statement />
        <Engage />
        <Experience />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}
