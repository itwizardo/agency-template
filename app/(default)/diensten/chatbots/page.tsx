'use client';

import { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function Chatbots() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Chatbot Installatie",
      subtitle: "AI-chatbots die uw klantenservice automatiseren",
      intro: "Wij installeren en configureren slimme chatbots die 24/7 uw klanten helpen. Van eenvoudige FAQ-bots tot geavanceerde AI-assistenten die leads genereren en verkoop stimuleren. Bespaar tijd, verhoog klanttevredenheid en mis nooit meer een potentiële klant.",
      features: [
        {
          title: "24/7 Beschikbaarheid",
          desc: "Uw chatbot staat altijd klaar om klanten te helpen, ook buiten kantooruren en in het weekend.",
          icon: "clock"
        },
        {
          title: "Lead Generatie",
          desc: "Automatisch leads verzamelen en kwalificeren. Uw chatbot vraagt de juiste informatie en stuurt warme leads door.",
          icon: "users"
        },
        {
          title: "Klantenservice Automatisering",
          desc: "Veelgestelde vragen worden direct beantwoord zonder wachttijd. Complexe vragen worden doorgestuurd naar uw team.",
          icon: "chat"
        },
        {
          title: "CRM & Integraties",
          desc: "Koppeling met uw CRM, email, WhatsApp en andere systemen voor een naadloze workflow.",
          icon: "link"
        },
        {
          title: "Meertalige Ondersteuning",
          desc: "Chatbots die meerdere talen ondersteunen om al uw klanten te bedienen, waar ze ook vandaan komen.",
          icon: "globe"
        },
        {
          title: "Analytics & Inzichten",
          desc: "Begrijp wat uw klanten vragen met uitgebreide statistieken en rapportages over chatbot interacties.",
          icon: "chart"
        },
      ],
      platforms: {
        title: "Platformen waarmee we werken",
        items: ["Botpress", "Tidio", "Intercom", "Drift", "Zendesk", "Custom AI Solutions"]
      },
      cta: "Vraag een gratis demo aan",
    },
    en: {
      title: "Chatbot Installation",
      subtitle: "AI chatbots that automate your customer service",
      intro: "We install and configure smart chatbots that help your customers 24/7. From simple FAQ bots to advanced AI assistants that generate leads and boost sales. Save time, increase customer satisfaction and never miss a potential customer again.",
      features: [
        {
          title: "24/7 Availability",
          desc: "Your chatbot is always ready to help customers, even outside office hours and on weekends.",
          icon: "clock"
        },
        {
          title: "Lead Generation",
          desc: "Automatically collect and qualify leads. Your chatbot asks the right questions and forwards warm leads.",
          icon: "users"
        },
        {
          title: "Customer Service Automation",
          desc: "Frequently asked questions are answered immediately without waiting time. Complex questions are forwarded to your team.",
          icon: "chat"
        },
        {
          title: "CRM & Integrations",
          desc: "Connection with your CRM, email, WhatsApp and other systems for a seamless workflow.",
          icon: "link"
        },
        {
          title: "Multilingual Support",
          desc: "Chatbots that support multiple languages to serve all your customers, wherever they come from.",
          icon: "globe"
        },
        {
          title: "Analytics & Insights",
          desc: "Understand what your customers are asking with comprehensive statistics and reports on chatbot interactions.",
          icon: "chart"
        },
      ],
      platforms: {
        title: "Platforms we work with",
        items: ["Botpress", "Tidio", "Intercom", "Drift", "Zendesk", "Custom AI Solutions"]
      },
      cta: "Request a free demo",
    },
    de: {
      title: "Chatbot Installation",
      subtitle: "KI-Chatbots, die Ihren Kundenservice automatisieren",
      intro: "Wir installieren und konfigurieren intelligente Chatbots, die Ihren Kunden rund um die Uhr helfen. Von einfachen FAQ-Bots bis hin zu fortgeschrittenen KI-Assistenten, die Leads generieren und den Verkauf steigern. Sparen Sie Zeit, erhöhen Sie die Kundenzufriedenheit und verpassen Sie nie wieder einen potenziellen Kunden.",
      features: [
        { title: "24/7 Verfügbarkeit", desc: "Ihr Chatbot ist immer bereit, Kunden zu helfen, auch außerhalb der Geschäftszeiten und am Wochenende.", icon: "clock" },
        { title: "Lead-Generierung", desc: "Automatisches Sammeln und Qualifizieren von Leads. Ihr Chatbot stellt die richtigen Fragen und leitet warme Leads weiter.", icon: "users" },
        { title: "Kundenservice-Automatisierung", desc: "Häufig gestellte Fragen werden sofort ohne Wartezeit beantwortet. Komplexe Fragen werden an Ihr Team weitergeleitet.", icon: "chat" },
        { title: "CRM & Integrationen", desc: "Verbindung mit Ihrem CRM, E-Mail, WhatsApp und anderen Systemen für einen nahtlosen Workflow.", icon: "link" },
        { title: "Mehrsprachige Unterstützung", desc: "Chatbots, die mehrere Sprachen unterstützen, um alle Ihre Kunden zu bedienen, egal woher sie kommen.", icon: "globe" },
        { title: "Analysen & Einblicke", desc: "Verstehen Sie, was Ihre Kunden fragen, mit umfassenden Statistiken und Berichten über Chatbot-Interaktionen.", icon: "chart" },
      ],
      platforms: { title: "Plattformen, mit denen wir arbeiten", items: ["Botpress", "Tidio", "Intercom", "Drift", "Zendesk", "Individuelle KI-Lösungen"] },
      cta: "Kostenlose Demo anfordern",
    },
    fr: {
      title: "Installation de Chatbot",
      subtitle: "Chatbots IA qui automatisent votre service client",
      intro: "Nous installons et configurons des chatbots intelligents qui aident vos clients 24h/24 et 7j/7. Des simples bots FAQ aux assistants IA avancés qui génèrent des leads et stimulent les ventes. Gagnez du temps, augmentez la satisfaction client et ne manquez plus jamais un client potentiel.",
      features: [
        { title: "Disponibilité 24/7", desc: "Votre chatbot est toujours prêt à aider les clients, même en dehors des heures de bureau et le week-end.", icon: "clock" },
        { title: "Génération de Leads", desc: "Collectez et qualifiez automatiquement les leads. Votre chatbot pose les bonnes questions et transmet les leads chauds.", icon: "users" },
        { title: "Automatisation du Service Client", desc: "Les questions fréquentes sont répondues immédiatement sans temps d'attente. Les questions complexes sont transmises à votre équipe.", icon: "chat" },
        { title: "CRM & Intégrations", desc: "Connexion avec votre CRM, email, WhatsApp et autres systèmes pour un flux de travail fluide.", icon: "link" },
        { title: "Support Multilingue", desc: "Chatbots qui supportent plusieurs langues pour servir tous vos clients, d'où qu'ils viennent.", icon: "globe" },
        { title: "Analyses & Insights", desc: "Comprenez ce que vos clients demandent avec des statistiques complètes et des rapports sur les interactions du chatbot.", icon: "chart" },
      ],
      platforms: { title: "Plateformes avec lesquelles nous travaillons", items: ["Botpress", "Tidio", "Intercom", "Drift", "Zendesk", "Solutions IA Personnalisées"] },
      cta: "Demander une démo gratuite",
    },
    es: {
      title: "Instalación de Chatbot",
      subtitle: "Chatbots de IA que automatizan su servicio al cliente",
      intro: "Instalamos y configuramos chatbots inteligentes que ayudan a sus clientes las 24 horas del día, los 7 días de la semana. Desde simples bots de FAQ hasta asistentes de IA avanzados que generan leads e impulsan las ventas. Ahorre tiempo, aumente la satisfacción del cliente y nunca más pierda un cliente potencial.",
      features: [
        { title: "Disponibilidad 24/7", desc: "Su chatbot siempre está listo para ayudar a los clientes, incluso fuera del horario de oficina y los fines de semana.", icon: "clock" },
        { title: "Generación de Leads", desc: "Recopile y califique leads automáticamente. Su chatbot hace las preguntas correctas y envía los leads calientes.", icon: "users" },
        { title: "Automatización del Servicio al Cliente", desc: "Las preguntas frecuentes se responden inmediatamente sin tiempo de espera. Las preguntas complejas se envían a su equipo.", icon: "chat" },
        { title: "CRM e Integraciones", desc: "Conexión con su CRM, email, WhatsApp y otros sistemas para un flujo de trabajo fluido.", icon: "link" },
        { title: "Soporte Multilingüe", desc: "Chatbots que soportan múltiples idiomas para atender a todos sus clientes, vengan de donde vengan.", icon: "globe" },
        { title: "Análisis e Insights", desc: "Entienda lo que sus clientes preguntan con estadísticas completas e informes sobre las interacciones del chatbot.", icon: "chart" },
      ],
      platforms: { title: "Plataformas con las que trabajamos", items: ["Botpress", "Tidio", "Intercom", "Drift", "Zendesk", "Soluciones de IA Personalizadas"] },
      cta: "Solicitar una demo gratuita",
    },
  };

  const t = content[locale];

  const icons: { [key: string]: ReactNode } = {
    clock: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    users: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    chat: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    link: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    globe: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    chart: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  };

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Intro */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-300 text-center">{t.intro}</p>
          </div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {t.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 group-hover:scale-110 transition-all duration-300">
                  <div className="text-blue-400 group-hover:text-white transition-colors">
                    {icons[feature.icon]}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Platforms */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-gray-700/50">
            <h3 className="text-xl font-semibold text-center mb-6 text-white">{t.platforms.title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {t.platforms.items.map((platform, index) => (
                <span
                  key={index}
                  className="bg-gray-900/50 px-4 py-2 rounded-full text-gray-300 font-medium border border-gray-600"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/contact"
              className="btn bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {t.cta}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
