import { ArrowUp } from "lucide-react";
import { nav, site, footer } from "../data/content";
import { Logo } from "./ui/Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-2 py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Logo markSize="h-[4.5rem] w-[4.5rem]" signatureHeight="h-14" />
            <p className="mt-3 max-w-sm text-sm text-bone-muted">
              {footer.tagline}
            </p>
          </div>

          <a
            href="#top"
            className="group flex items-center gap-2 self-start rounded-full border border-white/15 px-4 py-2 text-sm text-bone-muted transition-colors hover:border-ember hover:text-ember lg:self-auto"
          >
            Volver arriba
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-bone-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-bone">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-bone-muted/60">
            © {new Date().getFullYear()} {site.name}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
