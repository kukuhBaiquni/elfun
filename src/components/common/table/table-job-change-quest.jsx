import { useTable } from 'react-table'
import PropTypes from 'prop-types'

export default function Table(props) {
  const { columns, data } = props
  const tableInstance = useTable({ columns, data })
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    <table {...getTableProps()} className='border-collapse'>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, j) => (
              <th className='px-3 py-1 text-left font-normal border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 transition-all duration-300' key={j} {...column.getHeaderProps()}>
                { column.render('Header') }
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        { rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr key={i} {...row.getRowProps()}>
              { row.cells.map((cell, j) => (
                <td className='px-3 py-1 min-w-max text-left border border-gray-300 dark:border-gray-600 transition-all duration-300' key={j} {...cell.getCellProps()}>
                  { cell.render('Cell') }
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
}
