'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import PageHeader from '@/components/page-header';

interface Service {
  id: number;
  name: string;
  domain: string;
  status: string;
  nextDueDate: string;
  billingCycle: string;
  amount: string;
}

interface Invoice {
  id: number;
  invoiceNumber: string;
  date: string;
  dueDate: string;
  total: string;
  status: string;
  paymentUrl?: string;
}

interface Ticket {
  id: number;
  tid: string;
  subject: string;
  status: string;
  lastReply: string;
  department: string;
}

interface ClientData {
  found: boolean;
  message?: string;
  client?: {
    name: string;
    company?: string;
    email: string;
  };
  services?: Service[];
  invoices?: Invoice[];
  tickets?: Ticket[];
  portalUrl?: string;
}

export default function MijnAccount() {
  const { locale } = useLanguage();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [data, setData] = useState<ClientData | null>(null);

  const content = {
    nl: {
      title: 'Mijn Account',
      subtitle: 'Bekijk uw diensten en facturen',
      emailLabel: 'E-mailadres',
      emailPlaceholder: 'Voer uw e-mailadres in',
      lookup: 'Opzoeken',
      lookingUp: 'Zoeken...',
      notFound: 'Geen account gevonden met dit e-mailadres',
      welcome: 'Welkom',
      services: 'Actieve Diensten',
      invoices: 'Recente Facturen',
      tickets: 'Support Tickets',
      noServices: 'Geen actieve diensten',
      noInvoices: 'Geen facturen',
      noTickets: 'Geen tickets',
      status: 'Status',
      nextDue: 'Volgende betaling',
      amount: 'Bedrag',
      dueDate: 'Vervaldatum',
      pay: 'Betalen',
      viewAll: 'Alle bekijken in klantenportaal',
      goToPortal: 'Naar Klantenportaal',
      lastReply: 'Laatste reactie',
      active: 'Actief',
      suspended: 'Opgeschort',
      paid: 'Betaald',
      unpaid: 'Onbetaald',
      open: 'Open',
      answered: 'Beantwoord',
      closed: 'Gesloten',
    },
    en: {
      title: 'My Account',
      subtitle: 'View your services and invoices',
      emailLabel: 'Email address',
      emailPlaceholder: 'Enter your email address',
      lookup: 'Look up',
      lookingUp: 'Looking up...',
      notFound: 'No account found with this email address',
      welcome: 'Welcome',
      services: 'Active Services',
      invoices: 'Recent Invoices',
      tickets: 'Support Tickets',
      noServices: 'No active services',
      noInvoices: 'No invoices',
      noTickets: 'No tickets',
      status: 'Status',
      nextDue: 'Next payment',
      amount: 'Amount',
      dueDate: 'Due date',
      pay: 'Pay',
      viewAll: 'View all in client portal',
      goToPortal: 'Go to Client Portal',
      lastReply: 'Last reply',
      active: 'Active',
      suspended: 'Suspended',
      paid: 'Paid',
      unpaid: 'Unpaid',
      open: 'Open',
      answered: 'Answered',
      closed: 'Closed',
    },
    de: {
      title: 'Mein Konto',
      subtitle: 'Ihre Dienste und Rechnungen anzeigen',
      emailLabel: 'E-Mail-Adresse',
      emailPlaceholder: 'Geben Sie Ihre E-Mail-Adresse ein',
      lookup: 'Nachschlagen',
      lookingUp: 'Suchen...',
      notFound: 'Kein Konto mit dieser E-Mail-Adresse gefunden',
      welcome: 'Willkommen',
      services: 'Aktive Dienste',
      invoices: 'Aktuelle Rechnungen',
      tickets: 'Support-Tickets',
      noServices: 'Keine aktiven Dienste',
      noInvoices: 'Keine Rechnungen',
      noTickets: 'Keine Tickets',
      status: 'Status',
      nextDue: 'Nächste Zahlung',
      amount: 'Betrag',
      dueDate: 'Fälligkeitsdatum',
      pay: 'Bezahlen',
      viewAll: 'Alle im Kundenportal anzeigen',
      goToPortal: 'Zum Kundenportal',
      lastReply: 'Letzte Antwort',
      active: 'Aktiv',
      suspended: 'Gesperrt',
      paid: 'Bezahlt',
      unpaid: 'Unbezahlt',
      open: 'Offen',
      answered: 'Beantwortet',
      closed: 'Geschlossen',
    },
    fr: {
      title: 'Mon Compte',
      subtitle: 'Consultez vos services et factures',
      emailLabel: 'Adresse e-mail',
      emailPlaceholder: 'Entrez votre adresse e-mail',
      lookup: 'Rechercher',
      lookingUp: 'Recherche...',
      notFound: 'Aucun compte trouvé avec cette adresse e-mail',
      welcome: 'Bienvenue',
      services: 'Services Actifs',
      invoices: 'Factures Récentes',
      tickets: 'Tickets de Support',
      noServices: 'Aucun service actif',
      noInvoices: 'Aucune facture',
      noTickets: 'Aucun ticket',
      status: 'Statut',
      nextDue: 'Prochain paiement',
      amount: 'Montant',
      dueDate: 'Date d\'échéance',
      pay: 'Payer',
      viewAll: 'Tout voir dans le portail client',
      goToPortal: 'Aller au Portail Client',
      lastReply: 'Dernière réponse',
      active: 'Actif',
      suspended: 'Suspendu',
      paid: 'Payé',
      unpaid: 'Impayé',
      open: 'Ouvert',
      answered: 'Répondu',
      closed: 'Fermé',
    },
    es: {
      title: 'Mi Cuenta',
      subtitle: 'Vea sus servicios y facturas',
      emailLabel: 'Dirección de correo',
      emailPlaceholder: 'Ingrese su correo electrónico',
      lookup: 'Buscar',
      lookingUp: 'Buscando...',
      notFound: 'No se encontró cuenta con este correo electrónico',
      welcome: 'Bienvenido',
      services: 'Servicios Activos',
      invoices: 'Facturas Recientes',
      tickets: 'Tickets de Soporte',
      noServices: 'Sin servicios activos',
      noInvoices: 'Sin facturas',
      noTickets: 'Sin tickets',
      status: 'Estado',
      nextDue: 'Próximo pago',
      amount: 'Monto',
      dueDate: 'Fecha de vencimiento',
      pay: 'Pagar',
      viewAll: 'Ver todo en el portal del cliente',
      goToPortal: 'Ir al Portal del Cliente',
      lastReply: 'Última respuesta',
      active: 'Activo',
      suspended: 'Suspendido',
      paid: 'Pagado',
      unpaid: 'Impago',
      open: 'Abierto',
      answered: 'Respondido',
      closed: 'Cerrado',
    },
  };

  const t = content[locale];

  const handleLookup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError('');
    setData(null);

    try {
      const response = await fetch('/api/client/lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Lookup failed');
      }

      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'active' || s === 'paid' || s === 'answered') return 'text-green-400 bg-green-400/10';
    if (s === 'unpaid' || s === 'suspended' || s === 'open') return 'text-yellow-400 bg-yellow-400/10';
    if (s === 'closed' || s === 'terminated') return 'text-gray-400 bg-gray-400/10';
    return 'text-blue-400 bg-blue-400/10';
  };

  const translateStatus = (status: string) => {
    const s = status.toLowerCase();
    if (s === 'active') return t.active;
    if (s === 'suspended') return t.suspended;
    if (s === 'paid') return t.paid;
    if (s === 'unpaid') return t.unpaid;
    if (s === 'open') return t.open;
    if (s === 'answered') return t.answered;
    if (s === 'closed') return t.closed;
    return status;
  };

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Email Lookup Form */}
          {!data?.found && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 mb-8">
              <form onSubmit={handleLookup} className="max-w-md mx-auto">
                <label className="block text-gray-300 mb-2">{t.emailLabel}</label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="flex-1 px-4 py-3 bg-gray-900/70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-medium rounded-lg transition-colors"
                  >
                    {loading ? t.lookingUp : t.lookup}
                  </button>
                </div>
                {error && <p className="text-red-400 mt-3">{error}</p>}
                {data && !data.found && (
                  <p className="text-yellow-400 mt-3">{t.notFound}</p>
                )}
              </form>
            </div>
          )}

          {/* Client Dashboard */}
          {data?.found && data.client && (
            <div className="space-y-8">
              {/* Welcome Header */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {t.welcome}, {data.client.name}
                    </h2>
                    {data.client.company && (
                      <p className="text-gray-400">{data.client.company}</p>
                    )}
                    <p className="text-gray-500 text-sm">{data.client.email}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setData(null)}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      Uitloggen
                    </button>
                    <a
                      href={data.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                    >
                      {t.goToPortal}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                  {t.services}
                </h3>
                {data.services && data.services.length > 0 ? (
                  <div className="space-y-3">
                    {data.services.map((service) => (
                      <div key={service.id} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                        <div>
                          <p className="text-white font-medium">{service.name}</p>
                          {service.domain && (
                            <p className="text-gray-400 text-sm">{service.domain}</p>
                          )}
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(service.status)}`}>
                            {translateStatus(service.status)}
                          </span>
                          <p className="text-gray-400 text-sm mt-1">
                            {t.nextDue}: {service.nextDueDate}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">{t.noServices}</p>
                )}
              </div>

              {/* Invoices */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t.invoices}
                </h3>
                {data.invoices && data.invoices.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-gray-400 text-sm">
                          <th className="pb-3">#</th>
                          <th className="pb-3">{t.dueDate}</th>
                          <th className="pb-3">{t.amount}</th>
                          <th className="pb-3">{t.status}</th>
                          <th className="pb-3"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        {data.invoices.map((invoice) => (
                          <tr key={invoice.id}>
                            <td className="py-3 text-white">{invoice.invoiceNumber}</td>
                            <td className="py-3 text-gray-400">{invoice.dueDate}</td>
                            <td className="py-3 text-white">€{invoice.total}</td>
                            <td className="py-3">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(invoice.status)}`}>
                                {translateStatus(invoice.status)}
                              </span>
                            </td>
                            <td className="py-3">
                              {invoice.paymentUrl && (
                                <a
                                  href={invoice.paymentUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:text-blue-300 text-sm"
                                >
                                  {t.pay}
                                </a>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500">{t.noInvoices}</p>
                )}
              </div>

              {/* Tickets */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                  {t.tickets}
                </h3>
                {data.tickets && data.tickets.length > 0 ? (
                  <div className="space-y-3">
                    {data.tickets.map((ticket) => (
                      <div key={ticket.id} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                        <div>
                          <p className="text-white font-medium">#{ticket.tid} - {ticket.subject}</p>
                          <p className="text-gray-400 text-sm">{ticket.department}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(ticket.status)}`}>
                            {translateStatus(ticket.status)}
                          </span>
                          <p className="text-gray-500 text-xs mt-1">
                            {t.lastReply}: {ticket.lastReply}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">{t.noTickets}</p>
                )}
              </div>

              {/* View All Link */}
              <div className="text-center">
                <a
                  href={data.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-2"
                >
                  {t.viewAll}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
