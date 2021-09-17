import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'components/side-bar'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

function Layout({ children }) {
  return (
    <Fragment>
      <header className='w-full bg-white'>
        <div className='h-20 w-full md:w-3/4 mx-auto flex items-center px-4 py-2'>
          <Image
            alt='logo'
            className='cursor-pointer'
            height={70}
            src={logo}
            width={150}
          />
        </div>
      </header>
      <div className='w-full md:w-3/4 mx-auto flex bg-gray-300'>
        <Sidebar />
        {children}
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
