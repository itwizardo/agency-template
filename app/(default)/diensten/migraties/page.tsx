'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function Migraties() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Migraties",
      subtitle: "Veilig overstappen naar een beter platform",
      intro: "Wilt u overstappen naar een nieuw e-commerce platform? Wij zorgen voor een soepele migratie waarbij uw data, SEO-rankings en klanten behouden blijven.",
      services: [
        { title: "Platform Migratie", desc: "Overstappen van elk platform naar WooCommerce, Shopify of andere" },
        { title: "Data Migratie", desc: "Veilige overdracht van producten, klanten en bestellingen" },
        { title: "SEO Behoud", desc: "Behoud van uw zoekmachine rankings" },
        { title: "Design Overdracht", desc: "Uw huidige design overzetten of verbeteren" },
        { title: "Integratie Migratie", desc: "Alle koppelingen opnieuw configureren" },
        { title: "Testing & Validatie", desc: "Uitgebreide tests voor een foutloze lancering" },
      ],
      cta: "Plan een migratiegesprek",
    },
    en: {
      title: "Migrations",
      subtitle: "Safely switch to a better platform",
      intro: "Want to switch to a new e-commerce platform? We ensure a smooth migration where your data, SEO rankings and customers are preserved.",
      services: [
        { title: "Platform Migration", desc: "Switch from any platform to WooCommerce, Shopify or other" },
        { title: "Data Migration", desc: "Safe transfer of products, customers and orders" },
        { title: "SEO Preservation", desc: "Maintain your search engine rankings" },
        { title: "Design Transfer", desc: "Transfer or improve your current design" },
        { title: "Integration Migration", desc: "Reconfigure all integrations" },
        { title: "Testing & Validation", desc: "Extensive testing for a flawless launch" },
      ],
      cta: "Schedule a migration meeting",
    },
    de: {
      title: "Migrationen",
      subtitle: "Sicher auf eine bessere Plattform wechseln",
      intro: "Möchten Sie auf eine neue E-Commerce-Plattform wechseln? Wir sorgen für eine reibungslose Migration, bei der Ihre Daten, SEO-Rankings und Kunden erhalten bleiben.",
      services: [
        { title: "Plattform-Migration", desc: "Wechsel von jeder Plattform zu WooCommerce, Shopify oder anderen" },
        { title: "Daten-Migration", desc: "Sichere Übertragung von Produkten, Kunden und Bestellungen" },
        { title: "SEO-Erhaltung", desc: "Behalten Sie Ihre Suchmaschinen-Rankings" },
        { title: "Design-Übertragung", desc: "Ihr aktuelles Design übertragen oder verbessern" },
        { title: "Integrations-Migration", desc: "Alle Integrationen neu konfigurieren" },
        { title: "Tests & Validierung", desc: "Umfangreiche Tests für einen fehlerfreien Start" },
      ],
      cta: "Migrationsgespräch planen",
    },
    fr: {
      title: "Migrations",
      subtitle: "Passez en toute sécurité à une meilleure plateforme",
      intro: "Vous souhaitez passer à une nouvelle plateforme e-commerce ? Nous assurons une migration fluide où vos données, classements SEO et clients sont préservés.",
      services: [
        { title: "Migration de plateforme", desc: "Passez de n'importe quelle plateforme à WooCommerce, Shopify ou autre" },
        { title: "Migration de données", desc: "Transfert sécurisé des produits, clients et commandes" },
        { title: "Préservation SEO", desc: "Maintenez vos classements dans les moteurs de recherche" },
        { title: "Transfert de design", desc: "Transférez ou améliorez votre design actuel" },
        { title: "Migration des intégrations", desc: "Reconfigurez toutes les intégrations" },
        { title: "Tests & Validation", desc: "Tests approfondis pour un lancement sans faille" },
      ],
      cta: "Planifier une réunion de migration",
    },
    es: {
      title: "Migraciones",
      subtitle: "Cambie de forma segura a una mejor plataforma",
      intro: "¿Quiere cambiar a una nueva plataforma de comercio electrónico? Garantizamos una migración fluida donde sus datos, rankings SEO y clientes se preservan.",
      services: [
        { title: "Migración de plataforma", desc: "Cambie de cualquier plataforma a WooCommerce, Shopify u otra" },
        { title: "Migración de datos", desc: "Transferencia segura de productos, clientes y pedidos" },
        { title: "Preservación SEO", desc: "Mantenga sus rankings en motores de búsqueda" },
        { title: "Transferencia de diseño", desc: "Transfiera o mejore su diseño actual" },
        { title: "Migración de integraciones", desc: "Reconfigure todas las integraciones" },
        { title: "Pruebas y validación", desc: "Pruebas extensas para un lanzamiento sin errores" },
      ],
      cta: "Programar reunión de migración",
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
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
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
