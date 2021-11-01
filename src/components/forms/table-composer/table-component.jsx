import PropTypes from 'prop-types'
import clsx from 'clsx'
import { TrashIcon, PencilIcon } from '@heroicons/react/solid'
import gridClass from './grid-class'

export default function TableComponent(props) {
  const {
    field, fieldIndex, openModal, deleteTable,
  } = props
  const { tableName, tableFields } = field

  return (
    <div className='dark:bg-gray-900 bg-gray-200 p-2 font-titillium mb-2 overflow-x-auto'>
      <div className='flex justify-between items-center'>
        <h5 className='font-bold'>{tableName}</h5>
        <div className='flex gap-1'>
          <PencilIcon className='w-5 h-5 text-sky-500 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-300 p-0.5 rounded' onClick={() => openModal(field)} />
          <TrashIcon className='w-5 h-5 text-red-500 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-300 p-0.5 rounded' onClick={deleteTable} />
        </div>
      </div>
      <section className={clsx(
        'mt-1 gap-1 grid grid-cols-1 sm:grid-cols-2',
      )}
      >
        {tableFields.map((item) => (
          <div className='text-center' key={item.fieldName}>
            <div className='bg-sky-500 text-white mb-1 px-1'>
              <p>{item.fieldName}</p>
            </div>
            <div className={clsx(
              'gap-1 grid grid-cols-2',
              // gridClass[item.attributes.length],
            )}
            >
              {item.attributes.map((attr) => (
                <div className='dark:bg-gray-700 bg-gray-300 p-1 text-sm overflow-hidden' key={attr.attributeName}>
                  <p className='mb-0.5 whitespace-nowrap overflow-ellipsis'>{attr.attributeName}</p>
                  <p className='dark:bg-gray-900 font-bold bg-gray-100 text-sky-500 py-1 font-nunito text-xs'>{`${new Intl.NumberFormat().format(attr.value.amount)}${attr.value.suffix}`}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

TableComponent.propTypes = {
  field: PropTypes.object,
  fieldIndex: PropTypes.number,
  openModal: PropTypes.func,
  deleteTable: PropTypes.func,
}
