import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { business, services, faqs, whatsappUrl } from './config';
import './styles.css';

const paths = {
  snow: <><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9 4.9 19.1"/><path d="m9 5 3 3 3-3m-6 14 3-3 3 3M5 9l3 3-3 3m11-6-3 3 3 3"/></>,
  whatsapp: <><path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9 8.5c.3 2.8 2.4 4.9 5.2 5.4l1.4-1.1 2 1.1-.6 2c-.2.7-1 1.1-1.7 1-4.6-.6-7.6-3.5-8.3-8.1-.1-.7.3-1.5 1-1.7l2-.6 1.1 2-1.1 1.4Z"/></>,
  arrow: <><path d="M5 12h14m-6-6 6 6-6 6"/></>,
  chevron: <><path d="m9 18 6-6-6-6"/></>,
  down: <><path d="m6 9 6 6 6-6"/></>,
  pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.9"/><circle cx="9" cy="7" r="4"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></>,
  file: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8m-8 4h5"/></>,
  air: <><rect x="3" y="4" width="18" height="11" rx="2"/><path d="M6 11h12M7 18c0 1-1 1-1 2m6-2c0 1-1 1-1 2m7-2c0 1-1 1-1 2"/></>,
  fridge: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M6 10h12M9 6v2m0 5v3"/></>,
  tools: <><path d="m14.7 6.3 3 3L21 6a5 5 0 0 1-6.9 6.9L7 20a2.1 2.1 0 0 1-3-3l7.1-7.1A5 5 0 0 1 18 3l-3.3 3.3Z"/><path d="m3 4 4 4m10 9 4 4"/></>,
  diagnosis: <><circle cx="10.5" cy="10.5" r="7.5"/><path d="m16 16 5 5M7 10h2l1-2 2 5 1-3h2"/></>,
  check: <><path d="m5 12 4 4L19 6"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="M5 5 19 19M19 5 5 19"/></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none"/></>,
};

