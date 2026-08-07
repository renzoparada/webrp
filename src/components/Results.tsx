import { Target, Wrench, TrendingUp, PenLine, ImagePlus } from "lucide-react";
import { caseStudies } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Results() {
  return (
    <section id="resultados" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Resultados"
            heading="Resultados que hablan"
            tone="light"
          />
          <Reveal delay={0.1}>
            <p className="flex max-w-xs items-center gap-2 text-xs leading-relaxed text-bone-muted/70">
              <PenLine className="h-4 w-4 shrink-0 text-ember" />
              Espacio reservado para tus próximos casos de éxito reales.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-6 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 transition-colors duration-500 hover:border-ember/40 hover:bg-white/[0.04]">
                {/* Espacio reservado para foto/video del proyecto — reemplaza
                   este bloque por una <img>/<video> cuando tengas el material. */}
                <div className="flex aspect-video w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/10 bg-white/[0.02] text-bone-muted/50">
                  <ImagePlus className="h-5 w-5" />
                  <span className="text-xs">Foto o video del proyecto</span>
                </div>

                <span className="eyebrow text-bone-muted/60">
                  Caso 0{i + 1}
                </span>
                <h3 className="font-display text-xl italic text-bone">
                  {c.sector}
                </h3>
                <dl className="flex flex-col gap-4 text-sm">
                  <div className="flex gap-3">
                    <Target className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-bone-muted/60">
                        Reto
                      </dt>
                      <dd className="mt-1 leading-relaxed text-bone-muted">
                        {c.challenge}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Wrench className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-bone-muted/60">
                        Intervención
                      </dt>
                      <dd className="mt-1 leading-relaxed text-bone-muted">
                        {c.intervention}
                      </dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-bone-muted/60">
                        Resultado
                      </dt>
                      <dd className="mt-1 leading-relaxed text-bone-muted">
                        {c.result}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
