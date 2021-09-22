/* eslint-disable max-len */
import { Fragment } from 'react'
import Layout from 'layouts'
import Head from 'next/head'
import Alert from 'components/alerts'
import { Welcome, News, Categories } from 'components/home-static'

function Home() {
  const alertContent = (
    <p className='ml-3'>
      This website was created for the purpose of being a <strong>PORTFOLIO</strong> and for <strong>PERSONAL</strong> use only. Everything in this website just a <strong>DEMO</strong>
    </p>
  )

  return (
    <Fragment>
      <Head>
        <title>Elfun</title>
      </Head>
      <main className='text-gray-600 dark:text-gray-400'>
        <Alert text={alertContent} variant='info' />
        <section className='px-2 mb-10'>
          <Welcome />
          <Categories />
          <News />
        </section>
      </main>
    </Fragment>
  )
}

Home.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)

export default Home
