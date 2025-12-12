'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function OnderhoudSupport() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Onderhoud & Support",
      subtitle: "Zorgeloos ondernemen met onze ondersteuning",
      intro: "Uw webshop verdient continue aandacht. Met onze onderhoud- en supportpakketten zorgen wij ervoor dat uw webshop altijd optimaal presteert en veilig blijft.",
      services: [
        { title: "24/7 Monitoring", desc: "Continue bewaking van uw webshop" },
        { title: "Security Updates", desc: "Regelmatige beveiligingsupdates" },
        { title: "Backup Service", desc: "Dagelijkse backups van uw data" },
        { title: "Performance Optimalisatie", desc: "Snelheid en prestaties verbeteren" },
        { title: "Helpdesk Support", desc: "Snelle hulp bij vragen en problemen" },
        { title: "Maandelijkse Rapportages", desc: "Inzicht in de prestaties van uw webshop" },
      ],
      cta: "Bekijk onze pakketten",
    },
    en: {
      title: "Maintenance & Support",
      subtitle: "Carefree business with our support",
      intro: "Your webshop deserves continuous attention. With our maintenance and support packages, we ensure your webshop always performs optimally and stays secure.",
      services: [
        { title: "24/7 Monitoring", desc: "Continuous monitoring of your webshop" },
        { title: "Security Updates", desc: "Regular security updates" },
        { title: "Backup Service", desc: "Daily backups of your data" },
        { title: "Performance Optimization", desc: "Improve speed and performance" },
        { title: "Helpdesk Support", desc: "Quick help with questions and problems" },
        { title: "Monthly Reports", desc: "Insight into your webshop performance" },
      ],
      cta: "View our packages",
    },
    de: {
      title: "Wartung & Support",
      subtitle: "Sorgloses Geschäft mit unserem Support",
      intro: "Ihr Webshop verdient kontinuierliche Aufmerksamkeit. Mit unseren Wartungs- und Supportpaketen sorgen wir dafür, dass Ihr Webshop immer optimal funktioniert und sicher bleibt.",
      services: [
        { title: "24/7 Überwachung", desc: "Kontinuierliche Überwachung Ihres Webshops" },
        { title: "Sicherheitsupdates", desc: "Regelmäßige Sicherheitsupdates" },
        { title: "Backup-Service", desc: "Tägliche Backups Ihrer Daten" },
        { title: "Performance-Optimierung", desc: "Geschwindigkeit und Leistung verbessern" },
        { title: "Helpdesk-Support", desc: "Schnelle Hilfe bei Fragen und Problemen" },
        { title: "Monatliche Berichte", desc: "Einblick in die Leistung Ihres Webshops" },
      ],
      cta: "Unsere Pakete ansehen",
    },
    fr: {
      title: "Maintenance & Support",
      subtitle: "Business sans souci avec notre support",
      intro: "Votre boutique en ligne mérite une attention continue. Avec nos forfaits de maintenance et de support, nous veillons à ce que votre boutique fonctionne toujours de manière optimale et reste sécurisée.",
      services: [
        { title: "Surveillance 24/7", desc: "Surveillance continue de votre boutique" },
        { title: "Mises à jour de sécurité", desc: "Mises à jour de sécurité régulières" },
        { title: "Service de sauvegarde", desc: "Sauvegardes quotidiennes de vos données" },
        { title: "Optimisation des performances", desc: "Améliorer la vitesse et les performances" },
        { title: "Support Helpdesk", desc: "Aide rapide pour les questions et problèmes" },
        { title: "Rapports mensuels", desc: "Aperçu des performances de votre boutique" },
      ],
      cta: "Voir nos forfaits",
    },
    es: {
      title: "Mantenimiento y Soporte",
      subtitle: "Negocio sin preocupaciones con nuestro soporte",
      intro: "Su tienda online merece atención continua. Con nuestros paquetes de mantenimiento y soporte, nos aseguramos de que su tienda siempre funcione de manera óptima y permanezca segura.",
      services: [
        { title: "Monitoreo 24/7", desc: "Monitoreo continuo de su tienda" },
        { title: "Actualizaciones de seguridad", desc: "Actualizaciones de seguridad regulares" },
        { title: "Servicio de backup", desc: "Copias de seguridad diarias de sus datos" },
        { title: "Optimización de rendimiento", desc: "Mejorar velocidad y rendimiento" },
        { title: "Soporte Helpdesk", desc: "Ayuda rápida con preguntas y problemas" },
        { title: "Informes mensuales", desc: "Información sobre el rendimiento de su tienda" },
      ],
      cta: "Ver nuestros paquetes",
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
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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
