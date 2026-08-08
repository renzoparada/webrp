import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { about } from "../data/content";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";
import retrato from "../assets/photos/renzo-retrato.jpg";
import disney from "../assets/photos/renzo-disney.jpg";
import logoEmprendedoresMakeover from "../assets/photos/logo-emprendedores-makeover.png";

export function About() {
  return (
    <section id="sobre-mi" className="relative bg-paper py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <motion.div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2rem] border border-graphite/15"
              animate={{ rotate: [0, 2, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-20px_rgba(20,18,15,0.35)]">
              <img
                src={retrato}
                alt="Renzo Parada"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>

            {/* Foto accent — misión Disney, refuerzo visual del Método Disney */}
            <motion.div
              className="absolute -bottom-10 -left-10 hidden w-36 overflow-hidden rounded-2xl border-4 border-paper shadow-xl sm:block"
              initial={{ opacity: 0, rotate: -6, y: 10 }}
              whileInView={{ opacity: 1, rotate: -6, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={disney}
                alt="Renzo Parada en su misión de formación Disney"
                className="aspect-[3/4] w-full object-cover"
              />
            </motion.div>

            <div className="absolute -top-4 -right-4 flex items-center gap-2 rounded-full border border-graphite/10 bg-paper px-4 py-2.5 shadow-lg">
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
            <RevealItem>
              <BrandBadge href={about.brandLink} />
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

/** Renders as a link once about.brandLink is set; a plain badge until then. */
function BrandBadge({ href }: { href: string }) {
  const classes =
    "inline-flex items-center gap-2 rounded-full border border-graphite/15 bg-white/60 py-1.5 pl-1.5 pr-4 text-sm text-graphite transition-colors";
  const logo = (
    <img
      src={logoEmprendedoresMakeover}
      alt="Emprendedores Makeover"
      className="h-7 w-7 rounded-full object-cover"
    />
  );

  if (!href) {
    return (
      <span className={classes}>
        {logo}
        Emprendedores Makeover
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-cursor-hover
      className={`${classes} hover:border-ember/40`}
    >
      {logo}
      Emprendedores Makeover
    </a>
  );
}
