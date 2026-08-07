import { useEffect, useRef, useState } from "react";

/**
 * A minimal custom cursor: a small dot with an outer ring that trails
 * and scales up over interactive elements. Only mounts on fine-pointer
 * devices and respects reduced-motion by never mounting.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setEnabled(fine && !reduceMotion);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let mouseX = ringX;
    let mouseY = ringY;

    function onMove(e: PointerEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    }

    let raf: number;
    function tick() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);
    document.documentElement.classList.add("cursor-none-fine");

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 rounded-full bg-ember"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[998] rounded-full border transition-[width,height,border-color,opacity] duration-200"
        style={{
          width: hovering ? 52 : 32,
          height: hovering ? 52 : 32,
          borderColor: hovering
            ? "rgba(255,90,46,0.7)"
            : "rgba(245,243,239,0.35)",
          willChange: "transform",
        }}
      />
    </>
  );
}
