import clsx from 'clsx'
import numberFormat from 'utils/number-format'
import _ from 'lodash/capitalize'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import TableInformation from 'components/common/table/table-information-skill'
import gridClass from './grid-class'

export default function TableComponentTable(props) {
  const { data } = props

  const calculateFixedPercent = (val) => {
    const base = +val.normal
    const percent = +val.awaken / 100
    return base + (base * percent)
  }

  const calculateRangePercent = (val, percent, index) => {
    const base = +val.normal[index]
    return base + (base * (+percent / 100))
  }

  return (
    <Fragment>
      <section className={clsx(
        'mt-1 grid grid-cols-1 mb-5',
        gridClass[data.length],
      )}
      >
        {data.map((item) => (
          <div className='text-center' key={item.fieldName}>
            <div className='bg-coolGray-500 font-bold dark:bg-warmGray-600 text-white mb-1 py-2'>
              <p>{item.fieldName}</p>
            </div>
            <div className={clsx(
              'gap-1 grid grid-cols-1',
              gridClass[item.attributes.length],
            )}
            >
              {item.attributes.map((attr) => (
                <div className='dark:bg-gray-700 bg-coolGray-400 p-1 text-sm overflow-hidden' key={attr.attributeName}>
                  <p className='dark:bg-gray-900 bg-gray-100 py-2 mb-1 font-bold whitespace-nowrap overflow-ellipsis'>{attr.attributeName}</p>
                  {attr.hasAwakeningEffect.value ? (
                    <div className='grid grid-cols-2 gap-1'>
                      {Object.entries(attr.value).map(([keys]) => (
                        <p className='dark:bg-gray-900 font-bold bg-gray-100 text-general py-2' key={keys}>
                          {_(keys)}
                        </p>
                      ))}
                      {Object.entries(attr.valueType?.value === 'FIXED' ? attr.value : attr.valueRange).map(([keys, value]) => (
                        <p className='bg-coolGray-500 dark:bg-warmGray-600 text-white py-2' key={keys}>
                          {attr.valueType?.value === 'FIXED' ? (
                            attr.hasAwakeningEffect && attr.awakeningModifier.value === 'PERCENT' && keys === 'awaken' ? (
                              <Fragment>
                                {`${numberFormat(calculateFixedPercent(attr.value))}${attr.suffix.value}`}
                                <span className='dark:text-green-400 text-green-400 ml-1'>{`(${value}%)↑`}</span>
                              </Fragment>
                            ) : (
                            `${numberFormat(value)}${attr.suffix.value}`
                            )
                          ) : (
                            attr.hasAwakeningEffect && attr.awakeningModifier.value === 'PERCENT' && keys === 'awaken' ? (
                              <Fragment>
                                {`${numberFormat(calculateRangePercent(attr.valueRange, attr.value.awaken, 0))}${attr.suffix.value} → 
                              ${numberFormat(calculateRangePercent(attr.valueRange, attr.value.awaken, 1))}${attr.suffix.value}`}
                                <span className='dark:text-green-400 text-green-400 ml-1'>{`(${attr.value.awaken}%)↑`}</span>
                              </Fragment>
                            ) : (
                            `${numberFormat(value[0])}${attr.suffix.value} → ${numberFormat(value[1])}${attr.suffix.value}`
                            )
                          )}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className=' text-white py-7 bg-coolGray-500 dark:bg-warmGray-600'>
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
      <TableInformation data={data} />
    </Fragment>
  )
}

TableComponentTable.propTypes = {
  data: PropTypes.array,
}
