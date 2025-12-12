'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function Privacybeleid() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Privacybeleid",
      subtitle: "Laatst bijgewerkt: december 2024",
      intro: "GWC (Geors Webshop Company) respecteert uw privacy en zorgt ervoor dat de persoonlijke informatie die u ons verschaft vertrouwelijk wordt behandeld.",
      sections: [
        {
          title: "1. Wie zijn wij?",
          content: `GWC (Geors Webshop Company)
WeWork Weteringschans
Weteringschans 165
1017 XD Amsterdam
Email: info@gwcwebdesign.com
KvK: 94768234`,
        },
        {
          title: "2. Welke gegevens verzamelen wij?",
          content: `Wij verzamelen de volgende persoonsgegevens:
- Naam en contactgegevens (email, telefoon, adres)
- Bedrijfsgegevens
- Communicatie via email of telefoon
- Gegevens over uw gebruik van onze website (via cookies)`,
        },
        {
          title: "3. Waarvoor gebruiken wij uw gegevens?",
          content: `Wij gebruiken uw gegevens voor:
- Het uitvoeren van onze diensten
- Communicatie over uw project
- Het versturen van offertes en facturen
- Het verbeteren van onze website en diensten
- Het voldoen aan wettelijke verplichtingen`,
        },
        {
          title: "4. Hoe lang bewaren wij uw gegevens?",
          content: `Wij bewaren uw gegevens niet langer dan noodzakelijk voor het doel waarvoor ze zijn verzameld. Financiële gegevens bewaren wij 7 jaar conform de wettelijke bewaarplicht.`,
        },
        {
          title: "5. Delen wij uw gegevens met derden?",
          content: `Wij delen uw gegevens alleen met derden indien dit noodzakelijk is voor onze dienstverlening of wanneer wij hiertoe wettelijk verplicht zijn. Wij sluiten met deze partijen verwerkersovereenkomsten.`,
        },
        {
          title: "6. Cookies",
          content: `Onze website maakt gebruik van cookies om de website beter te laten functioneren en om het bezoekgedrag te analyseren. U kunt cookies uitschakelen via uw browserinstellingen.`,
        },
        {
          title: "7. Uw rechten",
          content: `U heeft het recht om:
- Uw persoonsgegevens in te zien
- Uw persoonsgegevens te corrigeren of te verwijderen
- Bezwaar te maken tegen de verwerking
- Een klacht in te dienen bij de Autoriteit Persoonsgegevens`,
        },
        {
          title: "8. Beveiliging",
          content: `Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking.`,
        },
        {
          title: "9. Contact",
          content: `Heeft u vragen over dit privacybeleid of wilt u gebruik maken van uw rechten? Neem dan contact met ons op via info@gwcwebdesign.com.`,
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      subtitle: "Last updated: December 2024",
      intro: "GWC (Geors Webshop Company) respects your privacy and ensures that the personal information you provide to us is treated confidentially.",
      sections: [
        {
          title: "1. Who are we?",
          content: `GWC (Geors Webshop Company)
WeWork Weteringschans
Weteringschans 165
1017 XD Amsterdam
Email: info@gwcwebdesign.com
CoC: 94768234`,
        },
        {
          title: "2. What data do we collect?",
          content: `We collect the following personal data:
- Name and contact details (email, phone, address)
- Company information
- Communication via email or phone
- Data about your use of our website (via cookies)`,
        },
        {
          title: "3. Why do we use your data?",
          content: `We use your data for:
- Executing our services
- Communication about your project
- Sending quotations and invoices
- Improving our website and services
- Complying with legal obligations`,
        },
        {
          title: "4. How long do we keep your data?",
          content: `We do not keep your data longer than necessary for the purpose for which it was collected. We keep financial data for 7 years in accordance with the legal retention obligation.`,
        },
        {
          title: "5. Do we share your data with third parties?",
          content: `We only share your data with third parties if this is necessary for our services or when we are legally obliged to do so. We conclude processing agreements with these parties.`,
        },
        {
          title: "6. Cookies",
          content: `Our website uses cookies to improve functionality and analyze visitor behavior. You can disable cookies through your browser settings.`,
        },
        {
          title: "7. Your rights",
          content: `You have the right to:
- View your personal data
- Correct or delete your personal data
- Object to the processing
- File a complaint with the Data Protection Authority`,
        },
        {
          title: "8. Security",
          content: `We take appropriate technical and organizational measures to protect your personal data against loss or unlawful processing.`,
        },
        {
          title: "9. Contact",
          content: `Do you have questions about this privacy policy or do you want to exercise your rights? Please contact us at info@gwcwebdesign.com.`,
        },
      ],
    },
    de: {
      title: "Datenschutzerklärung",
      subtitle: "Zuletzt aktualisiert: Dezember 2024",
      intro: "GWC (Geors Webshop Company) respektiert Ihre Privatsphäre und stellt sicher, dass die von Ihnen bereitgestellten persönlichen Informationen vertraulich behandelt werden.",
      sections: [
        { title: "1. Wer sind wir?", content: "GWC (Geors Webshop Company)\nWeWork Weteringschans\nWeteringschans 165\n1017 XD Amsterdam\nEmail: info@gwcwebdesign.com\nHRB: 94768234" },
        { title: "2. Welche Daten erheben wir?", content: "Wir erheben folgende personenbezogene Daten:\n- Name und Kontaktdaten (E-Mail, Telefon, Adresse)\n- Unternehmensinformationen\n- Kommunikation per E-Mail oder Telefon\n- Daten über Ihre Nutzung unserer Website (via Cookies)" },
        { title: "3. Wofür nutzen wir Ihre Daten?", content: "Wir nutzen Ihre Daten für:\n- Die Durchführung unserer Dienstleistungen\n- Kommunikation über Ihr Projekt\n- Versand von Angeboten und Rechnungen\n- Verbesserung unserer Website und Dienste\n- Erfüllung gesetzlicher Verpflichtungen" },
        { title: "4. Wie lange speichern wir Ihre Daten?", content: "Wir speichern Ihre Daten nicht länger als für den Zweck notwendig. Finanzdaten bewahren wir gemäß gesetzlicher Aufbewahrungspflicht 7 Jahre auf." },
        { title: "5. Teilen wir Ihre Daten mit Dritten?", content: "Wir teilen Ihre Daten nur mit Dritten, wenn dies für unsere Dienste notwendig ist oder wir gesetzlich dazu verpflichtet sind. Mit diesen Parteien schließen wir Auftragsverarbeitungsverträge ab." },
        { title: "6. Cookies", content: "Unsere Website verwendet Cookies, um die Funktionalität zu verbessern und das Besucherverhalten zu analysieren. Sie können Cookies über Ihre Browsereinstellungen deaktivieren." },
        { title: "7. Ihre Rechte", content: "Sie haben das Recht:\n- Ihre personenbezogenen Daten einzusehen\n- Ihre personenbezogenen Daten zu korrigieren oder zu löschen\n- Der Verarbeitung zu widersprechen\n- Eine Beschwerde bei der Datenschutzbehörde einzureichen" },
        { title: "8. Sicherheit", content: "Wir treffen angemessene technische und organisatorische Maßnahmen, um Ihre personenbezogenen Daten vor Verlust oder unrechtmäßiger Verarbeitung zu schützen." },
        { title: "9. Kontakt", content: "Haben Sie Fragen zu dieser Datenschutzerklärung oder möchten Sie Ihre Rechte ausüben? Kontaktieren Sie uns unter info@gwcwebdesign.com." },
      ],
    },
    fr: {
      title: "Politique de Confidentialité",
      subtitle: "Dernière mise à jour : décembre 2024",
      intro: "GWC (Geors Webshop Company) respecte votre vie privée et veille à ce que les informations personnelles que vous nous fournissez soient traitées de manière confidentielle.",
      sections: [
        { title: "1. Qui sommes-nous ?", content: "GWC (Geors Webshop Company)\nWeWork Weteringschans\nWeteringschans 165\n1017 XD Amsterdam\nEmail : info@gwcwebdesign.com\nKvK : 94768234" },
        { title: "2. Quelles données collectons-nous ?", content: "Nous collectons les données personnelles suivantes :\n- Nom et coordonnées (email, téléphone, adresse)\n- Informations sur l'entreprise\n- Communications par email ou téléphone\n- Données sur votre utilisation de notre site (via cookies)" },
        { title: "3. Pourquoi utilisons-nous vos données ?", content: "Nous utilisons vos données pour :\n- L'exécution de nos services\n- La communication sur votre projet\n- L'envoi de devis et factures\n- L'amélioration de notre site et services\n- Le respect des obligations légales" },
        { title: "4. Combien de temps conservons-nous vos données ?", content: "Nous ne conservons pas vos données plus longtemps que nécessaire. Les données financières sont conservées 7 ans conformément aux obligations légales." },
        { title: "5. Partageons-nous vos données avec des tiers ?", content: "Nous ne partageons vos données avec des tiers que si cela est nécessaire pour nos services ou si nous y sommes légalement obligés. Nous concluons des accords de traitement avec ces parties." },
        { title: "6. Cookies", content: "Notre site utilise des cookies pour améliorer les fonctionnalités et analyser le comportement des visiteurs. Vous pouvez désactiver les cookies via les paramètres de votre navigateur." },
        { title: "7. Vos droits", content: "Vous avez le droit de :\n- Consulter vos données personnelles\n- Corriger ou supprimer vos données personnelles\n- Vous opposer au traitement\n- Déposer une plainte auprès de l'Autorité de Protection des Données" },
        { title: "8. Sécurité", content: "Nous prenons des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la perte ou le traitement illicite." },
        { title: "9. Contact", content: "Vous avez des questions sur cette politique de confidentialité ou souhaitez exercer vos droits ? Contactez-nous à info@gwcwebdesign.com." },
      ],
    },
    es: {
      title: "Política de Privacidad",
      subtitle: "Última actualización: diciembre 2024",
      intro: "GWC (Geors Webshop Company) respeta su privacidad y garantiza que la información personal que nos proporciona sea tratada de forma confidencial.",
      sections: [
        { title: "1. ¿Quiénes somos?", content: "GWC (Geors Webshop Company)\nWeWork Weteringschans\nWeteringschans 165\n1017 XD Amsterdam\nEmail: info@gwcwebdesign.com\nNIF: 94768234" },
        { title: "2. ¿Qué datos recopilamos?", content: "Recopilamos los siguientes datos personales:\n- Nombre y datos de contacto (email, teléfono, dirección)\n- Información de la empresa\n- Comunicación por email o teléfono\n- Datos sobre su uso de nuestro sitio web (via cookies)" },
        { title: "3. ¿Para qué usamos sus datos?", content: "Usamos sus datos para:\n- La ejecución de nuestros servicios\n- Comunicación sobre su proyecto\n- Envío de presupuestos y facturas\n- Mejora de nuestro sitio web y servicios\n- Cumplimiento de obligaciones legales" },
        { title: "4. ¿Cuánto tiempo conservamos sus datos?", content: "No conservamos sus datos más tiempo del necesario. Los datos financieros se conservan 7 años según la obligación legal de retención." },
        { title: "5. ¿Compartimos sus datos con terceros?", content: "Solo compartimos sus datos con terceros si es necesario para nuestros servicios o cuando estamos legalmente obligados. Firmamos acuerdos de procesamiento con estas partes." },
        { title: "6. Cookies", content: "Nuestro sitio utiliza cookies para mejorar la funcionalidad y analizar el comportamiento de los visitantes. Puede desactivar las cookies a través de la configuración de su navegador." },
        { title: "7. Sus derechos", content: "Tiene derecho a:\n- Ver sus datos personales\n- Corregir o eliminar sus datos personales\n- Oponerse al procesamiento\n- Presentar una queja ante la Autoridad de Protección de Datos" },
        { title: "8. Seguridad", content: "Tomamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra pérdida o procesamiento ilegal." },
        { title: "9. Contacto", content: "¿Tiene preguntas sobre esta política de privacidad o desea ejercer sus derechos? Contáctenos en info@gwcwebdesign.com." },
      ],
    },
  };

  const t = content[locale];

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-300">{t.intro}</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8 md:p-12">
            {t.sections.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h2 className="font-semibold text-xl mb-4 text-white">{section.title}</h2>
                <p className="text-gray-400 whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
