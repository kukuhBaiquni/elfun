import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'components/side-bar'
import Image from 'next/image'
import logo from '../../public/images/els-head.png'

function Layout({ children }) {
  return (
    <Fragment>
      <header className='w-full bg-white'>
        <div className='h-20 w-full md:w-3/4 mx-auto bg-gray-200 flex items-center'>
          <div>
            <Image
              alt='logo'
              className='object-cover bg-rena'
              height={70}
              src={logo}
              width={70}
            />
            <h3 className='text-gray-600'>Elfun Wiki</h3>
          </div>
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
