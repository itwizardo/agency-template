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
              <div className="font-medium text-gray-400">Your Company Name</div>
              <div>Registration: 00000000</div>
              <div>VAT: XX000000000</div>
            </div>
            <div className="text-xs text-gray-500 mt-3">
              Template by <a href="https://gwcwebdesign.com" target="_blank" rel="noopener" className="text-blue-400 hover:text-blue-300 transition">GWC Web Design</a>
            </div>
          </div>

          {/* 2nd block - Diensten/Services */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-200">{t.footer.services.title}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/webshop-ontwikkeling"
                >
                  {t.footer.services.webshopDevelopment}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/e-commerce-strategie"
                >
                  {t.footer.services.ecommerceStrategy}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 transition hover:text-white"
                  href="/diensten/seo-marketing"
                >
                  {t.footer.services.seoMarketing}
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

          {/* 3rd block - Bedrijf/Company */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
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

          {/* 4th block - Hulpbronnen/Resources */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
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

          {/* 5th block - Social */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium text-gray-200">{t.footer.social.title}</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-gray-400 transition hover:text-blue-400"
                  href="#0"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-gray-400 transition hover:text-blue-400"
                  href="#0"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-gray-400 transition hover:text-blue-400"
                  href="#0"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-8 w-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative -mt-16 h-60 w-full overflow-hidden" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-center text-[200px] font-bold leading-none text-gray-800/80">
          YourBrand
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
