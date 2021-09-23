/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useMemo } from 'react'
// import Link from 'next/link'
import Table from 'components/table'

export default function News() {
  const data = useMemo(() => [{
    date: '12 December 2020',
    content: ['Add Altera Village'],
    author: 'Super Gabon',
  }, {
    date: '20 February 2021',
    content: ['New Character: Noah', 'New Class: Second Revenger', 'Silent Shadow', 'Liberator'],
    author: 'Delon Ventus',
  }, {
    date: '15 April 2022',
    content: ['Update Velder Dungeon Npc list'],
    author: 'Rena Erindel',
  }], [])

  const columns = useMemo(() => [{
    Header: 'Date',
    accessor: 'date',
  }, {
    Header: 'Content',
    accessor: 'content',
    Cell: ({ value }) => (
      <ul className='list-disc'>
        {value.map((item) => <li className='ml-4' key={item}>{item}</li>)}
      </ul>
    ),
  }, {
    Header: 'Author',
    accessor: 'author',
  }], [])

  return (
    <div className='mt-8'>
      <h3 className='text-2xl font-semibold font-titillium dark:text-sky-400 text-sky-600'>News and Updates</h3>
      <p className='my-2'>
        You can read these articles to get more details information
      </p>
      <div className='max-w-screen-lg overflow-x-auto'>
        <Table columns={columns} data={data} />
      </div>
    </div>
  )
}
