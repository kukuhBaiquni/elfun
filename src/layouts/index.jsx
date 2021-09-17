import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'components/side-bar'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

function Layout({ children }) {
  return (
    <div>
      <header className='bg-white fixed z-10 w-full'>
        <div className='h-20 max-w-screen-2xl mx-auto flex items-center px-4 py-2 bg-eve'>
          <Image
            alt='logo'
            className='cursor-pointer'
            height={70}
            src={logo}
            width={150}
          />
        </div>
      </header>
      <div className='mx-auto max-w-screen-2xl relative'>
        <div className='w-full flex pt-24'>
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
