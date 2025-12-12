'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";
import Image from "next/image";

export default function OverOns() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Over Ons",
      subtitle: "Al meer dan 10 jaar uw partner in e-commerce",
      story: {
        title: "Ons Verhaal",
        text: "Geors Webshop Company is opgericht met één doel: Nederlandse ondernemers helpen succesvol online te verkopen. Wat begon als een kleine webshop-ontwikkelaar is uitgegroeid tot een full-service e-commerce bureau dat bedrijven helpt bij elke stap van hun online reis.",
      },
      mission: {
        title: "Onze Missie",
        text: "Wij geloven dat elke ondernemer verdient om online succesvol te zijn. Daarom bouwen wij webshops die niet alleen mooi zijn, maar ook daadwerkelijk verkopen. Met onze expertise en persoonlijke aanpak helpen wij ondernemers hun online dromen waar te maken.",
      },
      values: [
        { title: "Kwaliteit", desc: "Wij leveren alleen werk waar we trots op zijn" },
        { title: "Transparantie", desc: "Eerlijk en open in al onze communicatie" },
        { title: "Innovatie", desc: "Altijd op zoek naar betere oplossingen" },
        { title: "Partnerschap", desc: "Uw succes is ons succes" },
      ],
      stats: [
        { number: "200+", label: "Tevreden klanten" },
        { number: "10+", label: "Jaar ervaring" },
        { number: "500+", label: "Projecten opgeleverd" },
        { number: "98%", label: "Klanttevredenheid" },
      ],
      valuesTitle: "Onze Waarden",
    },
    en: {
      title: "About Us",
      subtitle: "Your e-commerce partner for over 10 years",
      story: {
        title: "Our Story",
        text: "Geors Webshop Company was founded with one goal: helping Dutch entrepreneurs sell successfully online. What started as a small webshop developer has grown into a full-service e-commerce agency that helps businesses at every step of their online journey.",
      },
      mission: {
        title: "Our Mission",
        text: "We believe every entrepreneur deserves to be successful online. That's why we build webshops that are not only beautiful but actually sell. With our expertise and personal approach, we help entrepreneurs make their online dreams come true.",
      },
      values: [
        { title: "Quality", desc: "We only deliver work we're proud of" },
        { title: "Transparency", desc: "Honest and open in all our communication" },
        { title: "Innovation", desc: "Always looking for better solutions" },
        { title: "Partnership", desc: "Your success is our success" },
      ],
      stats: [
        { number: "200+", label: "Happy customers" },
        { number: "10+", label: "Years experience" },
        { number: "500+", label: "Projects delivered" },
        { number: "98%", label: "Customer satisfaction" },
      ],
      valuesTitle: "Our Values",
    },
    de: {
      title: "Über Uns",
      subtitle: "Ihr E-Commerce-Partner seit über 10 Jahren",
      story: {
        title: "Unsere Geschichte",
        text: "Geors Webshop Company wurde mit einem Ziel gegründet: Unternehmern zu helfen, erfolgreich online zu verkaufen. Was als kleiner Webshop-Entwickler begann, ist zu einer Full-Service-E-Commerce-Agentur gewachsen, die Unternehmen bei jedem Schritt ihrer Online-Reise unterstützt.",
      },
      mission: {
        title: "Unsere Mission",
        text: "Wir glauben, dass jeder Unternehmer es verdient, online erfolgreich zu sein. Deshalb bauen wir Webshops, die nicht nur schön sind, sondern auch tatsächlich verkaufen. Mit unserer Expertise und persönlichen Herangehensweise helfen wir Unternehmern, ihre Online-Träume zu verwirklichen.",
      },
      values: [
        { title: "Qualität", desc: "Wir liefern nur Arbeit, auf die wir stolz sind" },
        { title: "Transparenz", desc: "Ehrlich und offen in all unserer Kommunikation" },
        { title: "Innovation", desc: "Immer auf der Suche nach besseren Lösungen" },
        { title: "Partnerschaft", desc: "Ihr Erfolg ist unser Erfolg" },
      ],
      stats: [
        { number: "200+", label: "Zufriedene Kunden" },
        { number: "10+", label: "Jahre Erfahrung" },
        { number: "500+", label: "Projekte geliefert" },
        { number: "98%", label: "Kundenzufriedenheit" },
      ],
      valuesTitle: "Unsere Werte",
    },
    fr: {
      title: "À Propos",
      subtitle: "Votre partenaire e-commerce depuis plus de 10 ans",
      story: {
        title: "Notre Histoire",
        text: "Geors Webshop Company a été fondée avec un seul objectif : aider les entrepreneurs à vendre avec succès en ligne. Ce qui a commencé comme un petit développeur de boutiques en ligne est devenu une agence e-commerce complète qui aide les entreprises à chaque étape de leur parcours en ligne.",
      },
      mission: {
        title: "Notre Mission",
        text: "Nous croyons que chaque entrepreneur mérite de réussir en ligne. C'est pourquoi nous créons des boutiques en ligne qui sont non seulement belles mais qui vendent vraiment. Avec notre expertise et notre approche personnelle, nous aidons les entrepreneurs à réaliser leurs rêves en ligne.",
      },
      values: [
        { title: "Qualité", desc: "Nous ne livrons que du travail dont nous sommes fiers" },
        { title: "Transparence", desc: "Honnête et ouvert dans toute notre communication" },
        { title: "Innovation", desc: "Toujours à la recherche de meilleures solutions" },
        { title: "Partenariat", desc: "Votre succès est notre succès" },
      ],
      stats: [
        { number: "200+", label: "Clients satisfaits" },
        { number: "10+", label: "Années d'expérience" },
        { number: "500+", label: "Projets livrés" },
        { number: "98%", label: "Satisfaction client" },
      ],
      valuesTitle: "Nos Valeurs",
    },
    es: {
      title: "Sobre Nosotros",
      subtitle: "Su socio de comercio electrónico durante más de 10 años",
      story: {
        title: "Nuestra Historia",
        text: "Geors Webshop Company fue fundada con un objetivo: ayudar a los emprendedores a vender exitosamente en línea. Lo que comenzó como un pequeño desarrollador de tiendas online se ha convertido en una agencia de comercio electrónico completa que ayuda a las empresas en cada paso de su viaje en línea.",
      },
      mission: {
        title: "Nuestra Misión",
        text: "Creemos que todo emprendedor merece tener éxito en línea. Por eso construimos tiendas online que no solo son hermosas sino que realmente venden. Con nuestra experiencia y enfoque personal, ayudamos a los emprendedores a hacer realidad sus sueños en línea.",
      },
      values: [
        { title: "Calidad", desc: "Solo entregamos trabajo del que estamos orgullosos" },
        { title: "Transparencia", desc: "Honestos y abiertos en toda nuestra comunicación" },
        { title: "Innovación", desc: "Siempre buscando mejores soluciones" },
        { title: "Asociación", desc: "Su éxito es nuestro éxito" },
      ],
      stats: [
        { number: "200+", label: "Clientes satisfechos" },
        { number: "10+", label: "Años de experiencia" },
        { number: "500+", label: "Proyectos entregados" },
        { number: "98%", label: "Satisfacción del cliente" },
      ],
      valuesTitle: "Nuestros Valores",
    },
  };

  const t = content[locale];

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Story & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">{t.story.title}</h2>
              <p className="text-gray-400 leading-relaxed">{t.story.text}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">{t.mission.title}</h2>
              <p className="text-gray-400 leading-relaxed">{t.mission.text}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 bg-gray-900 rounded-2xl p-8">
            {t.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <h2 className="text-2xl font-bold mb-8 text-center text-white">{t.valuesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
