'use client';

import dynamic from 'next/dynamic';
import { useLanguage } from '@/lib/i18n';

const DomeGallery = dynamic(() => import('./dome-gallery'), { ssr: false });

// Platform and technology logos - using local files and cdn.simpleicons.org
const platformImages = [
  // E-commerce platforms (local files)
  { src: '/images/woocommerce-icon-svgrepo-com.svg', alt: 'WooCommerce' },
  { src: '/images/shopify-color-svgrepo-com.svg', alt: 'Shopify' },
  { src: '/images/wordpress-svgrepo-com.svg', alt: 'WordPress' },
  // Payment providers (local files)
  { src: '/images/stripe-svgrepo-com.svg', alt: 'Stripe' },
  { src: '/images/paypal-svgrepo-com.svg', alt: 'PayPal' },
  { src: '/images/klarna-svgrepo-com.svg', alt: 'Klarna' },
  { src: '/images/ideal-logo-svgrepo-com.svg', alt: 'iDEAL' },
  // Shipping (local files)
  { src: '/images/dhl-express-logo-svgrepo-com.svg', alt: 'DHL' },
  // Frameworks & Tech (simpleicons CDN - reliable)
  { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React' },
  { src: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', alt: 'Next.js' },
  { src: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', alt: 'Tailwind CSS' },
  { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript' },
  { src: 'https://cdn.simpleicons.org/nodedotjs/339933', alt: 'Node.js' },
  // Cloud & Tools (simpleicons CDN)
  { src: 'https://cdn.simpleicons.org/vercel/FFFFFF', alt: 'Vercel' },
  { src: '/images/aws-svgrepo-com.svg', alt: 'AWS' },
  { src: 'https://cdn.simpleicons.org/googlecloud/4285F4', alt: 'Google Cloud' },
  { src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker' },
  { src: 'https://cdn.simpleicons.org/github/FFFFFF', alt: 'GitHub' },
  // Analytics & Marketing (simpleicons CDN)
  { src: 'https://cdn.simpleicons.org/googleanalytics/E37400', alt: 'Google Analytics' },
  { src: 'https://cdn.simpleicons.org/mailchimp/FFE01B', alt: 'Mailchimp' },
  { src: 'https://cdn.simpleicons.org/hubspot/FF7A59', alt: 'HubSpot' },
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
