import { ArrowUpRight, Compass, GraduationCap, Wand2, Rocket } from "lucide-react";
import { pillars } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const icons = [Compass, GraduationCap, Wand2, Rocket];

export function Services() {
  return (
    <section id="servicios" className="relative bg-ink py-28 lg:py-36">
      <div className="grain absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Servicios"
          heading="¿Cómo puedo ayudarte?"
          description="Cuatro maneras de trabajar juntos — desde la estrategia hasta la experiencia final que vive tu cliente."
          tone="light"
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {pillars.map((pillar, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={pillar.number} delay={i * 0.06}>
                <a
                  href="#contacto"
                  data-cursor-hover
                  className="group relative flex h-full flex-col justify-between gap-10 bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 sm:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-6xl text-white/10 transition-colors duration-500 group-hover:text-ember/25">
                      {pillar.number}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone transition-all duration-500 group-hover:border-ember group-hover:text-ember">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl tracking-tight text-bone sm:text-[1.7rem]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-bone-muted">
                      {pillar.audience}
                    </p>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-bone-muted/90">
                      {pillar.includes}
                    </p>
                    <p className="mt-4 border-l-2 border-ember/50 pl-3 text-sm italic leading-relaxed text-bone/80">
                      {pillar.result}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ember">
                      {pillar.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
