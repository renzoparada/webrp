import { cn } from "../../lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal>
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "h-px w-8",
              tone === "dark" ? "bg-ember" : "bg-ember",
            )}
          />
          <span
            className={cn(
              "eyebrow",
              tone === "dark" ? "text-ember" : "text-ember-2",
            )}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "text-balance font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl",
            tone === "dark" ? "text-graphite" : "text-bone",
          )}
        >
          {heading}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "max-w-xl text-balance text-lg leading-relaxed",
              tone === "dark" ? "text-graphite-muted" : "text-bone-muted",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
