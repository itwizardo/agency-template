'use client';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl text-white">{title}</h1>
          {subtitle && (
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
