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
    <table {...getTableProps()} className='border-collapse min-w-max'>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, j) => (
              <th className='px-3 py-2 text-left font-titillium text-lg border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700' key={j} {...column.getHeaderProps()}>
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
                <td className='px-3 py-2 text-left border border-gray-300 dark:border-gray-600' key={j} {...cell.getCellProps()}>
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