function Icon({ name, size = 24, className = '' }) {
  return <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function Logo({ light = false }) {
  return <a className={`logo ${light ? 'logo-light' : ''}`} href="#inicio" aria-label={`${business.name}, volver al inicio`}>
    <span className="logo-mark"><Icon name="snow" size={35}/><span className="logo-wave"/></span>
    <span className="logo-words"><span>SERVICIOS</span><strong>MORENO HAARC</strong></span>
  </a>;
}

function WhatsAppLink({ children, message, className = '', icon = true, ...props }) {
  return <a className={className} href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" {...props}>{icon && <Icon name="whatsapp" size={22}/>}<span>{children}</span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const items = [['Inicio', '#inicio'], ['Servicios', '#servicios'], ['Nosotros', '#nosotros'], ['Áreas de atención', '#areas'], ['Contacto', '#contacto']];
  return <header className="site-header">
    <div className="container header-inner">
      <Logo/>
      <nav className={`main-nav ${open ? 'is-open' : ''}`} id="main-nav" aria-label="Navegación principal">
        {items.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <WhatsAppLink className="btn btn-whatsapp header-cta" message="Hola, quisiera solicitar un diagnóstico para mi equipo.">Solicitar diagnóstico</WhatsAppLink>
      <button className="menu-toggle" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} size={25}/></button>
    </div>
  </header>;
}

function Hero() {
  return <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="hero-photo" role="img" aria-label="Técnico revisando una unidad de aire acondicionado"/>
    <div className="hero-shade"/>
    <div className="container hero-inner">
      <div className="hero-copy">
        <p className="eyebrow eyebrow-light">SERVICIOS MORENO HAARC</p>
        <h1 id="hero-title">Refrigeración y aire acondicionado con <span>atención profesional</span></h1>
        <p className="hero-lead">Instalación, reparación y mantenimiento para hogares, comercios e industrias en Mérida.</p>
        <div className="hero-actions">
          <WhatsAppLink className="btn btn-whatsapp btn-large">Solicitar diagnóstico</WhatsAppLink>
          <a href="#servicios" className="btn btn-outline btn-large">Ver servicios <Icon name="chevron" size={22}/></a>
        </div>
        <p className="hero-note"><Icon name="whatsapp" size={19}/> Respuesta directa por WhatsApp</p>
      </div>
      <div className="hero-badge"><span className="badge-icon"><Icon name="tools" size={25}/></span><span>Atención técnica<br/><strong>para tu equipo</strong></span></div>
    </div>
  </section>;
}

function TrustStrip() {
  const entries = [
    ['pin', 'Atención en Mérida', 'Mérida, Venezuela'],
    ['users', 'Hogar, comercio e industria', 'Soluciones según cada espacio'],
    ['file', 'Cotización personalizada', 'Según tu equipo y necesidad'],
  ];
  return <section className="trust-strip" aria-label="Información de atención"><div className="container trust-grid">
    {entries.map(([icon, title, text]) => <div className="trust-item" key={title}><Icon name={icon} size={34}/><div><strong>{title}</strong><span>{text}</span></div></div>)}
  </div></section>;
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function Services() {
  return <section className="section services" id="servicios" aria-labelledby="services-title"><div className="container">
    <div className="section-heading reveal"><p className="eyebrow">NUESTROS SERVICIOS</p><h2 id="services-title">Soluciones en refrigeración y aire acondicionado</h2><p>Cuéntanos qué necesita tu equipo y conversemos sobre la atención adecuada.</p></div>
    <div className="service-grid">{services.map((service, i) => <article className="service-card reveal" key={service.title} style={{'--delay': `${i * 70}ms`}}>
      <div className="service-icon"><Icon name={service.icon} size={34}/></div>
      <div className="service-content"><h3>{service.title}</h3><p>{service.description}</p><WhatsAppLink className="text-link" message={service.message} icon={false}>Consultar servicio <Icon name="arrow" size={18}/></WhatsAppLink></div>
    </article>)}</div>
  </div></section>;
}

function AboutAreas() {
  return <section className="section about-section" id="nosotros"><div className="container about-grid">
    <div className="about-image reveal"><img src="/refrigeration-service.jpg" alt="Revisión técnica de un sistema de refrigeración" loading="lazy"/><div className="image-label"><Icon name="pin" size={18}/> Mérida, Venezuela</div></div>
    <div className="about-copy reveal"><p className="eyebrow">SOBRE NOSOTROS</p><h2>Atención técnica para lo que más importa en tu espacio</h2><p>{business.legalName} ofrece instalación, reparación y mantenimiento de sistemas de refrigeración y aire acondicionado en Mérida. Atendemos consultas de hogares, comercios e industrias con una comunicación directa para conocer cada necesidad.</p><div className="about-divider"/><div id="areas" className="areas-block"><h3>Áreas de atención</h3><p>Soluciones para espacios residenciales, comerciales e industriales.</p><div className="area-pills"><span>Hogares</span><span>Comercios</span><span>Industrias</span></div></div></div>
  </div></section>;
}

function Steps() {
  const steps = [
    ['01', 'Selecciona el servicio', 'Indica qué tipo de atención necesitas.'],
    ['02', 'Describe tu equipo', 'Cuéntanos qué ocurre o qué trabajo requieres.'],
    ['03', 'Envía tu solicitud', 'Abre WhatsApp con los datos de tu consulta.'],
    ['04', 'Coordina la evaluación', 'Conversa directamente con la empresa.'],
  ];
  return <section className="section steps-section"><div className="container"><SectionHeading eyebrow="ASÍ DE SIMPLE" title="¿Cómo solicitar atención?" text="Comparte los datos básicos de tu equipo para iniciar la conversación."/><div className="steps-grid">{steps.map(([number, title, text], i) => <div className="step reveal" key={number} style={{'--delay': `${i * 70}ms`}}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>;
}

function QuickRequest() {
  const [form, setForm] = useState({service: '', space: '', problem: '', name: ''});
  function update(event) { setForm({...form, [event.target.name]: event.target.value}); }
  function submit(event) {
    event.preventDefault();
    const message = `Hola, soy ${form.name.trim()}. Quisiera solicitar una evaluación.\n\nServicio: ${form.service}\nTipo de espacio: ${form.space}\nEquipo o problema: ${form.problem.trim()}\n\nEstoy en Mérida y quisiera conocer los próximos pasos.`;
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
  }
  return <section className="section request-section" id="solicitud"><div className="container request-grid">
    <div className="request-copy reveal"><p className="eyebrow eyebrow-light">SOLICITUD RÁPIDA</p><h2>Cuéntanos qué necesita tu equipo</h2><p>Completa estos datos y enviaremos tu mensaje listo para conversar por WhatsApp.</p><div className="request-callout"><Icon name="check" size={20}/><span>Comunicación directa con Servicios Moreno HAARC</span></div></div>
    <form className="request-form reveal" onSubmit={submit}>
      <div className="form-row"><label>Tipo de servicio<select name="service" value={form.service} onChange={update} required><option value="">Selecciona un servicio</option>{services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}</select></label><label>Tipo de espacio<select name="space" value={form.space} onChange={update} required><option value="">Selecciona un espacio</option><option>Hogar</option><option>Comercio</option><option>Industria</option></select></label></div>
      <label>Describe el equipo o problema<textarea name="problem" value={form.problem} onChange={update} rows="4" placeholder="Por ejemplo: mi aire acondicionado no enfría..." required maxLength="700"/></label>
      <label>Tu nombre<input name="name" value={form.name} onChange={update} type="text" autoComplete="name" placeholder="¿Cómo podemos llamarte?" required maxLength="80"/></label>
      <button className="btn btn-whatsapp form-submit" type="submit"><Icon name="whatsapp" size={22}/> Enviar por WhatsApp <Icon name="arrow" size={18}/></button>
      <p className="form-note">Se abrirá WhatsApp con tu mensaje. Podrás revisarlo antes de enviarlo.</p>
    </form>
  </div></section>;
}

function FAQ() {
  return <section className="section faq-section"><div className="container faq-grid"><div className="reveal"><p className="eyebrow">PREGUNTAS FRECUENTES</p><h2>Antes de escribirnos</h2><p>Respuestas breves para ayudarte a preparar tu consulta.</p></div><div className="faq-list reveal">{faqs.map(({question, answer}) => <details key={question}><summary>{question}<Icon name="down" size={20}/></summary><p>{answer}</p></details>)}</div></div></section>;
}

function Closing() {
  return <section className="closing" id="contacto"><div className="container closing-inner reveal"><div><p className="eyebrow eyebrow-light">HABLEMOS DE TU EQUIPO</p><h2>¿Necesitas revisar tu equipo?</h2><p>Escríbenos y cuéntanos qué atención necesitas en Mérida.</p></div><WhatsAppLink className="btn btn-whatsapp btn-large">Hablar por WhatsApp</WhatsAppLink></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div><Logo light/><p>Servicios técnicos de refrigeración y aire acondicionado para hogares, comercios e industrias.</p></div><div><h3>Explora</h3><a href="#servicios">Servicios</a><a href="#nosotros">Nosotros</a><a href="#areas">Áreas de atención</a><a href="#solicitud">Solicitud rápida</a></div><div><h3>Contacto</h3><span>{business.location}</span><WhatsAppLink icon={false} message="Hola, quisiera consultar sobre sus servicios.">{business.whatsappDisplay}</WhatsAppLink><a href={business.socialUrl} target="_blank" rel="noopener noreferrer"><Icon name="instagram" size={17}/> {business.socialHandle}</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {business.legalName}</span><span>Demo comercial</span></div></footer>;
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold: .1});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Header/><main id="contenido"><Hero/><TrustStrip/><Services/><AboutAreas/><Steps/><QuickRequest/><FAQ/><Closing/></main><Footer/><WhatsAppLink className="whatsapp-float" aria-label="Escribir por WhatsApp"><span className="sr-only">Escribir por WhatsApp</span></WhatsAppLink><div className="mobile-action"><WhatsAppLink className="btn btn-whatsapp">Solicitar diagnóstico</WhatsAppLink></div></>;
}

createRoot(document.getElementById('root')).render(<App/>);
