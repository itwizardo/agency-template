'use client';

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n";

// Dynamically import dither background to avoid SSR issues with Three.js
const DitherBackground = dynamic(() => import("@/components/dither-background"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-gray-100 dark:bg-gray-900" />
});
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

// Terminal typing steps per locale
const terminalStepsContent = {
  nl: [
    { text: "> Nieuwe website aanmaken...", delay: 0, color: "text-gray-200" },
    { text: "Design & componenten laden", delay: 800, color: "text-gray-400" },
    { text: "SEO & performance optimaliseren", delay: 1600, color: "text-gray-400" },
    { text: "✓ Responsief op alle apparaten", delay: 2400, color: "text-green-400" },
    { text: "> Lanceren naar productie", delay: 3200, color: "text-gray-200" },
    { text: "✓ Website is live!", delay: 4000, color: "text-green-400" },
  ],
  en: [
    { text: "> Creating new website...", delay: 0, color: "text-gray-200" },
    { text: "Loading design & components", delay: 800, color: "text-gray-400" },
    { text: "Optimizing SEO & performance", delay: 1600, color: "text-gray-400" },
    { text: "✓ Responsive on all devices", delay: 2400, color: "text-green-400" },
    { text: "> Deploying to production", delay: 3200, color: "text-gray-200" },
    { text: "✓ Website is live!", delay: 4000, color: "text-green-400" },
  ],
  de: [
    { text: "> Neue Website erstellen...", delay: 0, color: "text-gray-200" },
    { text: "Design & Komponenten laden", delay: 800, color: "text-gray-400" },
    { text: "SEO & Performance optimieren", delay: 1600, color: "text-gray-400" },
    { text: "✓ Responsiv auf allen Geräten", delay: 2400, color: "text-green-400" },
    { text: "> In Produktion bereitstellen", delay: 3200, color: "text-gray-200" },
    { text: "✓ Website ist live!", delay: 4000, color: "text-green-400" },
  ],
  fr: [
    { text: "> Création du nouveau site...", delay: 0, color: "text-gray-200" },
    { text: "Chargement design & composants", delay: 800, color: "text-gray-400" },
    { text: "Optimisation SEO & performance", delay: 1600, color: "text-gray-400" },
    { text: "✓ Responsive sur tous les appareils", delay: 2400, color: "text-green-400" },
    { text: "> Déploiement en production", delay: 3200, color: "text-gray-200" },
    { text: "✓ Le site est en ligne!", delay: 4000, color: "text-green-400" },
  ],
  es: [
    { text: "> Creando nuevo sitio web...", delay: 0, color: "text-gray-200" },
    { text: "Cargando diseño y componentes", delay: 800, color: "text-gray-400" },
    { text: "Optimizando SEO y rendimiento", delay: 1600, color: "text-gray-400" },
    { text: "✓ Responsivo en todos los dispositivos", delay: 2400, color: "text-green-400" },
    { text: "> Desplegando a producción", delay: 3200, color: "text-gray-200" },
    { text: "✓ ¡El sitio está en línea!", delay: 4000, color: "text-green-400" },
  ],
};

const loadingText = {
  nl: "Website laden...",
  en: "Loading website...",
  de: "Website laden...",
  fr: "Chargement du site...",
  es: "Cargando sitio web...",
};

