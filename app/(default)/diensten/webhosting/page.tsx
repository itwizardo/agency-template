'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function Webhosting() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Webhosting",
      subtitle: "Betrouwbare hosting voor uw website",
      intro: "Snelle, veilige en betrouwbare webhosting is essentieel voor het succes van uw website. Onze hostingoplossingen bieden uitstekende uptime, snelle laadtijden en 24/7 ondersteuning zodat uw website altijd online is.",
      features: [
        { title: "99.9% Uptime Garantie", desc: "Uw website is altijd bereikbaar dankzij onze betrouwbare infrastructuur" },
        { title: "SSD Opslag", desc: "Razendsnelle SSD-schijven voor optimale website prestaties" },
        { title: "Gratis SSL Certificaat", desc: "Beveilig uw website met een gratis SSL-certificaat inbegrepen" },
        { title: "Dagelijkse Backups", desc: "Automatische dagelijkse backups voor gemoedsrust" },
        { title: "24/7 Monitoring", desc: "Continue monitoring van uw website en server" },
        { title: "Schaalbare Oplossingen", desc: "Eenvoudig opschalen naarmate uw website groeit" },
      ],
      cta: "Bekijk Hosting Pakketten",
    },
    en: {
      title: "Web Hosting",
      subtitle: "Reliable hosting for your website",
      intro: "Fast, secure, and reliable web hosting is essential for your website's success. Our hosting solutions offer excellent uptime, fast loading times, and 24/7 support so your website is always online.",
      features: [
        { title: "99.9% Uptime Guarantee", desc: "Your website is always accessible thanks to our reliable infrastructure" },
        { title: "SSD Storage", desc: "Lightning-fast SSD drives for optimal website performance" },
        { title: "Free SSL Certificate", desc: "Secure your website with a free SSL certificate included" },
        { title: "Daily Backups", desc: "Automatic daily backups for peace of mind" },
        { title: "24/7 Monitoring", desc: "Continuous monitoring of your website and server" },
        { title: "Scalable Solutions", desc: "Easily scale up as your website grows" },
      ],
      cta: "View Hosting Packages",
    },
    de: {
      title: "Webhosting",
      subtitle: "Zuverlässiges Hosting für Ihre Website",
      intro: "Schnelles, sicheres und zuverlässiges Webhosting ist entscheidend für den Erfolg Ihrer Website. Unsere Hosting-Lösungen bieten exzellente Verfügbarkeit, schnelle Ladezeiten und 24/7 Support.",
      features: [
        { title: "99,9% Verfügbarkeitsgarantie", desc: "Ihre Website ist dank unserer zuverlässigen Infrastruktur immer erreichbar" },
        { title: "SSD-Speicher", desc: "Blitzschnelle SSD-Laufwerke für optimale Website-Leistung" },
        { title: "Kostenloses SSL-Zertifikat", desc: "Sichern Sie Ihre Website mit einem kostenlosen SSL-Zertifikat ab" },
        { title: "Tägliche Backups", desc: "Automatische tägliche Backups für Ihre Sicherheit" },
        { title: "24/7 Überwachung", desc: "Kontinuierliche Überwachung Ihrer Website und Ihres Servers" },
        { title: "Skalierbare Lösungen", desc: "Einfach skalieren, wenn Ihre Website wächst" },
      ],
      cta: "Hosting-Pakete Ansehen",
    },
    fr: {
      title: "Hébergement Web",
      subtitle: "Hébergement fiable pour votre site web",
      intro: "Un hébergement web rapide, sécurisé et fiable est essentiel au succès de votre site. Nos solutions d'hébergement offrent une excellente disponibilité, des temps de chargement rapides et un support 24/7.",
      features: [
        { title: "Garantie de Disponibilité 99,9%", desc: "Votre site est toujours accessible grâce à notre infrastructure fiable" },
        { title: "Stockage SSD", desc: "Disques SSD ultra-rapides pour des performances optimales" },
        { title: "Certificat SSL Gratuit", desc: "Sécurisez votre site avec un certificat SSL gratuit inclus" },
        { title: "Sauvegardes Quotidiennes", desc: "Sauvegardes automatiques quotidiennes pour votre tranquillité" },
        { title: "Surveillance 24/7", desc: "Surveillance continue de votre site et serveur" },
        { title: "Solutions Évolutives", desc: "Montez en puissance facilement à mesure que votre site grandit" },
      ],
      cta: "Voir les Forfaits d'Hébergement",
    },
    es: {
      title: "Alojamiento Web",
      subtitle: "Alojamiento confiable para su sitio web",
      intro: "El alojamiento web rápido, seguro y confiable es esencial para el éxito de su sitio. Nuestras soluciones de hosting ofrecen excelente tiempo de actividad, tiempos de carga rápidos y soporte 24/7.",
      features: [
        { title: "Garantía de Disponibilidad 99.9%", desc: "Su sitio siempre está accesible gracias a nuestra infraestructura confiable" },
        { title: "Almacenamiento SSD", desc: "Discos SSD ultrarrápidos para un rendimiento óptimo del sitio" },
        { title: "Certificado SSL Gratis", desc: "Asegure su sitio con un certificado SSL gratuito incluido" },
        { title: "Copias de Seguridad Diarias", desc: "Copias de seguridad automáticas diarias para su tranquilidad" },
        { title: "Monitoreo 24/7", desc: "Monitoreo continuo de su sitio web y servidor" },
        { title: "Soluciones Escalables", desc: "Escale fácilmente a medida que su sitio crece" },
      ],
      cta: "Ver Paquetes de Hosting",
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
