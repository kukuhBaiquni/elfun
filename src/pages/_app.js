import PropTypes from 'prop-types'
import '../../styles/globals.scss'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import Router from 'next/router'
import Core from 'components/core'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <Core>
      <Component {...pageProps} />
    </Core>,
  )
}

MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default MyApp
