'use client'

import Link from 'next/link'
import { pathnames } from '@constants'
import { useCurrentLocale } from '@hooks'

export const Navigation = () => {
  const locale = useCurrentLocale()

  return (
    <div>
      <Link href={pathnames['index'][locale]}>Home</Link>
      <Link href={pathnames['heating'][locale]}>Heating</Link>
      <Link href={pathnames['energy'][locale]}>Heating</Link>
      <Link href={pathnames['gaz'][locale]}>Heating</Link>
      <Link href={pathnames['sanitary'][locale]}>Heating</Link>
      <Link href={pathnames['water'][locale]}>Heating</Link>
    </div>
  )
}
