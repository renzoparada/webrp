import { motion } from "framer-motion";

/**
 * Ambient animated gradient blobs used behind hero/CTA sections on dark
 * backgrounds. Pure decoration — aria-hidden, no interactive content.
 */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <motion.div
        className="absolute -top-1/4 left-[10%] h-[36rem] w-[36rem] rounded-full bg-ember/20 blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[5%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-violet/20 blur-[120px]"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-[120px]"
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
