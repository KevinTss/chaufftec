'use client'
import Link from 'next/link'
import { pathnames } from '@constants'
import { useCurrentLocale, useTranslate } from '@hooks'

export const AppFooter = () => {
  const locale = useCurrentLocale()
  return (
    <footer className='flex flex-col items-center bg-blue-900 p-8 w-full'>
      <div className='grid grid-cols-3 w-full max-w-screen-xl'>
        <div>
          <span>Chaufftec</span>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature making.</p>
        </div>
        <div>
          <h4>Quick links</h4>
          <ul className="li">
            <Link href={pathnames['index'][locale]}>Home</Link>
          </ul>
          <ul className="li"></ul>
          <ul className="li"></ul>
        </div>
      </div>
    </footer>
  )
}
