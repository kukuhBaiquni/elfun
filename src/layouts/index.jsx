import PropTypes from 'prop-types'
import Sidebar from 'components/side-bar'
import Image from 'next/image'
import logo from '../../public/images/logo.png'

function Layout({ children }) {
  return (
    <div>
      <header className='bg-transparent fixed z-10 w-full'>
        <div className='h-20 max-w-screen-xl mx-auto flex items-center px-4 py-2 bg-white'>
          <Image
            alt='logo'
            className='cursor-pointer'
            height={70}
            src={logo}
            width={150}
          />
        </div>
      </header>
      <div className='mx-auto max-w-screen-xl'>
        <div className='w-full flex pt-24'>
          <Sidebar />
          <div className='w-full sm:w-[81%] bg-white'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
