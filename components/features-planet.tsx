'use client';

import Image from "next/image";
import Link from "next/link";
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

// Service links for each feature
const serviceLinks = [
  "/diensten/website-bouw",
  "/diensten/chatbots",
  "/diensten/zoekmachine-optimalisatie",
  "/diensten/domeinregistratie",
  "/diensten/webhosting",
  "/contact",
];

// Icons for each service
const icons = [
  // Website icon (globe/browser)
  <svg
    key="website"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.173.324-.33.682-.468 1.068H7.5V2.077zM4.09 4H2.255a7.024 7.024 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v1.923c-.67-.204-1.335-.82-1.887-1.855A5.738 5.738 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v1.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>,
  // Chatbot icon (chat bubble with robot)
  <svg
    key="chatbot"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.034.309-3.235.309-1.201 0-2.39-.162-3.235-.309A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
    <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
  </svg>,
  // Marketing/SEO icon (graph trending up)
  <svg
    key="marketing"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
  </svg>,
  // Domain icon (at symbol)
  <svg
    key="domain"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
  </svg>,
  // Hosting icon (server)
  <svg
    key="hosting"
    className="fill-blue-500"
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
  >
    <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z" />
    <path d="M1.333 6.334v3C1.333 10.806 4.318 12 8 12s6.667-1.194 6.667-2.667v-3C14.06 7.545 11.314 8.5 8 8.5c-3.314 0-6.06-.955-6.667-2.166z" />
    <path d="M1.333 11v2.333C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667V11c-.607 1.211-3.353 2.166-6.667 2.166-3.314 0-6.06-.955-6.667-2.166z" />
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
              <Link
                key={index}
                href={serviceLinks[index]}
                className="group cursor-pointer transition-all duration-300 hover:bg-gray-800/50 rounded-lg block"
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
