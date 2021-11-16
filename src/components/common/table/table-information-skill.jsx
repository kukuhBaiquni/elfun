import PropTypes from 'prop-types'
import clsx from 'clsx'
import _ from 'lodash/startCase'
import { memo } from 'react'
import useTableHeader from 'hooks/useTableHeader'
import useTableValue from 'hooks/useTableValue'

function Table(props) {
  const { data } = props

  const { headerLevel1, headerLevel2, headerLevel3 } = useTableHeader(data)
  const tableValue = useTableValue(data)

  return (
    <div className='overflow-x-auto grid grid-cols-1 py-3 mb-5'>
      <table className='border-collapse h-[100px]'>
        <thead className={clsx(
          'bg-gradient-to-t dark:from-gray-600 dark:to-gray-900 font-titillium dark:text-white',
          'from-sky-200 to-sky-300 text-gray-600',
        )}
        >
          <tr>
            {tableValue.length > 1 && <th className='px-3 py-2 whitespace-nowrap text-center border-input' colSpan={1} rowSpan={3}>Level</th>}
            {headerLevel1.map((item) => (
              <th
                className='px-3 py-2 whitespace-nowrap text-center border-input'
                colSpan={item.colSpan}
                key={item.fieldName}
                rowSpan={item.rowSpan}
              >
                {_(item.fieldName)}
              </th>
            ))}
          </tr>
          <tr>
            {headerLevel2.map(
              (item) => item.map((header, index) => {
                if (header.fieldName) {
                  return (
                    <th
                      className='px-3 py-2 whitespace-nowrap text-center border-input'
                      colSpan={header.colSpan}
                      key={index}
                      rowSpan={header.rowSpan}
                    >
                      {header.fieldName}
                    </th>
                  )
                }
                return null
              }),
            )}
          </tr>
          <tr>
            {headerLevel3.map(
              (item) => item.map((header) => header.map((head, index) => (
                <th
                  className='px-3 py-2 whitespace-nowrap text-center border-input'
                  colSpan={head.colSpan}
                  key={index}
                  rowSpan={head.rowSpan}
                >
                  {_(head.fieldName)}
                </th>
              ))),
            )}
          </tr>
        </thead>
        <tbody>
          {tableValue.map((item, index) => (
            <tr key={index}>
              {tableValue.length > 1 && <td className='px-3 py-2 text-center border-input'>{index + 1}</td>}
              {item.map((val, idx) => (
                Array.isArray(val) ? (
                  val.map((vl, ix) => (
                    <td className='px-3 py-2 text-center border-input' key={ix}>
                      {vl}
                    </td>
                  ))
                ) : (
                  <td className='px-3 py-2 text-center border-input whitespace-nowrap' key={idx}>
                    {val}
                  </td>
                )
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default memo(Table)

Table.propTypes = {
  data: PropTypes.array,
}
