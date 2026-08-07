import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, site, hero } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-ember via-gold to-violet"
        style={{ scaleX: scrollYProgress }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#top"
            className="font-display text-lg italic tracking-tight text-bone"
          >
            {site.name}
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-bone-muted transition-colors hover:text-bone"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href={hero.ctaPrimary.href}
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-2.5 text-sm text-bone transition-colors hover:border-ember hover:text-ember"
            >
              {hero.ctaPrimary.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <button
            aria-label="Abrir menú"
            className="text-bone lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink px-6 py-5 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg italic text-bone">
                {site.name}
              </span>
              <button
                aria-label="Cerrar menú"
                className="text-bone"
                onClick={() => setOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="mt-16 flex flex-1 flex-col gap-6">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-bone"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href={hero.ctaPrimary.href}
              onClick={() => setOpen(false)}
              className="mb-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-ember px-6 py-3.5 text-sm font-medium text-ink"
            >
              {hero.ctaPrimary.label}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
