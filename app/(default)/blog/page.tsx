'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";
import { getPostsByLang, BlogPost } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Blog() {
  const { locale } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const content = {
    nl: {
      title: "Blog",
      subtitle: "Tips, trends en nieuws voor ondernemers en ZZP'ers",
      allCategories: "Alle artikelen",
      readMore: "Lees meer",
      noArticles: "Nog geen artikelen in deze categorie",
      categories: {
        ZZP: "ZZP",
        SEO: "SEO",
        Webshop: "Webshop",
        Vergelijking: "Vergelijking",
        Branche: "Branche",
        Onderhoud: "Onderhoud",
        Chatbots: "Chatbots",
      }
    },
    en: {
      title: "Blog",
      subtitle: "Tips, trends and news for entrepreneurs and freelancers",
      allCategories: "All articles",
      readMore: "Read more",
      noArticles: "No articles in this category yet",
      categories: {
        ZZP: "Freelancer",
        SEO: "SEO",
        Webshop: "E-commerce",
        Vergelijking: "Comparison",
        Branche: "Industry",
        Onderhoud: "Maintenance",
        Chatbots: "Chatbots",
      }
    },
    de: {
      title: "Blog",
      subtitle: "Tipps, Trends und Neuigkeiten für Unternehmer und Freelancer",
      allCategories: "Alle Artikel",
      readMore: "Weiterlesen",
      noArticles: "Noch keine Artikel in dieser Kategorie",
      categories: {
        ZZP: "Freelancer",
        SEO: "SEO",
        Webshop: "E-Commerce",
        Vergelijking: "Vergleich",
        Branche: "Branche",
        Onderhoud: "Wartung",
        Chatbots: "Chatbots",
      }
    },
    fr: {
      title: "Blog",
      subtitle: "Conseils, tendances et actualités pour entrepreneurs et freelances",
      allCategories: "Tous les articles",
      readMore: "Lire la suite",
      noArticles: "Pas encore d'articles dans cette catégorie",
      categories: {
        ZZP: "Freelance",
        SEO: "SEO",
        Webshop: "E-commerce",
        Vergelijking: "Comparaison",
        Branche: "Secteur",
        Onderhoud: "Maintenance",
        Chatbots: "Chatbots",
      }
    },
    es: {
      title: "Blog",
      subtitle: "Consejos, tendencias y noticias para emprendedores y freelancers",
      allCategories: "Todos los artículos",
      readMore: "Leer más",
      noArticles: "Aún no hay artículos en esta categoría",
      categories: {
        ZZP: "Freelancer",
        SEO: "SEO",
        Webshop: "E-commerce",
        Vergelijking: "Comparación",
        Branche: "Industria",
        Onderhoud: "Mantenimiento",
        Chatbots: "Chatbots",
      }
    },
  };

  const t = content[locale] || content.nl;

  // Get posts from blog data based on current locale
  // Fall back to Dutch if no posts in current locale
  let posts = getPostsByLang(locale);
  if (posts.length === 0) {
    posts = getPostsByLang('nl');
  }

  // Get unique categories from posts
  const categories = Array.from(new Set(posts.map(post => post.category)));

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === null
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {t.allCategories}
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {t.categories[category as keyof typeof t.categories] || category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
                        {t.categories[article.category as keyof typeof t.categories] || article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-white group-hover:text-blue-400 transition">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    <span className="text-blue-400 font-medium text-sm group-hover:text-blue-300">
                      {t.readMore} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400">{t.noArticles}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
