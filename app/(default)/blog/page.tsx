'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function Blog() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Blog",
      subtitle: "Tips, trends en nieuws uit de e-commerce wereld",
      articles: [
        {
          title: "10 Tips voor een Succesvolle Webshop in 2024",
          excerpt: "Ontdek de belangrijkste strategieën om uw webshop naar een hoger niveau te tillen dit jaar.",
          date: "15 december 2024",
          category: "Tips & Tricks",
        },
        {
          title: "De Beste Betaalmethoden voor Nederlandse Webshops",
          excerpt: "Een complete gids over iDEAL, creditcards en andere betaalopties voor uw webshop.",
          date: "10 december 2024",
          category: "E-commerce",
        },
        {
          title: "SEO voor Webshops: Een Complete Handleiding",
          excerpt: "Leer hoe u uw webshop hoger laat scoren in Google met deze praktische SEO-tips.",
          date: "5 december 2024",
          category: "SEO",
        },
        {
          title: "WooCommerce vs Shopify: Welke Kiest U?",
          excerpt: "Een eerlijke vergelijking tussen de twee populairste e-commerce platforms.",
          date: "1 december 2024",
          category: "Platforms",
        },
        {
          title: "Conversie Optimalisatie: Van Bezoeker naar Klant",
          excerpt: "Praktische tips om meer bezoekers om te zetten in betalende klanten.",
          date: "25 november 2024",
          category: "Conversie",
        },
        {
          title: "De Toekomst van E-commerce in Nederland",
          excerpt: "Trends en voorspellingen voor de Nederlandse e-commerce markt.",
          date: "20 november 2024",
          category: "Trends",
        },
      ],
      readMore: "Lees meer",
    },
    en: {
      title: "Blog",
      subtitle: "Tips, trends and news from the e-commerce world",
      articles: [
        {
          title: "10 Tips for a Successful Webshop in 2024",
          excerpt: "Discover the key strategies to take your webshop to the next level this year.",
          date: "December 15, 2024",
          category: "Tips & Tricks",
        },
        {
          title: "The Best Payment Methods for Dutch Webshops",
          excerpt: "A complete guide on iDEAL, credit cards and other payment options for your webshop.",
          date: "December 10, 2024",
          category: "E-commerce",
        },
        {
          title: "SEO for Webshops: A Complete Guide",
          excerpt: "Learn how to rank your webshop higher in Google with these practical SEO tips.",
          date: "December 5, 2024",
          category: "SEO",
        },
        {
          title: "WooCommerce vs Shopify: Which Do You Choose?",
          excerpt: "An honest comparison between the two most popular e-commerce platforms.",
          date: "December 1, 2024",
          category: "Platforms",
        },
        {
          title: "Conversion Optimization: From Visitor to Customer",
          excerpt: "Practical tips to convert more visitors into paying customers.",
          date: "November 25, 2024",
          category: "Conversion",
        },
        {
          title: "The Future of E-commerce in the Netherlands",
          excerpt: "Trends and predictions for the Dutch e-commerce market.",
          date: "November 20, 2024",
          category: "Trends",
        },
      ],
      readMore: "Read more",
    },
    de: {
      title: "Blog",
      subtitle: "Tipps, Trends und Neuigkeiten aus der E-Commerce-Welt",
      articles: [
        { title: "10 Tipps für einen erfolgreichen Webshop in 2024", excerpt: "Entdecken Sie die wichtigsten Strategien, um Ihren Webshop dieses Jahr auf die nächste Stufe zu bringen.", date: "15. Dezember 2024", category: "Tipps & Tricks" },
        { title: "Die besten Zahlungsmethoden für niederländische Webshops", excerpt: "Ein vollständiger Leitfaden zu iDEAL, Kreditkarten und anderen Zahlungsoptionen für Ihren Webshop.", date: "10. Dezember 2024", category: "E-Commerce" },
        { title: "SEO für Webshops: Ein vollständiger Leitfaden", excerpt: "Lernen Sie, wie Sie Ihren Webshop mit diesen praktischen SEO-Tipps höher bei Google ranken.", date: "5. Dezember 2024", category: "SEO" },
        { title: "WooCommerce vs Shopify: Welche wählen Sie?", excerpt: "Ein ehrlicher Vergleich zwischen den beiden beliebtesten E-Commerce-Plattformen.", date: "1. Dezember 2024", category: "Plattformen" },
        { title: "Conversion-Optimierung: Vom Besucher zum Kunden", excerpt: "Praktische Tipps, um mehr Besucher in zahlende Kunden zu verwandeln.", date: "25. November 2024", category: "Conversion" },
        { title: "Die Zukunft des E-Commerce in den Niederlanden", excerpt: "Trends und Vorhersagen für den niederländischen E-Commerce-Markt.", date: "20. November 2024", category: "Trends" },
      ],
      readMore: "Weiterlesen",
    },
    fr: {
      title: "Blog",
      subtitle: "Conseils, tendances et actualités du monde de l'e-commerce",
      articles: [
        { title: "10 conseils pour une boutique en ligne réussie en 2024", excerpt: "Découvrez les stratégies clés pour faire passer votre boutique au niveau supérieur cette année.", date: "15 décembre 2024", category: "Conseils" },
        { title: "Les meilleures méthodes de paiement pour les boutiques néerlandaises", excerpt: "Un guide complet sur iDEAL, les cartes de crédit et autres options de paiement pour votre boutique.", date: "10 décembre 2024", category: "E-commerce" },
        { title: "SEO pour boutiques en ligne : Guide complet", excerpt: "Apprenez à mieux classer votre boutique sur Google avec ces conseils SEO pratiques.", date: "5 décembre 2024", category: "SEO" },
        { title: "WooCommerce vs Shopify : Lequel choisir ?", excerpt: "Une comparaison honnête entre les deux plateformes e-commerce les plus populaires.", date: "1er décembre 2024", category: "Plateformes" },
        { title: "Optimisation de la conversion : Du visiteur au client", excerpt: "Conseils pratiques pour convertir plus de visiteurs en clients payants.", date: "25 novembre 2024", category: "Conversion" },
        { title: "L'avenir de l'e-commerce aux Pays-Bas", excerpt: "Tendances et prévisions pour le marché néerlandais de l'e-commerce.", date: "20 novembre 2024", category: "Tendances" },
      ],
      readMore: "Lire la suite",
    },
    es: {
      title: "Blog",
      subtitle: "Consejos, tendencias y noticias del mundo del comercio electrónico",
      articles: [
        { title: "10 consejos para una tienda online exitosa en 2024", excerpt: "Descubra las estrategias clave para llevar su tienda al siguiente nivel este año.", date: "15 de diciembre de 2024", category: "Consejos" },
        { title: "Los mejores métodos de pago para tiendas holandesas", excerpt: "Una guía completa sobre iDEAL, tarjetas de crédito y otras opciones de pago para su tienda.", date: "10 de diciembre de 2024", category: "E-commerce" },
        { title: "SEO para tiendas online: Guía completa", excerpt: "Aprenda a posicionar mejor su tienda en Google con estos consejos SEO prácticos.", date: "5 de diciembre de 2024", category: "SEO" },
        { title: "WooCommerce vs Shopify: ¿Cuál elegir?", excerpt: "Una comparación honesta entre las dos plataformas de comercio electrónico más populares.", date: "1 de diciembre de 2024", category: "Plataformas" },
        { title: "Optimización de conversión: De visitante a cliente", excerpt: "Consejos prácticos para convertir más visitantes en clientes que pagan.", date: "25 de noviembre de 2024", category: "Conversión" },
        { title: "El futuro del e-commerce en los Países Bajos", excerpt: "Tendencias y predicciones para el mercado holandés de comercio electrónico.", date: "20 de noviembre de 2024", category: "Tendencias" },
      ],
      readMore: "Leer más",
    },
  };

  const t = content[locale];

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.articles.map((article, index) => (
              <article key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-blue-400 bg-blue-500/20 px-2 py-1 rounded">{article.category}</span>
                    <span className="text-xs text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-white">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <a href="#" className="text-blue-400 font-medium text-sm hover:text-blue-300">
                    {t.readMore} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
