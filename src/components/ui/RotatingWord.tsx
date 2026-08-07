import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function RotatingWord({
  words,
  className,
  interval = 2200,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-grid ${className ?? ""}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="col-start-1 row-start-1 italic text-ember"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      {/* invisible longest word to reserve width/height and avoid layout shift */}
      <span className="invisible col-start-1 row-start-1 italic" aria-hidden="true">
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </span>
  );
}
