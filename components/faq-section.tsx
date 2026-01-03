'use client';

import { useLanguage } from "@/lib/i18n";
import { Disclosure, Transition } from '@headlessui/react';

export default function FaqSection() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Veelgestelde vragen",
      subtitle: "Antwoorden op de meest gestelde vragen over onze diensten",
      faqs: [
        {
          question: "Hoeveel kost een website of webshop?",
          answer: "Elk project is uniek, daarom werken we altijd met een offerte op maat. De kosten zijn afhankelijk van uw wensen, functionaliteiten en complexiteit. Plan een vrijblijvend gesprek en we bespreken de mogelijkheden binnen uw budget.",
        },
        {
          question: "Hoe lang duurt het om een website te bouwen?",
          answer: "De doorlooptijd hangt af van de complexiteit van uw project. Een eenvoudige website kan in enkele weken klaar zijn, terwijl uitgebreide maatwerk oplossingen meer tijd vragen. Na ons eerste gesprek geven we een realistische planning.",
        },
        {
          question: "Wat kan een chatbot voor mijn bedrijf doen?",
          answer: "Een chatbot beantwoordt 24/7 vragen van klanten, genereert leads en automatiseert klantenservice. Dit bespaart tijd, verhoogt klanttevredenheid en zorgt ervoor dat u geen potentiële klanten misloopt buiten kantooruren.",
        },
        {
          question: "Hoe werkt SEO en hoelang duurt het voordat ik resultaten zie?",
          answer: "SEO (zoekmachine-optimalisatie) zorgt ervoor dat uw website hoger in Google komt. Het is een doorlopend proces. Eerste verbeteringen ziet u vaak binnen 3-6 maanden, maar de beste resultaten komen na 6-12 maanden consistent werken.",
        },
        {
          question: "Waarom hosting bij GWC in plaats van elders?",
          answer: "Onze hosting draait in Nederlandse datacenters met 99.9% uptime, dagelijkse backups en proactieve beveiliging. Bovendien krijgt u directe support van ons team dat uw website kent - geen callcenters of wachttijden.",
        },
        {
          question: "Bieden jullie ook onderhoud en support?",
          answer: "Ja, we bieden verschillende onderhoudspakketten aan. Dit omvat updates, backups, beveiliging, en support. Zo weet u zeker dat uw website altijd optimaal draait en veilig is.",
        },
        {
          question: "Kan ik mijn website zelf beheren?",
          answer: "Absoluut! Alle websites die we bouwen zijn gebruiksvriendelijk en eenvoudig te beheren. We leveren een handleiding en training zodat u zelf content kunt aanpassen en uw website kunt beheren.",
        },
        {
          question: "Wat als ik niet tevreden ben?",
          answer: "Uw tevredenheid is onze prioriteit. We werken met duidelijke mijlpalen en feedback momenten. Mocht u toch niet tevreden zijn, dan zoeken we samen naar een oplossing. We zijn pas klaar als u tevreden bent.",
        },
      ],
    },
    en: {
      title: "Frequently asked questions",
      subtitle: "Answers to the most common questions about our services",
      faqs: [
        { question: "How much does a website or webshop cost?", answer: "Every project is unique, which is why we always work with a custom quote. The costs depend on your requirements, features and complexity. Schedule a no-obligation conversation and we'll discuss the possibilities within your budget." },
        { question: "How long does it take to build a website?", answer: "The timeline depends on the complexity of your project. A simple website can be ready in a few weeks, while extensive custom solutions require more time. After our first conversation, we'll provide a realistic planning." },
        { question: "What can a chatbot do for my business?", answer: "A chatbot answers customer questions 24/7, generates leads and automates customer service. This saves time, increases customer satisfaction and ensures you don't miss potential customers outside office hours." },
        { question: "How does SEO work and when will I see results?", answer: "SEO (search engine optimization) helps your website rank higher in Google. It's an ongoing process. You typically see first improvements within 3-6 months, but the best results come after 6-12 months of consistent work." },
        { question: "Why choose GWC hosting over others?", answer: "Our hosting runs in Dutch data centers with 99.9% uptime, daily backups and proactive security. Plus, you get direct support from our team who knows your website - no call centers or waiting times." },
        { question: "Do you also offer maintenance and support?", answer: "Yes, we offer various maintenance packages. This includes updates, backups, security, and support. This ensures your website always runs optimally and is secure." },
        { question: "Can I manage my website myself?", answer: "Absolutely! All websites we build are user-friendly and easy to manage. We provide a manual and training so you can adjust content and manage your website yourself." },
        { question: "What if I'm not satisfied?", answer: "Your satisfaction is our priority. We work with clear milestones and feedback moments. If you're not satisfied, we'll find a solution together. We're only done when you're satisfied." },
      ],
    },
    de: {
      title: "Häufig gestellte Fragen",
      subtitle: "Antworten auf die häufigsten Fragen zu unseren Dienstleistungen",
      faqs: [
        { question: "Was kostet eine Website oder ein Webshop?", answer: "Jedes Projekt ist einzigartig, deshalb arbeiten wir immer mit einem individuellen Angebot. Die Kosten hängen von Ihren Anforderungen, Funktionen und Komplexität ab." },
        { question: "Wie lange dauert es, eine Website zu erstellen?", answer: "Die Zeit hängt von der Komplexität Ihres Projekts ab. Eine einfache Website kann in wenigen Wochen fertig sein, während umfangreiche Lösungen mehr Zeit benötigen." },
        { question: "Was kann ein Chatbot für mein Unternehmen tun?", answer: "Ein Chatbot beantwortet Kundenfragen rund um die Uhr, generiert Leads und automatisiert den Kundenservice. Das spart Zeit, erhöht die Kundenzufriedenheit und sorgt dafür, dass Sie keine potenziellen Kunden außerhalb der Geschäftszeiten verpassen." },
        { question: "Wie funktioniert SEO und wann sehe ich Ergebnisse?", answer: "SEO (Suchmaschinenoptimierung) hilft Ihrer Website, bei Google höher zu ranken. Es ist ein fortlaufender Prozess. Erste Verbesserungen sehen Sie typischerweise innerhalb von 3-6 Monaten, die besten Ergebnisse kommen nach 6-12 Monaten konsequenter Arbeit." },
        { question: "Warum GWC Hosting statt anderen Anbietern?", answer: "Unser Hosting läuft in niederländischen Rechenzentren mit 99,9% Uptime, täglichen Backups und proaktiver Sicherheit. Außerdem erhalten Sie direkten Support von unserem Team, das Ihre Website kennt - keine Callcenter oder Wartezeiten." },
        { question: "Bieten Sie auch Wartung und Support an?", answer: "Ja, wir bieten verschiedene Wartungspakete an. Dies umfasst Updates, Backups, Sicherheit und Support. So läuft Ihre Website immer optimal." },
        { question: "Kann ich meine Website selbst verwalten?", answer: "Absolut! Alle Websites, die wir erstellen, sind benutzerfreundlich und einfach zu verwalten. Wir stellen ein Handbuch und Schulungen bereit." },
        { question: "Was ist, wenn ich nicht zufrieden bin?", answer: "Ihre Zufriedenheit hat Priorität. Wir arbeiten mit klaren Meilensteinen und Feedback-Momenten. Wir sind erst fertig, wenn Sie zufrieden sind." },
      ],
    },
    fr: {
      title: "Questions fréquentes",
      subtitle: "Réponses aux questions les plus courantes sur nos services",
      faqs: [
        { question: "Combien coûte un site web ou une boutique en ligne?", answer: "Chaque projet est unique, c'est pourquoi nous travaillons toujours avec un devis personnalisé. Les coûts dépendent de vos exigences, fonctionnalités et complexité." },
        { question: "Combien de temps faut-il pour créer un site web?", answer: "Le délai dépend de la complexité de votre projet. Un site simple peut être prêt en quelques semaines, tandis que les solutions complexes nécessitent plus de temps." },
        { question: "Que peut faire un chatbot pour mon entreprise?", answer: "Un chatbot répond aux questions des clients 24h/24, génère des leads et automatise le service client. Cela fait gagner du temps, augmente la satisfaction client et vous assure de ne manquer aucun client potentiel en dehors des heures de bureau." },
        { question: "Comment fonctionne le SEO et quand verrai-je des résultats?", answer: "Le SEO (optimisation pour les moteurs de recherche) aide votre site à mieux se classer sur Google. C'est un processus continu. Vous voyez généralement les premières améliorations en 3-6 mois, mais les meilleurs résultats viennent après 6-12 mois de travail constant." },
        { question: "Pourquoi choisir l'hébergement GWC plutôt qu'un autre?", answer: "Notre hébergement fonctionne dans des centres de données néerlandais avec 99,9% de disponibilité, des sauvegardes quotidiennes et une sécurité proactive. De plus, vous bénéficiez d'un support direct de notre équipe qui connaît votre site - pas de centres d'appels ni de temps d'attente." },
        { question: "Proposez-vous également la maintenance et le support?", answer: "Oui, nous proposons différents forfaits de maintenance. Cela inclut les mises à jour, les sauvegardes, la sécurité et le support." },
        { question: "Puis-je gérer mon site web moi-même?", answer: "Absolument! Tous les sites que nous créons sont conviviaux et faciles à gérer. Nous fournissons un manuel et une formation." },
        { question: "Et si je ne suis pas satisfait?", answer: "Votre satisfaction est notre priorité. Nous travaillons avec des jalons clairs et des moments de feedback. Nous ne terminons que lorsque vous êtes satisfait." },
      ],
    },
    es: {
      title: "Preguntas frecuentes",
      subtitle: "Respuestas a las preguntas más comunes sobre nuestros servicios",
      faqs: [
        { question: "¿Cuánto cuesta un sitio web o tienda online?", answer: "Cada proyecto es único, por eso siempre trabajamos con un presupuesto personalizado. Los costos dependen de sus requisitos, funcionalidades y complejidad." },
        { question: "¿Cuánto tiempo se tarda en crear un sitio web?", answer: "El tiempo depende de la complejidad de su proyecto. Un sitio simple puede estar listo en pocas semanas, mientras que soluciones extensas requieren más tiempo." },
        { question: "¿Qué puede hacer un chatbot por mi negocio?", answer: "Un chatbot responde preguntas de clientes 24/7, genera leads y automatiza el servicio al cliente. Esto ahorra tiempo, aumenta la satisfacción del cliente y asegura que no pierda clientes potenciales fuera del horario de oficina." },
        { question: "¿Cómo funciona el SEO y cuándo veré resultados?", answer: "El SEO (optimización para motores de búsqueda) ayuda a que su sitio web se posicione más alto en Google. Es un proceso continuo. Normalmente verá las primeras mejoras en 3-6 meses, pero los mejores resultados vienen después de 6-12 meses de trabajo constante." },
        { question: "¿Por qué elegir el hosting de GWC en lugar de otros?", answer: "Nuestro hosting funciona en centros de datos holandeses con 99.9% de disponibilidad, copias de seguridad diarias y seguridad proactiva. Además, obtiene soporte directo de nuestro equipo que conoce su sitio web - sin call centers ni tiempos de espera." },
        { question: "¿Ofrecen mantenimiento y soporte?", answer: "Sí, ofrecemos varios paquetes de mantenimiento. Esto incluye actualizaciones, copias de seguridad, seguridad y soporte." },
        { question: "¿Puedo gestionar mi sitio web yo mismo?", answer: "¡Absolutamente! Todos los sitios que construimos son fáciles de usar y gestionar. Proporcionamos un manual y capacitación." },
        { question: "¿Qué pasa si no estoy satisfecho?", answer: "Su satisfacción es nuestra prioridad. Trabajamos con hitos claros y momentos de feedback. Solo terminamos cuando usted está satisfecho." },
      ],
    },
  };

  const t = content[locale];

  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">{t.title}</h2>
          <p className="text-gray-400 text-lg">{t.subtitle}</p>
        </div>

        <div className="space-y-4">
          {t.faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className={`bg-gray-800 rounded-xl border transition-all duration-300 ${open ? 'border-blue-500/50 shadow-lg shadow-blue-500/10' : 'border-gray-700 hover:border-gray-600'}`}>
                  <Disclosure.Button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-xl">
                    <span className="font-medium text-gray-100 pr-4">{faq.question}</span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-blue-500 rotate-180' : 'bg-gray-700'}`}>
                      <svg className={`w-4 h-4 transition-colors ${open ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </Disclosure.Button>

                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="transform -translate-y-2 opacity-0"
                    enterTo="transform translate-y-0 opacity-100"
                    leave="transition duration-150 ease-out"
                    leaveFrom="transform translate-y-0 opacity-100"
                    leaveTo="transform -translate-y-2 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 pb-5">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
