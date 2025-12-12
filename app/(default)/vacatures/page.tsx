'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function Vacatures() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Vacatures",
      subtitle: "Word onderdeel van ons team",
      intro: "Bij GWC werken we met gepassioneerde professionals die van e-commerce houden. Ben jij onze nieuwe collega?",
      jobs: [
        {
          title: "Senior Web Developer",
          type: "Fulltime",
          location: "Amsterdam / Hybrid",
          desc: "Wij zoeken een ervaren developer die complexe webshops kan bouwen met WordPress/WooCommerce en moderne technologieën.",
        },
        {
          title: "E-commerce Specialist",
          type: "Fulltime",
          location: "Amsterdam / Hybrid",
          desc: "Help onze klanten hun online verkoop te optimaliseren met strategisch advies en hands-on implementatie.",
        },
        {
          title: "UI/UX Designer",
          type: "Fulltime",
          location: "Amsterdam / Remote",
          desc: "Ontwerp prachtige en conversiegerichte webshops die onze klanten en hun klanten blij maken.",
        },
      ],
      benefits: [
        "Competitief salaris",
        "Flexibele werktijden",
        "Thuiswerken mogelijk",
        "27 vakantiedagen",
        "Persoonlijk ontwikkelbudget",
        "Gezellig team",
      ],
      applyNow: "Solliciteer nu",
      nojobs: "Op dit moment hebben we geen openstaande vacatures. Stuur gerust een open sollicitatie!",
      benefitsTitle: "Wat wij bieden",
      openPositions: "Openstaande Vacatures",
    },
    en: {
      title: "Careers",
      subtitle: "Become part of our team",
      intro: "At GWC, we work with passionate professionals who love e-commerce. Are you our new colleague?",
      jobs: [
        {
          title: "Senior Web Developer",
          type: "Full-time",
          location: "Amsterdam / Hybrid",
          desc: "We're looking for an experienced developer who can build complex webshops with WordPress/WooCommerce and modern technologies.",
        },
        {
          title: "E-commerce Specialist",
          type: "Full-time",
          location: "Amsterdam / Hybrid",
          desc: "Help our clients optimize their online sales with strategic advice and hands-on implementation.",
        },
        {
          title: "UI/UX Designer",
          type: "Full-time",
          location: "Amsterdam / Remote",
          desc: "Design beautiful and conversion-focused webshops that delight our clients and their customers.",
        },
      ],
      benefits: [
        "Competitive salary",
        "Flexible working hours",
        "Remote work possible",
        "27 vacation days",
        "Personal development budget",
        "Great team",
      ],
      applyNow: "Apply now",
      nojobs: "We currently have no open positions. Feel free to send an open application!",
      benefitsTitle: "What we offer",
      openPositions: "Open Positions",
    },
    de: {
      title: "Karriere",
      subtitle: "Werden Sie Teil unseres Teams",
      intro: "Bei GWC arbeiten wir mit leidenschaftlichen Profis, die E-Commerce lieben. Sind Sie unser neuer Kollege?",
      jobs: [
        { title: "Senior Web Developer", type: "Vollzeit", location: "Amsterdam / Hybrid", desc: "Wir suchen einen erfahrenen Entwickler, der komplexe Webshops mit WordPress/WooCommerce und modernen Technologien bauen kann." },
        { title: "E-Commerce Spezialist", type: "Vollzeit", location: "Amsterdam / Hybrid", desc: "Helfen Sie unseren Kunden, ihre Online-Verkäufe mit strategischer Beratung und praktischer Umsetzung zu optimieren." },
        { title: "UI/UX Designer", type: "Vollzeit", location: "Amsterdam / Remote", desc: "Entwerfen Sie schöne und conversion-orientierte Webshops, die unsere Kunden und deren Kunden begeistern." },
      ],
      benefits: ["Wettbewerbsfähiges Gehalt", "Flexible Arbeitszeiten", "Homeoffice möglich", "27 Urlaubstage", "Persönliches Entwicklungsbudget", "Tolles Team"],
      applyNow: "Jetzt bewerben",
      nojobs: "Derzeit haben wir keine offenen Stellen. Senden Sie uns gerne eine Initiativbewerbung!",
      benefitsTitle: "Was wir bieten",
      openPositions: "Offene Stellen",
    },
    fr: {
      title: "Carrières",
      subtitle: "Rejoignez notre équipe",
      intro: "Chez GWC, nous travaillons avec des professionnels passionnés qui aiment le e-commerce. Êtes-vous notre nouveau collègue ?",
      jobs: [
        { title: "Développeur Web Senior", type: "Temps plein", location: "Amsterdam / Hybride", desc: "Nous recherchons un développeur expérimenté capable de créer des boutiques en ligne complexes avec WordPress/WooCommerce et des technologies modernes." },
        { title: "Spécialiste E-commerce", type: "Temps plein", location: "Amsterdam / Hybride", desc: "Aidez nos clients à optimiser leurs ventes en ligne avec des conseils stratégiques et une mise en œuvre pratique." },
        { title: "Designer UI/UX", type: "Temps plein", location: "Amsterdam / Remote", desc: "Concevez de belles boutiques en ligne axées sur la conversion qui ravissent nos clients et leurs clients." },
      ],
      benefits: ["Salaire compétitif", "Horaires flexibles", "Télétravail possible", "27 jours de congés", "Budget de développement personnel", "Équipe sympa"],
      applyNow: "Postuler maintenant",
      nojobs: "Nous n'avons actuellement aucun poste ouvert. N'hésitez pas à envoyer une candidature spontanée !",
      benefitsTitle: "Ce que nous offrons",
      openPositions: "Postes ouverts",
    },
    es: {
      title: "Carreras",
      subtitle: "Únete a nuestro equipo",
      intro: "En GWC trabajamos con profesionales apasionados que aman el comercio electrónico. ¿Eres nuestro nuevo colega?",
      jobs: [
        { title: "Desarrollador Web Senior", type: "Tiempo completo", location: "Amsterdam / Híbrido", desc: "Buscamos un desarrollador experimentado que pueda construir tiendas online complejas con WordPress/WooCommerce y tecnologías modernas." },
        { title: "Especialista en E-commerce", type: "Tiempo completo", location: "Amsterdam / Híbrido", desc: "Ayude a nuestros clientes a optimizar sus ventas en línea con asesoramiento estratégico e implementación práctica." },
        { title: "Diseñador UI/UX", type: "Tiempo completo", location: "Amsterdam / Remoto", desc: "Diseñe hermosas tiendas online enfocadas en conversión que deleiten a nuestros clientes y a sus clientes." },
      ],
      benefits: ["Salario competitivo", "Horarios flexibles", "Trabajo remoto posible", "27 días de vacaciones", "Presupuesto de desarrollo personal", "Gran equipo"],
      applyNow: "Postular ahora",
      nojobs: "Actualmente no tenemos puestos abiertos. ¡No dude en enviar una solicitud espontánea!",
      benefitsTitle: "Lo que ofrecemos",
      openPositions: "Posiciones abiertas",
    },
  };

  const t = content[locale];

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-300 text-center">{t.intro}</p>
          </div>

          {/* Benefits */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700/50">
            <h2 className="text-xl font-bold mb-6 text-center text-white">{t.benefitsTitle}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {t.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Job listings */}
          <h2 className="text-2xl font-bold mb-8 text-white">{t.openPositions}</h2>
          <div className="space-y-6">
            {t.jobs.map((job, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-blue-500/50 transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-xl mb-2 text-white">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="text-sm bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full">{job.type}</span>
                      <span className="text-sm bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full">{job.location}</span>
                    </div>
                    <p className="text-gray-400">{job.desc}</p>
                  </div>
                  <a
                    href="/contact"
                    className="btn bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-lg font-medium whitespace-nowrap"
                  >
                    {t.applyNow}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
