/**
 * ============================================================================
 * CONTENIDO DEL SITIO — renzoparada.com
 * ============================================================================
 * Este archivo centraliza TODO el copy y los datos editables del sitio.
 * Los campos marcados con "// TODO" son placeholders seguros (no inventan
 * datos reales de contacto, cifras ni testimonios) — reemplázalos cuando
 * tengas la información definitiva. El resto del código nunca necesita
 * tocarse para actualizar textos, enlaces o casos de éxito.
 * ============================================================================
 */

export const site = {
  name: "Renzo Parada",
  role: "Consultor · Facilitador · Diseñador de Experiencias",
  domain: "renzoparada.com",
  locale: "es",
  // TODO: confirma el email que quieres publicar (se usa como respaldo del formulario)
  email: "renzoparada@gmail.com",
  // TODO: agrega tu número real en formato internacional sin signos, ej. "51987654321"
  whatsapp: "",
  // TODO: enlace real de Calendly u otra herramienta de agendamiento
  calendly: "",
  // TODO: enlace real del producto en Hotmart
  hotmart: "",
  social: {
    // TODO: agrega tus handles/enlaces reales o deja vacío para ocultar el ícono
    instagram: "",
    linkedin: "",
    tiktok: "",
    youtube: "",
  },
};

export const nav = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Resultados", href: "#resultados" },
  { label: "Recursos", href: "#recursos" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  eyebrow: "Consultoría · Formación · Experiencias",
  titleLines: [
    "Transformo equipos,",
    "negocios y experiencias",
    "en resultados que",
  ],
  rotatingWords: ["se miden.", "se sienten.", "se sostienen.", "se recuerdan."],
  support:
    "Ayudo a empresas y líderes a crecer con estrategia, a sus equipos a rendir con propósito, y a sus clientes a vivir experiencias inolvidables — combinando gestión, ventas y diseño de experiencias en un mismo sistema.",
  ctaPrimary: { label: "Agenda una consultoría", href: "#contacto" },
  ctaSecondary: { label: "Conoce mis programas", href: "#servicios" },
  stats: [
    { value: 4, suffix: "", label: "Pilares de transformación" },
    { value: 3, suffix: "", label: "Metodologías propias certificadas" },
    { value: 1, suffix: "", label: "Framework propio: PM Pro System" },
  ],
};

export const about = {
  eyebrow: "Sobre mí",
  heading: "No soy un consultor más",
  paragraphs: [
    "Soy Renzo Parada. He construido mi trabajo en la intersección de tres mundos que casi nunca se juntan: la gestión de proyectos, las ventas y el diseño de experiencias.",
    "Soy Facilitador certificado en LEGO® Serious Play®, especialista en el Método Disney de atención al cliente, y creador del Project Manager Pro System, un framework integral de gestión de proyectos usado por profesionales en toda Latinoamérica.",
    "Mi trabajo no se trata de teoría. Se trata de sentarme con tu equipo, entender tu negocio y construir contigo un sistema — o una experiencia — que realmente funcione.",
  ],
  credentials: [
    "Facilitador LEGO® Serious Play®",
    "Especialista en Método Disney de Atención al Cliente",
    "Creador del Project Manager Pro System",
    "Consultor y Asesor Empresarial",
  ],
};

export type Pillar = {
  number: string;
  title: string;
  audience: string;
  includes: string;
  result: string;
  cta: string;
};

export const pillars: Pillar[] = [
  {
    number: "01",
    title: "Consultoría & Asesoría Empresarial",
    audience: "Empresarios y líderes que necesitan claridad estratégica",
    includes:
      "Consultoría empresarial, asesoría en ventas y diagnóstico organizacional",
    result:
      "Decisiones más claras, procesos más rentables y equipos alineados con la estrategia",
    cta: "Solicita un diagnóstico",
  },
  {
    number: "02",
    title: "Formación & Facilitación",
    audience:
      "Equipos y organizaciones que buscan desarrollar habilidades reales",
    includes:
      "Entrenamiento y capacitación, coaching ejecutivo y de equipos, y facilitación con LEGO® Serious Play® para desbloquear pensamiento estratégico e innovación",
    result:
      "Equipos más capaces, alineados y con herramientas prácticas para actuar",
    cta: "Conoce los programas de formación",
  },
  {
    number: "03",
    title: "Diseño de Experiencias",
    audience:
      "Marcas y empresas que quieren que cada punto de contacto sea memorable",
    includes:
      "Método Disney de atención al cliente, creación de experiencias de marca y conceptos para parques tematizados y espacios de entretenimiento",
    result: "Clientes que no solo compran: vuelven y recomiendan",
    cta: "Diseñemos tu experiencia",
  },
  {
    number: "04",
    title: "Ecosistemas & Mentorías",
    audience:
      "Emprendedores y organizaciones que buscan crecer de forma sostenible",
    includes:
      "Creación de ecosistemas de negocio y programas de mentoría personalizados",
    result: "Un modelo de crecimiento propio, no una copia de lo que le funcionó a otro",
    cta: "Empecemos tu ecosistema",
  },
];

