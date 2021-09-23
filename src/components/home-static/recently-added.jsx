import { useMemo } from 'react'
import Link from 'next/link'
import Table from 'components/table'

export default function News() {
  const data = useMemo(() => [{
    col1: 'Hello',
    col2: 'World',
  }, {
    col1: 'react-table',
    col2: 'rocks',
  }, {
    col1: 'whatever',
    col2: 'you want',
  }], [])

  const columns = useMemo(() => [{
    Header: 'Date',
    accessor: 'col1',
  }, {
    Header: 'Type',
    accessor: 'col2',
  }], [])

  return (
    <div className='mt-10'>
      <h3 className='text-2xl font-semibold font-titillium dark:text-sky-400 text-sky-600'>News and Updates</h3>

      <Table columns={columns} data={data} />
    </div>
  )
}
