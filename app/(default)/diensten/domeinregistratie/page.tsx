'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";
import DomainSearch from "@/components/domain-search";

export default function Domeinregistratie() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Domeinregistratie",
      subtitle: "Uw perfecte domeinnaam veiligstellen",
      intro: "Een sterke domeinnaam is de basis van uw online identiteit. Wij helpen u bij het kiezen en registreren van de perfecte domeinnaam die past bij uw merk en gemakkelijk te onthouden is voor uw klanten.",
      pricingTitle: "Domein Prijzen",
      pricingSubtitle: "Transparante prijzen, geen verborgen kosten",
      perYear: "/jaar",
      features: [
        { title: "Breed Aanbod TLD's", desc: "Registreer .nl, .com, .eu, .be en vele andere extensies voor uw domein" },
        { title: "Directe Activatie", desc: "Uw domein is binnen enkele minuten actief en klaar voor gebruik" },
        { title: "DNS Beheer", desc: "Volledig controle over uw DNS-instellingen via ons gebruiksvriendelijke panel" },
        { title: "Domein Transfer", desc: "Eenvoudig uw bestaande domeinen naar ons verhuizen zonder downtime" },
        { title: "WHOIS Privacy", desc: "Bescherm uw persoonlijke gegevens met onze privacy-bescherming" },
        { title: "Auto-Verlenging", desc: "Nooit meer een verlopen domein dankzij automatische verlenging" },
      ],
      cta: "Domein Registreren",
    },
    en: {
      title: "Domain Registration",
      subtitle: "Secure your perfect domain name",
      intro: "A strong domain name is the foundation of your online identity. We help you choose and register the perfect domain name that fits your brand and is easy for your customers to remember.",
      pricingTitle: "Domain Pricing",
      pricingSubtitle: "Transparent pricing, no hidden costs",
      perYear: "/year",
      features: [
        { title: "Wide Range of TLDs", desc: "Register .nl, .com, .eu, .be and many other extensions for your domain" },
        { title: "Instant Activation", desc: "Your domain is active and ready to use within minutes" },
        { title: "DNS Management", desc: "Full control over your DNS settings through our user-friendly panel" },
        { title: "Domain Transfer", desc: "Easily transfer your existing domains to us without downtime" },
        { title: "WHOIS Privacy", desc: "Protect your personal information with our privacy protection" },
        { title: "Auto-Renewal", desc: "Never have an expired domain again thanks to automatic renewal" },
      ],
      cta: "Register Domain",
    },
    de: {
      title: "Domainregistrierung",
      subtitle: "Sichern Sie sich Ihren perfekten Domainnamen",
      intro: "Ein starker Domainname ist die Grundlage Ihrer Online-Identität. Wir helfen Ihnen bei der Auswahl und Registrierung des perfekten Domainnamens, der zu Ihrer Marke passt und für Ihre Kunden leicht zu merken ist.",
      pricingTitle: "Domain Preise",
      pricingSubtitle: "Transparente Preise, keine versteckten Kosten",
      perYear: "/Jahr",
      features: [
        { title: "Breites Angebot an TLDs", desc: "Registrieren Sie .nl, .com, .eu, .be und viele andere Erweiterungen" },
        { title: "Sofortige Aktivierung", desc: "Ihre Domain ist innerhalb weniger Minuten aktiv und einsatzbereit" },
        { title: "DNS-Verwaltung", desc: "Volle Kontrolle über Ihre DNS-Einstellungen über unser benutzerfreundliches Panel" },
        { title: "Domain-Transfer", desc: "Übertragen Sie Ihre bestehenden Domains einfach zu uns ohne Ausfallzeit" },
        { title: "WHOIS-Datenschutz", desc: "Schützen Sie Ihre persönlichen Daten mit unserem Datenschutz" },
        { title: "Automatische Verlängerung", desc: "Nie wieder eine abgelaufene Domain dank automatischer Verlängerung" },
      ],
      cta: "Domain Registrieren",
    },
    fr: {
      title: "Enregistrement de Domaine",
      subtitle: "Sécurisez votre nom de domaine parfait",
      intro: "Un nom de domaine fort est la base de votre identité en ligne. Nous vous aidons à choisir et enregistrer le nom de domaine parfait qui correspond à votre marque et est facile à retenir pour vos clients.",
      pricingTitle: "Prix des Domaines",
      pricingSubtitle: "Prix transparents, pas de frais cachés",
      perYear: "/an",
      features: [
        { title: "Large Gamme de TLDs", desc: "Enregistrez .nl, .com, .eu, .be et de nombreuses autres extensions" },
        { title: "Activation Instantanée", desc: "Votre domaine est actif et prêt à l'emploi en quelques minutes" },
        { title: "Gestion DNS", desc: "Contrôle total sur vos paramètres DNS via notre panneau convivial" },
        { title: "Transfert de Domaine", desc: "Transférez facilement vos domaines existants chez nous sans interruption" },
        { title: "Confidentialité WHOIS", desc: "Protégez vos informations personnelles avec notre protection de la vie privée" },
        { title: "Renouvellement Auto", desc: "Plus jamais de domaine expiré grâce au renouvellement automatique" },
      ],
      cta: "Enregistrer un Domaine",
    },
    es: {
      title: "Registro de Dominio",
      subtitle: "Asegure su nombre de dominio perfecto",
      intro: "Un nombre de dominio fuerte es la base de su identidad en línea. Le ayudamos a elegir y registrar el nombre de dominio perfecto que se ajuste a su marca y sea fácil de recordar para sus clientes.",
      pricingTitle: "Precios de Dominios",
      pricingSubtitle: "Precios transparentes, sin costos ocultos",
      perYear: "/año",
      features: [
        { title: "Amplia Gama de TLDs", desc: "Registre .nl, .com, .eu, .be y muchas otras extensiones" },
        { title: "Activación Instantánea", desc: "Su dominio está activo y listo para usar en minutos" },
        { title: "Gestión DNS", desc: "Control total sobre su configuración DNS a través de nuestro panel fácil de usar" },
        { title: "Transferencia de Dominio", desc: "Transfiera fácilmente sus dominios existentes a nosotros sin tiempo de inactividad" },
        { title: "Privacidad WHOIS", desc: "Proteja su información personal con nuestra protección de privacidad" },
        { title: "Renovación Automática", desc: "Nunca más un dominio expirado gracias a la renovación automática" },
      ],
      cta: "Registrar Dominio",
    },
  };

  const pricing = [
    { tld: ".nl", price: "12,41" },
    { tld: ".com", price: "14,99" },
    { tld: ".eu", price: "11,99" },
    { tld: ".be", price: "12,99" },
    { tld: ".de", price: "12,99" },
    { tld: ".net", price: "16,99" },
  ];

  const t = content[locale];

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">{t.intro}</p>
          </div>

          {/* Domain Search */}
          <DomainSearch />

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-2">{t.pricingTitle}</h2>
            <p className="text-gray-400 text-center mb-8">{t.pricingSubtitle}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {pricing.map((item, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center hover:border-blue-500/50 transition-colors">
                  <div className="text-2xl font-bold text-blue-400 mb-1">{item.tld}</div>
                  <div className="text-white">
                    <span className="text-xl font-semibold">€{item.price}</span>
                    <span className="text-gray-400 text-sm">{t.perYear}</span>
                  </div>
                </div>
              ))}
            </div>
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
              href="https://billing.gwcwebdesign.com/cart.php?a=add&domain=register"
              target="_blank"
              rel="noopener noreferrer"
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
