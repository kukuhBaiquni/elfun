/* eslint-disable max-len */
import { Fragment } from 'react'
import Layout from 'layouts'
import Head from 'next/head'
import Image from 'next/image'
import Wallpaper from 'components/wallpaper'
import Alert from 'components/alerts'
import wallpaper from '../../../../public/images/wallpaper.png'

function Home() {
  const elwiki = <a className='text-sky-500 hover:underline' href='https://elwiki.net' rel='noreferrer' target='_blank'>elwiki.net</a>
  const alertContent = (
    <p className='ml-3'>
      This website was created for the purpose of being a <strong>PORTFOLIO</strong> and for <strong>PERSONAL</strong> use only,
      it is not intended to plagiarize the original source {elwiki}.
    </p>
  )

  return (
    <Fragment>
      <Head>
        <title>Elfun</title>
      </Head>
      <main className='px-3'>
        <Alert text={alertContent} variant='info' />
        {/* <section className='p-2 border border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-gray-700'> */}
        {/* <Image
            alt='wallpaper'
            className='object-cover'
            height={445}
            src={wallpaper}
            width={385}
          /> */}
        <h2 className='text-6xl font-semibold mt-4 dark:text-sky-400 text-sky-600'>Welcome to Elfun</h2>
        <p className='text-gray-600 dark:text-gray-400 mt-2'>
          This website provide information about Elsword, if you don&apos;t know, visit {elwiki}
          . This website is made for personal use only.
          It contains information about in-game characters, towns, dungeons, titles, equipments, costumes, and many more.
          but not all information is available here. {elwiki} has more than 18k articles, which is a very large number, here I created a website to collect information related to Elsword.
        </p>
        {/* </section> */}
        {/* <Wallpaper /> */}
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
