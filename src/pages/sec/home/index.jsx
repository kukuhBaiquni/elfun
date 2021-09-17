import { Fragment } from 'react'
import Layout from 'layouts'
import Head from 'next/head'
import Wallpaper from 'components/wallpaper'

function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <Wallpaper />
    </Fragment>
  )
}

Home.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)

export default Home
