'use client'
import { notFound } from 'next/navigation'
import { usePageId } from '@hooks'
import { IndexPage } from '../index-page' //Problem with import

type PageSwitcherProps = {
  urlSegments: string[]
}

export const PageSwitcher = ({ urlSegments }: PageSwitcherProps) => {
  const pageId = usePageId()
  const [, firstSegment = 'index'] = urlSegments

  switch (pageId) {
    case 'index':
      return <IndexPage />
    case 'heating':
    case 'energy':
    case 'sanitary':
    case 'gaz':
    case 'water':
    case 'water':
      return <div>page {firstSegment}</div>
    default:
      return notFound()
  }
}
