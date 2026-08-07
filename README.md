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

El sitio se entrega funcional con textos reales del copy original y
placeholders honestos (sin datos inventados) en los siguientes puntos:

| Campo | Dónde | Qué falta |
|---|---|---|
| `site.whatsapp` | Contacto | Número real en formato internacional (ej. `"51987654321"`) |
| `site.calendly` | Contacto / Recursos | Enlace real de agendamiento |
| `site.hotmart` | Recursos | Enlace real del Project Manager Pro System |
| `site.social.*` | Contacto | Instagram / LinkedIn / TikTok / YouTube |
| `caseStudies` | Resultados | 3 casos reales (sector, reto, intervención, resultado) |
| `testimonials` | Testimonios | Citas reales de clientes con nombre y cargo |
| Foto de perfil | `src/components/About.tsx` | Reemplazar el monograma "RP" por una foto real |

Mientras esos campos estén vacíos, la UI los oculta u ofrece una alternativa
razonable (por ejemplo, el botón de WhatsApp no se muestra si no hay número;
el CTA de Hotmart apunta a la sección de contacto).

El formulario de contacto no tiene backend: al enviarse abre el cliente de
correo del visitante con un `mailto:` prellenado hacia `site.email`. Si más
adelante quieres capturar leads directamente (Formspree, Resend, un endpoint
propio, etc.), el punto de integración es `handleSubmit` en
`src/components/Contact.tsx`.
