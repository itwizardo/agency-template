'use client';

import { useLanguage } from "@/lib/i18n";
import { getPostBySlug, getRelatedPosts, getPostsByLang } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React, { use } from "react";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const { locale } = useLanguage();

  const post = getPostBySlug(slug);

  // Get translations
  const translations = {
    nl: {
      backToBlog: "← Terug naar blog",
      relatedArticles: "Gerelateerde artikelen",
      readMore: "Lees meer",
      shareArticle: "Deel dit artikel",
      author: "Geschreven door",
      readTime: "leestijd",
      category: "Categorie",
      tableOfContents: "Inhoudsopgave",
    },
    en: {
      backToBlog: "← Back to blog",
      relatedArticles: "Related articles",
      readMore: "Read more",
      shareArticle: "Share this article",
      author: "Written by",
      readTime: "read time",
      category: "Category",
      tableOfContents: "Table of contents",
    },
    de: {
      backToBlog: "← Zurück zum Blog",
      relatedArticles: "Verwandte Artikel",
      readMore: "Weiterlesen",
      shareArticle: "Artikel teilen",
      author: "Geschrieben von",
      readTime: "Lesezeit",
      category: "Kategorie",
      tableOfContents: "Inhaltsverzeichnis",
    },
    fr: {
      backToBlog: "← Retour au blog",
      relatedArticles: "Articles connexes",
      readMore: "Lire la suite",
      shareArticle: "Partager cet article",
      author: "Écrit par",
      readTime: "temps de lecture",
      category: "Catégorie",
      tableOfContents: "Table des matières",
    },
    es: {
      backToBlog: "← Volver al blog",
      relatedArticles: "Artículos relacionados",
      readMore: "Leer más",
      shareArticle: "Compartir artículo",
      author: "Escrito por",
      readTime: "tiempo de lectura",
      category: "Categoría",
      tableOfContents: "Tabla de contenido",
    },
  };

  const t = translations[locale] || translations.nl;

  if (!post) {
    // Try to find a post in the current language
    const langPosts = getPostsByLang(locale);
    if (langPosts.length > 0) {
      notFound();
    }
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, post.lang, 3);

  // Convert markdown-like content to HTML
  const renderContent = (content: string) => {
    // Split content into lines
    const lines = content.trim().split('\n');
    const elements: React.ReactElement[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;
    let inTable = false;
    let tableRows: string[][] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeBlockLang = '';

    const flushList = () => {
      if (currentList.length > 0) {
        const ListTag = listType === 'ol' ? 'ol' : 'ul';
        elements.push(
          <ListTag key={elements.length} className={`${listType === 'ol' ? 'list-decimal' : 'list-disc'} list-inside space-y-2 my-4 text-gray-300`}>
            {currentList.map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        elements.push(
          <div key={elements.length} className="overflow-x-auto my-6">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr className="bg-gray-800/50">
                  {tableRows[0].map((cell, i) => (
                    <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-gray-200">{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {tableRows.slice(2).map((row, i) => (
                  <tr key={i} className="hover:bg-gray-800/30">
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-sm text-gray-300">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={elements.length} className="bg-gray-900 rounded-lg p-4 my-4 overflow-x-auto">
              <code className="text-sm text-gray-300">{codeBlockContent.join('\n')}</code>
            </pre>
          );
          codeBlockContent = [];
          inCodeBlock = false;
        } else {
          flushList();
          flushTable();
          codeBlockLang = line.slice(3);
          inCodeBlock = true;
        }
        continue;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        continue;
      }

      // Tables
      if (line.startsWith('|')) {
        flushList();
        inTable = true;
        const cells = line.split('|').filter(cell => cell.trim()).map(cell => cell.trim());
        if (!line.includes('---')) {
          tableRows.push(cells);
        }
        continue;
      } else if (inTable) {
        flushTable();
      }

      // Headers
      if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={elements.length} className="text-2xl font-bold mt-10 mb-4 text-white">
            {line.slice(3)}
          </h2>
        );
        continue;
      }
      if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={elements.length} className="text-xl font-semibold mt-8 mb-3 text-white">
            {line.slice(4)}
          </h3>
        );
        continue;
      }
      if (line.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={elements.length} className="text-lg font-semibold mt-6 mb-2 text-gray-100">
            {line.slice(5)}
          </h4>
        );
        continue;
      }

      // Blockquotes
      if (line.startsWith('> ')) {
        flushList();
        elements.push(
          <blockquote key={elements.length} className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-300">
            {line.slice(2)}
          </blockquote>
        );
        continue;
      }

      // Lists
      if (line.match(/^- \[[ x]\] /)) {
        const checked = line.includes('[x]');
        const text = line.slice(6);
        elements.push(
          <div key={elements.length} className="flex items-center gap-2 my-1 text-gray-300">
            <input type="checkbox" checked={checked} readOnly className="rounded border-gray-600" />
            <span>{text}</span>
          </div>
        );
        continue;
      }
      if (line.startsWith('- ') || line.startsWith('* ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(line.slice(2));
        continue;
      }
      if (line.match(/^\d+\. /)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(line.replace(/^\d+\. /, ''));
        continue;
      }

      // Horizontal rules
      if (line === '---') {
        flushList();
        elements.push(<hr key={elements.length} className="my-8 border-gray-700" />);
        continue;
      }

      // Empty lines
      if (line.trim() === '') {
        flushList();
        continue;
      }

      // Regular paragraphs
      flushList();

      // Process inline formatting
      let processedLine = line
        .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-1 rounded text-blue-400">$1</code>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-blue-400 hover:text-blue-300 underline">$1</a>');

      elements.push(
        <p
          key={elements.length}
          className="text-gray-300 leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: processedLine }}
        />
      );
    }

    flushList();
    flushTable();

    return elements;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 transition"
          >
            {t.backToBlog}
          </Link>

          {/* Category and meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-400">{post.date}</span>
            <span className="text-sm text-gray-400">·</span>
            <span className="text-sm text-gray-400">{post.readTime} {t.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-400 mb-8">
            {post.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {post.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <p className="text-white font-medium">{post.author}</p>
              <p className="text-sm text-gray-400">{t.author}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8 md:pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative aspect-video rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pb-12 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* Share Section */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="border-t border-b border-gray-700 py-6">
            <p className="text-gray-400 mb-4">{t.shareArticle}:</p>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="pb-12 md:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-white mb-8">{t.relatedArticles}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all"
                >
                  <div className="relative aspect-video">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-blue-400 bg-blue-500/20 px-2 py-1 rounded">
                        {relatedPost.category}
                      </span>
                      <span className="text-xs text-gray-500">{relatedPost.date}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-white group-hover:text-blue-400 transition">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <span className="text-blue-400 font-medium text-sm group-hover:text-blue-300">
                      {t.readMore} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
