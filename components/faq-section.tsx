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
          question: "Welke platforms gebruiken jullie?",
          answer: "We werken met diverse platforms zoals WordPress, WooCommerce, Shopify en moderne frameworks. We adviseren het beste platform voor uw specifieke situatie, rekening houdend met schaalbaarheid, budget en beheergemak.",
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
        { question: "Which platforms do you use?", answer: "We work with various platforms such as WordPress, WooCommerce, Shopify and modern frameworks. We advise the best platform for your specific situation, considering scalability, budget and ease of management." },
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
        { question: "Welche Plattformen nutzen Sie?", answer: "Wir arbeiten mit verschiedenen Plattformen wie WordPress, WooCommerce, Shopify und modernen Frameworks. Wir beraten die beste Plattform für Ihre spezifische Situation." },
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
        { question: "Quelles plateformes utilisez-vous?", answer: "Nous travaillons avec diverses plateformes comme WordPress, WooCommerce, Shopify et des frameworks modernes. Nous conseillons la meilleure plateforme pour votre situation." },
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
        { question: "¿Qué plataformas utilizan?", answer: "Trabajamos con varias plataformas como WordPress, WooCommerce, Shopify y frameworks modernos. Asesoramos la mejor plataforma para su situación específica." },
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
