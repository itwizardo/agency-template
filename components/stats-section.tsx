'use client';

import { useLanguage } from "@/lib/i18n";
import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const DitherBackground = dynamic(() => import('./dither-background'), { ssr: false });

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-white">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    nl: {
      title: "Cijfers die spreken",
      subtitle: "Onze resultaten in de afgelopen 10 jaar",
      stats: [
        { value: 200, suffix: '+', label: 'Tevreden klanten' },
        { value: 10, suffix: '+', label: 'Jaar ervaring' },
        { value: 500, suffix: '+', label: 'Projecten opgeleverd' },
        { value: 98, suffix: '%', label: 'Klanttevredenheid' },
      ],
    },
    en: {
      title: "Numbers that speak",
      subtitle: "Our results over the past 10 years",
      stats: [
        { value: 200, suffix: '+', label: 'Happy customers' },
        { value: 10, suffix: '+', label: 'Years experience' },
        { value: 500, suffix: '+', label: 'Projects delivered' },
        { value: 98, suffix: '%', label: 'Customer satisfaction' },
      ],
    },
    de: {
      title: "Zahlen, die sprechen",
      subtitle: "Unsere Ergebnisse der letzten 10 Jahre",
      stats: [
        { value: 200, suffix: '+', label: 'Zufriedene Kunden' },
        { value: 10, suffix: '+', label: 'Jahre Erfahrung' },
        { value: 500, suffix: '+', label: 'Projekte geliefert' },
        { value: 98, suffix: '%', label: 'Kundenzufriedenheit' },
      ],
    },
    fr: {
      title: "Des chiffres qui parlent",
      subtitle: "Nos résultats des 10 dernières années",
      stats: [
        { value: 200, suffix: '+', label: 'Clients satisfaits' },
        { value: 10, suffix: '+', label: 'Années d\'expérience' },
        { value: 500, suffix: '+', label: 'Projets livrés' },
        { value: 98, suffix: '%', label: 'Satisfaction client' },
      ],
    },
    es: {
      title: "Números que hablan",
      subtitle: "Nuestros resultados en los últimos 10 años",
      stats: [
        { value: 200, suffix: '+', label: 'Clientes satisfechos' },
        { value: 10, suffix: '+', label: 'Años de experiencia' },
        { value: 500, suffix: '+', label: 'Proyectos entregados' },
        { value: 98, suffix: '%', label: 'Satisfacción del cliente' },
      ],
    },
  };

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.title}</h2>
          <p className="text-gray-300">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {t.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-300 mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
