import {
  type ReactNode,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type Variant = "primary" | "ghost" | "light";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-ember text-ink hover:bg-ember-2 shadow-[0_0_0_0_rgba(255,90,46,0.4)] hover:shadow-[0_0_36px_4px_rgba(255,90,46,0.35)]",
  ghost:
    "bg-transparent text-bone border border-white/20 hover:border-white/40 hover:bg-white/5",
  light:
    "bg-bone text-ink hover:bg-white shadow-[0_0_36px_4px_rgba(245,243,239,0.15)]",
};

const baseClasses =
  "group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300";

function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: ReactMouseEvent<T>) {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  return { ref, pos, handleMove, handleLeave };
}

function ButtonContent({
  children,
  icon,
}: {
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </>
  );
}

/**
 * Magnetic CTA link — nudges toward the cursor within its bounds and
 * snaps back on leave. Disabled automatically for touch/coarse pointers.
 */
export function MagneticButton({
  href,
  children,
  variant = "primary",
  icon,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const { ref, pos, handleMove, handleLeave } = useMagnetic<HTMLAnchorElement>();

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={cn(baseClasses, variantStyles[variant], className)}
    >
      <ButtonContent icon={icon}>{children}</ButtonContent>
    </motion.a>
  );
}

/** Same look & magnetic feel as MagneticButton, but a real <button type="submit">. */
export function MagneticSubmitButton({
  children,
  variant = "primary",
  icon,
  className,
}: {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}) {
  const { ref, pos, handleMove, handleLeave } = useMagnetic<HTMLButtonElement>();

  return (
    <motion.button
      ref={ref}
      type="submit"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className={cn(baseClasses, variantStyles[variant], className)}
    >
      <ButtonContent icon={icon}>{children}</ButtonContent>
    </motion.button>
  );
}
