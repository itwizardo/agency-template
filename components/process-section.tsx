'use client';

import { useLanguage } from "@/lib/i18n";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DitherBackground = dynamic(() => import('./dither-background'), { ssr: false });

export default function ProcessSection() {
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    nl: {
      title: "Hoe wij werken",
      subtitle: "Van idee tot lancering in 4 stappen",
      steps: [
        { number: "01", title: "Discovery", description: "We beginnen met een gratis strategiegesprek om uw doelen, doelgroep en wensen te begrijpen." },
        { number: "02", title: "Design", description: "We ontwerpen een unieke website die past bij uw merk en optimaal converteert." },
        { number: "03", title: "Development", description: "We bouwen uw website met de nieuwste technologieën voor optimale performance." },
        { number: "04", title: "Launch", description: "We lanceren uw website en zorgen voor een soepele overdracht met training." },
      ],
    },
    en: {
      title: "How we work",
      subtitle: "From idea to launch in 4 steps",
      steps: [
        { number: "01", title: "Discovery", description: "We start with a free strategy call to understand your goals, audience and wishes." },
        { number: "02", title: "Design", description: "We design a unique website that fits your brand and converts optimally." },
        { number: "03", title: "Development", description: "We build your website with the latest technologies for optimal performance." },
        { number: "04", title: "Launch", description: "We launch your website and ensure a smooth handover with training." },
      ],
    },
    de: {
      title: "Wie wir arbeiten",
      subtitle: "Von der Idee zur Veröffentlichung in 4 Schritten",
      steps: [
        { number: "01", title: "Entdeckung", description: "Wir beginnen mit einem kostenlosen Strategiegespräch, um Ihre Ziele zu verstehen." },
        { number: "02", title: "Design", description: "Wir entwerfen eine einzigartige Website, die zu Ihrer Marke passt." },
        { number: "03", title: "Entwicklung", description: "Wir bauen Ihre Website mit den neuesten Technologien." },
        { number: "04", title: "Start", description: "Wir starten Ihre Website und sorgen für eine reibungslose Übergabe." },
      ],
    },
    fr: {
      title: "Comment nous travaillons",
      subtitle: "De l'idée au lancement en 4 étapes",
      steps: [
        { number: "01", title: "Découverte", description: "Nous commençons par un appel stratégique gratuit pour comprendre vos objectifs." },
        { number: "02", title: "Design", description: "Nous concevons un site web unique qui correspond à votre marque." },
        { number: "03", title: "Développement", description: "Nous construisons votre site avec les dernières technologies." },
        { number: "04", title: "Lancement", description: "Nous lançons votre site et assurons une transition en douceur." },
      ],
    },
    es: {
      title: "Cómo trabajamos",
      subtitle: "De la idea al lanzamiento en 4 pasos",
      steps: [
        { number: "01", title: "Descubrimiento", description: "Comenzamos con una llamada estratégica gratuita para entender sus objetivos." },
        { number: "02", title: "Diseño", description: "Diseñamos un sitio web único que se adapte a su marca." },
        { number: "03", title: "Desarrollo", description: "Construimos su sitio web con las últimas tecnologías." },
        { number: "04", title: "Lanzamiento", description: "Lanzamos su sitio web y aseguramos una transición suave." },
      ],
    },
  };

  const icons = [
    <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
    <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>,
  ];

  const t = content[locale];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Dither Background */}
      {mounted && (
        <DitherBackground
          waveColor={[0.4, 0.4, 0.4]}
          waveSpeed={0.02}
          waveFrequency={2}
          waveAmplitude={0.3}
          colorNum={4}
          pixelSize={3}
          enableMouseInteraction={true}
          mouseRadius={0.3}
        />
      )}

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-gray-300 text-lg">{t.subtitle}</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.steps.map((step, index) => (
              <div
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-6 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 mt-2 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                    {icons[index]}
                  </div>

                  <h3 className="font-semibold text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < t.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 text-gray-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
