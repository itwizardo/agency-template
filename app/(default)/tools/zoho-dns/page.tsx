'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";
import DnsWizard from "@/components/dns-wizard";

export default function ZohoDnsPage() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Zoho DNS Wizard",
      subtitle: "Configureer je domein voor Zoho Mail",
    },
    en: {
      title: "Zoho DNS Wizard",
      subtitle: "Configure your domain for Zoho Mail",
    },
    de: {
      title: "Zoho DNS Assistent",
      subtitle: "Konfigurieren Sie Ihre Domain für Zoho Mail",
    },
    fr: {
      title: "Assistant DNS Zoho",
      subtitle: "Configurez votre domaine pour Zoho Mail",
    },
    es: {
      title: "Asistente DNS Zoho",
      subtitle: "Configura tu dominio para Zoho Mail",
    },
  };

  const t = content[locale];

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <DnsWizard />
        </div>
      </section>
    </>
  );
}
