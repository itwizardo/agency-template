'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useLanguage, localeNames, Locale } from '@/lib/i18n';

const locales: Locale[] = ['nl', 'en', 'de', 'fr', 'es'];

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <Menu as="div" className="relative">
      <MenuButton className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-gray-300 transition hover:text-white hover:bg-gray-800">
        <span className="text-base">{localeNames[locale].flag}</span>
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <svg
          className="h-4 w-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </MenuButton>
      <MenuItems className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-xl bg-white p-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
        {locales.map((loc) => (
          <MenuItem key={loc}>
            {({ focus }) => (
              <button
                onClick={() => setLocale(loc)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm ${
                  locale === loc
                    ? 'bg-blue-50 text-blue-600'
                    : focus
                    ? 'bg-gray-50 text-gray-900'
                    : 'text-gray-700'
                }`}
              >
                <span className="text-base">{localeNames[loc].flag}</span>
                {localeNames[loc].name}
                {locale === loc && (
                  <svg className="ml-auto h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
