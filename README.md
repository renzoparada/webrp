# renzoparada.com

Sitio personal de Renzo Parada — consultoría empresarial, formación, coaching
y diseño de experiencias. Construido como una landing de una sola página,
inspirada en el nivel de producción de sitios como Mindvalley o Tony Robbins,
con la contención visual de productos tipo Linear.

## Stack

- **Vite + React 19 + TypeScript**
- **Tailwind CSS v4** (vía `@tailwindcss/vite`, sin archivo de config aparte)
- **Framer Motion** — reveals al hacer scroll, botones magnéticos, contadores animados
- **Lenis** — smooth scroll, con los enlaces de navegación integrados para que no compitan con el scroll nativo
- **lucide-react** — iconografía

## Desarrollo

```bash
npm install
npm run dev       # servidor local con recarga en caliente
npm run build     # build de producción (tsc -b && vite build)
npm run preview   # sirve el build de dist/
npm run lint      # oxlint
```

## Editar el contenido

Todo el copy y los datos del sitio viven en **`src/data/content.ts`** — un único
archivo tipado. No hace falta tocar componentes para cambiar textos, enlaces o
la información de contacto.

### Pendiente por completar (marcado con `// TODO` en `content.ts`)

| Campo | Dónde | Estado |
|---|---|---|
| `site.whatsapp` | Contacto | ✅ Cargado |
| `site.social.*` | Contacto | ✅ Instagram / LinkedIn / TikTok / Facebook → `@renzoparada` |
| `site.calendly` | Contacto / Recursos | Pendiente — Renzo está construyendo su propia app de agendamiento. El botón "Agenda una llamada" queda oculto hasta que haya enlace. |
| `site.serApp` | Recursos | Pendiente — reemplaza a Hotmart como canal del Project Manager Pro System. Sin enlace, el CTA cae a `#contacto`. |
| `caseStudies` | Resultados | 3 casos reales (sector, reto, intervención, resultado). Cada card ya reserva un recuadro para foto/video del proyecto. |
| `testimonials` | Testimonios | Citas reales de clientes. Cada card ya reserva un avatar circular para foto del cliente. |
| Foto de perfil | `src/components/About.tsx` | Pendiente — reemplazar el monograma "RP" por una foto real (súbela como archivo adjunto, no pegada en el chat, para que quede accesible en el repo). |

Mientras `calendly`/`serApp` estén vacíos, la UI cae a una alternativa
razonable en vez de mostrar un enlace roto.

El formulario de contacto no tiene backend: al enviarse abre el cliente de
correo del visitante con un `mailto:` prellenado hacia `site.email`. Si más
adelante quieres capturar leads directamente (Formspree, Resend, un endpoint
propio, etc.), el punto de integración es `handleSubmit` en
`src/components/Contact.tsx`.
