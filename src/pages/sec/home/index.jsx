/* eslint-disable max-len */
import { Fragment } from 'react'
import Layout from 'layouts'
import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import Alert from 'components/alerts'

function Home() {
  const elwiki = <a className='text-sky-500 hover:underline' href='https://elwiki.net' rel='noreferrer' target='_blank'>elwiki.net</a>
  const elswordGame = <a className='text-sky-500 hover:underline' href='https://elwiki.net/w/Elsword_(game)' rel='noreferrer' target='_blank'>Elsword</a>
  const alertContent = (
    <p className='ml-3'>
      This website was created for the purpose of being a <strong>PORTFOLIO</strong> and for <strong>PERSONAL</strong> use only,
      it is not intended to plagiarize the original source {elwiki}. Everything in this website just a <strong>DEMO</strong>
    </p>
  )

  return (
    <Fragment>
      <Head>
        <title>Elfun</title>
      </Head>
      <main>
        <Alert text={alertContent} variant='info' />
        <section className='text-gray-600 dark:text-gray-400 px-2'>
          <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Welcome to Elfun</h2>
          <p className='my-2'>
            This website provide information about Elsword, if you don&apos;t know, see {elswordGame}
            . This website is made for personal use only.
            It contains information about in-game characters, towns, dungeons, titles, equipments, costumes, and many more.
            but not all information is available here. {elwiki} (multilingual database for the game {elswordGame}) has more than 18k articles, which is a very large number, here I created a website to collect few information related to Elsword.
          </p>
          <i>All rights are reserved (Official Art, Game Screenshots, etc.) to © KOG Studios, Nexon, Gameforge, and KOG Games (formerly known as Kill3rCombo)</i>
          <p className='mt-5'>
            Know anything about Elsword? Try
            <Link href='/contributor-mode'>
              <a className='text-sky-500 hover:underline'> Contributor Mode</a>
            </Link>
          </p>
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
