import Image from 'next/image'
import { ChevronDownIcon, MoonIcon, SunIcon } from '@heroicons/react/solid'
import useDarkMode from 'hooks/useDarkMode'
import logo from '../../../public/images/logo.png'
import ws from '../../../public/images/avatar/rena/wind-sneaker-trans.png'

function Header() {
  const { theme, setTheme } = useDarkMode()
  const toggleTheme = () => {
    document.documentElement.classList.add('dark')
  }

  return (
    <header className='fixed z-20 w-full drop-shadow-sm border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300'>
      <div className='h-20 max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-2 '>
        <Image
          alt='logo'
          className='cursor-pointer'
          height={70}
          src={logo}
          width={150}
        />
        <div className='flex items-center'>
          <span className='mr-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full p-1 transition-all duration-300' onClick={toggleTheme}>
            {theme === 'light' ? (
              <MoonIcon
                className='h-7 w-7 text-gray-500'
                onClick={() => setTheme('dark')}
              />
            ) : (
              <SunIcon
                className='h-7 w-7 text-gray-500'
                onClick={() => setTheme('light')}
              />
            )}
          </span>
          <span className='text-gray-500 flex items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-1 rounded-full transition-all duration-300'>
            <Image
              alt='Trans Logo'
              className='object-cover rounded-full'
              height={25}
              src={ws}
              width={25}
            />
            <ChevronDownIcon className='h5 w-5 ml-1' />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
