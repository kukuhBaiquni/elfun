import PropTypes from 'prop-types'
import LeftNavigation from 'components/left-navigation'
import RightNavigation from 'components/right-navigation/contributions'
import dynamic from 'next/dynamic'

const Header = dynamic(
  () => import('../components/header'),
  { ssr: false },
)

function ContributionLayout({ children }) {
  return (
    <div className='dark:bg-gray-800 bg-white transition-all duration-300 min-h-screen'>
      <Header />
      <div className='mx-auto max-w-screen-2xl overflow-hidden'>
        <div className='w-full pt-24'>
          <div className='flex px-1.5'>
            <LeftNavigation />
            <div className='w-full dark:bg-gray-700 p-2 bg-gray-200 transition-general'>
              {children}
            </div>
            <RightNavigation />
          </div>
        </div>
      </div>
      <footer className='bg-gray-200 dark:bg-gray-700 w-full p-3 mt-10'>
        <div className='max-w-screen-2xl mx-auto h-full'>
          <p className='text-center text-gray-600 dark:text-gray-400'>Kukuh Baiquni © 2021 - Technology Stack in this website (Next JS, React JS, Tailwind CSS, Node JS, Express JS, Mongo DB, Mongo DB Atlas, Heroku, Vercel, Firebase)</p>
        </div>
      </footer>
    </div>
  )
}

ContributionLayout.propTypes = {
  children: PropTypes.any,
}

export default ContributionLayout
