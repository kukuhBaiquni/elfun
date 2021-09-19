import PropTypes from 'prop-types'
import Sidebar from 'components/side-bar'
import Header from 'components/header'

function Layout({ children }) {
  return (
    <div className='dark:bg-gray-800 bg-white transition-all duration-300 min-h-screen'>
      <Header />
      <div className='mx-auto max-w-screen-2xl'>
        <div className='w-full pt-24'>
          <div className='flex'>
            <Sidebar />
            <div className='w-full sm:w-full'>
              {children}
            </div>
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
