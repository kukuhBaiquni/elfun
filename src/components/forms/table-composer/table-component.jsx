import PropTypes from 'prop-types'
import { useState } from 'react'
import clsx from 'clsx'
import {
  TrashIcon, PencilIcon, CodeIcon, TemplateIcon,
} from '@heroicons/react/solid'
import TableInformation from 'components/common/table/table-information-skill'
import TableComponentRaw from './table-component-raw'

export default function TableComponent(props) {
  const {
    field, openModal, deleteTable,
  } = props
  const { tableName, tableFields } = field
  const [showAsTable, setShowAsTable] = useState(true)

  return (
    <div className='dark:bg-red-900 bg-warmGray-200 p-2 font-titillium mb-2'>
      <h5 className='font-bold mb-2'>{tableName}</h5>
      {showAsTable ? (
        <TableInformation data={tableFields} />
      ) : (
        <TableComponentRaw data={tableFields} />
      )}
      <div className='flex gap-1 mt-2'>
        <TemplateIcon
          className={clsx(
            'w-5 h-5 cursor-pointer p-0.5 rounded',
            showAsTable
              ? 'bg-sky-500 dark:text-gray-900 text-white'
              : 'text-warmGray-500',
          )}
          title='Show as Code'
          onClick={() => setShowAsTable(true)}
        />
        <CodeIcon
          className={clsx(
            'w-5 h-5 cursor-pointer p-0.5 rounded',
            !showAsTable
              ? 'bg-sky-500 dark:text-gray-900 text-white'
              : 'text-warmGray-500',
          )}
          title='Show as Code'
          onClick={() => setShowAsTable(false)}
        />
        <PencilIcon
          className='w-5 h-5 text-sky-500 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-300 p-0.5 rounded'
          onClick={() => openModal(field)}
        />
        <TrashIcon
          className='w-5 h-5 text-red-500 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-300 p-0.5 rounded'
          onClick={deleteTable}
        />
      </div>
    </div>
  )
}

TableComponent.propTypes = {
  field: PropTypes.object,
  openModal: PropTypes.func,
  deleteTable: PropTypes.func,
}
