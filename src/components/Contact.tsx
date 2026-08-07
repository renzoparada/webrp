import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, Calendar, Mail, MessageCircle } from "lucide-react";
import { contact, site } from "../data/content";
import { MagneticButton, MagneticSubmitButton } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

/* lucide-react dropped brand/logo icons — small hand-drawn glyphs instead. */
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82a4.28 4.28 0 0 1-3.15-1.4V15.4a5.3 5.3 0 1 1-4.55-5.25v2.65a2.66 2.66 0 1 0 1.87 2.55V2h2.68a4.28 4.28 0 0 0 3.15 3.55z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9.5 9H13v1.7c.6-1 1.9-2.1 3.8-2.1 4 0 4.7 2.6 4.7 6V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4z" />
    </svg>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const company = data.get("company");
    const service = data.get("service");
    const message = data.get("message");

    const subject = encodeURIComponent(`Consulta desde renzoparada.com — ${service}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmpresa: ${company}\nServicio de interés: ${service}\n\nMensaje:\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const whatsappHref = site.whatsapp
    ? `https://wa.me/${site.whatsapp}`
    : undefined;

  return (
    <section id="contacto" className="relative bg-ink py-28 lg:py-36">
      <div className="grain absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_0.8fr] lg:gap-12 lg:px-10">
        <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="eyebrow text-ember">{contact.eyebrow}</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-balance font-display text-4xl leading-[1.05] tracking-tight text-bone sm:text-5xl">
              {contact.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-lg text-balance text-lg leading-relaxed text-bone-muted">
              {contact.text}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            {submitted ? (
              <div className="mt-10 rounded-2xl border border-ember/30 bg-ember/10 p-8 text-bone">
                Se abrió tu cliente de correo con el mensaje listo para enviar.
                Si no ocurrió nada, escríbeme directo a{" "}
                <a href={`mailto:${site.email}`} className="text-ember underline">
                  {site.email}
                </a>
                .
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Nombre" name="name" required />
                  <Field label="Empresa" name="company" />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide text-bone-muted">
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-bone outline-none transition-colors focus:border-ember"
                  >
                    <option value="" disabled>
                      Elige una opción
                    </option>
                    {contact.serviceOptions.map((o) => (
                      <option key={o} value={o} className="bg-ink-2">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-wide text-bone-muted">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-bone outline-none transition-colors focus:border-ember"
                  />
                </div>
                <div>
                  <MagneticSubmitButton
                    variant="primary"
                    icon={<ArrowUpRight className="h-4 w-4" />}
                  >
                    Enviar mensaje
                  </MagneticSubmitButton>
                </div>
              </form>
            )}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:pt-2">
          <div className="flex h-full flex-col justify-between gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex flex-col gap-5">
              <InfoRow
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value={site.email}
                href={`mailto:${site.email}`}
              />
              {whatsappHref && (
                <InfoRow
                  icon={<MessageCircle className="h-5 w-5" />}
                  label="WhatsApp"
                  value="Escríbeme directo"
                  href={whatsappHref}
                />
              )}
              {site.calendly && (
                <InfoRow
                  icon={<Calendar className="h-5 w-5" />}
                  label="Agenda"
                  value="Reserva una llamada"
                  href={site.calendly}
                />
              )}
            </div>

            <div>
              <span className="eyebrow mb-4 block text-bone-muted">Redes</span>
              <div className="flex flex-wrap gap-3">
                {site.social.instagram && (
                  <SocialIcon href={site.social.instagram}>
                    <InstagramIcon className="h-[18px] w-[18px]" />
                  </SocialIcon>
                )}
                {site.social.linkedin && (
                  <SocialIcon href={site.social.linkedin}>
                    <LinkedInIcon className="h-[18px] w-[18px]" />
                  </SocialIcon>
                )}
                {site.social.tiktok && (
                  <SocialIcon href={site.social.tiktok}>
                    <TikTokIcon className="h-4 w-4" />
                  </SocialIcon>
                )}
                {!site.social.instagram &&
                  !site.social.linkedin &&
                  !site.social.tiktok && (
                    <span className="text-sm text-bone-muted/60">
                      Añade tus enlaces en el archivo de contenido.
                    </span>
                  )}
              </div>
            </div>

            {site.calendly && (
              <MagneticButton
                href={site.calendly}
                variant="light"
                icon={<ArrowUpRight className="h-4 w-4" />}
                className="w-full justify-center"
              >
                Agenda una llamada
              </MagneticButton>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  required,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wide text-bone-muted">
        {label}
      </label>
      <input
        type="text"
        name={name}
        required={required}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-bone outline-none transition-colors focus:border-ember"
      />
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      data-cursor-hover
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-ember/40"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-ember">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-xs text-bone-muted">{label}</span>
        <span className="text-sm text-bone">{value}</span>
      </span>
      <ArrowUpRight className="ml-auto h-4 w-4 text-bone-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ember" />
    </a>
  );
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-cursor-hover
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-bone transition-colors hover:border-ember hover:text-ember"
    >
      {children}
    </a>
  );
}
