'use client';

interface PackageFeature {
  text: string;
  included: boolean;
}

interface PackageCardProps {
  name: string;
  description?: string;
  priceOnce?: string;
  priceMonthly: string;
  priceLabel: {
    once: string;
    monthly: string;
  };
  features: PackageFeature[];
  popular?: boolean;
  popularLabel?: string;
  ctaText: string;
  ctaLink: string;
}

export default function PackageCard({
  name,
  description,
  priceOnce,
  priceMonthly,
  priceLabel,
  features,
  popular = false,
  popularLabel = 'Popular',
  ctaText,
  ctaLink,
}: PackageCardProps) {
  return (
    <div
      className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border ${
        popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700/50'
      } overflow-hidden transition-all hover:border-blue-500/50 flex flex-col`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          {popularLabel}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          {description && (
            <p className="text-gray-400 text-sm">{description}</p>
          )}
        </div>

        {/* Pricing */}
        <div className="mb-6">
          {priceOnce && (
            <div className="mb-2">
              <span className="text-3xl font-bold text-white">€{priceOnce}</span>
              <span className="text-gray-400 ml-2">{priceLabel.once}</span>
            </div>
          )}
          <div className={priceOnce ? '' : ''}>
            {priceOnce && <span className="text-gray-400">+ </span>}
            <span className={`font-bold ${priceOnce ? 'text-xl text-blue-400' : 'text-3xl text-white'}`}>
              €{priceMonthly}
            </span>
            <span className="text-gray-400 ml-1">{priceLabel.monthly}</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-3 mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              {feature.included ? (
                <svg
                  className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all ${
            popular
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-700 hover:bg-gray-600 text-white'
          }`}
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}
