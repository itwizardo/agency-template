'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function WebsiteBouw() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Website Bouw",
      subtitle: "Professionele websites die resultaat leveren",
      intro: "Van bedrijfswebsite tot portfolio, wij bouwen websites die niet alleen mooi zijn maar ook effectief. Met focus op gebruiksvriendelijkheid, snelheid en conversie zorgen wij ervoor dat uw website werkt voor uw bedrijf.",
      features: [
        { title: "WordPress & Custom", desc: "Keuze uit WordPress of volledig maatwerk development" },
        { title: "CMS Integratie", desc: "Eenvoudig zelf uw content beheren via een gebruiksvriendelijk CMS" },
        { title: "Conversie Gericht", desc: "Ontworpen met focus op het behalen van uw bedrijfsdoelen" },
        { title: "Technische SEO", desc: "Geoptimaliseerde structuur voor betere vindbaarheid in Google" },
        { title: "Formulieren & Integraties", desc: "Contactformulieren, nieuwsbrieven en externe koppelingen" },
        { title: "Training & Documentatie", desc: "Uitgebreide uitleg zodat u zelf aan de slag kunt" },
      ],
      cta: "Start Uw Website Project",
    },
    en: {
      title: "Website Development",
      subtitle: "Professional websites that deliver results",
      intro: "From business websites to portfolios, we build websites that are not only beautiful but also effective. With focus on usability, speed, and conversion, we ensure your website works for your business.",
      features: [
        { title: "WordPress & Custom", desc: "Choice of WordPress or fully custom development" },
        { title: "CMS Integration", desc: "Easily manage your content yourself via a user-friendly CMS" },
        { title: "Conversion Focused", desc: "Designed with focus on achieving your business goals" },
        { title: "Technical SEO", desc: "Optimized structure for better visibility in Google" },
        { title: "Forms & Integrations", desc: "Contact forms, newsletters, and external connections" },
        { title: "Training & Documentation", desc: "Extensive explanation so you can get started yourself" },
      ],
      cta: "Start Your Website Project",
    },
    de: {
      title: "Website Entwicklung",
      subtitle: "Professionelle Websites, die Ergebnisse liefern",
      intro: "Von Unternehmenswebsites bis hin zu Portfolios - wir bauen Websites, die nicht nur schön, sondern auch effektiv sind. Mit Fokus auf Benutzerfreundlichkeit, Geschwindigkeit und Konversion sorgen wir dafür, dass Ihre Website für Ihr Unternehmen arbeitet.",
      features: [
        { title: "WordPress & Custom", desc: "Wahl zwischen WordPress oder vollständig maßgeschneiderter Entwicklung" },
        { title: "CMS Integration", desc: "Verwalten Sie Ihre Inhalte einfach selbst über ein benutzerfreundliches CMS" },
        { title: "Konversionsorientiert", desc: "Entwickelt mit Fokus auf das Erreichen Ihrer Geschäftsziele" },
        { title: "Technisches SEO", desc: "Optimierte Struktur für bessere Sichtbarkeit bei Google" },
        { title: "Formulare & Integrationen", desc: "Kontaktformulare, Newsletter und externe Verbindungen" },
        { title: "Schulung & Dokumentation", desc: "Ausführliche Erklärung, damit Sie selbst loslegen können" },
      ],
      cta: "Starten Sie Ihr Website-Projekt",
    },
    fr: {
      title: "Création de Site Web",
      subtitle: "Sites web professionnels qui livrent des résultats",
      intro: "Des sites d'entreprise aux portfolios, nous créons des sites web qui sont non seulement beaux mais aussi efficaces. Avec un accent sur l'utilisabilité, la vitesse et la conversion, nous nous assurons que votre site fonctionne pour votre entreprise.",
      features: [
        { title: "WordPress & Sur Mesure", desc: "Choix entre WordPress ou développement entièrement personnalisé" },
        { title: "Intégration CMS", desc: "Gérez facilement votre contenu vous-même via un CMS convivial" },
        { title: "Axé sur la Conversion", desc: "Conçu avec un accent sur l'atteinte de vos objectifs commerciaux" },
        { title: "SEO Technique", desc: "Structure optimisée pour une meilleure visibilité sur Google" },
        { title: "Formulaires & Intégrations", desc: "Formulaires de contact, newsletters et connexions externes" },
        { title: "Formation & Documentation", desc: "Explication complète pour que vous puissiez démarrer vous-même" },
      ],
      cta: "Démarrez Votre Projet de Site",
    },
    es: {
      title: "Desarrollo de Sitios Web",
      subtitle: "Sitios web profesionales que entregan resultados",
      intro: "Desde sitios web empresariales hasta portfolios, construimos sitios web que no solo son hermosos sino también efectivos. Con enfoque en usabilidad, velocidad y conversión, nos aseguramos de que su sitio web trabaje para su negocio.",
      features: [
        { title: "WordPress & Personalizado", desc: "Elección entre WordPress o desarrollo completamente personalizado" },
        { title: "Integración CMS", desc: "Administre fácilmente su contenido usted mismo a través de un CMS fácil de usar" },
        { title: "Enfocado en Conversión", desc: "Diseñado con enfoque en alcanzar sus objetivos comerciales" },
        { title: "SEO Técnico", desc: "Estructura optimizada para mejor visibilidad en Google" },
        { title: "Formularios e Integraciones", desc: "Formularios de contacto, newsletters y conexiones externas" },
        { title: "Capacitación y Documentación", desc: "Explicación completa para que pueda comenzar usted mismo" },
      ],
      cta: "Inicie Su Proyecto de Sitio Web",
    },
  };

  const t = content[locale];

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-12">{t.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="btn bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