export const methodology = {
  eyebrow: "Cómo trabajo",
  heading: "Mi forma de trabajar",
  steps: [
    {
      number: "01",
      title: "Escucho y diagnostico",
      description:
        "Entiendo tu negocio, tu equipo y tu momento actual antes de proponer nada.",
    },
    {
      number: "02",
      title: "Diseño a la medida",
      description:
        "Nada de fórmulas genéricas. Cada programa, consultoría o experiencia se construye para tu contexto.",
    },
    {
      number: "03",
      title: "Facilito, no solo enseño",
      description:
        "Uso metodologías activas — como LEGO® Serious Play® — para que el aprendizaje se quede.",
    },
    {
      number: "04",
      title: "Acompaño la implementación",
      description:
        "El cambio real ocurre después de la sesión, y ahí sigo presente.",
    },
  ],
};

export type CaseStudy = {
  sector: string;
  challenge: string;
  intervention: string;
  result: string;
};

// TODO: reemplaza estos tres casos con proyectos reales (cliente/sector, reto,
// intervención y un resultado medible). Se muestran como placeholders editables.
export const caseStudies: CaseStudy[] = [
  {
    sector: "Añade el sector o industria",
    challenge: "Describe brevemente el reto que enfrentaba el cliente",
    intervention: "Resume qué hiciste: consultoría, facilitación, experiencia…",
    result: "Comparte un resultado concreto o medible",
  },
  {
    sector: "Añade el sector o industria",
    challenge: "Describe brevemente el reto que enfrentaba el cliente",
    intervention: "Resume qué hiciste: consultoría, facilitación, experiencia…",
    result: "Comparte un resultado concreto o medible",
  },
  {
    sector: "Añade el sector o industria",
    challenge: "Describe brevemente el reto que enfrentaba el cliente",
    intervention: "Resume qué hiciste: consultoría, facilitación, experiencia…",
    result: "Comparte un resultado concreto o medible",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// TODO: reemplaza con testimonios reales de tus clientes (cita + nombre + cargo/empresa).
export const testimonials: Testimonial[] = [
  {
    quote:
      "Añade aquí la cita textual de un cliente sobre el impacto de tu trabajo.",
    name: "Nombre del cliente",
    role: "Cargo, empresa",
  },
  {
    quote:
      "Añade aquí la cita textual de un cliente sobre el impacto de tu trabajo.",
    name: "Nombre del cliente",
    role: "Cargo, empresa",
  },
  {
    quote:
      "Añade aquí la cita textual de un cliente sobre el impacto de tu trabajo.",
    name: "Nombre del cliente",
    role: "Cargo, empresa",
  },
];

export const resource = {
  eyebrow: "Recursos",
  heading: "Lleva la metodología a tu propio ritmo",
  text: "Si buscas una herramienta completa para gestionar proyectos de principio a fin, conoce el Project Manager Pro System: un sistema integral con plantillas, dashboards y certificación, pensado para profesionales de habla hispana.",
  productName: "Project Manager Pro System",
  cta: "Conoce el Project Manager Pro System",
};

export const contact = {
  eyebrow: "Contacto",
  heading: "Hablemos de tu próximo paso",
  text: "Cuéntame qué estás buscando —una consultoría, una capacitación para tu equipo, o una experiencia para tu marca— y te respondo con los siguientes pasos.",
  serviceOptions: [
    "Consultoría & Asesoría Empresarial",
    "Formación & Facilitación",
    "Diseño de Experiencias",
    "Ecosistemas & Mentorías",
    "Otro",
  ],
};

export const footer = {
  tagline: "Consultor, Facilitador y Creador de Experiencias Empresariales",
};
