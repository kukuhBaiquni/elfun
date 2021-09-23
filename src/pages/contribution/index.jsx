/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import Layout from 'layouts'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useMemo } from 'react'
import Table from 'components/table'
import data from './dummy.json'

const category = ['Character', 'Town', 'Dungeon', 'NPC', 'Title', 'Equipment']

export default function Contribution() {
  const router = useRouter()

  const columns = useMemo(() => [{
    Header: 'Name',
    accessor: 'name',
    Cell: ({ value }) => (
      <Link href='/contributor/id'>
        <a className='font-titillium text-base hover:underline text-sky-500 flex items-center py-1 px-2 transition-all duration-300'>
          {value}
        </a>
      </Link>
    ),
  }, {
    Header: 'Contribution Point',
    accessor: 'point',
  }, {
    Header: 'Rank',
    accessor: 'rank',
  }, {
    Header: 'Join Date',
    accessor: 'joinDate',
  }], [])

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
        <h3 className='text-2xl font-semibold font-titillium dark:text-sky-400 text-sky-600 mt-6 mb-3'>Top Contributor</h3>
        <div className='max-w-screen-lg overflow-x-auto'>
          <Table columns={columns} data={data} />
        </div>
      </main>
    </Fragment>
  )
}

Contribution.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
