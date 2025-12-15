'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function Webdesign() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Webdesign",
      subtitle: "Creatief webdesign dat converteert",
      intro: "Uw website is vaak het eerste contactpunt met potentiële klanten. Wij ontwerpen websites die niet alleen visueel indrukwekkend zijn, maar ook gebruiksvriendelijk en gericht op conversie. Elk design wordt op maat gemaakt voor uw merk.",
      features: [
        { title: "Maatwerk Ontwerp", desc: "Uniek design dat perfect aansluit bij uw merkidentiteit en doelgroep" },
        { title: "Responsive Design", desc: "Perfect weergave op elk apparaat, van smartphone tot desktop" },
        { title: "UI/UX Design", desc: "Intuïtieve gebruikerservaring die bezoekers omzet in klanten" },
        { title: "Moderne Technologie", desc: "Gebouwd met de nieuwste webtechnologieën voor optimale prestaties" },
        { title: "Brand Consistentie", desc: "Doorlopende visuele identiteit in lijn met uw huisstijl" },
        { title: "Snelle Laadtijden", desc: "Geoptimaliseerd design voor razendsnelle pagina's" },
      ],
      cta: "Start Uw Design Project",
    },
    en: {
      title: "Web Design",
      subtitle: "Creative web design that converts",
      intro: "Your website is often the first point of contact with potential customers. We design websites that are not only visually impressive but also user-friendly and focused on conversion. Each design is custom-made for your brand.",
      features: [
        { title: "Custom Design", desc: "Unique design that perfectly matches your brand identity and target audience" },
        { title: "Responsive Design", desc: "Perfect display on any device, from smartphone to desktop" },
        { title: "UI/UX Design", desc: "Intuitive user experience that converts visitors into customers" },
        { title: "Modern Technology", desc: "Built with the latest web technologies for optimal performance" },
        { title: "Brand Consistency", desc: "Continuous visual identity in line with your corporate style" },
        { title: "Fast Loading Times", desc: "Optimized design for lightning-fast pages" },
      ],
      cta: "Start Your Design Project",
    },
    de: {
      title: "Webdesign",
      subtitle: "Kreatives Webdesign, das konvertiert",
      intro: "Ihre Website ist oft der erste Kontaktpunkt mit potenziellen Kunden. Wir gestalten Websites, die nicht nur visuell beeindruckend, sondern auch benutzerfreundlich und auf Konversion ausgerichtet sind. Jedes Design wird maßgeschneidert für Ihre Marke erstellt.",
      features: [
        { title: "Maßgeschneidertes Design", desc: "Einzigartiges Design, das perfekt zu Ihrer Markenidentität passt" },
        { title: "Responsives Design", desc: "Perfekte Darstellung auf jedem Gerät, vom Smartphone bis zum Desktop" },
        { title: "UI/UX Design", desc: "Intuitive Benutzererfahrung, die Besucher in Kunden verwandelt" },
        { title: "Moderne Technologie", desc: "Gebaut mit den neuesten Webtechnologien für optimale Leistung" },
        { title: "Markenkonsistenz", desc: "Durchgehende visuelle Identität im Einklang mit Ihrem Corporate Design" },
        { title: "Schnelle Ladezeiten", desc: "Optimiertes Design für blitzschnelle Seiten" },
      ],
      cta: "Starten Sie Ihr Design-Projekt",
    },
    fr: {
      title: "Conception Web",
      subtitle: "Design web créatif qui convertit",
      intro: "Votre site web est souvent le premier point de contact avec des clients potentiels. Nous concevons des sites web qui sont non seulement visuellement impressionnants mais aussi conviviaux et axés sur la conversion. Chaque design est fait sur mesure pour votre marque.",
      features: [
        { title: "Design Sur Mesure", desc: "Design unique qui correspond parfaitement à votre identité de marque" },
        { title: "Design Responsive", desc: "Affichage parfait sur tout appareil, du smartphone au desktop" },
        { title: "Design UI/UX", desc: "Expérience utilisateur intuitive qui convertit les visiteurs en clients" },
        { title: "Technologie Moderne", desc: "Construit avec les dernières technologies web pour des performances optimales" },
        { title: "Cohérence de Marque", desc: "Identité visuelle continue en accord avec votre style d'entreprise" },
        { title: "Temps de Chargement Rapides", desc: "Design optimisé pour des pages ultra-rapides" },
      ],
      cta: "Démarrez Votre Projet Design",
    },
    es: {
      title: "Diseño Web",
      subtitle: "Diseño web creativo que convierte",
      intro: "Su sitio web es a menudo el primer punto de contacto con clientes potenciales. Diseñamos sitios web que no solo son visualmente impresionantes sino también fáciles de usar y enfocados en la conversión. Cada diseño se hace a medida para su marca.",
      features: [
        { title: "Diseño Personalizado", desc: "Diseño único que se adapta perfectamente a su identidad de marca" },
        { title: "Diseño Responsive", desc: "Visualización perfecta en cualquier dispositivo, desde smartphone hasta desktop" },
        { title: "Diseño UI/UX", desc: "Experiencia de usuario intuitiva que convierte visitantes en clientes" },
        { title: "Tecnología Moderna", desc: "Construido con las últimas tecnologías web para un rendimiento óptimo" },
        { title: "Consistencia de Marca", desc: "Identidad visual continua en línea con su estilo corporativo" },
        { title: "Tiempos de Carga Rápidos", desc: "Diseño optimizado para páginas ultrarrápidas" },
      ],
      cta: "Inicie Su Proyecto de Diseño",
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
