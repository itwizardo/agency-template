'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';

interface DomainResult {
  tld: string;
  available: boolean;
  price: string | null;
}

const TLDS = ['.nl', '.com', '.eu', '.be', '.de', '.net'];

const PRICES: Record<string, string> = {
  '.nl': '12,41',
  '.com': '14,99',
  '.eu': '11,99',
  '.be': '12,99',
  '.de': '12,99',
  '.net': '16,99',
};

export default function DomainSearch() {
  const { locale } = useLanguage();
  const [domain, setDomain] = useState('');
  const [results, setResults] = useState<DomainResult[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const content = {
    nl: {
      title: 'Vind je perfecte domeinnaam',
      placeholder: 'Zoek je domeinnaam...',
      search: 'Zoeken',
      available: 'Beschikbaar',
      unavailable: 'Niet beschikbaar',
      register: 'Registreren',
      perYear: '/jaar',
      resultsFor: 'Resultaten voor',
      searching: 'Zoeken...',
      error: 'Er ging iets mis. Probeer het opnieuw.',
      invalidDomain: 'Voer een geldige domeinnaam in',
    },
    en: {
      title: 'Find your perfect domain name',
      placeholder: 'Search your domain name...',
      search: 'Search',
      available: 'Available',
      unavailable: 'Unavailable',
      register: 'Register',
      perYear: '/year',
      resultsFor: 'Results for',
      searching: 'Searching...',
      error: 'Something went wrong. Please try again.',
      invalidDomain: 'Enter a valid domain name',
    },
    de: {
      title: 'Finden Sie Ihren perfekten Domainnamen',
      placeholder: 'Domainnamen suchen...',
      search: 'Suchen',
      available: 'Verfügbar',
      unavailable: 'Nicht verfügbar',
      register: 'Registrieren',
      perYear: '/Jahr',
      resultsFor: 'Ergebnisse für',
      searching: 'Suchen...',
      error: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
      invalidDomain: 'Geben Sie einen gültigen Domainnamen ein',
    },
    fr: {
      title: 'Trouvez votre nom de domaine parfait',
      placeholder: 'Rechercher votre nom de domaine...',
      search: 'Rechercher',
      available: 'Disponible',
      unavailable: 'Non disponible',
      register: 'Enregistrer',
      perYear: '/an',
      resultsFor: 'Résultats pour',
      searching: 'Recherche...',
      error: 'Une erreur s\'est produite. Veuillez réessayer.',
      invalidDomain: 'Entrez un nom de domaine valide',
    },
    es: {
      title: 'Encuentra tu nombre de dominio perfecto',
      placeholder: 'Buscar tu nombre de dominio...',
      search: 'Buscar',
      available: 'Disponible',
      unavailable: 'No disponible',
      register: 'Registrar',
      perYear: '/año',
      resultsFor: 'Resultados para',
      searching: 'Buscando...',
      error: 'Algo salió mal. Por favor, inténtelo de nuevo.',
      invalidDomain: 'Ingrese un nombre de dominio válido',
    },
  };

  const t = content[locale];

  const cleanDomain = (input: string): string => {
    // Remove protocol, www, and any TLD
    let cleaned = input.toLowerCase().trim();
    cleaned = cleaned.replace(/^(https?:\/\/)?(www\.)?/, '');
    // Remove any existing TLD
    const parts = cleaned.split('.');
    if (parts.length > 1 && TLDS.includes('.' + parts[parts.length - 1])) {
      parts.pop();
    }
    cleaned = parts.join('');
    // Remove invalid characters
    cleaned = cleaned.replace(/[^a-z0-9-]/g, '');
    return cleaned;
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanedDomain = cleanDomain(domain);

    if (!cleanedDomain || cleanedDomain.length < 2) {
      setError(t.invalidDomain);
      return;
    }

    setLoading(true);
    setError('');
    setResults(null);

    try {
      const response = await fetch('/api/domain-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: cleanedDomain }),
      });

      if (!response.ok) {
        throw new Error('API error');
      }

      const data = await response.json();
      setResults(data.results);
      setDomain(cleanedDomain);
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  const getRegisterUrl = (domainName: string, tld: string) => {
    // WHMCS cart URL format for domain registration
    return `https://billing.gwcwebdesign.com/cart.php?a=add&domain=register&query=${domainName}${tld}`;
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-12">
      <h2 className="text-2xl font-bold text-white text-center mb-6">{t.title}</h2>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder={t.placeholder}
            className="w-full px-5 py-4 bg-gray-900/70 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 text-lg"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {t.searching}
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {t.search}
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="text-red-400 text-center mb-4">{error}</div>
      )}

      {results && (
        <div className="mt-8">
          <p className="text-gray-400 text-center mb-4">
            {t.resultsFor} "<span className="text-white font-semibold">{domain}</span>"
          </p>
          <div className="space-y-3 max-w-2xl mx-auto">
            {results.map((result) => (
              <div
                key={result.tld}
                className={`flex items-center justify-between p-4 rounded-xl border ${
                  result.available
                    ? 'bg-gray-800/50 border-gray-700/50 hover:border-green-500/50'
                    : 'bg-gray-800/30 border-gray-800/50'
                } transition-colors`}
              >
                <div className="flex items-center gap-3">
                  {result.available ? (
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                  <span className={`font-medium ${result.available ? 'text-white' : 'text-gray-500'}`}>
                    {domain}<span className="text-blue-400">{result.tld}</span>
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {result.available && result.price ? (
                    <>
                      <span className="text-white font-semibold">
                        €{result.price}<span className="text-gray-400 text-sm">{t.perYear}</span>
                      </span>
                      <a
                        href={getRegisterUrl(domain, result.tld)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-1"
                      >
                        {t.register}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </>
                  ) : (
                    <span className="text-gray-500 text-sm">{t.unavailable}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
