'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function EcommerceStrategie() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "E-commerce Strategie",
      subtitle: "Strategisch advies voor maximale online groei",
      intro: "Een succesvolle webshop begint met een sterke strategie. Wij analyseren uw markt, doelgroep en concurrentie om een e-commerce strategie te ontwikkelen die echt werkt.",
      services: [
        { title: "Marktanalyse", desc: "Diepgaand onderzoek naar uw markt en concurrentie" },
        { title: "Doelgroep Onderzoek", desc: "Begrijp wie uw klanten zijn en wat ze willen" },
        { title: "Conversie Optimalisatie", desc: "Verhoog uw omzet door slimme optimalisaties" },
        { title: "Groei Strategie", desc: "Schaalbare plannen voor duurzame groei" },
        { title: "Prijsstrategie", desc: "Optimale prijzen voor maximale winst" },
        { title: "Kanaal Strategie", desc: "Bereik uw klanten via de juiste kanalen" },
      ],
      cta: "Plan een strategiegesprek",
    },
    en: {
      title: "E-commerce Strategy",
      subtitle: "Strategic advice for maximum online growth",
      intro: "A successful webshop starts with a strong strategy. We analyze your market, target audience and competition to develop an e-commerce strategy that really works.",
      services: [
        { title: "Market Analysis", desc: "In-depth research into your market and competition" },
        { title: "Target Audience Research", desc: "Understand who your customers are and what they want" },
        { title: "Conversion Optimization", desc: "Increase your revenue through smart optimizations" },
        { title: "Growth Strategy", desc: "Scalable plans for sustainable growth" },
        { title: "Pricing Strategy", desc: "Optimal prices for maximum profit" },
        { title: "Channel Strategy", desc: "Reach your customers through the right channels" },
      ],
      cta: "Schedule a strategy meeting",
    },
    de: {
      title: "E-Commerce Strategie",
      subtitle: "Strategische Beratung für maximales Online-Wachstum",
      intro: "Ein erfolgreicher Webshop beginnt mit einer starken Strategie. Wir analysieren Ihren Markt, Ihre Zielgruppe und Ihre Konkurrenz, um eine E-Commerce-Strategie zu entwickeln, die wirklich funktioniert.",
      services: [
        { title: "Marktanalyse", desc: "Tiefgehende Recherche zu Ihrem Markt und Ihrer Konkurrenz" },
        { title: "Zielgruppenforschung", desc: "Verstehen Sie, wer Ihre Kunden sind und was sie wollen" },
        { title: "Conversion-Optimierung", desc: "Steigern Sie Ihren Umsatz durch clevere Optimierungen" },
        { title: "Wachstumsstrategie", desc: "Skalierbare Pläne für nachhaltiges Wachstum" },
        { title: "Preisstrategie", desc: "Optimale Preise für maximalen Gewinn" },
        { title: "Kanalstrategie", desc: "Erreichen Sie Ihre Kunden über die richtigen Kanäle" },
      ],
      cta: "Strategiegespräch planen",
    },
    fr: {
      title: "Stratégie E-commerce",
      subtitle: "Conseil stratégique pour une croissance en ligne maximale",
      intro: "Une boutique en ligne réussie commence par une stratégie solide. Nous analysons votre marché, votre public cible et votre concurrence pour développer une stratégie e-commerce qui fonctionne vraiment.",
      services: [
        { title: "Analyse de Marché", desc: "Recherche approfondie de votre marché et de la concurrence" },
        { title: "Étude du Public Cible", desc: "Comprenez qui sont vos clients et ce qu'ils veulent" },
        { title: "Optimisation de la Conversion", desc: "Augmentez vos revenus grâce à des optimisations intelligentes" },
        { title: "Stratégie de Croissance", desc: "Plans évolutifs pour une croissance durable" },
        { title: "Stratégie de Prix", desc: "Prix optimaux pour un profit maximum" },
        { title: "Stratégie de Canal", desc: "Atteignez vos clients par les bons canaux" },
      ],
      cta: "Planifier une réunion stratégique",
    },
    es: {
      title: "Estrategia de E-commerce",
      subtitle: "Asesoramiento estratégico para el máximo crecimiento online",
      intro: "Una tienda online exitosa comienza con una estrategia sólida. Analizamos su mercado, público objetivo y competencia para desarrollar una estrategia de comercio electrónico que realmente funcione.",
      services: [
        { title: "Análisis de Mercado", desc: "Investigación profunda de su mercado y competencia" },
        { title: "Investigación de Público Objetivo", desc: "Entienda quiénes son sus clientes y qué quieren" },
        { title: "Optimización de Conversión", desc: "Aumente sus ingresos con optimizaciones inteligentes" },
        { title: "Estrategia de Crecimiento", desc: "Planes escalables para un crecimiento sostenible" },
        { title: "Estrategia de Precios", desc: "Precios óptimos para máximo beneficio" },
        { title: "Estrategia de Canal", desc: "Alcance a sus clientes a través de los canales correctos" },
      ],
      cta: "Programar reunión estratégica",
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
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
