export const business = {
  name: 'Servicios Moreno HAARC',
  legalName: 'Servicios Moreno HAARC C.A.',
  location: 'Mérida, Venezuela',
  whatsappNumber: '584241055738',
  whatsappDisplay: '+58 424-1055738',
  socialHandle: '@serviciosmorenohaarc',
  socialUrl: 'https://www.instagram.com/serviciosmorenohaarc/',
};

export const services = [
  {
    title: 'Aire acondicionado',
    icon: 'air',
    description: 'Instalación, revisión y mantenimiento de sistemas de climatización para cada espacio.',
    message: 'Hola, quisiera consultar sobre un servicio de aire acondicionado.',
  },
  {
    title: 'Refrigeración',
    icon: 'fridge',
    description: 'Atención técnica para sistemas de refrigeración de uso doméstico y comercial.',
    message: 'Hola, quisiera consultar sobre un servicio de refrigeración.',
  },
  {
    title: 'Mantenimiento preventivo',
    icon: 'tools',
    description: 'Revisión, limpieza y ajustes para cuidar el funcionamiento de tus equipos.',
    message: 'Hola, quisiera consultar sobre mantenimiento preventivo.',
  },
  {
    title: 'Reparación y diagnóstico',
    icon: 'diagnosis',
    description: 'Evaluación de fallas y orientación sobre los próximos pasos para tu equipo.',
    message: 'Hola, quisiera solicitar una evaluación de una falla en mi equipo.',
  },
];

export const faqs = [
  {
    question: '¿Qué tipos de equipos atienden?',
    answer: 'Atendemos consultas sobre sistemas de refrigeración y aire acondicionado para espacios domésticos, comerciales e industriales. Cuéntanos qué equipo tienes para confirmar la atención que necesitas.',
  },
  {
    question: '¿Cómo solicito una evaluación?',
    answer: 'Puedes escribirnos directamente por WhatsApp o completar la solicitud rápida de esta página. Con esa información podremos conversar sobre la evaluación de tu equipo.',
  },
  {
    question: '¿Qué información debo enviar?',
    answer: 'Indica el tipo de equipo, el espacio donde se encuentra y qué ocurre. Si tienes fotos o detalles adicionales, puedes compartirlos en la conversación de WhatsApp.',
  },
  {
    question: '¿Cuál es su área general de atención?',
    answer: 'Estamos ubicados en Mérida, Venezuela. Escríbenos para consultar la disponibilidad de atención según tu ubicación.',
  },
];

export function whatsappUrl(message = 'Hola, quisiera solicitar un diagnóstico para mi equipo.') {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
