'use client';

import { useLanguage } from "@/lib/i18n";
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DitherBackground = dynamic(() => import('./dither-background'), { ssr: false });

export default function Cta() {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl bg-gray-950"
          data-aos="zoom-y-out"
        >
          {/* Dither Background */}
          {mounted && (
            <div className="absolute inset-0">
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
            </div>
          )}

          <div className="relative px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 text-3xl font-bold text-white md:mb-12 md:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mb-8 text-lg text-gray-300">
              {t.cta.subtitle}
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="/contact"
              >
                <span className="relative inline-flex items-center">
                  {t.cta.button}{" "}
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
