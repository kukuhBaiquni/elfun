import { Fragment } from 'react'
import PropTypes from 'prop-types'

function Layout({ children }) {
  return (
    <Fragment>
      <div className='mx-auto w-2/3 bg-red-500 p-5'>
        {children}
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
