import PropTypes from 'prop-types'
import clsx from 'clsx'
import _ from 'lodash/startCase'
import { Fragment, memo } from 'react'
import numberFormat from 'utils/number-format'
import useTableHeader from 'hooks/useTableHeader'

function Table(props) {
  const { data } = props

  const attributes = data.map((item) => item.attributes).flat()

  const calculateFixedPercent = (val) => {
    const base = +val.normal
    const percent = +val.awaken / 100
    return base + (base * percent)
  }

  const calculateRangePercent = (val, percent, index) => {
    const base = +val.normal[index]
    return base + (base * (+percent / 100))
  }

  const { headerLevel1, headerLevel2, headerLevel3 } = useTableHeader(data)
  return (
    <div className='overflow-x-auto grid grid-cols-1 py-3 mb-5'>
      <table className='border-collapse h-[100px]'>
        <thead className={clsx(
          'bg-gradient-to-t dark:from-gray-600 dark:to-gray-900 font-titillium dark:text-white',
          'from-sky-200 to-sky-300 text-gray-600',
        )}
        >
          <tr>
            {headerLevel1.map((item) => (
              <th
                className={clsx(
                  'px-3 py-2 whitespace-nowrap text-center border-input',
                )}
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
            {/* {attributes.map((item) => {
              if (item.hasAwakeningEffect) {
                return Object.keys(item.value).map(
                  (key) => (
                    <th className='px-3 py-2 whitespace-nowrap text-center border-input' key={key}>
                      {_(key)}
                    </th>
                  ),
                )
              }
              return null
            })} */}
          </tr>
        </thead>
        <tbody>
          <tr>
            {attributes.map((item, index) => {
              if (item.hasAwakeningEffect) {
                if (item.inputType?.value === 'FIXED') {
                  return Object.entries(item.value).map(([key, value]) => {
                    if (item.awakeningModifier?.value === 'PERCENT' && key === 'awaken') {
                      return (
                        <td
                          className='px-3 py-2 text-center border-input'
                          key={`${key}${index}`}
                        >
                          {`${numberFormat(calculateFixedPercent(item.value))}${item.suffix.value}`}
                          <span className='dark:text-green-400 whitespace-nowrap text-green-600 ml-1'>{`(${value}%)↑`}</span>
                        </td>
                      )
                    }
                    return (
                      <td
                        className='px-3 py-2 text-center border-input whitespace-nowrap'
                        key={`${value}${index}`}
                      >
                        {`${numberFormat(value)}${item.suffix.value}`}
                      </td>
                    )
                  })
                }
                return Object.entries(item.valueRange).map(([key, value]) => {
                  if (item.awakeningModifier?.value === 'PERCENT' && key === 'awaken') {
                    return (
                      <td
                        className='px-3 py-2 text-center border-input whitespace-nowrap'
                        key={`${key}${index}`}
                      >
                        {`${numberFormat(calculateRangePercent(item.valueRange, item.value.awaken, 0))}${item.suffix.value} →
                      ${numberFormat(calculateRangePercent(item.valueRange, item.value.awaken, 1))}${item.suffix.value}`}
                        <span className='dark:text-green-400 whitespace-nowrap text-green-600 ml-1'>{`(${item.value.awaken}%)↑`}</span>
                      </td>
                    )
                  }
                  return (
                    <td
                      className='px-3 py-2 text-center border-input whitespace-nowrap'
                      key={`${key}${index}`}
                    >
                      {`${numberFormat(value[0])}${item.suffix.value} → ${numberFormat(value[1])}${item.suffix.value}`}
                    </td>
                  )
                })
              }
              return (
                <td
                  className='px-3 py-2 text-center border-input'
                  key={index}
                >
                  {item.inputType?.value === 'FIXED' ? (
                    `${numberFormat(item.value.normal)}${item.suffix.value}`
                  ) : (
                    <Fragment>
                      {`${numberFormat(item.valueRange.normal[0])}${item.suffix.value} →
                      ${numberFormat(item.valueRange.normal[1])}${item.suffix.value}`}
                      <span className='dark:text-green-400 whitespace-nowrap text-green-400 ml-1'>{`|${item.value.awaken}%↑`}</span>
                    </Fragment>
                  )}
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default memo(Table)

Table.propTypes = {
  data: PropTypes.array,
}

// const data = [
//   {
//     fieldName: 'Shockwave',
//     attributes: [
//       {
//         skipAttributeName: false,
//         attributeName: 'Damage',
//         flag: {
//           label: 'Damage',
//           value: 'DMG',
//         },
//         isDealingDamage: true,
//         damageType: {
//           label: 'Physical',
//           value: 'PHY',
//         },
//         inputType: {
//           label: 'Fixed',
//           value: 'FIXED',
//         },
//         hasAwakeningEffect: true,
//         awakeningModifier: {
//           label: 'Percentage',
//           value: 'PERCENT',
//         },
//         value: [
//           {
//             flat: {
//               normal: '2661',
//               awaken: '35',
//             },
//             range: {
//               normal: [
//                 '',
//                 '',
//               ],
//               awaken: [
//                 '',
//                 '',
//               ],
//             },
//           },
//         ],
//         suffix: {
//           label: '%',
//           value: '%',
//         },
//       },
//     ],
//   },
//   {
//     fieldName: 'Fall',
//     attributes: [
//       {
//         skipAttributeName: false,
//         attributeName: 'Damage',
//         flag: {
//           label: 'Damage',
//           value: 'DMG',
//         },
//         isDealingDamage: true,
//         damageType: {
//           label: 'Physical',
//           value: 'PHY',
//         },
//         inputType: {
//           label: 'Fixed',
//           value: 'FIXED',
//         },
//         hasAwakeningEffect: true,
//         awakeningModifier: {
//           label: 'Percentage',
//           value: 'PERCENT',
//         },
//         value: [
//           {
//             flat: {
//               normal: '661',
//               awaken: '35',
//             },
//             range: {
//               normal: [
//                 '',
//                 '',
//               ],
//               awaken: [
//                 '',
//                 '',
//               ],
//             },
//           },
//         ],
//         suffix: {
//           label: '%',
//           value: '%',
//         },
//       },
//     ],
//   },
//   {
//     fieldName: 'Cooldown',
//     attributes: [
//       {
//         skipAttributeName: true,
//         attributeName: '',
//         flag: {
//           label: 'none',
//           value: '',
//         },
//         isDealingDamage: false,
//         damageType: {
//           label: 'Physical',
//           value: 'PHY',
//         },
//         inputType: {
//           label: 'Fixed',
//           value: 'FIXED',
//         },
//         hasAwakeningEffect: false,
//         awakeningModifier: {
//           label: 'Flat',
//           value: 'FLAT',
//         },
//         value: [
//           {
//             flat: {
//               normal: '12',
//               awaken: '',
//             },
//             range: {
//               normal: [
//                 '',
//                 '',
//               ],
//               awaken: [
//                 '',
//                 '',
//               ],
//             },
//           },
//         ],
//         suffix: {
//           label: 'Seconds',
//           value: 's',
//         },
//       },
//     ],
//   },
// ]
