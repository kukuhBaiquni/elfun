import Head from 'next/head'
import { Fragment } from 'react'
import Sidebar from 'components/side-bar'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home - Elfun Wiki</title>
        <meta content='Elfun Wiki landing page' name='description' />
      </Head>

      <Sidebar />
    </Fragment>
  )
}
