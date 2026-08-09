import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { hero } from "../data/content";
import { MagneticButton } from "./ui/Button";
import { RotatingWord } from "./ui/RotatingWord";
import { Counter } from "./ui/Counter";
import { Aurora } from "./Aurora";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const lineVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.15 + i * 0.09, ease: easeOutExpo },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink pt-28 pb-16"
    >
      <div className="grain absolute inset-0" />
      <Aurora />

      {/* faint grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
          </span>
          <span className="eyebrow text-bone-muted">{hero.eyebrow}</span>
        </motion.div>

        <h1 className="font-display text-[13vw] leading-[0.98] tracking-tight text-bone sm:text-[9vw] lg:text-[6.4vw]">
          {hero.titleLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                custom={i}
                initial="hidden"
                animate="show"
                variants={lineVariants}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              custom={hero.titleLines.length}
              initial="hidden"
              animate="show"
              variants={lineVariants}
            >
              <RotatingWord words={hero.rotatingWords} />
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-balance text-lg leading-relaxed text-bone-muted"
          >
            {hero.support}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href={hero.ctaPrimary.href}
              variant="primary"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              {hero.ctaPrimary.label}
            </MagneticButton>
            <MagneticButton href={hero.ctaSecondary.href} variant="ghost">
              {hero.ctaSecondary.label}
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-[repeat(2,auto)_1fr] sm:items-start sm:gap-10 lg:max-w-3xl"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} className="max-w-[16rem]">
              <div className="font-display text-3xl text-bone sm:text-4xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs leading-snug text-bone-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#sobre-mi"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-bone-muted sm:flex"
        aria-label="Desplázate para ver más"
      >
        <span className="eyebrow">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
