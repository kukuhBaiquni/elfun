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
  // apply the table props
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, j) => (
              <th key={j} {...column.getHeaderProps()}>
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
                <td key={j} {...cell.getCellProps()}>
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
