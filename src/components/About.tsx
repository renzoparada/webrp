import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { about } from "../data/content";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";

export function About() {
  return (
    <section id="sobre-mi" className="relative bg-paper py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        {/* Portrait placeholder — swap the div below for a real <img> when a photo is available */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <motion.div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-graphite/15"
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-ink via-ink-2 to-ink shadow-[0_30px_60px_-20px_rgba(20,18,15,0.35)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,90,46,0.35),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(139,124,255,0.3),transparent_50%)]" />
              <div className="grain absolute inset-0" />
              <div className="relative flex h-full w-full items-center justify-center">
                <span className="font-display text-[7rem] italic text-bone/90">
                  RP
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 flex items-center gap-2 rounded-full border border-graphite/10 bg-paper px-4 py-2.5 shadow-lg">
              <Sparkles className="h-4 w-4 text-ember" />
              <span className="text-xs font-medium text-graphite">
                LEGO® Serious Play® · Método Disney
              </span>
            </div>
          </div>
        </Reveal>

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="eyebrow text-ember">{about.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-graphite sm:text-5xl">
              {about.heading}
            </h2>
          </Reveal>

          <div className="mt-6 flex flex-col gap-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={p} delay={0.1 + i * 0.06}>
                <p className="text-balance text-lg leading-relaxed text-graphite-muted">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <RevealGroup className="mt-9 flex flex-wrap gap-3" stagger={0.06}>
            {about.credentials.map((c) => (
              <RevealItem key={c}>
                <span className="inline-flex items-center rounded-full border border-graphite/15 bg-white/60 px-4 py-2 text-sm text-graphite">
                  {c}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
