'use client'

import Link from 'next/link'
import { i18n, pathnames } from '@constants'
import { usePageId } from '@hooks'

export const LocaleSwitcher = () => {
  const pageId = usePageId()

  return (
    <div>
      <p>Locale switcher:</p>
      <ul>
        {i18n.locales.map((locale) => {
          if (!pageId) return null
          const href = pathnames[pageId][locale]
          return (
            <li key={locale}>
              <Link href={href} locale={locale}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
