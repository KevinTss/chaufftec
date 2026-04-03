import { MetadataRoute } from 'next'

const SITE_URL = 'https://www.chaufftec.be'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/fr`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          fr: `${SITE_URL}/fr`,
          en: `${SITE_URL}/en`,
        },
      },
    },
    {
      url: `${SITE_URL}/fr/a-propos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${SITE_URL}/fr/a-propos`,
          en: `${SITE_URL}/en/about`,
        },
      },
    },
    {
      url: `${SITE_URL}/fr/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${SITE_URL}/fr/services`,
          en: `${SITE_URL}/en/services`,
        },
      },
    },
  ]
}
