'use client';

import Link from "next/link";
import Logo from "./logo";
import { useLanguage } from "@/lib/i18n";

export default function Footer({ border = false }: { border?: boolean }) {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t border-gray-800" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-400 max-w-xs">
              {t.footer.description}
            </div>
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </div>
            <div className="text-xs text-gray-500 space-y-0.5">
              <div className="font-medium text-gray-400">Geors Webshop Company</div>
              <div>KVK: 94768234</div>
              <div>BTW: NL005107436B91</div>
            </div>
          </div>

          {/* 2nd block - Diensten/Services Column 1 */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-200">{t.footer.services.title}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/webdesign"
                >
                  {t.footer.services.webdesign}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/website-bouw"
                >
                  {t.footer.services.websiteBuild}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/webshop-ontwikkeling"
                >
                  {t.footer.services.ecommerceStrategy}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/zoekmachine-optimalisatie"
                >
                  {t.footer.services.seo}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/chatbots"
                >
                  {t.footer.services.chatbots}
                </Link>
              </li>
            </ul>
          </div>

          {/* 3rd block - Diensten/Services Column 2 */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-200">{t.footer.services.title2}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/domeinregistratie"
                >
                  {t.footer.services.domainRegistration}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/webhosting"
                >
                  {t.footer.services.webhosting}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/onderhoud-support"
                >
                  {t.footer.services.maintenance}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/migraties"
                >
                  {t.footer.services.migrations}
                </Link>
              </li>
            </ul>
          </div>

          {/* 5th block - Bedrijf/Company */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-200">{t.footer.company.title}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/over-ons"
                >
                  {t.footer.company.about}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/portfolio"
                >
                  {t.footer.company.portfolio}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/blog"
                >
                  {t.footer.company.blog}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/vacatures"
                >
                  {t.footer.company.careers}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/contact"
                >
                  {t.footer.company.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* 6th block - Hulpbronnen/Resources */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-1">
            <h3 className="text-sm font-medium text-gray-200">{t.footer.resources.title}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/e-commerce-gids"
                >
                  {t.footer.resources.ecommerceGuide}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/algemene-voorwaarden"
                >
                  {t.footer.resources.terms}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/privacybeleid"
                >
                  {t.footer.resources.privacy}
                </Link>
              </li>
            </ul>
          </div>

          {/* 7th block - Social */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-200">{t.footer.social.title}</h3>
            <ul className="flex gap-1">
              <li>
                <a
                  className="flex items-center justify-center text-gray-400 transition hover:text-blue-400"
                  href="https://www.facebook.com/profile.php?id=61585746556866"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center justify-center text-gray-400 transition hover:text-blue-400"
                  href="https://github.com/itwizardo/agency-template"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-center text-[348px] font-bold leading-none text-gray-800/80">
          GWC
        </div>
        {/* Glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-500 blur-[80px] opacity-50"></div>
        </div>
      </div>
    </footer>
  );
}
