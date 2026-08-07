import { Quote, UserRound } from "lucide-react";
import { testimonials } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Testimonials() {
  return (
    <section className="relative bg-paper py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Testimonios"
          heading="Lo que dicen quienes han trabajado conmigo"
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure className="flex h-full flex-col gap-6 rounded-2xl border border-dashed border-graphite/20 bg-white/50 p-8 transition-colors duration-500 hover:border-ember/50">
                <Quote className="h-6 w-6 text-ember/70" />
                <blockquote className="flex-1 text-balance font-display text-lg italic leading-snug text-graphite">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-graphite/10 pt-4">
                  {/* Espacio reservado para foto del cliente — reemplaza por
                     una <img> cuando tengas el material. */}
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-graphite/25 text-graphite-muted/50">
                    <UserRound className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-sm font-medium text-graphite">
                      {t.name}
                    </div>
                    <div className="text-xs text-graphite-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
