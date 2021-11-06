import PropTypes from 'prop-types'
import clsx from 'clsx'
import _ from 'lodash/startCase'
import { memo } from 'react'
import numberFormat from 'utils/number-format'

function Table(props) {
  const { data } = props
  const fieldNames = data.map((item) => ({
    fieldName: item.fieldName,
    attributeLength: item.attributes.reduce((prev, cur) => {
      if (cur.hasAwakeningEffect) {
        return prev + Object.keys(cur.value).length
      }
      return prev + 1
    }, 0),
    rowSpan: item.attributes.reduce((prev, cur) => {
      if (cur.skipAttributes && cur.skipAwakening) {
        return prev + 3
      }
      if (cur.skipAttributes || cur.skipAwakening) {
        return prev + 2
      }
      return 1
    }, 0),
  }))
  const rawData = data.map((item) => item.attributes).flat()

  const calculateFixedPercent = (val) => {
    const base = +val.normal
    const percent = +val.awaken / 100
    return base + (base * percent)
  }

  const calculateRangePercent = (val, percent, index) => {
    const base = +val.normal[index]
    return base + (base * (+percent / 100))
  }

  console.log(rawData)
  return (
    <table className='border-collapse'>
      <tbody>
        <tr>
          {fieldNames.map((item) => (
            <th
              className={clsx(
                'px-3 py-2 min-w-max text-center border-input',
              )}
              colSpan={item.attributeLength}
              key={item.fieldName}
              rowSpan={item.rowSpan}
            >
              {item.fieldName}
            </th>
          ))}
        </tr>
        <tr>
          {rawData.map((item, index) => {
            if (item.skipAttributes && item.skipAwakening) {
              return null
            }
            return (
              <th
                className={clsx(
                  'px-3 py-2 min-w-max text-center border-input',
                )}
                colSpan={item.hasAwakeningEffect ? 2 : 1}
                key={index}
                rowSpan={item.hasAwakeningEffect ? 1 : 2}
              >
                {item.attributeName} {item.isDealingDamage && `(${item.damageType.label})`}
              </th>
            )
          })}
        </tr>
        <tr>
          {rawData.map((item, index) => {
            if (item.hasAwakeningEffect) {
              return Object.keys(item.value).map(
                (key) => (
                  <th className='px-3 py-2 min-w-max text-center border-input' key={key}>
                    {_(key)}
                  </th>
                ),
              )
            }
            return null
          })}
        </tr>
        <tr>
          {rawData.map((item, index) => {
            if (item.hasAwakeningEffect) {
              if (item.valueType?.value === 'FIXED') {
                return Object.entries(item.value).map(([key, value]) => {
                  if (item.awakeningModifier?.value === 'PERCENT' && key === 'awaken') {
                    return (
                      <td
                        className='px-3 py-2 min-w-max text-center border-input'
                        key={`${item.hasAwakeningEffect}${item.valueType.value}${item.awakeningModifier.value}${index}`}
                      >
                        {`${numberFormat(calculateFixedPercent(item.value))}${item.suffix.value}`}
                        <span className='dark:text-green-400 text-green-400 ml-1'>{`(${value}%)↑`}</span>
                      </td>
                    )
                  }
                  return (
                    <td
                      className='px-3 py-2 min-w-max text-center border-input'
                      key={`${item.valueType.value}${item.hasAwakeningEffect}${index}${item.awakeningModifier.value}${value}`}
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
                      className='px-3 py-2 min-w-max text-center border-input'
                      key={`${item.hasAwakeningEffect}${index}${item.valueType.value}${item.awakeningModifier.value}`}
                    >
                      {`${numberFormat(calculateRangePercent(item.valueRange, item.value.awaken, 0))}${item.suffix.value} → 
                      ${numberFormat(calculateRangePercent(item.valueRange, item.value.awaken, 1))}${item.suffix.value}`}
                      <span className='dark:text-green-400 text-green-400 ml-1'>{`(${item.value.awaken}%)↑`}</span>
                    </td>
                  )
                }
                return (
                  <td
                    className='px-3 py-2 min-w-max text-center border-input'
                    key={`${index}${item.hasAwakeningEffect}${item.valueType.value}${item.awakeningModifier.value}`}
                  >
                    {`${numberFormat(value[0])}${item.suffix.value} → ${numberFormat(value[1])}${item.suffix.value}`}
                  </td>
                )
              })
            }
            return (
              <td
                className='px-3 py-2 min-w-max text-center border-input'
                key={`${item.hasAwakeningEffect}${item.awakeningModifier.value}${item.valueType.value}${index}`}
              >
                {item.valueType?.value === 'FIXED' ? (
                  `${item.value.normal}${item.suffix.value}`
                ) : (
                  `${item.valueRange.normal[0]} → ${item.valueRange.normal[1]}`
                )}
              </td>
            )
          })}
        </tr>
      </tbody>
    </table>
  )
}

export default memo(Table)

Table.propTypes = {
  data: PropTypes.array,
}
