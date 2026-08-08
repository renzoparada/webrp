import { cn } from "../../lib/utils";
import logoMark from "../../assets/photos/logo-emprendedores-makeover.png";
import signature from "../../assets/photos/firma-renzo-blanco.png";

/**
 * Brand lockup — logo mark + handwritten signature — used in place of the
 * plain "Renzo Parada" text wordmark. The signature is white/transparent,
 * so this only reads correctly on dark backgrounds (navbar, footer).
 */
export function Logo({
  className,
  markSize = "h-14 w-14",
  signatureHeight = "h-10",
}: {
  className?: string;
  markSize?: string;
  signatureHeight?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img
        src={logoMark}
        alt=""
        aria-hidden="true"
        className={cn("shrink-0 rounded-full object-cover", markSize)}
      />
      <img
        src={signature}
        alt="Renzo Parada"
        className={cn("w-auto", signatureHeight)}
      />
    </span>
  );
}
