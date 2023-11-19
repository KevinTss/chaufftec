'use client'

import Link from 'next/link'
import { pathnames } from '@constants'
import { useCurrentLocale, useTranslate } from '@hooks'

export const Navigation = () => {
  const locale = useCurrentLocale()
  const t = useTranslate()

  return (
    <div>
      <Link href={pathnames['index'][locale]}>{t('nav.index')}</Link>
      <Link href={pathnames['heating'][locale]}>{t('nav.heating')}</Link>
      <Link href={pathnames['energy'][locale]}>{t('nav.energy')}</Link>
      <Link href={pathnames['gaz'][locale]}>{t('nav.gaz')}</Link>
      <Link href={pathnames['sanitary'][locale]}>{t('nav.sanitary')}</Link>
      <Link href={pathnames['water'][locale]}>{t('nav.water')}</Link>
    </div>
  )
}
