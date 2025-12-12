'use client';

import { useState } from 'react';
import { useLanguage } from "@/lib/i18n";
import PageHeader from "@/components/page-header";
import { Disclosure, Transition } from '@headlessui/react';

export default function EcommerceGids() {
  const { locale } = useLanguage();

  const content = {
    nl: {
      title: "E-commerce Gids",
      subtitle: "Alles wat u moet weten over online verkopen",
      intro: "Of u nu net begint of uw bestaande webshop wilt verbeteren, deze gids helpt u op weg naar e-commerce succes. Klik op een hoofdstuk om meer te lezen.",
      chapters: [
        {
          number: "01",
          title: "De Basics van E-commerce",
          description: "Begrijp de fundamenten van online verkopen voordat u begint.",
          content: [
            {
              heading: "Wat is e-commerce?",
              text: "E-commerce, oftewel elektronische handel, is het kopen en verkopen van producten of diensten via internet. Dit omvat alles van grote online marktplaatsen tot kleine niche webshops. In Nederland groeit de e-commerce markt jaarlijks met dubbele cijfers."
            },
            {
              heading: "Verschillende businessmodellen",
              text: "Er zijn verschillende manieren om online te verkopen: B2C (Business to Consumer) - direct aan consumenten, B2B (Business to Business) - aan andere bedrijven, Dropshipping - zonder eigen voorraad, en Marketplace selling - via platforms als Bol.com of Amazon."
            },
            {
              heading: "Voor- en nadelen van online verkopen",
              text: "Voordelen: 24/7 bereikbaarheid, lagere operationele kosten, groter bereik, en schaalbaarheid. Nadelen: Hoge concurrentie, technische uitdagingen, verzendkosten, en het opbouwen van vertrouwen bij klanten die u niet persoonlijk ontmoeten."
            },
            {
              heading: "De Nederlandse e-commerce markt",
              text: "Nederland heeft een van de hoogste internetpenetraties ter wereld. 96% van de Nederlanders koopt online. iDEAL is de meest gebruikte betaalmethode. De totale e-commerce omzet bedroeg in 2023 meer dan €30 miljard."
            }
          ]
        },
        {
          number: "02",
          title: "Een Webshop Starten",
          description: "Praktische stappen om uw webshop van de grond te krijgen.",
          content: [
            {
              heading: "Het juiste platform kiezen",
              text: "De keuze voor een platform hangt af van uw behoeften. WooCommerce (WordPress) biedt maximale flexibiliteit en is kostenefficiënt. Shopify is gebruiksvriendelijk maar heeft maandelijkse kosten. Lightspeed is populair in Nederland met goede lokale support. Magento is geschikt voor grote webshops met complexe behoeften."
            },
            {
              heading: "Domein en hosting",
              text: "Kies een korte, memorabele domeinnaam die uw merk weerspiegelt. Een .nl domein wekt vertrouwen bij Nederlandse klanten. Investeer in betrouwbare hosting met goede uptime (99.9%+), SSL-certificaat, en snelle laadtijden. Overweeg managed hosting voor minder technisch gedoe."
            },
            {
              heading: "Productpresentatie",
              text: "Goede productfotografie is essentieel - gebruik meerdere hoeken en detail shots. Schrijf unieke, SEO-vriendelijke productbeschrijvingen. Vermeld alle relevante specificaties. Toon voorraadstatus en levertijden. Overweeg video's voor complexere producten."
            },
            {
              heading: "Betalingen en verzending",
              text: "Bied minimaal iDEAL aan (80% van Nederlandse online betalingen). Voeg creditcard, PayPal en eventueel achteraf betalen toe. Voor verzending: werk samen met PostNL, DHL of andere carriers. Bied track & trace aan. Overweeg gratis verzending boven een bepaald bedrag - dit verhoogt de gemiddelde orderwaarde."
            }
          ]
        },
        {
          number: "03",
          title: "Marketing & Verkeer",
          description: "Trek bezoekers naar uw webshop en converteer ze naar klanten.",
          content: [
            {
              heading: "SEO voor webshops",
              text: "Zoekmachineoptimalisatie is cruciaal voor organisch verkeer. Focus op: unieke productbeschrijvingen (geen copy-paste van leveranciers), geoptimaliseerde title tags en meta descriptions, snelle laadtijden, mobiel-vriendelijke design, en het bouwen van backlinks via PR en samenwerkingen."
            },
            {
              heading: "Social media marketing",
              text: "Kies platforms waar uw doelgroep actief is. Instagram en Pinterest werken goed voor visuele producten. Facebook voor een breder publiek. LinkedIn voor B2B. TikTok voor een jonger publiek. Post consistent, gebruik hashtags strategisch, en investeer in betaalde promoties voor bereik."
            },
            {
              heading: "Email marketing",
              text: "Email marketing heeft de hoogste ROI van alle marketingkanalen. Bouw een emaillijst via pop-ups en nieuwsbriefinschrijvingen. Stuur welkomstmails, abandoned cart emails, en regelmatige nieuwsbrieven. Personaliseer waar mogelijk. Tools: Mailchimp, Klaviyo, of ActiveCampaign."
            },
            {
              heading: "Betaalde advertenties",
              text: "Google Ads voor zoekintentie - mensen die actief zoeken naar uw producten. Google Shopping voor visuele productadvertenties. Facebook/Instagram Ads voor bereik en merkbekendheid. Start klein, test verschillende doelgroepen en advertentieteksten, en schaal op wat werkt."
            }
          ]
        },
        {
          number: "04",
          title: "Conversie Optimalisatie",
          description: "Verhoog het percentage bezoekers dat daadwerkelijk koopt.",
          content: [
            {
              heading: "Checkout optimalisatie",
              text: "Elke extra stap in het checkout proces kost conversies. Bied guest checkout aan. Toon voortgangsindicatoren. Minimaliseer formuliervelden. Toon vertrouwensbadges en betalingslogo's. Bied meerdere betaalmethoden aan. Toon duidelijke verzendkosten vroeg in het proces."
            },
            {
              heading: "Vertrouwen opbouwen",
              text: "Online shoppers hebben vertrouwenssignalen nodig. Toon reviews en ratings prominent. Vermeld keurmerken zoals Thuiswinkel Waarborg. Plaats contactgegevens duidelijk zichtbaar. Bied een ruim retourbeleid aan. Gebruik een SSL-certificaat (https). Toon sociale bewijskracht."
            },
            {
              heading: "Productpagina's verbeteren",
              text: "De productpagina maakt of breekt de verkoop. Gebruik grote, kwalitatieve afbeeldingen met zoom. Schrijf overtuigende copy die voordelen benadrukt. Toon beschikbaarheid en levertijd. Voeg een duidelijke 'In winkelwagen' knop toe. Cross-sell gerelateerde producten. Beantwoord veelgestelde vragen."
            },
            {
              heading: "A/B testing",
              text: "Test systematisch veranderingen aan uw webshop. Test één element tegelijk: knopkleuren, headlines, prijsweergave, productafbeeldingen. Gebruik tools als Google Optimize of VWO. Neem beslissingen op basis van data, niet op gevoel. Test minimaal 2 weken voor statistische significantie."
            }
          ]
        },
        {
          number: "05",
          title: "Schalen & Groeien",
          description: "Breid uw webshop uit en optimaliseer uw operaties.",
          content: [
            {
              heading: "Voorraadbeheer",
              text: "Goed voorraadbeheer voorkomt gemiste verkopen en overstock. Gebruik inventory management software die integreert met uw webshop. Stel reorder points in. Analyseer seizoenspatronen. Overweeg just-in-time voorraad voor snellere producten. Bij groei: overweeg een fulfilment partner."
            },
            {
              heading: "Klantenservice",
              text: "Goede klantenservice is uw concurrentievoordeel. Reageer snel op vragen (binnen 24 uur, liever sneller). Bied meerdere contactmogelijkheden: email, telefoon, chat. Maak een uitgebreide FAQ-pagina. Train uw team goed. Een tevreden klant komt terug en vertelt anderen over u."
            },
            {
              heading: "Internationaal verkopen",
              text: "Uitbreiden naar het buitenland vergroot uw markt enorm. Begin met buurlanden: België, Duitsland. Vertaal uw webshop professioneel. Bied lokale betaalmethoden aan. Bereken internationale verzendkosten. Houd rekening met BTW-regels (EU OSS-regeling). Test de markt voordat u volledig investeert."
            },
            {
              heading: "Automatisering",
              text: "Automatiseer repetitieve taken om tijd vrij te maken voor groei. Email flows: welkomstreeks, abandoned cart, review requests. Voorraad synchronisatie tussen kanalen. Boekhoudkoppeling voor facturen. Chatbots voor veelgestelde vragen. Reporting dashboards voor inzicht. Elke euro geïnvesteerd in automatisering betaalt zich terug."
            }
          ]
        },
      ],
      cta: "Hulp nodig bij uw webshop?",
      ctaText: "Neem contact met ons op voor een gratis strategiegesprek. Wij helpen u graag verder met uw e-commerce ambities.",
      ctaButton: "Plan een gesprek",
      expandAll: "Alles openen",
      collapseAll: "Alles sluiten",
      readyToStart: "Klaar om te starten?",
    },
    en: {
      title: "E-commerce Guide",
      subtitle: "Everything you need to know about selling online",
      intro: "Whether you're just starting out or want to improve your existing webshop, this guide will help you on your way to e-commerce success. Click on a chapter to read more.",
      chapters: [
        {
          number: "01",
          title: "The Basics of E-commerce",
          description: "Understand the fundamentals of online selling before you start.",
          content: [
            {
              heading: "What is e-commerce?",
              text: "E-commerce is the buying and selling of products or services over the internet. This includes everything from large online marketplaces to small niche webshops. In the Netherlands, the e-commerce market grows with double digits annually."
            },
            {
              heading: "Different business models",
              text: "There are various ways to sell online: B2C (Business to Consumer) - directly to consumers, B2B (Business to Business) - to other businesses, Dropshipping - without your own inventory, and Marketplace selling - via platforms like Bol.com or Amazon."
            },
            {
              heading: "Pros and cons of online selling",
              text: "Advantages: 24/7 availability, lower operational costs, larger reach, and scalability. Disadvantages: High competition, technical challenges, shipping costs, and building trust with customers you don't meet in person."
            },
            {
              heading: "The Dutch e-commerce market",
              text: "The Netherlands has one of the highest internet penetration rates in the world. 96% of Dutch people buy online. iDEAL is the most used payment method. Total e-commerce revenue in 2023 exceeded €30 billion."
            }
          ]
        },
        {
          number: "02",
          title: "Starting a Webshop",
          description: "Practical steps to get your webshop off the ground.",
          content: [
            {
              heading: "Choosing the right platform",
              text: "The choice of platform depends on your needs. WooCommerce (WordPress) offers maximum flexibility and is cost-effective. Shopify is user-friendly but has monthly costs. Lightspeed is popular in the Netherlands with good local support. Magento is suitable for large webshops with complex needs."
            },
            {
              heading: "Domain and hosting",
              text: "Choose a short, memorable domain name that reflects your brand. A .nl domain builds trust with Dutch customers. Invest in reliable hosting with good uptime (99.9%+), SSL certificate, and fast loading times. Consider managed hosting for less technical hassle."
            },
            {
              heading: "Product presentation",
              text: "Good product photography is essential - use multiple angles and detail shots. Write unique, SEO-friendly product descriptions. List all relevant specifications. Show stock status and delivery times. Consider videos for more complex products."
            },
            {
              heading: "Payments and shipping",
              text: "Offer at least iDEAL (80% of Dutch online payments). Add credit card, PayPal and possibly buy-now-pay-later options. For shipping: work with PostNL, DHL or other carriers. Offer track & trace. Consider free shipping above a certain amount - this increases average order value."
            }
          ]
        },
        {
          number: "03",
          title: "Marketing & Traffic",
          description: "Attract visitors to your webshop and convert them into customers.",
          content: [
            {
              heading: "SEO for webshops",
              text: "Search engine optimization is crucial for organic traffic. Focus on: unique product descriptions (no copy-paste from suppliers), optimized title tags and meta descriptions, fast loading times, mobile-friendly design, and building backlinks through PR and collaborations."
            },
            {
              heading: "Social media marketing",
              text: "Choose platforms where your target audience is active. Instagram and Pinterest work well for visual products. Facebook for a broader audience. LinkedIn for B2B. TikTok for a younger audience. Post consistently, use hashtags strategically, and invest in paid promotions for reach."
            },
            {
              heading: "Email marketing",
              text: "Email marketing has the highest ROI of all marketing channels. Build an email list via pop-ups and newsletter signups. Send welcome emails, abandoned cart emails, and regular newsletters. Personalize where possible. Tools: Mailchimp, Klaviyo, or ActiveCampaign."
            },
            {
              heading: "Paid advertising",
              text: "Google Ads for search intent - people actively searching for your products. Google Shopping for visual product ads. Facebook/Instagram Ads for reach and brand awareness. Start small, test different audiences and ad copy, and scale what works."
            }
          ]
        },
        {
          number: "04",
          title: "Conversion Optimization",
          description: "Increase the percentage of visitors who actually buy.",
          content: [
            {
              heading: "Checkout optimization",
              text: "Every extra step in the checkout process costs conversions. Offer guest checkout. Show progress indicators. Minimize form fields. Display trust badges and payment logos. Offer multiple payment methods. Show clear shipping costs early in the process."
            },
            {
              heading: "Building trust",
              text: "Online shoppers need trust signals. Display reviews and ratings prominently. Mention certifications like Thuiswinkel Waarborg. Place contact details clearly visible. Offer a generous return policy. Use an SSL certificate (https). Show social proof."
            },
            {
              heading: "Improving product pages",
              text: "The product page makes or breaks the sale. Use large, quality images with zoom. Write persuasive copy that emphasizes benefits. Show availability and delivery time. Add a clear 'Add to cart' button. Cross-sell related products. Answer frequently asked questions."
            },
            {
              heading: "A/B testing",
              text: "Systematically test changes to your webshop. Test one element at a time: button colors, headlines, price display, product images. Use tools like Google Optimize or VWO. Make decisions based on data, not gut feeling. Test for at least 2 weeks for statistical significance."
            }
          ]
        },
        {
          number: "05",
          title: "Scaling & Growth",
          description: "Expand your webshop and optimize your operations.",
          content: [
            {
              heading: "Inventory management",
              text: "Good inventory management prevents missed sales and overstock. Use inventory management software that integrates with your webshop. Set reorder points. Analyze seasonal patterns. Consider just-in-time inventory for faster products. When growing: consider a fulfillment partner."
            },
            {
              heading: "Customer service",
              text: "Good customer service is your competitive advantage. Respond quickly to questions (within 24 hours, preferably faster). Offer multiple contact options: email, phone, chat. Create an extensive FAQ page. Train your team well. A satisfied customer returns and tells others about you."
            },
            {
              heading: "Selling internationally",
              text: "Expanding abroad greatly enlarges your market. Start with neighboring countries: Belgium, Germany. Translate your webshop professionally. Offer local payment methods. Calculate international shipping costs. Account for VAT rules (EU OSS scheme). Test the market before fully investing."
            },
            {
              heading: "Automation",
              text: "Automate repetitive tasks to free up time for growth. Email flows: welcome series, abandoned cart, review requests. Inventory synchronization between channels. Accounting integration for invoices. Chatbots for FAQs. Reporting dashboards for insight. Every euro invested in automation pays itself back."
            }
          ]
        },
      ],
      cta: "Need help with your webshop?",
      ctaText: "Contact us for a free strategy call. We're happy to help you with your e-commerce ambitions.",
      ctaButton: "Schedule a call",
      expandAll: "Expand all",
      collapseAll: "Collapse all",
      readyToStart: "Ready to start?",
    },
    de: {
      title: "E-Commerce Leitfaden",
      subtitle: "Alles, was Sie über den Online-Verkauf wissen müssen",
      intro: "Ob Sie gerade erst anfangen oder Ihren bestehenden Webshop verbessern möchten, dieser Leitfaden hilft Ihnen auf dem Weg zum E-Commerce-Erfolg. Klicken Sie auf ein Kapitel, um mehr zu erfahren.",
      chapters: [
        {
          number: "01",
          title: "Die Grundlagen des E-Commerce",
          description: "Verstehen Sie die Grundlagen des Online-Verkaufs, bevor Sie beginnen.",
          content: [
            { heading: "Was ist E-Commerce?", text: "E-Commerce ist der Kauf und Verkauf von Produkten oder Dienstleistungen über das Internet. Dies umfasst alles von großen Online-Marktplätzen bis zu kleinen Nischen-Webshops. In den Niederlanden wächst der E-Commerce-Markt jährlich zweistellig." },
            { heading: "Verschiedene Geschäftsmodelle", text: "Es gibt verschiedene Möglichkeiten, online zu verkaufen: B2C (Business to Consumer) - direkt an Verbraucher, B2B (Business to Business) - an andere Unternehmen, Dropshipping - ohne eigenen Bestand, und Marktplatzverkauf - über Plattformen wie Bol.com oder Amazon." },
            { heading: "Vor- und Nachteile des Online-Verkaufs", text: "Vorteile: 24/7 Verfügbarkeit, niedrigere Betriebskosten, größere Reichweite und Skalierbarkeit. Nachteile: Hoher Wettbewerb, technische Herausforderungen, Versandkosten und Vertrauensaufbau bei Kunden, die Sie nicht persönlich treffen." },
            { heading: "Der niederländische E-Commerce-Markt", text: "Die Niederlande haben eine der höchsten Internetpenetrationsraten der Welt. 96% der Niederländer kaufen online. iDEAL ist die meistgenutzte Zahlungsmethode. Der gesamte E-Commerce-Umsatz überstieg 2023 30 Milliarden Euro." }
          ]
        },
        {
          number: "02",
          title: "Einen Webshop starten",
          description: "Praktische Schritte, um Ihren Webshop zum Laufen zu bringen.",
          content: [
            { heading: "Die richtige Plattform wählen", text: "Die Wahl der Plattform hängt von Ihren Bedürfnissen ab. WooCommerce (WordPress) bietet maximale Flexibilität und ist kosteneffizient. Shopify ist benutzerfreundlich, hat aber monatliche Kosten. Lightspeed ist in den Niederlanden beliebt mit gutem lokalem Support. Magento eignet sich für große Webshops mit komplexen Anforderungen." },
            { heading: "Domain und Hosting", text: "Wählen Sie einen kurzen, einprägsamen Domainnamen, der Ihre Marke widerspiegelt. Eine .nl-Domain schafft Vertrauen bei niederländischen Kunden. Investieren Sie in zuverlässiges Hosting mit guter Uptime (99,9%+), SSL-Zertifikat und schnellen Ladezeiten. Erwägen Sie Managed Hosting für weniger technischen Aufwand." },
            { heading: "Produktpräsentation", text: "Gute Produktfotografie ist essentiell - nutzen Sie mehrere Winkel und Detailaufnahmen. Schreiben Sie einzigartige, SEO-freundliche Produktbeschreibungen. Listen Sie alle relevanten Spezifikationen auf. Zeigen Sie Lagerstatus und Lieferzeiten. Erwägen Sie Videos für komplexere Produkte." },
            { heading: "Zahlungen und Versand", text: "Bieten Sie mindestens iDEAL an (80% der niederländischen Online-Zahlungen). Fügen Sie Kreditkarte, PayPal und möglicherweise Rechnungskauf hinzu. Für Versand: Arbeiten Sie mit PostNL, DHL oder anderen Carriern zusammen. Bieten Sie Track & Trace an. Erwägen Sie kostenlosen Versand ab einem bestimmten Betrag - das erhöht den durchschnittlichen Bestellwert." }
          ]
        },
        {
          number: "03",
          title: "Marketing & Traffic",
          description: "Ziehen Sie Besucher in Ihren Webshop und verwandeln Sie sie in Kunden.",
          content: [
            { heading: "SEO für Webshops", text: "Suchmaschinenoptimierung ist entscheidend für organischen Traffic. Fokus auf: einzigartige Produktbeschreibungen (kein Copy-Paste von Lieferanten), optimierte Title-Tags und Meta-Beschreibungen, schnelle Ladezeiten, mobilfreundliches Design und Aufbau von Backlinks durch PR und Kooperationen." },
            { heading: "Social Media Marketing", text: "Wählen Sie Plattformen, auf denen Ihre Zielgruppe aktiv ist. Instagram und Pinterest funktionieren gut für visuelle Produkte. Facebook für ein breiteres Publikum. LinkedIn für B2B. TikTok für ein jüngeres Publikum. Posten Sie konsistent, nutzen Sie Hashtags strategisch und investieren Sie in bezahlte Werbung für Reichweite." },
            { heading: "E-Mail-Marketing", text: "E-Mail-Marketing hat den höchsten ROI aller Marketingkanäle. Bauen Sie eine E-Mail-Liste über Pop-ups und Newsletter-Anmeldungen auf. Senden Sie Willkommens-E-Mails, Warenkorb-Abbrecher-E-Mails und regelmäßige Newsletter. Personalisieren Sie, wo möglich. Tools: Mailchimp, Klaviyo oder ActiveCampaign." },
            { heading: "Bezahlte Werbung", text: "Google Ads für Suchintention - Menschen, die aktiv nach Ihren Produkten suchen. Google Shopping für visuelle Produktanzeigen. Facebook/Instagram Ads für Reichweite und Markenbekanntheit. Starten Sie klein, testen Sie verschiedene Zielgruppen und Anzeigentexte und skalieren Sie, was funktioniert." }
          ]
        },
        {
          number: "04",
          title: "Conversion-Optimierung",
          description: "Erhöhen Sie den Prozentsatz der Besucher, die tatsächlich kaufen.",
          content: [
            { heading: "Checkout-Optimierung", text: "Jeder zusätzliche Schritt im Checkout-Prozess kostet Conversions. Bieten Sie Gast-Checkout an. Zeigen Sie Fortschrittsindikatoren. Minimieren Sie Formularfelder. Zeigen Sie Vertrauensabzeichen und Zahlungslogos. Bieten Sie mehrere Zahlungsmethoden an. Zeigen Sie Versandkosten früh im Prozess deutlich an." },
            { heading: "Vertrauen aufbauen", text: "Online-Käufer brauchen Vertrauenssignale. Zeigen Sie Bewertungen und Ratings prominent. Erwähnen Sie Zertifikate wie Thuiswinkel Waarborg. Platzieren Sie Kontaktdaten deutlich sichtbar. Bieten Sie eine großzügige Rückgaberichtlinie. Verwenden Sie ein SSL-Zertifikat (https). Zeigen Sie sozialen Beweis." },
            { heading: "Produktseiten verbessern", text: "Die Produktseite macht den Verkauf. Verwenden Sie große, qualitativ hochwertige Bilder mit Zoom. Schreiben Sie überzeugende Texte, die Vorteile hervorheben. Zeigen Sie Verfügbarkeit und Lieferzeit. Fügen Sie einen deutlichen 'In den Warenkorb'-Button hinzu. Cross-Selling verwandter Produkte. Beantworten Sie häufig gestellte Fragen." },
            { heading: "A/B-Testing", text: "Testen Sie systematisch Änderungen an Ihrem Webshop. Testen Sie ein Element nach dem anderen: Buttonfarben, Überschriften, Preisanzeige, Produktbilder. Nutzen Sie Tools wie Google Optimize oder VWO. Treffen Sie Entscheidungen auf Basis von Daten, nicht nach Gefühl. Testen Sie mindestens 2 Wochen für statistische Signifikanz." }
          ]
        },
        {
          number: "05",
          title: "Skalieren & Wachsen",
          description: "Erweitern Sie Ihren Webshop und optimieren Sie Ihre Abläufe.",
          content: [
            { heading: "Bestandsverwaltung", text: "Gute Bestandsverwaltung verhindert verpasste Verkäufe und Überbestand. Nutzen Sie Bestandsverwaltungssoftware, die sich mit Ihrem Webshop integriert. Legen Sie Nachbestellpunkte fest. Analysieren Sie saisonale Muster. Erwägen Sie Just-in-Time-Bestand für schnelldrehende Produkte. Bei Wachstum: Erwägen Sie einen Fulfillment-Partner." },
            { heading: "Kundenservice", text: "Guter Kundenservice ist Ihr Wettbewerbsvorteil. Reagieren Sie schnell auf Fragen (innerhalb von 24 Stunden, besser schneller). Bieten Sie mehrere Kontaktmöglichkeiten: E-Mail, Telefon, Chat. Erstellen Sie eine umfangreiche FAQ-Seite. Schulen Sie Ihr Team gut. Ein zufriedener Kunde kommt zurück und erzählt anderen von Ihnen." },
            { heading: "International verkaufen", text: "Die Expansion ins Ausland vergrößert Ihren Markt enorm. Beginnen Sie mit Nachbarländern: Belgien, Deutschland. Übersetzen Sie Ihren Webshop professionell. Bieten Sie lokale Zahlungsmethoden an. Kalkulieren Sie internationale Versandkosten. Beachten Sie MwSt.-Regeln (EU-OSS-Regelung). Testen Sie den Markt, bevor Sie vollständig investieren." },
            { heading: "Automatisierung", text: "Automatisieren Sie repetitive Aufgaben, um Zeit für Wachstum freizusetzen. E-Mail-Flows: Willkommensserie, Warenkorb-Abbrecher, Bewertungsanfragen. Bestandssynchronisation zwischen Kanälen. Buchhaltungsintegration für Rechnungen. Chatbots für FAQs. Reporting-Dashboards für Einblicke. Jeder in Automatisierung investierte Euro zahlt sich zurück." }
          ]
        },
      ],
      cta: "Brauchen Sie Hilfe mit Ihrem Webshop?",
      ctaText: "Kontaktieren Sie uns für ein kostenloses Strategiegespräch. Wir helfen Ihnen gerne bei Ihren E-Commerce-Ambitionen.",
      ctaButton: "Gespräch planen",
      expandAll: "Alle öffnen",
      collapseAll: "Alle schließen",
      readyToStart: "Bereit zu starten?",
    },
    fr: {
      title: "Guide E-commerce",
      subtitle: "Tout ce que vous devez savoir sur la vente en ligne",
      intro: "Que vous débutiez ou souhaitiez améliorer votre boutique en ligne existante, ce guide vous aidera à réussir dans l'e-commerce. Cliquez sur un chapitre pour en savoir plus.",
      chapters: [
        {
          number: "01",
          title: "Les bases de l'e-commerce",
          description: "Comprenez les fondamentaux de la vente en ligne avant de commencer.",
          content: [
            { heading: "Qu'est-ce que l'e-commerce ?", text: "L'e-commerce est l'achat et la vente de produits ou services sur Internet. Cela comprend tout, des grandes places de marché aux petites boutiques de niche. Aux Pays-Bas, le marché de l'e-commerce croît à deux chiffres chaque année." },
            { heading: "Différents modèles commerciaux", text: "Il existe différentes façons de vendre en ligne : B2C (Business to Consumer) - directement aux consommateurs, B2B (Business to Business) - à d'autres entreprises, Dropshipping - sans stock propre, et vente sur marketplace - via des plateformes comme Bol.com ou Amazon." },
            { heading: "Avantages et inconvénients de la vente en ligne", text: "Avantages : disponibilité 24/7, coûts opérationnels réduits, plus grande portée et scalabilité. Inconvénients : forte concurrence, défis techniques, frais de livraison et établissement de la confiance avec des clients que vous ne rencontrez pas." },
            { heading: "Le marché néerlandais de l'e-commerce", text: "Les Pays-Bas ont l'un des taux de pénétration Internet les plus élevés au monde. 96% des Néerlandais achètent en ligne. iDEAL est le moyen de paiement le plus utilisé. Le chiffre d'affaires total de l'e-commerce a dépassé 30 milliards d'euros en 2023." }
          ]
        },
        {
          number: "02",
          title: "Créer une boutique en ligne",
          description: "Étapes pratiques pour lancer votre boutique en ligne.",
          content: [
            { heading: "Choisir la bonne plateforme", text: "Le choix de la plateforme dépend de vos besoins. WooCommerce (WordPress) offre une flexibilité maximale et est économique. Shopify est convivial mais a des coûts mensuels. Lightspeed est populaire aux Pays-Bas avec un bon support local. Magento convient aux grandes boutiques avec des besoins complexes." },
            { heading: "Domaine et hébergement", text: "Choisissez un nom de domaine court et mémorable qui reflète votre marque. Un domaine .nl inspire confiance aux clients néerlandais. Investissez dans un hébergement fiable avec une bonne disponibilité (99,9%+), certificat SSL et temps de chargement rapides. Envisagez l'hébergement géré pour moins de tracas techniques." },
            { heading: "Présentation des produits", text: "Une bonne photographie de produit est essentielle - utilisez plusieurs angles et photos de détail. Rédigez des descriptions de produits uniques et SEO-friendly. Listez toutes les spécifications pertinentes. Affichez le stock et les délais de livraison. Envisagez des vidéos pour les produits plus complexes." },
            { heading: "Paiements et livraison", text: "Proposez au minimum iDEAL (80% des paiements en ligne néerlandais). Ajoutez carte de crédit, PayPal et éventuellement le paiement différé. Pour la livraison : travaillez avec PostNL, DHL ou d'autres transporteurs. Offrez le suivi. Envisagez la livraison gratuite au-dessus d'un certain montant - cela augmente la valeur moyenne des commandes." }
          ]
        },
        {
          number: "03",
          title: "Marketing & Trafic",
          description: "Attirez des visiteurs vers votre boutique et convertissez-les en clients.",
          content: [
            { heading: "SEO pour boutiques en ligne", text: "L'optimisation pour les moteurs de recherche est cruciale pour le trafic organique. Focus sur : descriptions de produits uniques (pas de copier-coller des fournisseurs), balises title et meta descriptions optimisées, temps de chargement rapides, design mobile-friendly et construction de backlinks via PR et collaborations." },
            { heading: "Marketing sur les réseaux sociaux", text: "Choisissez les plateformes où votre public cible est actif. Instagram et Pinterest fonctionnent bien pour les produits visuels. Facebook pour un public plus large. LinkedIn pour le B2B. TikTok pour un public plus jeune. Publiez régulièrement, utilisez les hashtags stratégiquement et investissez dans les promotions payantes pour la portée." },
            { heading: "Email marketing", text: "L'email marketing a le meilleur ROI de tous les canaux marketing. Constituez une liste email via pop-ups et inscriptions à la newsletter. Envoyez des emails de bienvenue, des emails de panier abandonné et des newsletters régulières. Personnalisez quand c'est possible. Outils : Mailchimp, Klaviyo ou ActiveCampaign." },
            { heading: "Publicité payante", text: "Google Ads pour l'intention de recherche - personnes cherchant activement vos produits. Google Shopping pour les annonces visuelles de produits. Facebook/Instagram Ads pour la portée et la notoriété. Commencez petit, testez différentes audiences et textes publicitaires, et développez ce qui fonctionne." }
          ]
        },
        {
          number: "04",
          title: "Optimisation de la conversion",
          description: "Augmentez le pourcentage de visiteurs qui achètent réellement.",
          content: [
            { heading: "Optimisation du checkout", text: "Chaque étape supplémentaire dans le processus de checkout coûte des conversions. Offrez le checkout invité. Montrez les indicateurs de progression. Minimisez les champs de formulaire. Affichez les badges de confiance et logos de paiement. Offrez plusieurs méthodes de paiement. Montrez les frais de livraison clairement tôt dans le processus." },
            { heading: "Construire la confiance", text: "Les acheteurs en ligne ont besoin de signaux de confiance. Affichez les avis et notes de manière visible. Mentionnez les certifications comme Thuiswinkel Waarborg. Placez les coordonnées de contact de manière visible. Offrez une politique de retour généreuse. Utilisez un certificat SSL (https). Montrez la preuve sociale." },
            { heading: "Améliorer les pages produit", text: "La page produit fait ou défait la vente. Utilisez de grandes images de qualité avec zoom. Rédigez des textes persuasifs qui mettent en avant les avantages. Montrez la disponibilité et le délai de livraison. Ajoutez un bouton 'Ajouter au panier' clair. Cross-selling de produits connexes. Répondez aux questions fréquentes." },
            { heading: "Tests A/B", text: "Testez systématiquement les changements sur votre boutique. Testez un élément à la fois : couleurs de boutons, titres, affichage des prix, images de produits. Utilisez des outils comme Google Optimize ou VWO. Prenez des décisions basées sur les données, pas sur l'intuition. Testez au moins 2 semaines pour une signification statistique." }
          ]
        },
        {
          number: "05",
          title: "Évoluer & Croître",
          description: "Développez votre boutique et optimisez vos opérations.",
          content: [
            { heading: "Gestion des stocks", text: "Une bonne gestion des stocks évite les ventes manquées et le surstock. Utilisez un logiciel de gestion des stocks qui s'intègre à votre boutique. Définissez des points de réapprovisionnement. Analysez les patterns saisonniers. Envisagez le stock en flux tendu pour les produits à rotation rapide. En grandissant : envisagez un partenaire de fulfillment." },
            { heading: "Service client", text: "Un bon service client est votre avantage concurrentiel. Répondez rapidement aux questions (dans les 24 heures, idéalement plus vite). Offrez plusieurs options de contact : email, téléphone, chat. Créez une page FAQ complète. Formez bien votre équipe. Un client satisfait revient et parle de vous aux autres." },
            { heading: "Vendre à l'international", text: "L'expansion à l'étranger agrandit énormément votre marché. Commencez par les pays voisins : Belgique, Allemagne. Traduisez professionnellement votre boutique. Proposez des méthodes de paiement locales. Calculez les frais de livraison internationaux. Tenez compte des règles de TVA (régime OSS UE). Testez le marché avant d'investir pleinement." },
            { heading: "Automatisation", text: "Automatisez les tâches répétitives pour libérer du temps pour la croissance. Flux email : série de bienvenue, panier abandonné, demandes d'avis. Synchronisation des stocks entre canaux. Intégration comptable pour les factures. Chatbots pour les FAQ. Tableaux de bord de reporting. Chaque euro investi dans l'automatisation se rentabilise." }
          ]
        },
      ],
      cta: "Besoin d'aide avec votre boutique ?",
      ctaText: "Contactez-nous pour un appel stratégique gratuit. Nous serons heureux de vous aider dans vos ambitions e-commerce.",
      ctaButton: "Planifier un appel",
      expandAll: "Tout ouvrir",
      collapseAll: "Tout fermer",
      readyToStart: "Prêt à démarrer ?",
    },
    es: {
      title: "Guía de E-commerce",
      subtitle: "Todo lo que necesita saber sobre vender en línea",
      intro: "Ya sea que esté comenzando o quiera mejorar su tienda online existente, esta guía le ayudará en su camino hacia el éxito en comercio electrónico. Haga clic en un capítulo para leer más.",
      chapters: [
        {
          number: "01",
          title: "Los fundamentos del E-commerce",
          description: "Comprenda los fundamentos de la venta en línea antes de empezar.",
          content: [
            { heading: "¿Qué es el e-commerce?", text: "El e-commerce es la compra y venta de productos o servicios a través de Internet. Esto incluye desde grandes marketplaces hasta pequeñas tiendas de nicho. En los Países Bajos, el mercado de comercio electrónico crece a doble dígito anualmente." },
            { heading: "Diferentes modelos de negocio", text: "Hay varias formas de vender en línea: B2C (Business to Consumer) - directamente a consumidores, B2B (Business to Business) - a otras empresas, Dropshipping - sin inventario propio, y venta en marketplace - a través de plataformas como Bol.com o Amazon." },
            { heading: "Ventajas y desventajas de vender en línea", text: "Ventajas: disponibilidad 24/7, menores costos operativos, mayor alcance y escalabilidad. Desventajas: alta competencia, desafíos técnicos, costos de envío y construir confianza con clientes que no conoce en persona." },
            { heading: "El mercado holandés de e-commerce", text: "Los Países Bajos tienen una de las tasas de penetración de Internet más altas del mundo. El 96% de los holandeses compra en línea. iDEAL es el método de pago más utilizado. Los ingresos totales de e-commerce superaron los 30 mil millones de euros en 2023." }
          ]
        },
        {
          number: "02",
          title: "Iniciar una tienda online",
          description: "Pasos prácticos para poner en marcha su tienda online.",
          content: [
            { heading: "Elegir la plataforma correcta", text: "La elección de la plataforma depende de sus necesidades. WooCommerce (WordPress) ofrece máxima flexibilidad y es económico. Shopify es fácil de usar pero tiene costos mensuales. Lightspeed es popular en los Países Bajos con buen soporte local. Magento es adecuado para grandes tiendas con necesidades complejas." },
            { heading: "Dominio y hosting", text: "Elija un nombre de dominio corto y memorable que refleje su marca. Un dominio .nl genera confianza en clientes holandeses. Invierta en hosting confiable con buen uptime (99.9%+), certificado SSL y tiempos de carga rápidos. Considere hosting gestionado para menos complicaciones técnicas." },
            { heading: "Presentación de productos", text: "La buena fotografía de productos es esencial - use múltiples ángulos y fotos de detalle. Escriba descripciones de productos únicas y amigables para SEO. Liste todas las especificaciones relevantes. Muestre stock y tiempos de entrega. Considere videos para productos más complejos." },
            { heading: "Pagos y envío", text: "Ofrezca al menos iDEAL (80% de pagos online holandeses). Agregue tarjeta de crédito, PayPal y posiblemente pago a plazos. Para envío: trabaje con PostNL, DHL u otros transportistas. Ofrezca seguimiento. Considere envío gratuito sobre cierto monto - esto aumenta el valor promedio de pedido." }
          ]
        },
        {
          number: "03",
          title: "Marketing y Tráfico",
          description: "Atraiga visitantes a su tienda y conviértalos en clientes.",
          content: [
            { heading: "SEO para tiendas online", text: "La optimización para motores de búsqueda es crucial para el tráfico orgánico. Enfoque en: descripciones de productos únicas (sin copiar-pegar de proveedores), etiquetas de título y meta descripciones optimizadas, tiempos de carga rápidos, diseño mobile-friendly y construcción de backlinks a través de PR y colaboraciones." },
            { heading: "Marketing en redes sociales", text: "Elija plataformas donde su público objetivo esté activo. Instagram y Pinterest funcionan bien para productos visuales. Facebook para un público más amplio. LinkedIn para B2B. TikTok para un público más joven. Publique consistentemente, use hashtags estratégicamente e invierta en promociones pagadas para alcance." },
            { heading: "Email marketing", text: "El email marketing tiene el ROI más alto de todos los canales de marketing. Construya una lista de email vía pop-ups e inscripciones a newsletter. Envíe emails de bienvenida, emails de carrito abandonado y newsletters regulares. Personalice cuando sea posible. Herramientas: Mailchimp, Klaviyo o ActiveCampaign." },
            { heading: "Publicidad pagada", text: "Google Ads para intención de búsqueda - personas buscando activamente sus productos. Google Shopping para anuncios visuales de productos. Facebook/Instagram Ads para alcance y conocimiento de marca. Empiece pequeño, pruebe diferentes audiencias y textos de anuncios, y escale lo que funciona." }
          ]
        },
        {
          number: "04",
          title: "Optimización de conversión",
          description: "Aumente el porcentaje de visitantes que realmente compran.",
          content: [
            { heading: "Optimización del checkout", text: "Cada paso extra en el proceso de checkout cuesta conversiones. Ofrezca checkout como invitado. Muestre indicadores de progreso. Minimice campos de formulario. Muestre insignias de confianza y logos de pago. Ofrezca múltiples métodos de pago. Muestre costos de envío claros temprano en el proceso." },
            { heading: "Construir confianza", text: "Los compradores online necesitan señales de confianza. Muestre reseñas y calificaciones de forma prominente. Mencione certificaciones como Thuiswinkel Waarborg. Coloque datos de contacto claramente visibles. Ofrezca una política de devolución generosa. Use certificado SSL (https). Muestre prueba social." },
            { heading: "Mejorar páginas de producto", text: "La página de producto hace o deshace la venta. Use imágenes grandes y de calidad con zoom. Escriba textos persuasivos que enfaticen beneficios. Muestre disponibilidad y tiempo de entrega. Agregue un botón 'Añadir al carrito' claro. Cross-selling de productos relacionados. Responda preguntas frecuentes." },
            { heading: "Pruebas A/B", text: "Pruebe sistemáticamente cambios en su tienda. Pruebe un elemento a la vez: colores de botones, titulares, visualización de precios, imágenes de productos. Use herramientas como Google Optimize o VWO. Tome decisiones basadas en datos, no en intuición. Pruebe al menos 2 semanas para significancia estadística." }
          ]
        },
        {
          number: "05",
          title: "Escalar y Crecer",
          description: "Expanda su tienda y optimice sus operaciones.",
          content: [
            { heading: "Gestión de inventario", text: "Una buena gestión de inventario previene ventas perdidas y exceso de stock. Use software de gestión de inventario que se integre con su tienda. Establezca puntos de reorden. Analice patrones estacionales. Considere inventario justo a tiempo para productos de rápida rotación. Al crecer: considere un socio de fulfillment." },
            { heading: "Servicio al cliente", text: "Un buen servicio al cliente es su ventaja competitiva. Responda rápidamente a preguntas (dentro de 24 horas, preferiblemente más rápido). Ofrezca múltiples opciones de contacto: email, teléfono, chat. Cree una página de FAQ extensa. Capacite bien a su equipo. Un cliente satisfecho vuelve y cuenta a otros sobre usted." },
            { heading: "Vender internacionalmente", text: "Expandirse al extranjero agranda enormemente su mercado. Empiece con países vecinos: Bélgica, Alemania. Traduzca su tienda profesionalmente. Ofrezca métodos de pago locales. Calcule costos de envío internacionales. Tenga en cuenta las reglas de IVA (régimen OSS de la UE). Pruebe el mercado antes de invertir completamente." },
            { heading: "Automatización", text: "Automatice tareas repetitivas para liberar tiempo para el crecimiento. Flujos de email: serie de bienvenida, carrito abandonado, solicitudes de reseñas. Sincronización de inventario entre canales. Integración contable para facturas. Chatbots para FAQs. Dashboards de reporting para insights. Cada euro invertido en automatización se recupera." }
          ]
        },
      ],
      cta: "¿Necesita ayuda con su tienda?",
      ctaText: "Contáctenos para una llamada estratégica gratuita. Estaremos encantados de ayudarle con sus ambiciones de comercio electrónico.",
      ctaButton: "Programar una llamada",
      expandAll: "Expandir todo",
      collapseAll: "Contraer todo",
      readyToStart: "¿Listo para empezar?",
    },
  };

  const t = content[locale];
  const [allOpen, setAllOpen] = useState(false);

  return (
    <>
      <PageHeader title={t.title} subtitle={t.subtitle} />
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-300 text-center">{t.intro}</p>
          </div>

          {/* Progress indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {t.chapters.map((_, index) => (
              <div
                key={index}
                className="w-12 h-1 rounded-full bg-blue-500"
                style={{ opacity: 0.3 + (index * 0.15) }}
              />
            ))}
          </div>

          {/* Chapters Accordion */}
          <div className="space-y-4 mb-12">
            {t.chapters.map((chapter, index) => (
              <Disclosure key={index} defaultOpen={index === 0}>
                {({ open }) => (
                  <div className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 ${open ? 'border-blue-500/50' : 'hover:border-gray-600'}`}>
                    <Disclosure.Button className="w-full px-6 py-5 flex items-center gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-2xl">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold transition-colors duration-300 ${open ? 'bg-blue-500 text-white' : 'bg-blue-500/20 text-blue-400'}`}>
                        {chapter.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-xl text-white">{chapter.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{chapter.description}</p>
                      </div>
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-blue-500 rotate-180' : 'bg-gray-700'}`}>
                        <svg className={`w-5 h-5 transition-colors ${open ? 'text-white' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </Disclosure.Button>

                    <Transition
                      enter="transition duration-300 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-200 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 pb-6">
                        <div className="pt-2 border-t border-gray-700/50">
                          <div className="space-y-6 mt-6">
                            {chapter.content.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="group">
                                <div className="flex items-start gap-4">
                                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mt-1">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                    </svg>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">{section.heading}</h4>
                                    <p className="text-gray-400 leading-relaxed">{section.text}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-[url('/images/stripes-dark.svg')] opacity-20" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {t.readyToStart}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta}</h3>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">{t.ctaText}</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-600 transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                {t.ctaButton}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
