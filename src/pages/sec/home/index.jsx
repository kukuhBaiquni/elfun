/* eslint-disable max-len */
import { Fragment } from 'react'
import Layout from 'layouts'
import Head from 'next/head'
import Wallpaper from 'components/wallpaper'
import Alert from 'components/alerts'

function Home() {
  const alertContent = (
    <p className='ml-3'>
      This website was created for the purpose of being a <strong>PORTFOLIO</strong> and for <strong>PERSONAL</strong> use only,
      it is not intended to plagiarize the original source <a className='underline' href='https://elwiki.net' rel='noreferrer' target='_blank'>elwiki.net</a>.
    </p>
  )

  return (
    <Fragment>
      <Head>
        <title>Elfun</title>
      </Head>
      <section className='px-3'>
        <Alert text={alertContent} variant='info' />
        Welcome to Elwiki, a multilingual database for the game Elsword,
        containing information from various servers.
        Elwiki specializes in North American and South Korean data,
        however all other data from other servers are welcome.
        This wiki is currently maintained by anybody. Everyone is free to register
        and help contribute to the wiki to help build a complete database for Elsword.
        There are currently 18,880 articles in Elwiki.

        Please read these rules before contributing to prevent
        any mistakes that could been easily avoided

        All rights are reserved (Official Art, Game Screenshots, etc.)
        to © KOG Studios, Nexon, Gameforge, and KOG Games (formerly known as Kill3rCombo)
        <Wallpaper />
      </section>
    </Fragment>
  )
}

Home.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)

export default Home
