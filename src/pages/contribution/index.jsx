import Layout from 'layouts'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

export default function Contribution() {
  const router = useRouter()
  return (
    <Fragment>
      <Head>
        <title>Elfun - Contributor</title>
        <meta content='Contribution guide for filling submission article form' name='description' />
        <meta content='Elfun Contribution Guide, Contribution Elfun, Elfun' name='keywords' />
      </Head>
      <main className='text-gray-600 dark:text-gray-400 px-2'>
        <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Welcome to Elfun Contributor Page</h2>
        <p className='mt-2'>
          In this page you will guided to contribute to this website. We assume you got knowledge
          about Elsword.
        </p>
        <p>First choose which category you want to contribute.</p>
        <ul className='list-disc pl-5 mt-5'>
          <li>
            <Link href={`${router.pathname}/character`}>
              <a className='text-sky-500 hover:underline'>
                Character
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${router.pathname}/town`}>
              <a className='text-sky-500 hover:underline'>
                Town
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${router.pathname}/dungeon`}>
              <a className='text-sky-500 hover:underline'>
                Dungeon
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${router.pathname}/npc`}>
              <a className='text-sky-500 hover:underline'>
                NPC
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${router.pathname}/title`}>
              <a className='text-sky-500 hover:underline'>
                Title
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${router.pathname}/equipment`}>
              <a className='text-sky-500 hover:underline'>
                Equipment
              </a>
            </Link>
          </li>
        </ul>
      </main>
    </Fragment>
  )
}

Contribution.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
