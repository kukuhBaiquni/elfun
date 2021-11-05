import clsx from 'clsx'
import numberFormat from 'utils/number-format'
import _ from 'lodash/capitalize'
import PropTypes from 'prop-types'
import gridClass from './grid-class'

export default function TableComponentTable(props) {
  const { data } = props

  return (
    <section className={clsx(
      'mt-1 gap-1 grid grid-cols-1 sm:grid-cols-1',
    )}
    >
      {data.map((item) => (
        <div className='text-center' key={item.fieldName}>
          <div className='bg-coolGray-400 font-bold dark:bg-warmGray-600 text-white mb-1 py-2'>
            <p>{item.fieldName}</p>
          </div>
          <div className={clsx(
            'gap-1 grid grid-cols-1',
            gridClass[item.attributes.length],
          )}
          >
            {item.attributes.map((attr) => (
              <div className='dark:bg-gray-700 bg-gray-300 p-1 text-sm overflow-hidden' key={attr.attributeName}>
                <p className='dark:bg-gray-900 bg-gray-100 py-2 mb-1 font-bold whitespace-nowrap overflow-ellipsis'>{attr.attributeName}</p>
                {attr.hasAwakeningEffect.value ? (
                  <div className='grid grid-cols-2 gap-1'>
                    {Object.entries(attr.value).map(([keys]) => (
                      <p className='dark:bg-gray-900 font-bold bg-gray-100 text-general py-2' key={keys}>
                        {_(keys)}
                      </p>
                    ))}
                    {Object.entries(attr.valueType?.value === 'FIXED' ? attr.value : attr.valueRange).map(([keys, value]) => (
                      <p className='bg-coolGray-400 dark:bg-warmGray-600 text-white py-2' key={keys}>
                        {attr.valueType?.value === 'FIXED' ? (
                          `${numberFormat(value)}${attr.suffix.value}`
                        ) : (
                          `${numberFormat(value[0])}${attr.suffix.value} → ${numberFormat(value[1])}${attr.suffix.value}`
                        )}
                      </p>
                    ))}
                  </div>
                ) : (
                  <p className=' text-white py-7 bg-coolGray-400 dark:bg-warmGray-600'>
                    {attr.valueType?.value === 'FIXED' ? (
                      `${attr.value.normal}${attr.suffix.value}`
                    ) : (
                      `${attr.valueRange.normal[0]} → ${attr.valueRange.normal[1]}`
                    )}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

TableComponentTable.propTypes = {
  data: PropTypes.array,
}
