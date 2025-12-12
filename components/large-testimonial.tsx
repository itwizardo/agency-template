'use client';

import Image from "next/image";
import { useLanguage } from "@/lib/i18n";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#4B5563"
                />
              </svg>
              <Image
                className="rounded-full border-2 border-gray-700"
                src={TestimonialImg}
                width={48}
                height={48}
                alt={t.testimonial.author}
              />
            </div>
            <p className="text-2xl font-bold text-gray-100">
              "{t.testimonial.quote.split('.')[0]}.{" "}
              <em className="italic text-gray-400">
                {t.testimonial.quote.split('.').slice(1).join('.')}
              </em>
              "
            </p>
            <div className="text-sm font-medium text-gray-400">
              <span className="text-gray-200">{t.testimonial.author}</span>{" "}
              <span className="text-gray-600">/</span>{" "}
              <a className="text-blue-400 hover:text-blue-300" href="#0">
                {t.testimonial.role} @ {t.testimonial.company}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
