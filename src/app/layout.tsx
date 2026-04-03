import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@styles/globals.css'
import { AppParams, Locale } from '@types'
import { i18n } from '@constants'
import { GoogleTagManager } from '@next/third-parties/google'

const font = Montserrat({ subsets: ['latin'] })

const SITE_URL = 'https://www.chaufftec.be'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Chaufftec — Chauffage, Plomberie & Énergie Renouvelable à Bruxelles',
    template: '%s | Chaufftec',
  },
  description:
    "Chaufftec, votre expert en chauffage, pompes à chaleur, gaz, sanitaire et traitement de l'eau à Bruxelles. Disponible du lundi au vendredi, 8h–19h.",
  keywords: [
    'chauffage Bruxelles',
    'plomberie Bruxelles',
    'dépannage chauffage',
    'pompe à chaleur',
    'entretien chaudière',
    'sanitaire Bruxelles',
    'Chaufftec',
  ],
  authors: [{ name: 'Chaufftec' }],
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    alternateLocale: 'en_GB',
    url: SITE_URL,
    siteName: 'Chaufftec',
    title: 'Chaufftec — Chauffage, Plomberie & Énergie Renouvelable à Bruxelles',
    description:
      "Votre expert en chauffage, pompes à chaleur, gaz, sanitaire et traitement de l'eau à Bruxelles.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chaufftec — Chauffage, Plomberie & Énergie Renouvelable à Bruxelles',
    description:
      "Votre expert en chauffage, pompes à chaleur, gaz, sanitaire et traitement de l'eau à Bruxelles.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      fr: `${SITE_URL}/fr`,
      en: `${SITE_URL}/en`,
    },
  },
}

export const generateStaticParams = (): AppParams[] =>
  i18n.locales.map(locale => ({ locale }))

type RootLayoutProps = {
  children: React.ReactNode
  params?: AppParams
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const locale: Locale = params?.locale || i18n.defaultLocale

  return (
    <html lang={locale}>
      <body className={`${font.className} `}>{children}</body>
      <GoogleTagManager gtmId="GTM-TJKWVCJN" />
    </html>
  )
}
