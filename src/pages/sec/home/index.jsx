import { Fragment } from 'react'
import Layout from 'layouts'
import Head from 'next/head'

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      Hello Home
    </Fragment>
  )
}

Home.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)

export default Home
