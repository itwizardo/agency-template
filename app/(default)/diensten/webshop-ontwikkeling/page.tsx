'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function WebshopOntwikkeling() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Webshop Ontwikkeling",
      subtitle: "Professionele webshops die converteren en verkopen",
      intro: "Wij bouwen maatwerk webshops die niet alleen mooi zijn, maar ook daadwerkelijk verkopen. Met jarenlange ervaring in e-commerce ontwikkeling creëren wij webshops die uw klanten een uitstekende koopervaring bieden.",
      features: [
        { title: "Maatwerk Design", desc: "Uniek ontwerp dat perfect aansluit bij uw merk en doelgroep" },
        { title: "Mobiel Geoptimaliseerd", desc: "Responsive design dat perfect werkt op elk apparaat" },
        { title: "Snelle Laadtijden", desc: "Geoptimaliseerde performance voor betere conversies" },
        { title: "Veilige Betalingen", desc: "Integratie met iDEAL, creditcard en andere betaalmethoden" },
        { title: "Voorraadbeheer", desc: "Eenvoudig beheer van producten en voorraad" },
        { title: "SEO-Vriendelijk", desc: "Gebouwd met zoekmachine optimalisatie in gedachten" },
      ],
      cta: "Vraag een offerte aan",
    },
    en: {
      title: "Webshop Development",
      subtitle: "Professional webshops that convert and sell",
      intro: "We build custom webshops that are not only beautiful but actually sell. With years of experience in e-commerce development, we create webshops that offer your customers an excellent shopping experience.",
      features: [
        { title: "Custom Design", desc: "Unique design that perfectly matches your brand and target audience" },
        { title: "Mobile Optimized", desc: "Responsive design that works perfectly on any device" },
        { title: "Fast Loading", desc: "Optimized performance for better conversions" },
        { title: "Secure Payments", desc: "Integration with iDEAL, credit card and other payment methods" },
        { title: "Inventory Management", desc: "Easy management of products and inventory" },
        { title: "SEO-Friendly", desc: "Built with search engine optimization in mind" },
      ],
      cta: "Request a quote",
    },
    de: {
      title: "Webshop Entwicklung",
      subtitle: "Professionelle Webshops, die konvertieren und verkaufen",
      intro: "Wir bauen maßgeschneiderte Webshops, die nicht nur schön sind, sondern auch tatsächlich verkaufen. Mit jahrelanger Erfahrung in der E-Commerce-Entwicklung erstellen wir Webshops, die Ihren Kunden ein hervorragendes Einkaufserlebnis bieten.",
      features: [
        { title: "Maßgeschneidertes Design", desc: "Einzigartiges Design, das perfekt zu Ihrer Marke und Zielgruppe passt" },
        { title: "Mobil Optimiert", desc: "Responsives Design, das auf jedem Gerät perfekt funktioniert" },
        { title: "Schnelle Ladezeiten", desc: "Optimierte Leistung für bessere Conversions" },
        { title: "Sichere Zahlungen", desc: "Integration mit iDEAL, Kreditkarte und anderen Zahlungsmethoden" },
        { title: "Bestandsverwaltung", desc: "Einfache Verwaltung von Produkten und Beständen" },
        { title: "SEO-Freundlich", desc: "Mit Suchmaschinenoptimierung im Blick gebaut" },
      ],
      cta: "Angebot anfordern",
    },
    fr: {
      title: "Développement de Boutique en Ligne",
      subtitle: "Boutiques professionnelles qui convertissent et vendent",
      intro: "Nous créons des boutiques en ligne sur mesure qui sont non seulement belles mais qui vendent vraiment. Avec des années d'expérience en développement e-commerce, nous créons des boutiques offrant une excellente expérience d'achat.",
      features: [
        { title: "Design Sur Mesure", desc: "Design unique qui correspond parfaitement à votre marque et public cible" },
        { title: "Optimisé Mobile", desc: "Design responsive qui fonctionne parfaitement sur tout appareil" },
        { title: "Chargement Rapide", desc: "Performance optimisée pour de meilleures conversions" },
        { title: "Paiements Sécurisés", desc: "Intégration avec iDEAL, carte de crédit et autres méthodes de paiement" },
        { title: "Gestion des Stocks", desc: "Gestion facile des produits et des stocks" },
        { title: "SEO-Friendly", desc: "Construit avec l'optimisation pour les moteurs de recherche en tête" },
      ],
      cta: "Demander un devis",
    },
    es: {
      title: "Desarrollo de Tienda Online",
      subtitle: "Tiendas profesionales que convierten y venden",
      intro: "Construimos tiendas online personalizadas que no solo son hermosas sino que realmente venden. Con años de experiencia en desarrollo de comercio electrónico, creamos tiendas que ofrecen una excelente experiencia de compra.",
      features: [
        { title: "Diseño Personalizado", desc: "Diseño único que se adapta perfectamente a su marca y público objetivo" },
        { title: "Optimizado para Móviles", desc: "Diseño responsive que funciona perfectamente en cualquier dispositivo" },
        { title: "Carga Rápida", desc: "Rendimiento optimizado para mejores conversiones" },
        { title: "Pagos Seguros", desc: "Integración con iDEAL, tarjeta de crédito y otros métodos de pago" },
        { title: "Gestión de Inventario", desc: "Gestión fácil de productos e inventario" },
        { title: "SEO-Friendly", desc: "Construido con la optimización de motores de búsqueda en mente" },
      ],
      cta: "Solicitar presupuesto",
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
