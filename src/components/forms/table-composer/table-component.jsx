import PropTypes from 'prop-types'
import clsx from 'clsx'
import { TrashIcon, PencilIcon } from '@heroicons/react/solid'
import numberFormat from 'utils/number-format'
import _ from 'lodash/capitalize'
import { Fragment } from 'react'
import gridClass from './grid-class'

export default function TableComponent(props) {
  const {
    field, openModal, deleteTable,
  } = props
  const { tableName, tableFields } = field

  return (
    <div className='dark:bg-gray-900 bg-gray-200 p-2 font-titillium mb-2 overflow-x-auto'>
      <div className='flex justify-between items-center'>
        <h5 className='font-bold'>{tableName}</h5>
        <div className='flex gap-1'>
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
      <section className={clsx(
        'mt-1 gap-1 grid grid-cols-1 sm:grid-cols-1',
      )}
      >
        {tableFields.map((item) => (
          <div className='text-center' key={item.fieldName}>
            <div className='bg-pink-600 text-white mb-1 py-2'>
              <p>{item.fieldName}</p>
            </div>
            <div className={clsx(
              'gap-1 grid',
              gridClass[item.attributes.length],
            )}
            >
              {item.attributes.map((attr) => (
                <div className='dark:bg-gray-700 bg-gray-300 p-1 text-sm overflow-hidden' key={attr.attributeName}>
                  <p className='dark:bg-gray-800 bg-gray-200 py-1 mb-1 whitespace-nowrap overflow-ellipsis'>{attr.attributeName}</p>
                  <div className='grid grid-cols-2 gap-1'>
                    {Object.entries(attr.value).map(([keys, value]) => (
                      value && attr.hasAwakeningEffect?.value && (
                        <Fragment key={keys}>
                          <p className='dark:bg-gray-900 font-bold bg-gray-100 text-general py-1'>
                            {_(keys)}
                          </p>
                          <p className='bg-pink-600 text-white py-1'>
                            {`${value}${attr.suffix.value}`}
                          </p>
                        </Fragment>
                      )
                    ))}
                  </div>
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
  openModal: PropTypes.func,
  deleteTable: PropTypes.func,
}
{ /* <p className='dark:bg-gray-900 font-bold bg-gray-100 text-general py-1 font-nunito text-xs' key={key}>
                        {key}
                        {attr.type?.value === 'FIXED' ? (
                      `${numberFormat(attr.value.normal)}${attr.suffix.value}`
                        ) : (
                      `${numberFormat(attr.valueRange[0]?.normal)}${attr.suffix.value} - ${numberFormat(attr.valueRange[1]?.normal)}${attr.suffix.value}`
                        )}
                      </p> */ }
