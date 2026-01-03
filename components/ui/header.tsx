'use client';

import { useState } from 'react';
import Link from "next/link";
import Logo from "./logo";
import LanguageToggle from "./language-toggle";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed z-30 w-full top-4 md:top-6 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Outer glow container */}
        <div className="relative">
          {/* Gradient border glow effect */}
          <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-b from-white/20 via-white/5 to-white/10" />

          {/* Main header bar - glass effect */}
          <div className="relative flex items-center justify-between h-16 px-8 rounded-[27px] bg-black/30 backdrop-blur-md shadow-2xl shadow-black/20">
            {/* Subtle inner glow on top */}
            <div className="absolute inset-x-0 top-0 h-px rounded-t-[27px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            {/* Inner highlight */}
            <div className="absolute inset-0 rounded-[27px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            {/* Site branding */}
            <div className="flex items-center">
              <Logo />
            </div>

            {/* Desktop Navigation - right aligned */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.header.home}
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                  {t.footer.services.title}
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl border border-gray-700/50 p-2 min-w-[200px] shadow-xl">
                    <Link href="/diensten/webdesign" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                      {t.footer.services.webdesign}
                    </Link>
                    <Link href="/diensten/website-bouw" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                      {t.footer.services.websiteBuild}
                    </Link>
                    <Link href="/diensten/webshop-ontwikkeling" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                      {t.footer.services.ecommerceStrategy}
                    </Link>
                    <Link href="/diensten/zoekmachine-optimalisatie" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                      {t.footer.services.seo}
                    </Link>
                    <Link href="/diensten/chatbots" className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                      {t.footer.services.chatbots}
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/diensten/domeinregistratie"
                className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.footer.services.domainRegistration}
              </Link>
              <Link
                href="/diensten/webhosting"
                className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.footer.services.webhosting}
              </Link>
              <Link
                href="/portfolio"
                className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.header.portfolio}
              </Link>
              <Link
                href="/contact"
                className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.header.contact}
              </Link>
              <a
                href="https://billing.gwcwebdesign.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-medium text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center gap-1"
              >
                {t.header.clientPortal}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <div className="flex items-center ml-4 pl-4 border-l border-gray-700/50">
                <LanguageToggle />
              </div>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl hover:bg-white/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-gray-600/30 to-gray-900/30" />
            <div className="relative rounded-2xl bg-gray-900/98 backdrop-blur-xl p-5">
              <nav className="flex flex-col gap-1">
                <div className="flex justify-center pb-4 mb-3 border-b border-gray-800/50">
                  <LanguageToggle />
                </div>
                <Link
                  href="/"
                  className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.header.home}
                </Link>

                {/* Mobile Services Section */}
                <div className="px-4 py-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{t.footer.services.title}</p>
                  <div className="grid grid-cols-2 gap-1">
                    <Link href="/diensten/webdesign" className="py-2 px-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {t.footer.services.webdesign}
                    </Link>
                    <Link href="/diensten/website-bouw" className="py-2 px-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {t.footer.services.websiteBuild}
                    </Link>
                    <Link href="/diensten/webshop-ontwikkeling" className="py-2 px-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {t.footer.services.ecommerceStrategy}
                    </Link>
                    <Link href="/diensten/zoekmachine-optimalisatie" className="py-2 px-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {t.footer.services.seo}
                    </Link>
                    <Link href="/diensten/chatbots" className="py-2 px-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                      {t.footer.services.chatbots}
                    </Link>
                  </div>
                </div>

                <Link
                  href="/portfolio"
                  className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.header.portfolio}
                </Link>
                <Link
                  href="/over-ons"
                  className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.footer.company.about}
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.header.contact}
                </Link>
                <Link
                  href="/contact"
                  className="mt-3 py-3 bg-white text-gray-900 text-center rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.header.quote}
                </Link>
                <a
                  href="https://billing.gwcwebdesign.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 py-3 text-blue-400 text-center rounded-xl font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.header.clientPortal}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
