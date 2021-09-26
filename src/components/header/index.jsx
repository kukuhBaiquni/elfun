import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon, MoonIcon, SunIcon } from '@heroicons/react/solid'
import useDarkMode from 'hooks/useDarkMode'
import logo from '../../../public/images/logo.png'

function Header() {
  const { theme, setTheme } = useDarkMode()

  return (
    <header className='fixed z-30 w-full drop-shadow-sm border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300'>
      <div className='h-20 max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-2 '>
        <Link href='/'>
          <a className='flex items-center cursor-pointer'>
            <Image
              alt='logo'
              height={70}
              src={logo}
              width={150}
            />
          </a>
        </Link>
        <div className='flex items-center'>
          <span className='mr-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-1 transition-all duration-300'>
            {theme === 'dark' ? (
              <SunIcon
                className='h-7 w-7 text-gray-500'
                onClick={() => setTheme('light')}
              />
            ) : (
              <MoonIcon
                className='h-7 w-7 text-gray-500'
                onClick={() => setTheme('dark')}
              />
            )}
          </span>
          <span className='text-gray-500 flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded transition-all duration-300'>
            <Image
              alt='Trans Logo'
              height={30}
              priority
              src='https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Freckless-fist.png?alt=media&token=0123d1ce-7cc2-4e87-a47c-c2107e059cd2'
              width={30}
            />
            <ChevronDownIcon className='h5 w-5 ml-1' />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
