import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Sidebar from 'components/side-bar'

function Layout({ children }) {
  return (
    <Fragment>
      <div className='w-full md:w-2/3 mx-auto p-5 flex bg-primary'>
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
