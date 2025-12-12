'use client';

import { useState } from 'react';
import Link from "next/link";
import Logo from "./logo";
import LanguageToggle from "./language-toggle";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <nav className="hidden md:flex items-center gap-10">
              <Link
                href="/"
                className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.header.home}
              </Link>
              <Link
                href="/portfolio"
                className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.header.portfolio}
              </Link>
              <Link
                href="/diensten/chatbots"
                className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.header.chatbots}
              </Link>
              <Link
                href="/contact"
                className="text-[15px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
              >
                {t.header.contact}
              </Link>
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
            isMobileMenuOpen ? 'max-h-[400px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
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
                <Link
                  href="/portfolio"
                  className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.header.portfolio}
                </Link>
                <Link
                  href="/diensten/chatbots"
                  className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t.header.chatbots}
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
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
