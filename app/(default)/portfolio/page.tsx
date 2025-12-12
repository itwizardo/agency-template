'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";
import Image from "next/image";

export default function Portfolio() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Portfolio",
      subtitle: "Ontdek onze recente projecten",
      intro: "Bekijk een selectie van webshops die wij hebben gebouwd. Elk project is uniek en op maat gemaakt voor de specifieke behoeften van onze klanten.",
      projects: [
        { name: "CompSlim", category: "Webshop", result: "E-commerce oplossing", image: "/GJPortfolio/compslim.png", link: "https://compslim.nl" },
        { name: "AI WebGen", category: "AI Platform", result: "Website Generator", image: "/GJPortfolio/aiwebgen.png", link: "https://aiwebgen.io" },
        { name: "Bestelappje", category: "Bestel Platform", result: "Online Bestellen", image: "/GJPortfolio/bestelappje.com.png", link: "https://bestelappje.com" },
        { name: "Kalina Holding", category: "Corporate Website", result: "Bedrijfswebsite", image: "/GJPortfolio/kalina-holding.com.png", link: "https://kalina-holding.com" },
        { name: "Trafion AG", category: "Business Platform", result: "B2B Oplossing", image: "/GJPortfolio/trafion.ag.png", link: "https://trafion.ag" },
        { name: "Soccer Science", category: "Sport Platform", result: "Voetbal Analytics", image: "/GJPortfolio/soccerscience.jpg", link: "#", inDevelopment: true },
      ],
      cta: "Bespreek uw project",
      visitSite: "Klik hier",
      inDevelopment: "In ontwikkeling",
    },
    en: {
      title: "Portfolio",
      subtitle: "Discover our recent projects",
      intro: "View a selection of webshops we have built. Each project is unique and tailored to the specific needs of our clients.",
      projects: [
        { name: "CompSlim", category: "Webshop", result: "E-commerce solution", image: "/GJPortfolio/compslim.png", link: "https://compslim.nl" },
        { name: "AI WebGen", category: "AI Platform", result: "Website Generator", image: "/GJPortfolio/aiwebgen.png", link: "https://aiwebgen.io" },
        { name: "Bestelappje", category: "Order Platform", result: "Online Ordering", image: "/GJPortfolio/bestelappje.com.png", link: "https://bestelappje.com" },
        { name: "Kalina Holding", category: "Corporate Website", result: "Company Website", image: "/GJPortfolio/kalina-holding.com.png", link: "https://kalina-holding.com" },
        { name: "Trafion AG", category: "Business Platform", result: "B2B Solution", image: "/GJPortfolio/trafion.ag.png", link: "https://trafion.ag" },
        { name: "Soccer Science", category: "Sports Platform", result: "Football Analytics", image: "/GJPortfolio/soccerscience.jpg", link: "#", inDevelopment: true },
      ],
      cta: "Discuss your project",
      visitSite: "Click here",
      inDevelopment: "In development",
    },
    de: {
      title: "Portfolio",
      subtitle: "Entdecken Sie unsere neuesten Projekte",
      intro: "Sehen Sie eine Auswahl von Webshops, die wir gebaut haben. Jedes Projekt ist einzigartig und auf die spezifischen Bedürfnisse unserer Kunden zugeschnitten.",
      projects: [
        { name: "CompSlim", category: "Webshop", result: "E-Commerce-Lösung", image: "/GJPortfolio/compslim.png", link: "https://compslim.nl" },
        { name: "AI WebGen", category: "KI-Plattform", result: "Website-Generator", image: "/GJPortfolio/aiwebgen.png", link: "https://aiwebgen.io" },
        { name: "Bestelappje", category: "Bestell-Plattform", result: "Online-Bestellung", image: "/GJPortfolio/bestelappje.com.png", link: "https://bestelappje.com" },
        { name: "Kalina Holding", category: "Unternehmenswebsite", result: "Firmenwebsite", image: "/GJPortfolio/kalina-holding.com.png", link: "https://kalina-holding.com" },
        { name: "Trafion AG", category: "Business-Plattform", result: "B2B-Lösung", image: "/GJPortfolio/trafion.ag.png", link: "https://trafion.ag" },
        { name: "Soccer Science", category: "Sport-Plattform", result: "Fußball-Analytics", image: "/GJPortfolio/soccerscience.jpg", link: "#", inDevelopment: true },
      ],
      cta: "Besprechen Sie Ihr Projekt",
      visitSite: "Hier klicken",
      inDevelopment: "In Entwicklung",
    },
    fr: {
      title: "Portfolio",
      subtitle: "Découvrez nos projets récents",
      intro: "Consultez une sélection de boutiques en ligne que nous avons créées. Chaque projet est unique et adapté aux besoins spécifiques de nos clients.",
      projects: [
        { name: "CompSlim", category: "Boutique en ligne", result: "Solution e-commerce", image: "/GJPortfolio/compslim.png", link: "https://compslim.nl" },
        { name: "AI WebGen", category: "Plateforme IA", result: "Générateur de sites", image: "/GJPortfolio/aiwebgen.png", link: "https://aiwebgen.io" },
        { name: "Bestelappje", category: "Plateforme de commande", result: "Commande en ligne", image: "/GJPortfolio/bestelappje.com.png", link: "https://bestelappje.com" },
        { name: "Kalina Holding", category: "Site d'entreprise", result: "Site corporatif", image: "/GJPortfolio/kalina-holding.com.png", link: "https://kalina-holding.com" },
        { name: "Trafion AG", category: "Plateforme business", result: "Solution B2B", image: "/GJPortfolio/trafion.ag.png", link: "https://trafion.ag" },
        { name: "Soccer Science", category: "Plateforme sportive", result: "Analyses football", image: "/GJPortfolio/soccerscience.jpg", link: "#", inDevelopment: true },
      ],
      cta: "Discutons de votre projet",
      visitSite: "Cliquez ici",
      inDevelopment: "En développement",
    },
    es: {
      title: "Portafolio",
      subtitle: "Descubra nuestros proyectos recientes",
      intro: "Vea una selección de tiendas online que hemos construido. Cada proyecto es único y adaptado a las necesidades específicas de nuestros clientes.",
      projects: [
        { name: "CompSlim", category: "Tienda online", result: "Solución e-commerce", image: "/GJPortfolio/compslim.png", link: "https://compslim.nl" },
        { name: "AI WebGen", category: "Plataforma IA", result: "Generador de sitios", image: "/GJPortfolio/aiwebgen.png", link: "https://aiwebgen.io" },
        { name: "Bestelappje", category: "Plataforma de pedidos", result: "Pedidos en línea", image: "/GJPortfolio/bestelappje.com.png", link: "https://bestelappje.com" },
        { name: "Kalina Holding", category: "Sitio corporativo", result: "Sitio de empresa", image: "/GJPortfolio/kalina-holding.com.png", link: "https://kalina-holding.com" },
        { name: "Trafion AG", category: "Plataforma de negocios", result: "Solución B2B", image: "/GJPortfolio/trafion.ag.png", link: "https://trafion.ag" },
        { name: "Soccer Science", category: "Plataforma deportiva", result: "Análisis de fútbol", image: "/GJPortfolio/soccerscience.jpg", link: "#", inDevelopment: true },
      ],
      cta: "Hablemos de su proyecto",
      visitSite: "Clic aquí",
      inDevelopment: "En desarrollo",
    },
  };

  const t = content[locale];

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-300 text-center">{t.intro}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((project, index) => {
              const isInDevelopment = project.inDevelopment;
              const CardWrapper = isInDevelopment ? 'div' : 'a';
              const cardProps = isInDevelopment
                ? {}
                : {
                    href: project.link,
                    target: "_blank",
                    rel: "noopener noreferrer"
                  };

              return (
                <CardWrapper
                  key={index}
                  {...cardProps}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden group hover:border-blue-500/50 transition-all"
                >
                  <div className="aspect-video relative bg-gray-900">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                    <h3 className="font-semibold text-lg mt-1 mb-2 text-white">{project.name}</h3>
                    <div className="flex items-center text-green-400 mb-3">
                      <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="font-medium">{project.result}</span>
                    </div>
                    {isInDevelopment ? (
                      <div className="inline-flex items-center text-orange-400 font-medium">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{t.inDevelopment}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300">
                        <span>{t.visitSite}</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
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
