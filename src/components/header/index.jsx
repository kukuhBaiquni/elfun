import Image from 'next/image'
import logo from '../../../public/images/logo.png'

function Header() {
  return (
    <header className='bg-white fixed z-20 w-full drop-shadow-xl'>
      <div className='h-20 max-w-screen-2xl mx-auto flex items-center px-4 py-2 bg-white'>
        <Image
          alt='logo'
          className='cursor-pointer'
          height={70}
          src={logo}
          width={150}
        />
      </div>
    </header>
  )
}

export default Header
