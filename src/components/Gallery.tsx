import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ImagePlus } from "lucide-react";
import { gallery } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import publico1 from "../assets/photos/publico1.jpg";
import publico2 from "../assets/photos/publico2.jpg";
import publico3 from "../assets/photos/publico3.jpg";
import publico4 from "../assets/photos/publico4.jpg";

type GalleryPhoto = {
  src?: string;
  alt: string;
};

/**
 * Fotos del carrusel. Para añadir una nueva presentación:
 * 1. Copia la foto a src/assets/photos/
 * 2. Impórtala arriba, junto a `publico1`
 *    (import miFoto from "../assets/photos/mi-foto.jpg";)
 * 3. Agrega { src: miFoto, alt: "descripción de la foto" } al array.
 * Los slots sin `src` son espacio reservado — reemplázalos o bórralos
 * cuando tengas más fotos reales.
 */
const photos: GalleryPhoto[] = [
  { src: publico1, alt: "Renzo Parada facilitando una sesión en vivo" },
  { src: publico2, alt: "Renzo Parada presentando frente a una gran audiencia" },
  { src: publico3, alt: "Renzo Parada hablando en un evento con mesas" },
  { src: publico4, alt: "Renzo Parada presentando sobre liderazgo" },
];

export function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const spacer = spacerRef.current;
    const firstSlide = slideRefs.current[0];
    if (!scroller || !spacer || !firstSlide) return;

    // Derives the active slide straight from scroll position (closest
    // slide's left edge to the scroller's left edge wins). getBoundingClientRect
    // is used instead of offsetLeft so this stays correct no matter which
    // ancestor ends up as the offsetParent.
    function updateActive() {
      const scrollerLeft = scroller!.getBoundingClientRect().left;
      let closest = 0;
      let closestDistance = Infinity;
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;
        const distance = Math.abs(
          slide.getBoundingClientRect().left - scrollerLeft,
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = i;
        }
      });
      setActive(closest);
    }

    // On a start-aligned snap track, the last slide can run out of room to
    // ever reach the start edge — the track simply isn't scrollable that
    // far. A trailing spacer (viewport minus one slide's width) pads the
    // end so every slide, including the last, can scroll flush with start.
    function updateSpacer() {
      const slideWidth = firstSlide!.getBoundingClientRect().width;
      spacer!.style.width = `${Math.max(0, scroller!.clientWidth - slideWidth)}px`;
      updateActive();
    }

    updateSpacer();
    scroller.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateSpacer);
    return () => {
      scroller.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateSpacer);
    };
  }, []);

  function scrollToIndex(index: number) {
    slideRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }

  return (
    <section
      id="presentaciones"
      className="relative overflow-hidden bg-paper py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={gallery.eyebrow}
            heading={gallery.heading}
            description={gallery.description}
          />

          <Reveal delay={0.12}>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-graphite-muted/70">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Foto anterior"
                  disabled={active === 0}
                  onClick={() => scrollToIndex(active - 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-graphite/20 text-graphite transition-colors duration-300 hover:border-ember hover:text-ember disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Foto siguiente"
                  disabled={active === photos.length - 1}
                  onClick={() => scrollToIndex(active + 1)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-graphite/20 text-graphite transition-colors duration-300 hover:border-ember hover:text-ember disabled:pointer-events-none disabled:opacity-30"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div
            ref={scrollerRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
          >
            {photos.map((photo, i) => (
              <div
                key={i}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className="aspect-[4/5] w-[78vw] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[46vw] lg:w-[30vw]"
              >
                {photo.src ? (
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-graphite/20 bg-white/40 text-graphite-muted/50">
                    <ImagePlus className="h-6 w-6" />
                    <span className="max-w-[70%] text-center text-xs">
                      {photo.alt}
                    </span>
                  </div>
                )}
              </div>
            ))}
            <div ref={spacerRef} aria-hidden="true" className="shrink-0" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
