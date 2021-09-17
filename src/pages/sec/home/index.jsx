import { Fragment } from 'react'
import Layout from 'layouts'
import Sidebar from 'components/side-bar'

function Home() {
  return (
    <Fragment>
      Hello Home
    </Fragment>
  )
}

Home.getLayout = (page) => (
  <Layout>
    {page}
    <Sidebar />
  </Layout>
)

export default Home
