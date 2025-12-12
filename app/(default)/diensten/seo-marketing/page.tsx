'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function SeoMarketing() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "SEO & Marketing",
      subtitle: "Word gevonden door uw ideale klanten",
      intro: "Een mooie webshop is niets waard als niemand hem kan vinden. Wij zorgen ervoor dat uw webshop hoog scoort in Google en dat uw marketingbudget optimaal wordt benut.",
      services: [
        { title: "Technische SEO", desc: "Optimalisatie van uw webshop voor zoekmachines" },
        { title: "Content Marketing", desc: "Waardevolle content die klanten aantrekt" },
        { title: "Google Ads", desc: "Gerichte advertenties voor direct resultaat" },
        { title: "Social Media Marketing", desc: "Bereik uw doelgroep op sociale media" },
        { title: "Email Marketing", desc: "Effectieve email campagnes voor meer verkoop" },
        { title: "Analytics & Rapportage", desc: "Inzicht in uw prestaties en ROI" },
      ],
      cta: "Vraag een SEO-analyse aan",
    },
    en: {
      title: "SEO & Marketing",
      subtitle: "Get found by your ideal customers",
      intro: "A beautiful webshop is worthless if nobody can find it. We ensure your webshop ranks high in Google and that your marketing budget is optimally utilized.",
      services: [
        { title: "Technical SEO", desc: "Optimization of your webshop for search engines" },
        { title: "Content Marketing", desc: "Valuable content that attracts customers" },
        { title: "Google Ads", desc: "Targeted advertising for immediate results" },
        { title: "Social Media Marketing", desc: "Reach your target audience on social media" },
        { title: "Email Marketing", desc: "Effective email campaigns for more sales" },
        { title: "Analytics & Reporting", desc: "Insight into your performance and ROI" },
      ],
      cta: "Request an SEO analysis",
    },
    de: {
      title: "SEO & Marketing",
      subtitle: "Werden Sie von Ihren idealen Kunden gefunden",
      intro: "Ein schöner Webshop ist wertlos, wenn ihn niemand finden kann. Wir sorgen dafür, dass Ihr Webshop bei Google hoch rankt und Ihr Marketingbudget optimal genutzt wird.",
      services: [
        { title: "Technische SEO", desc: "Optimierung Ihres Webshops für Suchmaschinen" },
        { title: "Content Marketing", desc: "Wertvolle Inhalte, die Kunden anziehen" },
        { title: "Google Ads", desc: "Gezielte Werbung für sofortige Ergebnisse" },
        { title: "Social Media Marketing", desc: "Erreichen Sie Ihre Zielgruppe in sozialen Medien" },
        { title: "E-Mail Marketing", desc: "Effektive E-Mail-Kampagnen für mehr Verkäufe" },
        { title: "Analysen & Berichte", desc: "Einblick in Ihre Leistung und ROI" },
      ],
      cta: "SEO-Analyse anfordern",
    },
    fr: {
      title: "SEO & Marketing",
      subtitle: "Soyez trouvé par vos clients idéaux",
      intro: "Une belle boutique en ligne ne vaut rien si personne ne peut la trouver. Nous veillons à ce que votre boutique soit bien classée sur Google et que votre budget marketing soit optimisé.",
      services: [
        { title: "SEO Technique", desc: "Optimisation de votre boutique pour les moteurs de recherche" },
        { title: "Marketing de Contenu", desc: "Contenu de valeur qui attire les clients" },
        { title: "Google Ads", desc: "Publicité ciblée pour des résultats immédiats" },
        { title: "Marketing des Réseaux Sociaux", desc: "Atteignez votre public cible sur les réseaux sociaux" },
        { title: "Marketing par Email", desc: "Campagnes email efficaces pour plus de ventes" },
        { title: "Analyses & Rapports", desc: "Aperçu de vos performances et du ROI" },
      ],
      cta: "Demander une analyse SEO",
    },
    es: {
      title: "SEO y Marketing",
      subtitle: "Sea encontrado por sus clientes ideales",
      intro: "Una tienda online hermosa no vale nada si nadie puede encontrarla. Nos aseguramos de que su tienda tenga un alto ranking en Google y que su presupuesto de marketing se utilice de manera óptima.",
      services: [
        { title: "SEO Técnico", desc: "Optimización de su tienda para motores de búsqueda" },
        { title: "Marketing de Contenidos", desc: "Contenido valioso que atrae clientes" },
        { title: "Google Ads", desc: "Publicidad dirigida para resultados inmediatos" },
        { title: "Marketing en Redes Sociales", desc: "Alcance a su público objetivo en redes sociales" },
        { title: "Email Marketing", desc: "Campañas de email efectivas para más ventas" },
        { title: "Análisis e Informes", desc: "Información sobre su rendimiento y ROI" },
      ],
      cta: "Solicitar análisis SEO",
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
            {t.services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
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
