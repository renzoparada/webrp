import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden mask-fade-r", className)}>
      <div
        className="flex w-max animate-marquee gap-8"
        style={
          reverse
            ? { animationDirection: "reverse" }
            : undefined
        }
      >
        <div className="flex shrink-0 items-center gap-8">{children}</div>
        <div className="flex shrink-0 items-center gap-8" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
