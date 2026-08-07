import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-ink"
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="flex flex-col items-center gap-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-2xl italic tracking-tight text-bone"
            >
              Renzo Parada
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.65, 0, 0.35, 1] }}
              className="h-px w-24 origin-left bg-gradient-to-r from-ember via-gold to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
