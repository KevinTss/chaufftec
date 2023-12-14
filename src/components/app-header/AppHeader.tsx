import { Navigation, Logo } from '@components'

export const AppHeader = () => (
  <header
    className='fixed flex justify-between items-center px-8 py-4 rounded-lg max-w-screen-xl w-full top-3 z-10'
    style={{ backgroundColor: '#2B84CF' }}
  >
    <Logo />
    <Navigation />
  </header>
)
