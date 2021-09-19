import Image from 'next/image'
import { useState } from 'react'
import { ChevronDownIcon, MoonIcon, SunIcon } from '@heroicons/react/solid'
import logo from '../../../public/images/logo.png'
import ws from '../../../public/images/avatar/rena/wind-sneaker-trans.png'

function Header() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {

  }

  return (
    <header className='bg-white fixed z-20 w-full drop-shadow-xl'>
      <div className='h-20 max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-2 bg-white'>
        <Image
          alt='logo'
          className='cursor-pointer'
          height={70}
          src={logo}
          width={150}
        />
        <div className='flex items-center'>
          <span className='mr-3 cursor-pointer hover:bg-gray-200 rounded-full p-1' onClick={toggleTheme}>
            <MoonIcon className='h-7 w-7 text-gray-500' />
          </span>
          <span className='text-gray-500 flex items-center cursor-pointer hover:bg-gray-200 p-1 rounded-full'>
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
