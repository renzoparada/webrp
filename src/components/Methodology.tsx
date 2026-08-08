import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { methodology } from "../data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Methodology() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <section id="metodo" className="relative overflow-hidden bg-paper py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow={methodology.eyebrow}
          heading={methodology.heading}
          align="center"
          className="mx-auto"
        />

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-graphite/15 lg:block" />
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-ember lg:block"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {methodology.steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative flex flex-col gap-4 lg:pt-0">
                  <div className="flex items-center gap-4 lg:block">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-graphite/20 bg-paper font-display text-lg text-graphite lg:mb-6">
                      {step.number}
                    </span>
                    <h3 className="font-display text-xl tracking-tight text-graphite lg:hidden">
                      {step.title}
                    </h3>
                  </div>
                  <h3 className="hidden font-display text-xl tracking-tight text-graphite lg:block">
                    {step.title}
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-graphite-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
