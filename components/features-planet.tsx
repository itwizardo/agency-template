'use client';

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import AvatarAI01 from "@/public/images/avatar-ai-01.jpg";
import AvatarAI02 from "@/public/images/avatar-ai-02.jpg";
import AvatarAI03 from "@/public/images/avatar-ai-03.jpg";
import AvatarAI04 from "@/public/images/avatar-ai-04.jpg";

// Dynamic project tags data
const projectTags = [
  { name: "lucas/webshop-pro", location: "Amsterdam, NL", avatar: AvatarAI01 },
  { name: "sophie/brand-redesign", location: "Milan, Italy", avatar: AvatarAI02 },
  { name: "jan/ecommerce-app", location: "New York, USA", avatar: AvatarAI03 },
  { name: "emma/portfolio-site", location: "London, UK", avatar: AvatarAI04 },
];

// Icons for each service
const icons = [
  // Design icon (palette)
  <svg
    key="design"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2 8a6 6 0 0 1 6-6c.93 0 1.81.21 2.6.58l-1.56 1.56A4 4 0 0 0 4 8c0 .6.13 1.17.37 1.68l-1.56 1.56A5.97 5.97 0 0 1 2 8Zm6 6a6 6 0 0 1-2.6-.58l1.56-1.56A4 4 0 0 0 12 8c0-.6-.13-1.17-.37-1.68l1.56-1.56A5.97 5.97 0 0 1 14 8a6 6 0 0 1-6 6Z" />
  </svg>,
  // Integration icon (puzzle)
  <svg
    key="integration"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path d="M6 2a2 2 0 1 1 4 0h2a2 2 0 0 1 2 2v2a2 2 0 1 1 0 4v2a2 2 0 0 1-2 2H6a2 2 0 1 1-4 0H2a2 2 0 0 1-2-2V6a2 2 0 1 1 0-4V2a2 2 0 0 1 2-2h4Z" />
  </svg>,
  // SEO icon (search)
  <svg
    key="seo"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path d="M6.5 0a6.5 6.5 0 1 0 4.06 11.56l3.44 3.44a1 1 0 0 0 1.41-1.41l-3.44-3.44A6.5 6.5 0 0 0 6.5 0ZM2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z" />
  </svg>,
  // Mobile icon (smartphone)
  <svg
    key="mobile"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4Zm4 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM4 2h8v9H4V2Z" />
  </svg>,
  // Speed icon (lightning)
  <svg
    key="speed"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path d="M8.5 0a.5.5 0 0 1 .45.28l5 10A.5.5 0 0 1 13.5 11H9.72l.77 4.64a.5.5 0 0 1-.89.39l-7-9A.5.5 0 0 1 3 6h4.28L6.05.36A.5.5 0 0 1 6.5 0h2Z" />
  </svg>,
  // Support icon (headset)
  <svg
    key="support"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path d="M8 0a7 7 0 0 0-7 7v3a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H3.05A5 5 0 0 1 8 2a5 5 0 0 1 4.95 5H11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3V7a7 7 0 0 0-7-7ZM4 14H3a1 1 0 0 1-1-1V9h2v5Zm10-1a1 1 0 0 1-1 1h-1V9h2v4Z" />
  </svg>,
];

export default function FeaturesPlanet() {
  const { t } = useLanguage();

  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              {t.features.title}
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              {t.features.subtitle}
            </p>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    {/* Tag 1 - Top left */}
                    <div className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500">
                      <div className="flex items-center gap-3 bg-gray-800/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-700/50">
                        <Image
                          src={projectTags[0].avatar}
                          alt={projectTags[0].name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-white text-sm font-medium">{projectTags[0].name}</div>
                          <div className="text-gray-400 text-xs">{projectTags[0].location}</div>
                        </div>
                        <div className="text-blue-400 ml-2">›_</div>
                      </div>
                    </div>
                    {/* Tag 2 - Top right */}
                    <div className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-40 transition-opacity duration-500">
                      <div className="flex items-center gap-3 bg-gray-800/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-700/50">
                        <Image
                          src={projectTags[1].avatar}
                          alt={projectTags[1].name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-white text-sm font-medium">{projectTags[1].name}</div>
                          <div className="text-gray-400 text-xs">{projectTags[1].location}</div>
                        </div>
                        <div className="text-blue-400 ml-2">›_</div>
                      </div>
                    </div>
                    {/* Tag 3 - Bottom left */}
                    <div className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-30 transition-opacity duration-500">
                      <div className="flex items-center gap-3 bg-gray-800/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-700/50">
                        <Image
                          src={projectTags[2].avatar}
                          alt={projectTags[2].name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-white text-sm font-medium">{projectTags[2].name}</div>
                          <div className="text-gray-400 text-xs">{projectTags[2].location}</div>
                        </div>
                        <div className="text-blue-400 ml-2">›_</div>
                      </div>
                    </div>
                    {/* Tag 4 - Bottom right */}
                    <div className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500">
                      <div className="flex items-center gap-3 bg-gray-800/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-gray-700/50">
                        <Image
                          src={projectTags[3].avatar}
                          alt={projectTags[3].name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="text-white text-sm font-medium">{projectTags[3].name}</div>
                          <div className="text-gray-400 text-xs">{projectTags[3].location}</div>
                        </div>
                        <div className="text-blue-400 ml-2">›_</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            {t.features.items.map((feature, index) => (
              <article
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:bg-gray-800/50 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    {icons[index]}
                  </div>
                  <h3 className="font-medium text-gray-200 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[15px] text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
