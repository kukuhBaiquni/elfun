import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'components/side-bar'

function Layout({ children }) {
  return (
    <Fragment>
      <header className='w-full bg-white'>
        <div className='h-20 w-full md:w-3/4 bg-cyan-400 mx-auto'>
          Top Bar
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
