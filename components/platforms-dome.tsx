'use client';

import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/i18n';

const DomeGallery = dynamic(() => import('./dome-gallery'), { ssr: false });

// Platform and technology logos
const platformImages = [
  // E-commerce platforms
  { src: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg', alt: 'WooCommerce' },
  { src: 'https://cdn.worldvectorlogo.com/logos/shopify.svg', alt: 'Shopify' },
  { src: 'https://cdn.worldvectorlogo.com/logos/magento.svg', alt: 'Magento' },
  // Payment providers
  { src: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg', alt: 'Stripe' },
  { src: 'https://cdn.worldvectorlogo.com/logos/paypal-2.svg', alt: 'PayPal' },
  { src: 'https://cdn.worldvectorlogo.com/logos/klarna-1.svg', alt: 'Klarna' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Ideal_logo.svg', alt: 'iDEAL' },
  { src: 'https://cdn.worldvectorlogo.com/logos/mollie-1.svg', alt: 'Mollie' },
  // Frameworks & Tech
  { src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg', alt: 'React' },
  { src: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', alt: 'Next.js' },
  { src: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg', alt: 'Tailwind CSS' },
  { src: 'https://cdn.worldvectorlogo.com/logos/typescript.svg', alt: 'TypeScript' },
  { src: 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg', alt: 'Node.js' },
  { src: 'https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg', alt: 'WordPress' },
  // Cloud & Tools
  { src: 'https://cdn.worldvectorlogo.com/logos/vercel.svg', alt: 'Vercel' },
  { src: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg', alt: 'AWS' },
  { src: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg', alt: 'Google Cloud' },
  { src: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg', alt: 'Docker' },
  { src: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg', alt: 'GitHub' },
  // Shipping
  { src: 'https://cdn.worldvectorlogo.com/logos/dhl-1.svg', alt: 'DHL' },
  { src: 'https://cdn.worldvectorlogo.com/logos/postnl.svg', alt: 'PostNL' },
  // Analytics & Marketing
  { src: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg', alt: 'Google Analytics' },
  { src: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg', alt: 'Mailchimp' },
  { src: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg', alt: 'HubSpot' },
];

const content = {
  nl: {
    title: 'Wij werken met de beste platformen en tools',
    subtitle: 'Van e-commerce platforms tot betaalproviders, frameworks en cloud services'
  },
  en: {
    title: 'We work with the best platforms and tools',
    subtitle: 'From e-commerce platforms to payment providers, frameworks and cloud services'
  },
  de: {
    title: 'Wir arbeiten mit den besten Plattformen und Tools',
    subtitle: 'Von E-Commerce-Plattformen bis hin zu Zahlungsanbietern, Frameworks und Cloud-Diensten'
  },
  fr: {
    title: 'Nous travaillons avec les meilleures plateformes et outils',
    subtitle: 'Des plateformes e-commerce aux prestataires de paiement, frameworks et services cloud'
  },
  es: {
    title: 'Trabajamos con las mejores plataformas y herramientas',
    subtitle: 'Desde plataformas de comercio electrónico hasta proveedores de pago, frameworks y servicios en la nube'
  }
};

export default function PlatformsDome() {
  const { locale } = useLanguage();
  const t = content[locale] || content.nl;

  return (
    <section className="relative bg-gray-950">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-4">
        <div className="text-center">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Dome Gallery */}
      <div className="w-full h-[500px] md:h-[600px]">
        <DomeGallery
          images={platformImages}
          fit={0.6}
          minRadius={400}
          maxRadius={800}
          overlayBlurColor="#030712"
          imageBorderRadius="16px"
          openedImageBorderRadius="20px"
          openedImageWidth="300px"
          openedImageHeight="300px"
          grayscale={true}
          segments={30}
          dragDampening={1.5}
          maxVerticalRotationDeg={8}
          autoRotateSpeed={0.05}
        />
      </div>
    </section>
  );
}
