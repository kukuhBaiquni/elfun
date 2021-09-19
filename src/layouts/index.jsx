import PropTypes from 'prop-types'
import Sidebar from 'components/side-bar'
import Header from 'components/header'

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className='mx-auto max-w-screen-2xl'>
        <div className='w-full flex pt-24'>
          <Sidebar />
          <div className='w-full sm:w-full bg-white'>
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
