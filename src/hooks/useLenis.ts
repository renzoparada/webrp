import { useEffect } from "react";
import Lenis from "lenis";

const NAV_OFFSET = -88;

/**
 * Sets up a Lenis smooth-scroll instance for the lifetime of the app and
 * routes in-page anchor clicks (href="#section") through it, so native
 * jumps never fight Lenis's own scroll loop. Respects prefers-reduced-motion
 * by skipping smoothing (and letting anchors behave natively) entirely.
 */
export function useLenis() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.1,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    document.documentElement.classList.add("has-lenis");

    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, {
        offset: href === "#top" ? 0 : NAV_OFFSET,
        duration: 1.3,
      });
      history.pushState(null, "", href);
    }
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.classList.remove("has-lenis");
    };
  }, []);
}
