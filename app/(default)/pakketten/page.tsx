'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import PageHeader from '@/components/page-header';
import PackageCard from '@/components/package-card';

type TabKey = 'websites' | 'ecommerce' | 'email' | 'bundles';

export default function PakkettenPage() {
  const { locale } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>('websites');

  const content = {
    nl: {
      title: 'Onze Pakketten',
      subtitle: 'Kies het pakket dat bij jouw bedrijf past',
      intro: 'Van eenvoudige landingspagina\'s tot complete webshops. Wij hebben een pakket voor elke ondernemer.',
      tabs: {
        websites: 'Websites',
        ecommerce: 'E-commerce',
        email: 'Email & Domein',
        bundles: 'Bundels',
      },
      priceLabel: {
        once: 'eenmalig',
        monthly: '/maand',
      },
      popular: 'Populair',
      cta: 'Bestel nu',
      ctaContact: 'Offerte aanvragen',
      faq: {
        title: 'Veelgestelde vragen',
        items: [
          { q: 'Wat is inbegrepen bij de maandelijkse kosten?', a: 'Hosting, SSL-certificaat, onderhoud, updates en technische support.' },
          { q: 'Kan ik later upgraden naar een groter pakket?', a: 'Ja, je kunt op elk moment upgraden. We rekenen alleen het verschil.' },
          { q: 'Hoe lang duurt het bouwen van mijn website?', a: 'Een Starter website is binnen 1-2 weken klaar. Business en Premium pakketten duren 2-4 weken.' },
        ],
      },
      notSure: 'Niet zeker welk pakket bij je past?',
      contactUs: 'Neem contact op voor gratis advies',
      websites: [
        {
          name: 'Starter',
          description: '1-pagina landingspagina',
          priceOnce: '299',
          priceMonthly: '19,99',
          features: [
            { text: 'Professionele landingspagina', included: true },
            { text: 'Mobiel responsive design', included: true },
            { text: 'SSL-certificaat', included: true },
            { text: 'Hosting inbegrepen', included: true },
            { text: '1 zakelijk emailadres', included: true },
            { text: 'Contactformulier', included: true },
            { text: 'SEO basis optimalisatie', included: false },
            { text: 'Maandelijks onderhoud', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Complete bedrijfswebsite',
          priceOnce: '799',
          priceMonthly: '29,99',
          popular: true,
          features: [
            { text: '5-10 pagina\'s', included: true },
            { text: 'Mobiel responsive design', included: true },
            { text: 'SSL-certificaat', included: true },
            { text: 'Hosting inbegrepen', included: true },
            { text: '5 zakelijke emailadressen', included: true },
            { text: 'Contactformulier', included: true },
            { text: 'SEO basis optimalisatie', included: true },
            { text: 'Maandelijks onderhoud', included: true },
          ],
        },
        {
          name: 'Premium',
          description: 'Maatwerk website',
          priceOnce: '1.499',
          priceMonthly: '49,99',
          features: [
            { text: 'Onbeperkt pagina\'s', included: true },
            { text: 'Maatwerk design', included: true },
            { text: 'SSL-certificaat', included: true },
            { text: 'Premium hosting', included: true },
            { text: '10 zakelijke emailadressen', included: true },
            { text: 'Geavanceerde formulieren', included: true },
            { text: 'Complete SEO optimalisatie', included: true },
            { text: 'Prioriteit support', included: true },
          ],
        },
      ],
      ecommerce: [
        {
          name: 'Starter',
          description: 'Kleine webshop',
          priceOnce: '599',
          priceMonthly: '39,99',
          features: [
            { text: 'Tot 50 producten', included: true },
            { text: 'Mobiel responsive design', included: true },
            { text: 'SSL-certificaat', included: true },
            { text: 'Hosting inbegrepen', included: true },
            { text: 'iDEAL & creditcard betalingen', included: true },
            { text: 'Basis inventory management', included: true },
            { text: 'Marketing tools', included: false },
            { text: 'API koppelingen', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Groeiende webshop',
          priceOnce: '1.299',
          priceMonthly: '69,99',
          popular: true,
          features: [
            { text: 'Tot 500 producten', included: true },
            { text: 'Professioneel design', included: true },
            { text: 'SSL-certificaat', included: true },
            { text: 'Hosting inbegrepen', included: true },
            { text: 'Alle betaalmethodes', included: true },
            { text: 'Geavanceerd inventory', included: true },
            { text: 'Marketing tools', included: true },
            { text: 'Basis API koppelingen', included: true },
          ],
        },
        {
          name: 'Premium',
          description: 'Enterprise webshop',
          priceOnce: '2.499',
          priceMonthly: '99,99',
          features: [
            { text: 'Onbeperkt producten', included: true },
            { text: 'Maatwerk design', included: true },
            { text: 'SSL-certificaat', included: true },
            { text: 'Premium hosting', included: true },
            { text: 'Alle betaalmethodes', included: true },
            { text: 'Multi-warehouse inventory', included: true },
            { text: 'Geavanceerde marketing', included: true },
            { text: 'Volledige API integratie', included: true },
          ],
        },
      ],
      email: [
        {
          name: 'Starter',
          description: 'Klein bedrijf',
          priceMonthly: '4,99',
          features: [
            { text: '1 domein inbegrepen', included: true },
            { text: '5 mailboxen', included: true },
            { text: '10GB opslag per mailbox', included: true },
            { text: 'Webmail toegang', included: true },
            { text: 'Spam & virus filter', included: true },
            { text: 'Kalender & contacten', included: false },
            { text: 'Gedeelde mailboxen', included: false },
            { text: 'Admin console', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Groeiend team',
          priceMonthly: '14,99',
          popular: true,
          features: [
            { text: '1 domein inbegrepen', included: true },
            { text: '25 mailboxen', included: true },
            { text: '50GB opslag per mailbox', included: true },
            { text: 'Webmail toegang', included: true },
            { text: 'Spam & virus filter', included: true },
            { text: 'Kalender & contacten', included: true },
            { text: 'Gedeelde mailboxen', included: true },
            { text: 'Admin console', included: false },
          ],
        },
        {
          name: 'Premium',
          description: 'Groot bedrijf',
          priceMonthly: '29,99',
          features: [
            { text: '1 domein inbegrepen', included: true },
            { text: 'Onbeperkt mailboxen', included: true },
            { text: '100GB opslag per mailbox', included: true },
            { text: 'Webmail toegang', included: true },
            { text: 'Geavanceerde beveiliging', included: true },
            { text: 'Kalender & contacten', included: true },
            { text: 'Gedeelde mailboxen', included: true },
            { text: 'Volledige admin console', included: true },
          ],
        },
      ],
      bundles: [
        {
          name: 'Starter Bundel',
          description: 'Alles om te starten',
          priceOnce: '349',
          priceMonthly: '29,99',
          features: [
            { text: '1-pagina website', included: true },
            { text: 'Domeinregistratie', included: true },
            { text: '3 zakelijke emailadressen', included: true },
            { text: 'Hosting inbegrepen', included: true },
            { text: 'SSL-certificaat', included: true },
            { text: 'SEO optimalisatie', included: false },
            { text: 'Maandelijks onderhoud', included: false },
            { text: 'Marketing tools', included: false },
          ],
        },
        {
          name: 'Business Bundel',
          description: 'Complete zakelijke oplossing',
          priceOnce: '999',
          priceMonthly: '59,99',
          popular: true,
          features: [
            { text: 'Business website (5-10 pag)', included: true },
            { text: 'Domeinregistratie', included: true },
            { text: '10 zakelijke emailadressen', included: true },
            { text: 'Premium hosting', included: true },
            { text: 'SSL-certificaat', included: true },
            { text: 'SEO optimalisatie', included: true },
            { text: 'Maandelijks onderhoud', included: true },
            { text: 'Basis marketing tools', included: true },
          ],
        },
        {
          name: 'E-commerce Bundel',
          description: 'Complete webshop oplossing',
          priceOnce: '1.599',
          priceMonthly: '99,99',
          features: [
            { text: 'Professionele webshop', included: true },
            { text: 'Domeinregistratie', included: true },
            { text: 'Zakelijke email', included: true },
            { text: 'Premium hosting', included: true },
            { text: 'SSL-certificaat', included: true },
            { text: 'SEO & marketing tools', included: true },
            { text: 'Betalingen & verzending', included: true },
            { text: 'Prioriteit support', included: true },
          ],
        },
      ],
    },
    en: {
      title: 'Our Packages',
      subtitle: 'Choose the package that fits your business',
      intro: 'From simple landing pages to complete webshops. We have a package for every entrepreneur.',
      tabs: {
        websites: 'Websites',
        ecommerce: 'E-commerce',
        email: 'Email & Domain',
        bundles: 'Bundles',
      },
      priceLabel: {
        once: 'one-time',
        monthly: '/month',
      },
      popular: 'Popular',
      cta: 'Order now',
      ctaContact: 'Request quote',
      faq: {
        title: 'Frequently asked questions',
        items: [
          { q: 'What is included in the monthly costs?', a: 'Hosting, SSL certificate, maintenance, updates and technical support.' },
          { q: 'Can I upgrade to a larger package later?', a: 'Yes, you can upgrade at any time. We only charge the difference.' },
          { q: 'How long does it take to build my website?', a: 'A Starter website is ready within 1-2 weeks. Business and Premium packages take 2-4 weeks.' },
        ],
      },
      notSure: 'Not sure which package suits you?',
      contactUs: 'Contact us for free advice',
      websites: [
        {
          name: 'Starter',
          description: '1-page landing page',
          priceOnce: '299',
          priceMonthly: '19.99',
          features: [
            { text: 'Professional landing page', included: true },
            { text: 'Mobile responsive design', included: true },
            { text: 'SSL certificate', included: true },
            { text: 'Hosting included', included: true },
            { text: '1 business email address', included: true },
            { text: 'Contact form', included: true },
            { text: 'Basic SEO optimization', included: false },
            { text: 'Monthly maintenance', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Complete business website',
          priceOnce: '799',
          priceMonthly: '29.99',
          popular: true,
          features: [
            { text: '5-10 pages', included: true },
            { text: 'Mobile responsive design', included: true },
            { text: 'SSL certificate', included: true },
            { text: 'Hosting included', included: true },
            { text: '5 business email addresses', included: true },
            { text: 'Contact form', included: true },
            { text: 'Basic SEO optimization', included: true },
            { text: 'Monthly maintenance', included: true },
          ],
        },
        {
          name: 'Premium',
          description: 'Custom website',
          priceOnce: '1,499',
          priceMonthly: '49.99',
          features: [
            { text: 'Unlimited pages', included: true },
            { text: 'Custom design', included: true },
            { text: 'SSL certificate', included: true },
            { text: 'Premium hosting', included: true },
            { text: '10 business email addresses', included: true },
            { text: 'Advanced forms', included: true },
            { text: 'Complete SEO optimization', included: true },
            { text: 'Priority support', included: true },
          ],
        },
      ],
      ecommerce: [
        {
          name: 'Starter',
          description: 'Small webshop',
          priceOnce: '599',
          priceMonthly: '39.99',
          features: [
            { text: 'Up to 50 products', included: true },
            { text: 'Mobile responsive design', included: true },
            { text: 'SSL certificate', included: true },
            { text: 'Hosting included', included: true },
            { text: 'iDEAL & credit card payments', included: true },
            { text: 'Basic inventory management', included: true },
            { text: 'Marketing tools', included: false },
            { text: 'API integrations', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Growing webshop',
          priceOnce: '1,299',
          priceMonthly: '69.99',
          popular: true,
          features: [
            { text: 'Up to 500 products', included: true },
            { text: 'Professional design', included: true },
            { text: 'SSL certificate', included: true },
            { text: 'Hosting included', included: true },
            { text: 'All payment methods', included: true },
            { text: 'Advanced inventory', included: true },
            { text: 'Marketing tools', included: true },
            { text: 'Basic API integrations', included: true },
          ],
        },
        {
          name: 'Premium',
          description: 'Enterprise webshop',
          priceOnce: '2,499',
          priceMonthly: '99.99',
          features: [
            { text: 'Unlimited products', included: true },
            { text: 'Custom design', included: true },
            { text: 'SSL certificate', included: true },
            { text: 'Premium hosting', included: true },
            { text: 'All payment methods', included: true },
            { text: 'Multi-warehouse inventory', included: true },
            { text: 'Advanced marketing', included: true },
            { text: 'Full API integration', included: true },
          ],
        },
      ],
      email: [
        {
          name: 'Starter',
          description: 'Small business',
          priceMonthly: '4.99',
          features: [
            { text: '1 domain included', included: true },
            { text: '5 mailboxes', included: true },
            { text: '10GB storage per mailbox', included: true },
            { text: 'Webmail access', included: true },
            { text: 'Spam & virus filter', included: true },
            { text: 'Calendar & contacts', included: false },
            { text: 'Shared mailboxes', included: false },
            { text: 'Admin console', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Growing team',
          priceMonthly: '14.99',
          popular: true,
          features: [
            { text: '1 domain included', included: true },
            { text: '25 mailboxes', included: true },
            { text: '50GB storage per mailbox', included: true },
            { text: 'Webmail access', included: true },
            { text: 'Spam & virus filter', included: true },
            { text: 'Calendar & contacts', included: true },
            { text: 'Shared mailboxes', included: true },
            { text: 'Admin console', included: false },
          ],
        },
        {
          name: 'Premium',
          description: 'Large company',
          priceMonthly: '29.99',
          features: [
            { text: '1 domain included', included: true },
            { text: 'Unlimited mailboxes', included: true },
            { text: '100GB storage per mailbox', included: true },
            { text: 'Webmail access', included: true },
            { text: 'Advanced security', included: true },
            { text: 'Calendar & contacts', included: true },
            { text: 'Shared mailboxes', included: true },
            { text: 'Full admin console', included: true },
          ],
        },
      ],
      bundles: [
        {
          name: 'Starter Bundle',
          description: 'Everything to get started',
          priceOnce: '349',
          priceMonthly: '29.99',
          features: [
            { text: '1-page website', included: true },
            { text: 'Domain registration', included: true },
            { text: '3 business email addresses', included: true },
            { text: 'Hosting included', included: true },
            { text: 'SSL certificate', included: true },
            { text: 'SEO optimization', included: false },
            { text: 'Monthly maintenance', included: false },
            { text: 'Marketing tools', included: false },
          ],
        },
        {
          name: 'Business Bundle',
          description: 'Complete business solution',
          priceOnce: '999',
          priceMonthly: '59.99',
          popular: true,
          features: [
            { text: 'Business website (5-10 pages)', included: true },
            { text: 'Domain registration', included: true },
            { text: '10 business email addresses', included: true },
            { text: 'Premium hosting', included: true },
            { text: 'SSL certificate', included: true },
            { text: 'SEO optimization', included: true },
            { text: 'Monthly maintenance', included: true },
            { text: 'Basic marketing tools', included: true },
          ],
        },
        {
          name: 'E-commerce Bundle',
          description: 'Complete webshop solution',
          priceOnce: '1,599',
          priceMonthly: '99.99',
          features: [
            { text: 'Professional webshop', included: true },
            { text: 'Domain registration', included: true },
            { text: 'Business email', included: true },
            { text: 'Premium hosting', included: true },
            { text: 'SSL certificate', included: true },
            { text: 'SEO & marketing tools', included: true },
            { text: 'Payments & shipping', included: true },
            { text: 'Priority support', included: true },
          ],
        },
      ],
    },
    de: {
      title: 'Unsere Pakete',
      subtitle: 'Wählen Sie das Paket, das zu Ihrem Unternehmen passt',
      intro: 'Von einfachen Landingpages bis hin zu kompletten Webshops. Wir haben ein Paket für jeden Unternehmer.',
      tabs: {
        websites: 'Websites',
        ecommerce: 'E-Commerce',
        email: 'E-Mail & Domain',
        bundles: 'Pakete',
      },
      priceLabel: {
        once: 'einmalig',
        monthly: '/Monat',
      },
      popular: 'Beliebt',
      cta: 'Jetzt bestellen',
      ctaContact: 'Angebot anfordern',
      faq: {
        title: 'Häufig gestellte Fragen',
        items: [
          { q: 'Was ist in den monatlichen Kosten enthalten?', a: 'Hosting, SSL-Zertifikat, Wartung, Updates und technischer Support.' },
          { q: 'Kann ich später auf ein größeres Paket upgraden?', a: 'Ja, Sie können jederzeit upgraden. Wir berechnen nur die Differenz.' },
          { q: 'Wie lange dauert es, meine Website zu erstellen?', a: 'Eine Starter-Website ist innerhalb von 1-2 Wochen fertig. Business- und Premium-Pakete dauern 2-4 Wochen.' },
        ],
      },
      notSure: 'Nicht sicher, welches Paket zu Ihnen passt?',
      contactUs: 'Kontaktieren Sie uns für kostenlose Beratung',
      websites: [
        {
          name: 'Starter',
          description: '1-Seiten Landingpage',
          priceOnce: '299',
          priceMonthly: '19,99',
          features: [
            { text: 'Professionelle Landingpage', included: true },
            { text: 'Mobil responsives Design', included: true },
            { text: 'SSL-Zertifikat', included: true },
            { text: 'Hosting inklusive', included: true },
            { text: '1 geschäftliche E-Mail', included: true },
            { text: 'Kontaktformular', included: true },
            { text: 'Basis SEO-Optimierung', included: false },
            { text: 'Monatliche Wartung', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Komplette Unternehmenswebsite',
          priceOnce: '799',
          priceMonthly: '29,99',
          popular: true,
          features: [
            { text: '5-10 Seiten', included: true },
            { text: 'Mobil responsives Design', included: true },
            { text: 'SSL-Zertifikat', included: true },
            { text: 'Hosting inklusive', included: true },
            { text: '5 geschäftliche E-Mails', included: true },
            { text: 'Kontaktformular', included: true },
            { text: 'Basis SEO-Optimierung', included: true },
            { text: 'Monatliche Wartung', included: true },
          ],
        },
        {
          name: 'Premium',
          description: 'Maßgeschneiderte Website',
          priceOnce: '1.499',
          priceMonthly: '49,99',
          features: [
            { text: 'Unbegrenzte Seiten', included: true },
            { text: 'Individuelles Design', included: true },
            { text: 'SSL-Zertifikat', included: true },
            { text: 'Premium Hosting', included: true },
            { text: '10 geschäftliche E-Mails', included: true },
            { text: 'Erweiterte Formulare', included: true },
            { text: 'Komplette SEO-Optimierung', included: true },
            { text: 'Prioritäts-Support', included: true },
          ],
        },
      ],
      ecommerce: [
        {
          name: 'Starter',
          description: 'Kleiner Webshop',
          priceOnce: '599',
          priceMonthly: '39,99',
          features: [
            { text: 'Bis zu 50 Produkte', included: true },
            { text: 'Mobil responsives Design', included: true },
            { text: 'SSL-Zertifikat', included: true },
            { text: 'Hosting inklusive', included: true },
            { text: 'Kreditkarten-Zahlungen', included: true },
            { text: 'Basis Bestandsverwaltung', included: true },
            { text: 'Marketing-Tools', included: false },
            { text: 'API-Integrationen', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Wachsender Webshop',
          priceOnce: '1.299',
          priceMonthly: '69,99',
          popular: true,
          features: [
            { text: 'Bis zu 500 Produkte', included: true },
            { text: 'Professionelles Design', included: true },
            { text: 'SSL-Zertifikat', included: true },
            { text: 'Hosting inklusive', included: true },
            { text: 'Alle Zahlungsmethoden', included: true },
            { text: 'Erweiterte Bestandsverwaltung', included: true },
            { text: 'Marketing-Tools', included: true },
            { text: 'Basis API-Integrationen', included: true },
          ],
        },
        {
          name: 'Premium',
          description: 'Enterprise Webshop',
          priceOnce: '2.499',
          priceMonthly: '99,99',
          features: [
            { text: 'Unbegrenzte Produkte', included: true },
            { text: 'Individuelles Design', included: true },
            { text: 'SSL-Zertifikat', included: true },
            { text: 'Premium Hosting', included: true },
            { text: 'Alle Zahlungsmethoden', included: true },
            { text: 'Multi-Lager Bestandsverwaltung', included: true },
            { text: 'Erweitertes Marketing', included: true },
            { text: 'Vollständige API-Integration', included: true },
          ],
        },
      ],
      email: [
        {
          name: 'Starter',
          description: 'Kleines Unternehmen',
          priceMonthly: '4,99',
          features: [
            { text: '1 Domain inklusive', included: true },
            { text: '5 Postfächer', included: true },
            { text: '10GB Speicher pro Postfach', included: true },
            { text: 'Webmail-Zugang', included: true },
            { text: 'Spam- & Virenfilter', included: true },
            { text: 'Kalender & Kontakte', included: false },
            { text: 'Geteilte Postfächer', included: false },
            { text: 'Admin-Konsole', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Wachsendes Team',
          priceMonthly: '14,99',
          popular: true,
          features: [
            { text: '1 Domain inklusive', included: true },
            { text: '25 Postfächer', included: true },
            { text: '50GB Speicher pro Postfach', included: true },
            { text: 'Webmail-Zugang', included: true },
            { text: 'Spam- & Virenfilter', included: true },
            { text: 'Kalender & Kontakte', included: true },
            { text: 'Geteilte Postfächer', included: true },
            { text: 'Admin-Konsole', included: false },
          ],
        },
        {
          name: 'Premium',
          description: 'Großes Unternehmen',
          priceMonthly: '29,99',
          features: [
            { text: '1 Domain inklusive', included: true },
            { text: 'Unbegrenzte Postfächer', included: true },
            { text: '100GB Speicher pro Postfach', included: true },
            { text: 'Webmail-Zugang', included: true },
            { text: 'Erweiterte Sicherheit', included: true },
            { text: 'Kalender & Kontakte', included: true },
            { text: 'Geteilte Postfächer', included: true },
            { text: 'Vollständige Admin-Konsole', included: true },
          ],
        },
      ],
      bundles: [
        {
          name: 'Starter Paket',
          description: 'Alles für den Start',
          priceOnce: '349',
          priceMonthly: '29,99',
          features: [
            { text: '1-Seiten Website', included: true },
            { text: 'Domain-Registrierung', included: true },
            { text: '3 geschäftliche E-Mails', included: true },
            { text: 'Hosting inklusive', included: true },
            { text: 'SSL-Zertifikat', included: true },
            { text: 'SEO-Optimierung', included: false },
            { text: 'Monatliche Wartung', included: false },
            { text: 'Marketing-Tools', included: false },
          ],
        },
        {
          name: 'Business Paket',
          description: 'Komplette Geschäftslösung',
          priceOnce: '999',
          priceMonthly: '59,99',
          popular: true,
          features: [
            { text: 'Business Website (5-10 Seiten)', included: true },
            { text: 'Domain-Registrierung', included: true },
            { text: '10 geschäftliche E-Mails', included: true },
            { text: 'Premium Hosting', included: true },
            { text: 'SSL-Zertifikat', included: true },
            { text: 'SEO-Optimierung', included: true },
            { text: 'Monatliche Wartung', included: true },
            { text: 'Basis Marketing-Tools', included: true },
          ],
        },
        {
          name: 'E-Commerce Paket',
          description: 'Komplette Webshop-Lösung',
          priceOnce: '1.599',
          priceMonthly: '99,99',
          features: [
            { text: 'Professioneller Webshop', included: true },
            { text: 'Domain-Registrierung', included: true },
            { text: 'Geschäftliche E-Mail', included: true },
            { text: 'Premium Hosting', included: true },
            { text: 'SSL-Zertifikat', included: true },
            { text: 'SEO & Marketing-Tools', included: true },
            { text: 'Zahlungen & Versand', included: true },
            { text: 'Prioritäts-Support', included: true },
          ],
        },
      ],
    },
    fr: {
      title: 'Nos Forfaits',
      subtitle: 'Choisissez le forfait qui correspond à votre entreprise',
      intro: 'Des pages d\'accueil simples aux boutiques en ligne complètes. Nous avons un forfait pour chaque entrepreneur.',
      tabs: {
        websites: 'Sites Web',
        ecommerce: 'E-commerce',
        email: 'Email & Domaine',
        bundles: 'Forfaits',
      },
      priceLabel: {
        once: 'unique',
        monthly: '/mois',
      },
      popular: 'Populaire',
      cta: 'Commander',
      ctaContact: 'Demander un devis',
      faq: {
        title: 'Questions fréquentes',
        items: [
          { q: 'Qu\'est-ce qui est inclus dans les frais mensuels?', a: 'Hébergement, certificat SSL, maintenance, mises à jour et support technique.' },
          { q: 'Puis-je passer à un forfait plus grand plus tard?', a: 'Oui, vous pouvez passer à un forfait supérieur à tout moment. Nous ne facturons que la différence.' },
          { q: 'Combien de temps faut-il pour créer mon site web?', a: 'Un site Starter est prêt en 1-2 semaines. Les forfaits Business et Premium prennent 2-4 semaines.' },
        ],
      },
      notSure: 'Vous ne savez pas quel forfait vous convient?',
      contactUs: 'Contactez-nous pour des conseils gratuits',
      websites: [
        {
          name: 'Starter',
          description: 'Page d\'accueil unique',
          priceOnce: '299',
          priceMonthly: '19,99',
          features: [
            { text: 'Page d\'accueil professionnelle', included: true },
            { text: 'Design responsive mobile', included: true },
            { text: 'Certificat SSL', included: true },
            { text: 'Hébergement inclus', included: true },
            { text: '1 adresse email professionnelle', included: true },
            { text: 'Formulaire de contact', included: true },
            { text: 'Optimisation SEO de base', included: false },
            { text: 'Maintenance mensuelle', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Site web d\'entreprise complet',
          priceOnce: '799',
          priceMonthly: '29,99',
          popular: true,
          features: [
            { text: '5-10 pages', included: true },
            { text: 'Design responsive mobile', included: true },
            { text: 'Certificat SSL', included: true },
            { text: 'Hébergement inclus', included: true },
            { text: '5 adresses email professionnelles', included: true },
            { text: 'Formulaire de contact', included: true },
            { text: 'Optimisation SEO de base', included: true },
            { text: 'Maintenance mensuelle', included: true },
          ],
        },
        {
          name: 'Premium',
          description: 'Site web sur mesure',
          priceOnce: '1.499',
          priceMonthly: '49,99',
          features: [
            { text: 'Pages illimitées', included: true },
            { text: 'Design personnalisé', included: true },
            { text: 'Certificat SSL', included: true },
            { text: 'Hébergement premium', included: true },
            { text: '10 adresses email professionnelles', included: true },
            { text: 'Formulaires avancés', included: true },
            { text: 'Optimisation SEO complète', included: true },
            { text: 'Support prioritaire', included: true },
          ],
        },
      ],
      ecommerce: [
        {
          name: 'Starter',
          description: 'Petite boutique',
          priceOnce: '599',
          priceMonthly: '39,99',
          features: [
            { text: 'Jusqu\'à 50 produits', included: true },
            { text: 'Design responsive mobile', included: true },
            { text: 'Certificat SSL', included: true },
            { text: 'Hébergement inclus', included: true },
            { text: 'Paiements par carte', included: true },
            { text: 'Gestion des stocks de base', included: true },
            { text: 'Outils marketing', included: false },
            { text: 'Intégrations API', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Boutique en croissance',
          priceOnce: '1.299',
          priceMonthly: '69,99',
          popular: true,
          features: [
            { text: 'Jusqu\'à 500 produits', included: true },
            { text: 'Design professionnel', included: true },
            { text: 'Certificat SSL', included: true },
            { text: 'Hébergement inclus', included: true },
            { text: 'Tous les modes de paiement', included: true },
            { text: 'Gestion des stocks avancée', included: true },
            { text: 'Outils marketing', included: true },
            { text: 'Intégrations API de base', included: true },
          ],
        },
        {
          name: 'Premium',
          description: 'Boutique entreprise',
          priceOnce: '2.499',
          priceMonthly: '99,99',
          features: [
            { text: 'Produits illimités', included: true },
            { text: 'Design personnalisé', included: true },
            { text: 'Certificat SSL', included: true },
            { text: 'Hébergement premium', included: true },
            { text: 'Tous les modes de paiement', included: true },
            { text: 'Gestion multi-entrepôt', included: true },
            { text: 'Marketing avancé', included: true },
            { text: 'Intégration API complète', included: true },
          ],
        },
      ],
      email: [
        {
          name: 'Starter',
          description: 'Petite entreprise',
          priceMonthly: '4,99',
          features: [
            { text: '1 domaine inclus', included: true },
            { text: '5 boîtes mail', included: true },
            { text: '10Go de stockage par boîte', included: true },
            { text: 'Accès webmail', included: true },
            { text: 'Filtre anti-spam et virus', included: true },
            { text: 'Calendrier et contacts', included: false },
            { text: 'Boîtes mail partagées', included: false },
            { text: 'Console d\'administration', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Équipe en croissance',
          priceMonthly: '14,99',
          popular: true,
          features: [
            { text: '1 domaine inclus', included: true },
            { text: '25 boîtes mail', included: true },
            { text: '50Go de stockage par boîte', included: true },
            { text: 'Accès webmail', included: true },
            { text: 'Filtre anti-spam et virus', included: true },
            { text: 'Calendrier et contacts', included: true },
            { text: 'Boîtes mail partagées', included: true },
            { text: 'Console d\'administration', included: false },
          ],
        },
        {
          name: 'Premium',
          description: 'Grande entreprise',
          priceMonthly: '29,99',
          features: [
            { text: '1 domaine inclus', included: true },
            { text: 'Boîtes mail illimitées', included: true },
            { text: '100Go de stockage par boîte', included: true },
            { text: 'Accès webmail', included: true },
            { text: 'Sécurité avancée', included: true },
            { text: 'Calendrier et contacts', included: true },
            { text: 'Boîtes mail partagées', included: true },
            { text: 'Console d\'administration complète', included: true },
          ],
        },
      ],
      bundles: [
        {
          name: 'Forfait Starter',
          description: 'Tout pour démarrer',
          priceOnce: '349',
          priceMonthly: '29,99',
          features: [
            { text: 'Site web 1 page', included: true },
            { text: 'Enregistrement de domaine', included: true },
            { text: '3 adresses email professionnelles', included: true },
            { text: 'Hébergement inclus', included: true },
            { text: 'Certificat SSL', included: true },
            { text: 'Optimisation SEO', included: false },
            { text: 'Maintenance mensuelle', included: false },
            { text: 'Outils marketing', included: false },
          ],
        },
        {
          name: 'Forfait Business',
          description: 'Solution d\'entreprise complète',
          priceOnce: '999',
          priceMonthly: '59,99',
          popular: true,
          features: [
            { text: 'Site Business (5-10 pages)', included: true },
            { text: 'Enregistrement de domaine', included: true },
            { text: '10 adresses email professionnelles', included: true },
            { text: 'Hébergement premium', included: true },
            { text: 'Certificat SSL', included: true },
            { text: 'Optimisation SEO', included: true },
            { text: 'Maintenance mensuelle', included: true },
            { text: 'Outils marketing de base', included: true },
          ],
        },
        {
          name: 'Forfait E-commerce',
          description: 'Solution boutique complète',
          priceOnce: '1.599',
          priceMonthly: '99,99',
          features: [
            { text: 'Boutique professionnelle', included: true },
            { text: 'Enregistrement de domaine', included: true },
            { text: 'Email professionnel', included: true },
            { text: 'Hébergement premium', included: true },
            { text: 'Certificat SSL', included: true },
            { text: 'SEO et outils marketing', included: true },
            { text: 'Paiements et livraison', included: true },
            { text: 'Support prioritaire', included: true },
          ],
        },
      ],
    },
    es: {
      title: 'Nuestros Paquetes',
      subtitle: 'Elige el paquete que se adapte a tu negocio',
      intro: 'Desde páginas de aterrizaje simples hasta tiendas online completas. Tenemos un paquete para cada emprendedor.',
      tabs: {
        websites: 'Sitios Web',
        ecommerce: 'E-commerce',
        email: 'Email y Dominio',
        bundles: 'Paquetes',
      },
      priceLabel: {
        once: 'único',
        monthly: '/mes',
      },
      popular: 'Popular',
      cta: 'Pedir ahora',
      ctaContact: 'Solicitar presupuesto',
      faq: {
        title: 'Preguntas frecuentes',
        items: [
          { q: '¿Qué está incluido en los costos mensuales?', a: 'Hosting, certificado SSL, mantenimiento, actualizaciones y soporte técnico.' },
          { q: '¿Puedo actualizar a un paquete más grande después?', a: 'Sí, puedes actualizar en cualquier momento. Solo cobramos la diferencia.' },
          { q: '¿Cuánto tiempo tarda en construirse mi sitio web?', a: 'Un sitio Starter está listo en 1-2 semanas. Los paquetes Business y Premium tardan 2-4 semanas.' },
        ],
      },
      notSure: '¿No estás seguro de qué paquete te conviene?',
      contactUs: 'Contáctanos para asesoramiento gratuito',
      websites: [
        {
          name: 'Starter',
          description: 'Página de aterrizaje única',
          priceOnce: '299',
          priceMonthly: '19,99',
          features: [
            { text: 'Página de aterrizaje profesional', included: true },
            { text: 'Diseño responsive móvil', included: true },
            { text: 'Certificado SSL', included: true },
            { text: 'Hosting incluido', included: true },
            { text: '1 dirección de email empresarial', included: true },
            { text: 'Formulario de contacto', included: true },
            { text: 'Optimización SEO básica', included: false },
            { text: 'Mantenimiento mensual', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Sitio web empresarial completo',
          priceOnce: '799',
          priceMonthly: '29,99',
          popular: true,
          features: [
            { text: '5-10 páginas', included: true },
            { text: 'Diseño responsive móvil', included: true },
            { text: 'Certificado SSL', included: true },
            { text: 'Hosting incluido', included: true },
            { text: '5 direcciones de email empresarial', included: true },
            { text: 'Formulario de contacto', included: true },
            { text: 'Optimización SEO básica', included: true },
            { text: 'Mantenimiento mensual', included: true },
          ],
        },
        {
          name: 'Premium',
          description: 'Sitio web personalizado',
          priceOnce: '1.499',
          priceMonthly: '49,99',
          features: [
            { text: 'Páginas ilimitadas', included: true },
            { text: 'Diseño personalizado', included: true },
            { text: 'Certificado SSL', included: true },
            { text: 'Hosting premium', included: true },
            { text: '10 direcciones de email empresarial', included: true },
            { text: 'Formularios avanzados', included: true },
            { text: 'Optimización SEO completa', included: true },
            { text: 'Soporte prioritario', included: true },
          ],
        },
      ],
      ecommerce: [
        {
          name: 'Starter',
          description: 'Tienda pequeña',
          priceOnce: '599',
          priceMonthly: '39,99',
          features: [
            { text: 'Hasta 50 productos', included: true },
            { text: 'Diseño responsive móvil', included: true },
            { text: 'Certificado SSL', included: true },
            { text: 'Hosting incluido', included: true },
            { text: 'Pagos con tarjeta', included: true },
            { text: 'Gestión de inventario básica', included: true },
            { text: 'Herramientas de marketing', included: false },
            { text: 'Integraciones API', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Tienda en crecimiento',
          priceOnce: '1.299',
          priceMonthly: '69,99',
          popular: true,
          features: [
            { text: 'Hasta 500 productos', included: true },
            { text: 'Diseño profesional', included: true },
            { text: 'Certificado SSL', included: true },
            { text: 'Hosting incluido', included: true },
            { text: 'Todos los métodos de pago', included: true },
            { text: 'Gestión de inventario avanzada', included: true },
            { text: 'Herramientas de marketing', included: true },
            { text: 'Integraciones API básicas', included: true },
          ],
        },
        {
          name: 'Premium',
          description: 'Tienda enterprise',
          priceOnce: '2.499',
          priceMonthly: '99,99',
          features: [
            { text: 'Productos ilimitados', included: true },
            { text: 'Diseño personalizado', included: true },
            { text: 'Certificado SSL', included: true },
            { text: 'Hosting premium', included: true },
            { text: 'Todos los métodos de pago', included: true },
            { text: 'Gestión multi-almacén', included: true },
            { text: 'Marketing avanzado', included: true },
            { text: 'Integración API completa', included: true },
          ],
        },
      ],
      email: [
        {
          name: 'Starter',
          description: 'Pequeña empresa',
          priceMonthly: '4,99',
          features: [
            { text: '1 dominio incluido', included: true },
            { text: '5 buzones de correo', included: true },
            { text: '10GB de almacenamiento por buzón', included: true },
            { text: 'Acceso webmail', included: true },
            { text: 'Filtro anti-spam y virus', included: true },
            { text: 'Calendario y contactos', included: false },
            { text: 'Buzones compartidos', included: false },
            { text: 'Consola de administración', included: false },
          ],
        },
        {
          name: 'Business',
          description: 'Equipo en crecimiento',
          priceMonthly: '14,99',
          popular: true,
          features: [
            { text: '1 dominio incluido', included: true },
            { text: '25 buzones de correo', included: true },
            { text: '50GB de almacenamiento por buzón', included: true },
            { text: 'Acceso webmail', included: true },
            { text: 'Filtro anti-spam y virus', included: true },
            { text: 'Calendario y contactos', included: true },
            { text: 'Buzones compartidos', included: true },
            { text: 'Consola de administración', included: false },
          ],
        },
        {
          name: 'Premium',
          description: 'Gran empresa',
          priceMonthly: '29,99',
          features: [
            { text: '1 dominio incluido', included: true },
            { text: 'Buzones ilimitados', included: true },
            { text: '100GB de almacenamiento por buzón', included: true },
            { text: 'Acceso webmail', included: true },
            { text: 'Seguridad avanzada', included: true },
            { text: 'Calendario y contactos', included: true },
            { text: 'Buzones compartidos', included: true },
            { text: 'Consola de administración completa', included: true },
          ],
        },
      ],
      bundles: [
        {
          name: 'Paquete Starter',
          description: 'Todo para empezar',
          priceOnce: '349',
          priceMonthly: '29,99',
          features: [
            { text: 'Sitio web de 1 página', included: true },
            { text: 'Registro de dominio', included: true },
            { text: '3 direcciones de email empresarial', included: true },
            { text: 'Hosting incluido', included: true },
            { text: 'Certificado SSL', included: true },
            { text: 'Optimización SEO', included: false },
            { text: 'Mantenimiento mensual', included: false },
            { text: 'Herramientas de marketing', included: false },
          ],
        },
        {
          name: 'Paquete Business',
          description: 'Solución empresarial completa',
          priceOnce: '999',
          priceMonthly: '59,99',
          popular: true,
          features: [
            { text: 'Sitio Business (5-10 páginas)', included: true },
            { text: 'Registro de dominio', included: true },
            { text: '10 direcciones de email empresarial', included: true },
            { text: 'Hosting premium', included: true },
            { text: 'Certificado SSL', included: true },
            { text: 'Optimización SEO', included: true },
            { text: 'Mantenimiento mensual', included: true },
            { text: 'Herramientas de marketing básicas', included: true },
          ],
        },
        {
          name: 'Paquete E-commerce',
          description: 'Solución de tienda completa',
          priceOnce: '1.599',
          priceMonthly: '99,99',
          features: [
            { text: 'Tienda profesional', included: true },
            { text: 'Registro de dominio', included: true },
            { text: 'Email empresarial', included: true },
            { text: 'Hosting premium', included: true },
            { text: 'Certificado SSL', included: true },
            { text: 'SEO y herramientas de marketing', included: true },
            { text: 'Pagos y envíos', included: true },
            { text: 'Soporte prioritario', included: true },
          ],
        },
      ],
    },
  };

  const t = content[locale];
  const tabs: TabKey[] = ['websites', 'ecommerce', 'email', 'bundles'];

  const getPackages = () => {
    switch (activeTab) {
      case 'websites':
        return t.websites;
      case 'ecommerce':
        return t.ecommerce;
      case 'email':
        return t.email;
      case 'bundles':
        return t.bundles;
      default:
        return t.websites;
    }
  };

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Intro */}
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-300 text-center">{t.intro}</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {t.tabs[tab]}
              </button>
            ))}
          </div>

          {/* Package Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {getPackages().map((pkg, index) => (
              <PackageCard
                key={index}
                name={pkg.name}
                description={pkg.description}
                priceOnce={(pkg as { priceOnce?: string }).priceOnce}
                priceMonthly={pkg.priceMonthly}
                priceLabel={t.priceLabel}
                features={pkg.features}
                popular={(pkg as { popular?: boolean }).popular}
                popularLabel={t.popular}
                ctaText={t.cta}
                ctaLink="https://billing.gwcwebdesign.com"
              />
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">{t.faq.title}</h2>
            <div className="space-y-4">
              {t.faq.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6"
                >
                  <h3 className="font-semibold text-white mb-2">{item.q}</h3>
                  <p className="text-gray-400">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-blue-500/30 p-8">
            <h3 className="text-xl font-bold text-white mb-4">{t.notSure}</h3>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all"
            >
              {t.contactUs}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
