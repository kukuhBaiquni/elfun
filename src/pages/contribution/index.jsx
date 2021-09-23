import Layout from 'layouts'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

const category = ['Character', 'Town', 'Dungeon', 'NPC', 'Title', 'Equipment']

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
          {category.map((item) => (
            <li key={item}>
              <Link href={`${router.pathname}/${item.toLowerCase()}`}>
                <a className='text-sky-500 hover:underline'>
                  {item}
                </a>
              </Link>
            </li>
          ))}
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