export default function HeroHome() {
  const { t, locale } = useLanguage();
  const terminalSteps = terminalStepsContent[locale];
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [showWebsite, setShowWebsite] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);
  const [preloadIframe, setPreloadIframe] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Iframe is fully loaded when both transition started AND iframe has loaded
  const websiteLoaded = showWebsite && iframeReady;

  useEffect(() => {
    setMounted(true);
    // Reset animation on mount
    setVisibleLines([]);
    setShowWebsite(false);
    setIframeReady(false);

    // Start preloading iframe immediately (hidden)
    setPreloadIframe(true);

    // Show terminal lines progressively
    terminalSteps.forEach((step, index) => {
      setTimeout(() => {
        setVisibleLines(prev => [...prev, index]);
      }, step.delay);
    });

    // Start website transition after terminal completes
    setTimeout(() => {
      setShowWebsite(true);
    }, 5000);
  }, []);

  // Wave colors for dark theme
  const waveColor: [number, number, number] = [0.4, 0.4, 0.4];

  return (
    <section className="relative min-h-screen">
      {/* Dither Background */}
      {mounted && (
        <DitherBackground
          waveColor={waveColor}
          waveSpeed={0.03}
          waveFrequency={2.5}
          waveAmplitude={0.35}
          colorNum={4}
          pixelSize={3}
          enableMouseInteraction={true}
          mouseRadius={0.4}
        />
      )}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header - floating text */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6"
              data-aos="zoom-y-out"
            >
              <div className="flex justify-center items-center gap-3 py-3">
                <div className="flex -space-x-3">
                  <Image
                    className="box-content rounded-full border-2 border-white/50"
                    src={Avatar01}
                    width={32}
                    height={32}
                    alt="Klant"
                  />
                  <Image
                    className="box-content rounded-full border-2 border-white/50"
                    src={Avatar02}
                    width={32}
                    height={32}
                    alt="Klant"
                  />
                  <Image
                    className="box-content rounded-full border-2 border-white/50"
                    src={Avatar03}
                    width={32}
                    height={32}
                    alt="Klant"
                  />
                  <Image
                    className="box-content rounded-full border-2 border-white/50"
                    src={Avatar04}
                    width={32}
                    height={32}
                    alt="Klant"
                  />
                  <Image
                    className="box-content rounded-full border-2 border-white/50"
                    src={Avatar05}
                    width={32}
                    height={32}
                    alt="Klant"
                  />
                  <Image
                    className="box-content rounded-full border-2 border-white/50"
                    src={Avatar06}
                    width={32}
                    height={32}
                    alt="Klant"
                  />
                </div>
                <span className="text-sm font-medium text-white">
                  {t.hero.badge}
                </span>
              </div>
            </div>
            <h1
              className="mb-6 text-5xl font-bold text-white md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {t.hero.title} <br className="max-lg:hidden" />
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-200"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {t.hero.subtitle}
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-white text-gray-900 shadow-lg hover:bg-gray-100 sm:mb-0 sm:w-auto"
                    href="/contact"
                  >
                    <span className="relative inline-flex items-center">
                      {t.hero.cta}{" "}
                      <span className="ml-1 tracking-normal text-gray-500 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 border border-gray-700 sm:ml-4 sm:w-auto"
                    href="/portfolio"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image - Terminal to Website transition */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl shadow-2xl overflow-hidden">

              {/* Terminal Layer */}
              <div
                className={`absolute inset-0 bg-gray-900 px-5 py-3 transition-all duration-1000 ease-in-out ${
                  showWebsite ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                {/* Browser chrome */}
                <div className="relative mb-6 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-gray-600)_4.5px,transparent_0)] after:w-[41px]">
                  <span className="text-[13px] font-medium text-white">
                    yourdomain.com
                  </span>
                </div>
                {/* Terminal content */}
                <div className="font-mono text-sm leading-relaxed">
                  {terminalSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`transition-all duration-300 ${
                        visibleLines.includes(index)
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2'
                      } ${step.color}`}
                    >
                      {step.text}
                      {visibleLines.includes(index) && index === visibleLines.length - 1 && !showWebsite && (
                        <span className="inline-block w-2 h-4 bg-gray-400 ml-1 animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Website Layer - Real iframe */}
              <div
                className={`absolute inset-0 bg-white flex flex-col transition-all duration-1000 ease-in-out ${
                  showWebsite ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
              >
                {/* Browser chrome - light */}
                <div className="bg-gray-100 px-4 py-2 flex items-center gap-3 border-b border-gray-200 shrink-0">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white rounded-md px-4 py-1 text-xs text-gray-600 flex items-center gap-2 border border-gray-200">
                      <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      aiwebgen.io
                    </div>
                  </div>
                </div>

                {/* Live website iframe */}
                <div className="flex-1 relative overflow-hidden bg-gray-50">
                  {/* Loading state - always visible until iframe loads */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 z-10 transition-opacity duration-500 ${
                      websiteLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-4">
                      {/* Animated loading circle */}
                      <div className="relative">
                        <div className="w-12 h-12 border-4 border-gray-200 rounded-full" />
                        <div className="absolute inset-0 w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-sm font-medium text-gray-700">{loadingText[locale]}</span>
                        <span className="text-xs text-gray-400">aiwebgen.io</span>
                      </div>
                      {/* Animated dots */}
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>

                  {/* Iframe - preloads immediately but hidden until transition */}
                  {preloadIframe && (
                    <iframe
                      src="https://aiwebgen.io"
                      className={`absolute inset-0 w-full h-full border-0 transition-opacity duration-300 ${
                        showWebsite ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        transform: 'scale(0.5)',
                        transformOrigin: 'top left',
                        width: '200%',
                        height: '200%'
                      }}
                      title="Live website preview"
                      onLoad={() => setIframeReady(true)}
                    />
                  )}
                </div>
              </div>

              {/* Glowing border effect during transition */}
              <div
                className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
                  showWebsite && !websiteLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  boxShadow: '0 0 40px rgba(59, 130, 246, 0.5), inset 0 0 40px rgba(59, 130, 246, 0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
