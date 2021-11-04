import PropTypes from 'prop-types'
import clsx from 'clsx'
import { TrashIcon, PencilIcon } from '@heroicons/react/solid'
import numberFormat from 'utils/number-format'
import _ from 'lodash/capitalize'
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
            <div className='bg-pink-500 text-white mb-1 py-2'>
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
                  {attr.hasAwakeningEffect.value ? (
                    <div className='grid grid-cols-2 gap-1'>
                      {Object.entries(attr.value).map(([keys]) => (
                        <p className='dark:bg-gray-900 font-bold bg-gray-100 text-general py-1' key={keys}>
                          {_(keys)} {attr.flag.value === 'DMG' && `(${attr.damageType.label})`}
                        </p>
                      ))}
                      {Object.entries(attr.valueType?.value === 'FIXED' ? attr.value : attr.valueRange).map(([keys, value]) => (
                        <p className='bg-pink-500 text-white py-1' key={keys}>
                          {attr.valueType?.value === 'FIXED' ? (
                              `${numberFormat(value)}${attr.suffix.value}`
                          ) : (
                              `${numberFormat(value[0])}${attr.suffix.value} → ${numberFormat(value[1])}${attr.suffix.value}`
                          )}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <div className='w-full h-full'>
                      <p className='dark:bg-gray-900 bg-gray-200 py-5 text-pink-500'>
                        {attr.valueType?.value === 'FIXED' ? (
                            `${attr.value.normal}${attr.suffix.value}`
                        ) : (
                            `${attr.valueRange.normal[0]} → ${attr.valueRange.normal[1]}`
                        )}
                      </p>
                    </div>
                  )}
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
