'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';

interface DnsRecord {
  type: string;
  host: string;
  value: string;
  priority?: number;
  ttl?: string;
}

export default function DnsWizard() {
  const { locale } = useLanguage();
  const [domain, setDomain] = useState('');
  const [showRecords, setShowRecords] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const content = {
    nl: {
      title: 'Zoho DNS Wizard',
      subtitle: 'Genereer automatisch de benodigde DNS records voor Zoho Mail',
      placeholder: 'Voer je domeinnaam in (bijv. bedrijf.nl)',
      generate: 'Genereer Records',
      resultsFor: 'DNS Records voor',
      copy: 'Kopieer',
      copied: 'Gekopieerd!',
      copyAll: 'Kopieer alle records',
      sections: {
        mx: 'MX Records (E-mail ontvangst)',
        spf: 'SPF Record (Spam preventie)',
        dkim: 'DKIM Record (E-mail authenticatie)',
        autodiscover: 'Autodiscover (Outlook/Mail apps)',
      },
      headers: {
        type: 'Type',
        host: 'Host/Naam',
        value: 'Waarde',
        priority: 'Prioriteit',
        ttl: 'TTL',
      },
      dkimNote: 'Haal de DKIM waarde op uit je Zoho Admin Panel → Email → Domain Settings → DKIM',
      instructions: 'Voeg deze records toe bij je domein provider (Cloudflare, TransIP, etc.)',
    },
    en: {
      title: 'Zoho DNS Wizard',
      subtitle: 'Automatically generate required DNS records for Zoho Mail',
      placeholder: 'Enter your domain name (e.g. company.com)',
      generate: 'Generate Records',
      resultsFor: 'DNS Records for',
      copy: 'Copy',
      copied: 'Copied!',
      copyAll: 'Copy all records',
      sections: {
        mx: 'MX Records (Email receiving)',
        spf: 'SPF Record (Spam prevention)',
        dkim: 'DKIM Record (Email authentication)',
        autodiscover: 'Autodiscover (Outlook/Mail apps)',
      },
      headers: {
        type: 'Type',
        host: 'Host/Name',
        value: 'Value',
        priority: 'Priority',
        ttl: 'TTL',
      },
      dkimNote: 'Get the DKIM value from your Zoho Admin Panel → Email → Domain Settings → DKIM',
      instructions: 'Add these records at your domain provider (Cloudflare, TransIP, etc.)',
    },
    de: {
      title: 'Zoho DNS Assistent',
      subtitle: 'Generieren Sie automatisch die erforderlichen DNS-Einträge für Zoho Mail',
      placeholder: 'Domain eingeben (z.B. firma.de)',
      generate: 'Einträge generieren',
      resultsFor: 'DNS-Einträge für',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      copyAll: 'Alle Einträge kopieren',
      sections: {
        mx: 'MX-Einträge (E-Mail-Empfang)',
        spf: 'SPF-Eintrag (Spam-Prävention)',
        dkim: 'DKIM-Eintrag (E-Mail-Authentifizierung)',
        autodiscover: 'Autodiscover (Outlook/Mail-Apps)',
      },
      headers: {
        type: 'Typ',
        host: 'Host/Name',
        value: 'Wert',
        priority: 'Priorität',
        ttl: 'TTL',
      },
      dkimNote: 'DKIM-Wert aus Zoho Admin Panel → Email → Domain Settings → DKIM abrufen',
      instructions: 'Fügen Sie diese Einträge bei Ihrem Domain-Anbieter hinzu',
    },
    fr: {
      title: 'Assistant DNS Zoho',
      subtitle: 'Générez automatiquement les enregistrements DNS requis pour Zoho Mail',
      placeholder: 'Entrez votre nom de domaine (ex. entreprise.fr)',
      generate: 'Générer les enregistrements',
      resultsFor: 'Enregistrements DNS pour',
      copy: 'Copier',
      copied: 'Copié!',
      copyAll: 'Copier tous les enregistrements',
      sections: {
        mx: 'Enregistrements MX (Réception email)',
        spf: 'Enregistrement SPF (Prévention spam)',
        dkim: 'Enregistrement DKIM (Authentification email)',
        autodiscover: 'Autodiscover (Outlook/Apps mail)',
      },
      headers: {
        type: 'Type',
        host: 'Hôte/Nom',
        value: 'Valeur',
        priority: 'Priorité',
        ttl: 'TTL',
      },
      dkimNote: 'Récupérez la valeur DKIM depuis Zoho Admin Panel → Email → Domain Settings → DKIM',
      instructions: 'Ajoutez ces enregistrements chez votre fournisseur de domaine',
    },
    es: {
      title: 'Asistente DNS Zoho',
      subtitle: 'Genera automáticamente los registros DNS necesarios para Zoho Mail',
      placeholder: 'Ingresa tu nombre de dominio (ej. empresa.es)',
      generate: 'Generar Registros',
      resultsFor: 'Registros DNS para',
      copy: 'Copiar',
      copied: '¡Copiado!',
      copyAll: 'Copiar todos los registros',
      sections: {
        mx: 'Registros MX (Recepción de email)',
        spf: 'Registro SPF (Prevención de spam)',
        dkim: 'Registro DKIM (Autenticación de email)',
        autodiscover: 'Autodiscover (Outlook/Apps de correo)',
      },
      headers: {
        type: 'Tipo',
        host: 'Host/Nombre',
        value: 'Valor',
        priority: 'Prioridad',
        ttl: 'TTL',
      },
      dkimNote: 'Obtén el valor DKIM desde Zoho Admin Panel → Email → Domain Settings → DKIM',
      instructions: 'Agrega estos registros en tu proveedor de dominio',
    },
  };

  const t = content[locale];

  const cleanDomain = (input: string): string => {
    let cleaned = input.toLowerCase().trim();
    cleaned = cleaned.replace(/^(https?:\/\/)?(www\.)?/, '');
    cleaned = cleaned.replace(/\/.*$/, '');
    return cleaned;
  };

  const getMxRecords = (): DnsRecord[] => [
    { type: 'MX', host: '@', value: 'mx.zoho.eu', priority: 10, ttl: '3600' },
    { type: 'MX', host: '@', value: 'mx2.zoho.eu', priority: 20, ttl: '3600' },
    { type: 'MX', host: '@', value: 'mx3.zoho.eu', priority: 50, ttl: '3600' },
  ];

  const getSpfRecord = (): DnsRecord[] => [
    { type: 'TXT', host: '@', value: 'v=spf1 include:zoho.eu ~all', ttl: '3600' },
  ];

  const getDkimRecord = (domainName: string): DnsRecord[] => [
    { type: 'TXT', host: `zmail._domainkey`, value: '[Zie instructies hieronder]', ttl: '3600' },
  ];

  const getAutodiscoverRecord = (): DnsRecord[] => [
    { type: 'CNAME', host: 'autodiscover', value: 'autodiscover.zoho.eu', ttl: '3600' },
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (domain.trim()) {
      setShowRecords(true);
    }
  };

  const copyToClipboard = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyAllRecords = async () => {
    const cleanedDomain = cleanDomain(domain);
    const allRecords = [
      '# MX Records',
      ...getMxRecords().map(r => `${r.type}\t${r.host}\t${r.value}\t${r.priority}`),
      '',
      '# SPF Record',
      ...getSpfRecord().map(r => `${r.type}\t${r.host}\t${r.value}`),
      '',
      '# DKIM Record',
      `TXT\tzmail._domainkey.${cleanedDomain}\t[Get from Zoho Admin Panel]`,
      '',
      '# Autodiscover',
      ...getAutodiscoverRecord().map(r => `${r.type}\t${r.host}\t${r.value}`),
    ].join('\n');

    await navigator.clipboard.writeText(allRecords);
    setCopiedIndex(-1);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const RecordTable = ({ records, showPriority = false }: { records: DnsRecord[], showPriority?: boolean }) => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="text-left py-2 px-3 text-gray-400 font-medium">{t.headers.type}</th>
            <th className="text-left py-2 px-3 text-gray-400 font-medium">{t.headers.host}</th>
            <th className="text-left py-2 px-3 text-gray-400 font-medium">{t.headers.value}</th>
            {showPriority && <th className="text-left py-2 px-3 text-gray-400 font-medium">{t.headers.priority}</th>}
            <th className="text-right py-2 px-3 text-gray-400 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, idx) => (
            <tr key={idx} className="border-b border-gray-800/50">
              <td className="py-3 px-3">
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-mono">{record.type}</span>
              </td>
              <td className="py-3 px-3 font-mono text-gray-300">{record.host}</td>
              <td className="py-3 px-3 font-mono text-white break-all">{record.value}</td>
              {showPriority && <td className="py-3 px-3 text-gray-400">{record.priority}</td>}
              <td className="py-3 px-3 text-right">
                <button
                  onClick={() => copyToClipboard(record.value, idx)}
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {copiedIndex === idx ? t.copied : t.copy}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      {/* Input Form */}
      <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
        <h2 className="text-2xl font-bold text-white text-center mb-2">{t.title}</h2>
        <p className="text-gray-400 text-center mb-6">{t.subtitle}</p>

        <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder={t.placeholder}
            className="flex-1 px-5 py-4 bg-gray-900/70 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
          >
            {t.generate}
          </button>
        </form>
      </div>

      {/* Results */}
      {showRecords && domain && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">
              {t.resultsFor} <span className="text-blue-400">{cleanDomain(domain)}</span>
            </h3>
            <button
              onClick={copyAllRecords}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {copiedIndex === -1 ? t.copied : t.copyAll}
            </button>
          </div>

          <p className="text-gray-400 text-sm">{t.instructions}</p>

          {/* MX Records */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
            <div className="px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <span className="text-2xl">📧</span> {t.sections.mx}
              </h4>
            </div>
            <div className="p-4">
              <RecordTable records={getMxRecords()} showPriority />
            </div>
          </div>

          {/* SPF Record */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
            <div className="px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <span className="text-2xl">🛡️</span> {t.sections.spf}
              </h4>
            </div>
            <div className="p-4">
              <RecordTable records={getSpfRecord()} />
            </div>
          </div>

          {/* DKIM Record */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
            <div className="px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <span className="text-2xl">🔐</span> {t.sections.dkim}
              </h4>
            </div>
            <div className="p-4">
              <RecordTable records={getDkimRecord(cleanDomain(domain))} />
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-400 text-sm flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t.dkimNote}
                </p>
              </div>
            </div>
          </div>

          {/* Autodiscover */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
            <div className="px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <span className="text-2xl">📱</span> {t.sections.autodiscover}
              </h4>
            </div>
            <div className="p-4">
              <RecordTable records={getAutodiscoverRecord()} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
