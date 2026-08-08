import { motion } from "framer-motion";
import { ArrowUpRight, LayoutDashboard, FileCheck2, Layers } from "lucide-react";
import { resource, site } from "../data/content";
import { MagneticButton } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { Aurora } from "./Aurora";

export function Resources() {
  const href = site.serApp || "#contacto";

  return (
    <section id="recursos" className="relative overflow-hidden bg-ink py-28 lg:py-36">
      <Aurora className="opacity-70" />
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
        <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="eyebrow text-ember">{resource.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-display text-4xl leading-[1.08] tracking-tight text-bone sm:text-5xl">
              {resource.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-bone-muted">
              {resource.text}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9">
              <MagneticButton
                href={href}
                variant="primary"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                {resource.cta}
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} y={40}>
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <motion.div
              className="absolute left-0 top-8 flex w-56 flex-col gap-2 rounded-2xl border border-white/10 bg-ink-2/90 p-5 shadow-2xl backdrop-blur"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <LayoutDashboard className="h-5 w-5 text-ember" />
              <span className="text-sm font-medium text-bone">
                Dashboards de proyecto
              </span>
              <div className="mt-1 flex flex-col gap-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/10">
                  <div className="h-1.5 w-4/5 rounded-full bg-ember" />
                </div>
                <div className="h-1.5 w-full rounded-full bg-white/10">
                  <div className="h-1.5 w-3/5 rounded-full bg-gold" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute right-0 top-32 flex w-52 flex-col gap-2 rounded-2xl border border-white/10 bg-ink-2/90 p-5 shadow-2xl backdrop-blur"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Layers className="h-5 w-5 text-violet" />
              <span className="text-sm font-medium text-bone">
                Plantillas listas para usar
              </span>
              <span className="text-xs text-bone-muted">
                Cronogramas, actas, riesgos
              </span>
            </motion.div>

            <motion.div
              className="absolute bottom-6 left-10 flex w-60 items-center gap-3 rounded-2xl border border-white/10 bg-ink-2/90 p-5 shadow-2xl backdrop-blur"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <FileCheck2 className="h-8 w-8 text-gold" />
              <div>
                <span className="block text-sm font-medium text-bone">
                  Certificación
                </span>
                <span className="text-xs text-bone-muted">
                  Al completar el sistema
                </span>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
