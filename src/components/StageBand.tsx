import { motion } from "framer-motion";
import escenario from "../assets/photos/renzo-escenario.jpg";

/**
 * Full-bleed photo band between About and Services — a breather that lets
 * a real stage moment carry the "esto no es teoría" claim instead of more
 * copy. Purely visual; no interactive content.
 */
export function StageBand() {
  return (
    <section className="relative h-[52vh] min-h-[380px] w-full overflow-hidden bg-ink sm:h-[64vh]">
      <img
        src={escenario}
        alt="Renzo Parada facilitando frente a una audiencia"
        className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />

      <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-12 lg:px-10 lg:pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg text-balance font-display text-2xl italic leading-snug text-bone sm:text-3xl"
        >
          Del escenario a la sala de reuniones — la misma energía, el mismo
          método.
        </motion.p>
      </div>
    </section>
  );
}
