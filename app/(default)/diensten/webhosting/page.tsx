'use client';

import { useState } from 'react';
import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function Webhosting() {
  const { locale } = useLanguage();
  const [isYearly, setIsYearly] = useState(false);

  const content = {
    nl: {
      title: "Webhosting",
      subtitle: "Betrouwbare hosting voor uw website",
      intro: "Snelle, veilige en betrouwbare webhosting is essentieel voor het succes van uw website. Onze hostingoplossingen bieden uitstekende uptime, snelle laadtijden en 24/7 ondersteuning zodat uw website altijd online is.",
      pricingTitle: "Hosting Pakketten",
      pricingSubtitle: "Kies het pakket dat bij u past",
      monthly: "Maandelijks",
      yearly: "Jaarlijks",
      save: "Bespaar 17%",
      perMonth: "/maand",
      perYear: "/jaar",
      popular: "Populair",
      features: [
        { title: "99.9% Uptime Garantie", desc: "Uw website is altijd bereikbaar dankzij onze betrouwbare infrastructuur" },
        { title: "SSD Opslag", desc: "Razendsnelle SSD-schijven voor optimale website prestaties" },
        { title: "Gratis SSL Certificaat", desc: "Beveilig uw website met een gratis SSL-certificaat inbegrepen" },
        { title: "Dagelijkse Backups", desc: "Automatische dagelijkse backups voor gemoedsrust" },
        { title: "24/7 Monitoring", desc: "Continue monitoring van uw website en server" },
        { title: "Schaalbare Oplossingen", desc: "Eenvoudig opschalen naarmate uw website groeit" },
      ],
      packages: [
        { name: "Starter", priceMonthly: "4,99", priceYearly: "49,90", originalYearly: "59,88", storage: "10 GB SSD", websites: "1 Website", email: "5 E-mail accounts", bandwidth: "Onbeperkt verkeer" },
        { name: "Business", priceMonthly: "9,99", priceYearly: "99,90", originalYearly: "119,88", storage: "50 GB SSD", websites: "5 Websites", email: "25 E-mail accounts", bandwidth: "Onbeperkt verkeer", popular: true },
        { name: "Premium", priceMonthly: "19,99", priceYearly: "199,90", originalYearly: "239,88", storage: "100 GB SSD", websites: "Onbeperkt", email: "Onbeperkt e-mail", bandwidth: "Onbeperkt verkeer" },
      ],
      cta: "Pakket Kiezen",
    },
    en: {
      title: "Web Hosting",
      subtitle: "Reliable hosting for your website",
      intro: "Fast, secure, and reliable web hosting is essential for your website's success. Our hosting solutions offer excellent uptime, fast loading times, and 24/7 support so your website is always online.",
      pricingTitle: "Hosting Packages",
      pricingSubtitle: "Choose the package that suits you",
      monthly: "Monthly",
      yearly: "Yearly",
      save: "Save 17%",
      perMonth: "/month",
      perYear: "/year",
      popular: "Popular",
      features: [
        { title: "99.9% Uptime Guarantee", desc: "Your website is always accessible thanks to our reliable infrastructure" },
        { title: "SSD Storage", desc: "Lightning-fast SSD drives for optimal website performance" },
        { title: "Free SSL Certificate", desc: "Secure your website with a free SSL certificate included" },
        { title: "Daily Backups", desc: "Automatic daily backups for peace of mind" },
        { title: "24/7 Monitoring", desc: "Continuous monitoring of your website and server" },
        { title: "Scalable Solutions", desc: "Easily scale up as your website grows" },
      ],
      packages: [
        { name: "Starter", priceMonthly: "4,99", priceYearly: "49,90", originalYearly: "59,88", storage: "10 GB SSD", websites: "1 Website", email: "5 Email accounts", bandwidth: "Unlimited traffic" },
        { name: "Business", priceMonthly: "9,99", priceYearly: "99,90", originalYearly: "119,88", storage: "50 GB SSD", websites: "5 Websites", email: "25 Email accounts", bandwidth: "Unlimited traffic", popular: true },
        { name: "Premium", priceMonthly: "19,99", priceYearly: "199,90", originalYearly: "239,88", storage: "100 GB SSD", websites: "Unlimited", email: "Unlimited email", bandwidth: "Unlimited traffic" },
      ],
      cta: "Choose Package",
    },
    de: {
      title: "Webhosting",
      subtitle: "Zuverlässiges Hosting für Ihre Website",
      intro: "Schnelles, sicheres und zuverlässiges Webhosting ist entscheidend für den Erfolg Ihrer Website. Unsere Hosting-Lösungen bieten exzellente Verfügbarkeit, schnelle Ladezeiten und 24/7 Support.",
      pricingTitle: "Hosting-Pakete",
      pricingSubtitle: "Wählen Sie das passende Paket",
      monthly: "Monatlich",
      yearly: "Jährlich",
      save: "Sparen Sie 17%",
      perMonth: "/Monat",
      perYear: "/Jahr",
      popular: "Beliebt",
      features: [
        { title: "99,9% Verfügbarkeitsgarantie", desc: "Ihre Website ist dank unserer zuverlässigen Infrastruktur immer erreichbar" },
        { title: "SSD-Speicher", desc: "Blitzschnelle SSD-Laufwerke für optimale Website-Leistung" },
        { title: "Kostenloses SSL-Zertifikat", desc: "Sichern Sie Ihre Website mit einem kostenlosen SSL-Zertifikat ab" },
        { title: "Tägliche Backups", desc: "Automatische tägliche Backups für Ihre Sicherheit" },
        { title: "24/7 Überwachung", desc: "Kontinuierliche Überwachung Ihrer Website und Ihres Servers" },
        { title: "Skalierbare Lösungen", desc: "Einfach skalieren, wenn Ihre Website wächst" },
      ],
      packages: [
        { name: "Starter", priceMonthly: "4,99", priceYearly: "49,90", originalYearly: "59,88", storage: "10 GB SSD", websites: "1 Website", email: "5 E-Mail-Konten", bandwidth: "Unbegrenzter Traffic" },
        { name: "Business", priceMonthly: "9,99", priceYearly: "99,90", originalYearly: "119,88", storage: "50 GB SSD", websites: "5 Websites", email: "25 E-Mail-Konten", bandwidth: "Unbegrenzter Traffic", popular: true },
        { name: "Premium", priceMonthly: "19,99", priceYearly: "199,90", originalYearly: "239,88", storage: "100 GB SSD", websites: "Unbegrenzt", email: "Unbegrenzte E-Mail", bandwidth: "Unbegrenzter Traffic" },
      ],
      cta: "Paket Wählen",
    },
    fr: {
      title: "Hébergement Web",
      subtitle: "Hébergement fiable pour votre site web",
      intro: "Un hébergement web rapide, sécurisé et fiable est essentiel au succès de votre site. Nos solutions d'hébergement offrent une excellente disponibilité, des temps de chargement rapides et un support 24/7.",
      pricingTitle: "Forfaits d'Hébergement",
      pricingSubtitle: "Choisissez le forfait qui vous convient",
      monthly: "Mensuel",
      yearly: "Annuel",
      save: "Économisez 17%",
      perMonth: "/mois",
      perYear: "/an",
      popular: "Populaire",
      features: [
        { title: "Garantie de Disponibilité 99,9%", desc: "Votre site est toujours accessible grâce à notre infrastructure fiable" },
        { title: "Stockage SSD", desc: "Disques SSD ultra-rapides pour des performances optimales" },
        { title: "Certificat SSL Gratuit", desc: "Sécurisez votre site avec un certificat SSL gratuit inclus" },
        { title: "Sauvegardes Quotidiennes", desc: "Sauvegardes automatiques quotidiennes pour votre tranquillité" },
        { title: "Surveillance 24/7", desc: "Surveillance continue de votre site et serveur" },
        { title: "Solutions Évolutives", desc: "Montez en puissance facilement à mesure que votre site grandit" },
      ],
      packages: [
        { name: "Starter", priceMonthly: "4,99", priceYearly: "49,90", originalYearly: "59,88", storage: "10 Go SSD", websites: "1 Site web", email: "5 Comptes e-mail", bandwidth: "Trafic illimité" },
        { name: "Business", priceMonthly: "9,99", priceYearly: "99,90", originalYearly: "119,88", storage: "50 Go SSD", websites: "5 Sites web", email: "25 Comptes e-mail", bandwidth: "Trafic illimité", popular: true },
        { name: "Premium", priceMonthly: "19,99", priceYearly: "199,90", originalYearly: "239,88", storage: "100 Go SSD", websites: "Illimité", email: "E-mail illimité", bandwidth: "Trafic illimité" },
      ],
      cta: "Choisir le Forfait",
    },
    es: {
      title: "Alojamiento Web",
      subtitle: "Alojamiento confiable para su sitio web",
      intro: "El alojamiento web rápido, seguro y confiable es esencial para el éxito de su sitio. Nuestras soluciones de hosting ofrecen excelente tiempo de actividad, tiempos de carga rápidos y soporte 24/7.",
      pricingTitle: "Paquetes de Hosting",
      pricingSubtitle: "Elija el paquete que le convenga",
      monthly: "Mensual",
      yearly: "Anual",
      save: "Ahorre 17%",
      perMonth: "/mes",
      perYear: "/año",
      popular: "Popular",
      features: [
        { title: "Garantía de Disponibilidad 99.9%", desc: "Su sitio siempre está accesible gracias a nuestra infraestructura confiable" },
        { title: "Almacenamiento SSD", desc: "Discos SSD ultrarrápidos para un rendimiento óptimo del sitio" },
        { title: "Certificado SSL Gratis", desc: "Asegure su sitio con un certificado SSL gratuito incluido" },
        { title: "Copias de Seguridad Diarias", desc: "Copias de seguridad automáticas diarias para su tranquilidad" },
        { title: "Monitoreo 24/7", desc: "Monitoreo continuo de su sitio web y servidor" },
        { title: "Soluciones Escalables", desc: "Escale fácilmente a medida que su sitio crece" },
      ],
      packages: [
        { name: "Starter", priceMonthly: "4,99", priceYearly: "49,90", originalYearly: "59,88", storage: "10 GB SSD", websites: "1 Sitio web", email: "5 Cuentas de correo", bandwidth: "Tráfico ilimitado" },
        { name: "Business", priceMonthly: "9,99", priceYearly: "99,90", originalYearly: "119,88", storage: "50 GB SSD", websites: "5 Sitios web", email: "25 Cuentas de correo", bandwidth: "Tráfico ilimitado", popular: true },
        { name: "Premium", priceMonthly: "19,99", priceYearly: "199,90", originalYearly: "239,88", storage: "100 GB SSD", websites: "Ilimitado", email: "Correo ilimitado", bandwidth: "Tráfico ilimitado" },
      ],
      cta: "Elegir Paquete",
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

          {/* Pricing Packages */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-2">{t.pricingTitle}</h2>
            <p className="text-gray-400 text-center mb-4">{t.pricingSubtitle}</p>

            {/* Billing Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-gray-800/70 rounded-full p-1">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    !isYearly
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t.monthly}
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    isYearly
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {t.yearly}
                  <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {t.save}
                  </span>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {t.packages.map((pkg, index) => (
                <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border ${pkg.popular ? 'border-blue-500' : 'border-gray-700/50'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {t.popular}
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <div className="text-white">
                      {isYearly && (
                        <span className="text-gray-500 line-through text-lg mr-2">€{pkg.originalYearly}</span>
                      )}
                      <span className="text-4xl font-bold">€{isYearly ? pkg.priceYearly : pkg.priceMonthly}</span>
                      <span className="text-gray-400">{isYearly ? t.perYear : t.perMonth}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pkg.storage}
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pkg.websites}
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pkg.email}
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {pkg.bandwidth}
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      SSL + Backups
                    </li>
                  </ul>
                  <a
                    href="/contact"
                    className={`block text-center py-3 rounded-lg font-medium transition-colors ${pkg.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                  >
                    {t.cta}
                  </a>
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
        </div>
      </section>
    </>
  );
}
