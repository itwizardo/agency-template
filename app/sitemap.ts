import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gwcwebdesign.com'

  // Main pages
  const mainPages = [
    '',
    '/contact',
    '/portfolio',
    '/pakketten',
    '/over-ons',
  ]

  // Service pages
  const servicePages = [
    '/diensten/webdesign',
    '/diensten/website-bouw',
    '/diensten/webshop-ontwikkeling',
    '/diensten/zoekmachine-optimalisatie',
    '/diensten/chatbots',
    '/diensten/domeinregistratie',
    '/diensten/webhosting',
  ]

  const allPages = [...mainPages, ...servicePages]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/diensten') ? 0.8 : 0.6,
  }))
}
