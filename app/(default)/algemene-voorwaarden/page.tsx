'use client';

import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";

export default function AlgemeneVoorwaarden() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "Algemene Voorwaarden",
      subtitle: "Laatst bijgewerkt: december 2024",
      sections: [
        {
          title: "1. Definities",
          content: `In deze algemene voorwaarden wordt verstaan onder:
- "Geors": Geors Webshop Company, gevestigd te Amsterdam.
- "Opdrachtgever": de natuurlijke of rechtspersoon die met Geors een overeenkomst aangaat.
- "Diensten": alle werkzaamheden die Geors voor de opdrachtgever verricht.
- "Overeenkomst": de overeenkomst tussen Geors en opdrachtgever.`,
        },
        {
          title: "2. Toepasselijkheid",
          content: `Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, offertes en overeenkomsten tussen Geors en opdrachtgever. Afwijkingen van deze voorwaarden zijn alleen geldig indien schriftelijk overeengekomen.`,
        },
        {
          title: "3. Offertes en Aanbiedingen",
          content: `Alle offertes en aanbiedingen van Geors zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld. Een offerte is 30 dagen geldig. Geors kan niet aan een offerte worden gehouden indien de opdrachtgever redelijkerwijs kan begrijpen dat de offerte een kennelijke vergissing of verschrijving bevat.`,
        },
        {
          title: "4. Uitvoering van de Overeenkomst",
          content: `Geors zal de overeenkomst naar beste inzicht en vermogen uitvoeren. Geors heeft het recht bepaalde werkzaamheden door derden te laten uitvoeren. De uitvoeringstermijn is indicatief en geen fatale termijn.`,
        },
        {
          title: "5. Prijzen en Betaling",
          content: `Alle prijzen zijn exclusief BTW en andere heffingen. Betaling dient te geschieden binnen 14 dagen na factuurdatum. Bij overschrijding van de betalingstermijn is de opdrachtgever van rechtswege in verzuim en is wettelijke rente verschuldigd.`,
        },
        {
          title: "6. Intellectueel Eigendom",
          content: `Alle intellectuele eigendomsrechten op de door Geors ontwikkelde producten blijven bij Geors, tenzij schriftelijk anders overeengekomen. Na volledige betaling verkrijgt de opdrachtgever een gebruiksrecht.`,
        },
        {
          title: "7. Aansprakelijkheid",
          content: `De aansprakelijkheid van Geors is beperkt tot het bedrag dat door de verzekeraar wordt uitgekeerd, of maximaal het factuurbedrag van de betreffende opdracht. Geors is niet aansprakelijk voor indirecte schade.`,
        },
        {
          title: "8. Geheimhouding",
          content: `Beide partijen zijn verplicht tot geheimhouding van alle vertrouwelijke informatie die zij in het kader van de overeenkomst hebben verkregen.`,
        },
        {
          title: "9. Toepasselijk Recht",
          content: `Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter te Amsterdam.`,
        },
      ],
    },
    en: {
      title: "Terms and Conditions",
      subtitle: "Last updated: December 2024",
      sections: [
        {
          title: "1. Definitions",
          content: `In these general terms and conditions, the following definitions apply:
- "Geors": Geors Webshop Company, located in Amsterdam.
- "Client": the natural or legal person entering into an agreement with Geors.
- "Services": all work performed by Geors for the client.
- "Agreement": the agreement between Geors and the client.`,
        },
        {
          title: "2. Applicability",
          content: `These general terms and conditions apply to all offers, quotations and agreements between Geors and the client. Deviations from these conditions are only valid if agreed in writing.`,
        },
        {
          title: "3. Quotations and Offers",
          content: `All quotations and offers from Geors are non-binding unless explicitly stated otherwise. A quotation is valid for 30 days. Geors cannot be held to a quotation if the client can reasonably understand that the quotation contains an obvious error.`,
        },
        {
          title: "4. Execution of the Agreement",
          content: `Geors will execute the agreement to the best of its knowledge and ability. Geors has the right to have certain work performed by third parties. The execution period is indicative and not a strict deadline.`,
        },
        {
          title: "5. Prices and Payment",
          content: `All prices are exclusive of VAT and other levies. Payment must be made within 14 days of the invoice date. If the payment term is exceeded, the client is automatically in default and statutory interest is due.`,
        },
        {
          title: "6. Intellectual Property",
          content: `All intellectual property rights to products developed by Geors remain with Geors, unless otherwise agreed in writing. After full payment, the client obtains a right of use.`,
        },
        {
          title: "7. Liability",
          content: `Geors' liability is limited to the amount paid out by the insurer, or maximum the invoice amount of the relevant assignment. Geors is not liable for indirect damage.`,
        },
        {
          title: "8. Confidentiality",
          content: `Both parties are obliged to maintain confidentiality of all confidential information obtained in the context of the agreement.`,
        },
        {
          title: "9. Applicable Law",
          content: `Dutch law applies to all agreements. Disputes will be submitted to the competent court in Amsterdam.`,
        },
      ],
    },
    de: {
      title: "Allgemeine Geschäftsbedingungen",
      subtitle: "Zuletzt aktualisiert: Dezember 2024",
      sections: [
        { title: "1. Definitionen", content: "In diesen allgemeinen Geschäftsbedingungen wird verstanden unter:\n- \"Geors\": Geors Webshop Company, mit Sitz in Amsterdam.\n- \"Auftraggeber\": die natürliche oder juristische Person, die mit Geors einen Vertrag abschließt.\n- \"Dienstleistungen\": alle Arbeiten, die Geors für den Auftraggeber ausführt.\n- \"Vertrag\": der Vertrag zwischen Geors und dem Auftraggeber." },
        { title: "2. Anwendbarkeit", content: "Diese allgemeinen Geschäftsbedingungen gelten für alle Angebote, Kostenvoranschläge und Verträge zwischen Geors und dem Auftraggeber. Abweichungen von diesen Bedingungen sind nur gültig, wenn sie schriftlich vereinbart wurden." },
        { title: "3. Angebote und Kostenvoranschläge", content: "Alle Angebote und Kostenvoranschläge von Geors sind freibleibend, sofern nicht ausdrücklich anders angegeben. Ein Angebot ist 30 Tage gültig. Geors kann nicht an ein Angebot gebunden werden, wenn der Auftraggeber vernünftigerweise verstehen kann, dass das Angebot einen offensichtlichen Fehler enthält." },
        { title: "4. Vertragsausführung", content: "Geors wird den Vertrag nach bestem Wissen und Gewissen ausführen. Geors hat das Recht, bestimmte Arbeiten von Dritten ausführen zu lassen. Die Ausführungsfrist ist indikativ und keine feste Frist." },
        { title: "5. Preise und Zahlung", content: "Alle Preise verstehen sich ohne MwSt. und andere Abgaben. Die Zahlung muss innerhalb von 14 Tagen nach Rechnungsdatum erfolgen. Bei Überschreitung der Zahlungsfrist ist der Auftraggeber automatisch in Verzug und schuldet Verzugszinsen." },
        { title: "6. Geistiges Eigentum", content: "Alle geistigen Eigentumsrechte an von Geors entwickelten Produkten verbleiben bei Geors, sofern nicht schriftlich anders vereinbart. Nach vollständiger Zahlung erhält der Auftraggeber ein Nutzungsrecht." },
        { title: "7. Haftung", content: "Die Haftung von Geors ist auf den vom Versicherer ausgezahlten Betrag oder maximal den Rechnungsbetrag des betreffenden Auftrags beschränkt. Geors haftet nicht für indirekte Schäden." },
        { title: "8. Vertraulichkeit", content: "Beide Parteien sind verpflichtet, alle vertraulichen Informationen, die sie im Rahmen des Vertrags erhalten haben, vertraulich zu behandeln." },
        { title: "9. Anwendbares Recht", content: "Auf alle Verträge ist niederländisches Recht anwendbar. Streitigkeiten werden dem zuständigen Gericht in Amsterdam vorgelegt." },
      ],
    },
    fr: {
      title: "Conditions Générales",
      subtitle: "Dernière mise à jour : décembre 2024",
      sections: [
        { title: "1. Définitions", content: "Dans ces conditions générales, on entend par :\n- \"Geors\" : Geors Webshop Company, établie à Amsterdam.\n- \"Client\" : la personne physique ou morale qui conclut un accord avec Geors.\n- \"Services\" : tous les travaux effectués par Geors pour le client.\n- \"Accord\" : l'accord entre Geors et le client." },
        { title: "2. Applicabilité", content: "Ces conditions générales s'appliquent à toutes les offres, devis et accords entre Geors et le client. Les écarts par rapport à ces conditions ne sont valables que s'ils sont convenus par écrit." },
        { title: "3. Devis et Offres", content: "Tous les devis et offres de Geors sont sans engagement sauf indication contraire explicite. Un devis est valable 30 jours. Geors ne peut être tenu à un devis si le client peut raisonnablement comprendre que le devis contient une erreur manifeste." },
        { title: "4. Exécution de l'Accord", content: "Geors exécutera l'accord au mieux de ses connaissances et capacités. Geors a le droit de faire exécuter certains travaux par des tiers. Le délai d'exécution est indicatif et non impératif." },
        { title: "5. Prix et Paiement", content: "Tous les prix sont hors TVA et autres taxes. Le paiement doit être effectué dans les 14 jours suivant la date de facturation. En cas de dépassement du délai de paiement, le client est automatiquement en défaut et des intérêts de retard sont dus." },
        { title: "6. Propriété Intellectuelle", content: "Tous les droits de propriété intellectuelle sur les produits développés par Geors restent chez Geors, sauf accord écrit contraire. Après paiement intégral, le client obtient un droit d'utilisation." },
        { title: "7. Responsabilité", content: "La responsabilité de Geors est limitée au montant versé par l'assureur, ou au maximum au montant de la facture de la mission concernée. Geors n'est pas responsable des dommages indirects." },
        { title: "8. Confidentialité", content: "Les deux parties sont tenues de maintenir la confidentialité de toutes les informations confidentielles obtenues dans le cadre de l'accord." },
        { title: "9. Droit Applicable", content: "Le droit néerlandais s'applique à tous les accords. Les litiges seront soumis au tribunal compétent d'Amsterdam." },
      ],
    },
    es: {
      title: "Términos y Condiciones",
      subtitle: "Última actualización: diciembre 2024",
      sections: [
        { title: "1. Definiciones", content: "En estos términos y condiciones generales se entiende por:\n- \"Geors\": Geors Webshop Company, ubicada en Amsterdam.\n- \"Cliente\": la persona física o jurídica que celebra un acuerdo con Geors.\n- \"Servicios\": todos los trabajos realizados por Geors para el cliente.\n- \"Acuerdo\": el acuerdo entre Geors y el cliente." },
        { title: "2. Aplicabilidad", content: "Estos términos y condiciones generales se aplican a todas las ofertas, presupuestos y acuerdos entre Geors y el cliente. Las desviaciones de estas condiciones solo son válidas si se acuerdan por escrito." },
        { title: "3. Presupuestos y Ofertas", content: "Todos los presupuestos y ofertas de Geors son sin compromiso a menos que se indique expresamente lo contrario. Un presupuesto es válido por 30 días. Geors no puede estar obligado a un presupuesto si el cliente puede razonablemente entender que el presupuesto contiene un error obvio." },
        { title: "4. Ejecución del Acuerdo", content: "Geors ejecutará el acuerdo con el mejor conocimiento y capacidad. Geors tiene derecho a que terceros realicen ciertos trabajos. El plazo de ejecución es indicativo y no es una fecha límite estricta." },
        { title: "5. Precios y Pago", content: "Todos los precios son sin IVA y otros impuestos. El pago debe realizarse dentro de los 14 días posteriores a la fecha de la factura. Si se excede el plazo de pago, el cliente está automáticamente en mora y se adeudan intereses legales." },
        { title: "6. Propiedad Intelectual", content: "Todos los derechos de propiedad intelectual de los productos desarrollados por Geors permanecen con Geors, a menos que se acuerde lo contrario por escrito. Después del pago completo, el cliente obtiene un derecho de uso." },
        { title: "7. Responsabilidad", content: "La responsabilidad de Geors se limita al monto pagado por el asegurador, o máximo al monto de la factura del encargo correspondiente. Geors no es responsable por daños indirectos." },
        { title: "8. Confidencialidad", content: "Ambas partes están obligadas a mantener la confidencialidad de toda la información confidencial obtenida en el contexto del acuerdo." },
        { title: "9. Ley Aplicable", content: "La ley holandesa se aplica a todos los acuerdos. Las disputas se someterán al tribunal competente de Amsterdam." },
      ],
    },
  };

  const t = content[locale];

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
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
