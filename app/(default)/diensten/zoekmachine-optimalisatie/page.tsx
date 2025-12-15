'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function ZoekmachineOptimalisatie() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Zoekmachine-optimalisatie",
      subtitle: "Hoger in Google, meer bezoekers",
      intro: "SEO is essentieel voor online succes. Wij optimaliseren uw website zodat u beter vindbaar wordt in Google en andere zoekmachines. Van technische SEO tot content optimalisatie, wij zorgen voor duurzame resultaten.",
      features: [
        { title: "Keyword Research", desc: "Uitgebreid onderzoek naar de zoekwoorden die uw doelgroep gebruikt" },
        { title: "On-Page SEO", desc: "Optimalisatie van titels, meta descriptions, headings en content" },
        { title: "Technische SEO", desc: "Verbetering van snelheid, mobiel-vriendelijkheid en crawlbaarheid" },
        { title: "Content Strategie", desc: "Advies en creatie van SEO-geoptimaliseerde content" },
        { title: "Linkbuilding", desc: "Opbouwen van kwalitatieve backlinks voor meer autoriteit" },
        { title: "Maandelijkse Rapportage", desc: "Duidelijke rapportages over rankings en verkeer" },
      ],
      cta: "Verbeter Uw SEO",
    },
    en: {
      title: "Search Engine Optimization",
      subtitle: "Higher in Google, more visitors",
      intro: "SEO is essential for online success. We optimize your website so you become more visible in Google and other search engines. From technical SEO to content optimization, we ensure sustainable results.",
      features: [
        { title: "Keyword Research", desc: "Extensive research into the keywords your target audience uses" },
        { title: "On-Page SEO", desc: "Optimization of titles, meta descriptions, headings, and content" },
        { title: "Technical SEO", desc: "Improvement of speed, mobile-friendliness, and crawlability" },
        { title: "Content Strategy", desc: "Advice and creation of SEO-optimized content" },
        { title: "Link Building", desc: "Building quality backlinks for more authority" },
        { title: "Monthly Reporting", desc: "Clear reports on rankings and traffic" },
      ],
      cta: "Improve Your SEO",
    },
    de: {
      title: "Suchmaschinenoptimierung",
      subtitle: "Höher bei Google, mehr Besucher",
      intro: "SEO ist entscheidend für den Online-Erfolg. Wir optimieren Ihre Website, damit Sie in Google und anderen Suchmaschinen besser gefunden werden. Von technischem SEO bis zur Content-Optimierung sorgen wir für nachhaltige Ergebnisse.",
      features: [
        { title: "Keyword-Recherche", desc: "Umfassende Recherche der Keywords, die Ihre Zielgruppe verwendet" },
        { title: "On-Page SEO", desc: "Optimierung von Titeln, Meta-Beschreibungen, Überschriften und Inhalten" },
        { title: "Technisches SEO", desc: "Verbesserung von Geschwindigkeit, Mobilfreundlichkeit und Crawlbarkeit" },
        { title: "Content-Strategie", desc: "Beratung und Erstellung von SEO-optimiertem Content" },
        { title: "Linkaufbau", desc: "Aufbau qualitativer Backlinks für mehr Autorität" },
        { title: "Monatliche Berichterstattung", desc: "Klare Berichte über Rankings und Traffic" },
      ],
      cta: "Verbessern Sie Ihr SEO",
    },
    fr: {
      title: "Optimisation pour les Moteurs de Recherche",
      subtitle: "Plus haut sur Google, plus de visiteurs",
      intro: "Le SEO est essentiel pour le succès en ligne. Nous optimisons votre site web pour que vous soyez plus visible sur Google et les autres moteurs de recherche. Du SEO technique à l'optimisation du contenu, nous assurons des résultats durables.",
      features: [
        { title: "Recherche de Mots-Clés", desc: "Recherche approfondie des mots-clés utilisés par votre public cible" },
        { title: "SEO On-Page", desc: "Optimisation des titres, méta descriptions, en-têtes et contenu" },
        { title: "SEO Technique", desc: "Amélioration de la vitesse, de la compatibilité mobile et de l'indexabilité" },
        { title: "Stratégie de Contenu", desc: "Conseil et création de contenu optimisé pour le SEO" },
        { title: "Création de Liens", desc: "Construction de backlinks de qualité pour plus d'autorité" },
        { title: "Rapports Mensuels", desc: "Rapports clairs sur les classements et le trafic" },
      ],
      cta: "Améliorez Votre SEO",
    },
    es: {
      title: "Optimización de Motores de Búsqueda",
      subtitle: "Más alto en Google, más visitantes",
      intro: "El SEO es esencial para el éxito en línea. Optimizamos su sitio web para que sea más visible en Google y otros motores de búsqueda. Desde SEO técnico hasta optimización de contenido, aseguramos resultados sostenibles.",
      features: [
        { title: "Investigación de Palabras Clave", desc: "Investigación exhaustiva de las palabras clave que usa su público objetivo" },
        { title: "SEO On-Page", desc: "Optimización de títulos, meta descripciones, encabezados y contenido" },
        { title: "SEO Técnico", desc: "Mejora de velocidad, compatibilidad móvil y rastreabilidad" },
        { title: "Estrategia de Contenido", desc: "Asesoría y creación de contenido optimizado para SEO" },
        { title: "Construcción de Enlaces", desc: "Construcción de backlinks de calidad para más autoridad" },
        { title: "Informes Mensuales", desc: "Informes claros sobre rankings y tráfico" },
      ],
      cta: "Mejore Su SEO",
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
