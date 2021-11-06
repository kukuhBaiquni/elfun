import PropTypes from 'prop-types'
import clsx from 'clsx'
import _ from 'lodash/startCase'
import numberFormat from 'utils/number-format'

export default function Table(props) {
  const { data } = props
  const fieldNames = data.map((item) => ({
    fieldName: item.fieldName,
    attributeLength: item.attributes.reduce((prev, cur) => {
      if (cur.hasAwakeningEffect.value) {
        return prev + Object.keys(cur.value).length
      }
      return prev + 1
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
                'px-3 py-1 min-w-max text-center border border-gray-300 dark:border-gray-600',
              )}
              colSpan={item.attributeLength}
              key={item.fieldName}
            >
              {item.fieldName}
            </th>
          ))}
        </tr>
        <tr>
          {rawData.map((item, index) => (
            <th
              className={clsx(
                'px-3 py-1 min-w-max text-center border border-gray-300 dark:border-gray-600',
              )}
              colSpan={item.hasAwakeningEffect.value ? 2 : 1}
              key={index}
            >
              {item.attributeName}
            </th>
          ))}
        </tr>
        <tr>
          {rawData.map((item, index) => {
            if (item.hasAwakeningEffect.value) {
              return Object.keys(item.value).map(
                (key) => (
                  <th className='px-3 py-1 min-w-max text-center border border-gray-300 dark:border-gray-600' key={key}>
                    {_(key)}
                  </th>
                ),
              )
            }
            return (
              <td className='px-3 py-1 min-w-max text-center border border-gray-300 dark:border-gray-600' key={index} rowSpan={2}>
                {item.valueType?.value === 'FIXED' ? (
                  `${item.value.normal}${item.suffix.value}`
                ) : (
                  `${item.valueRange.normal[0]} → ${item.valueRange.normal[1]}`
                )}
              </td>
            )
          })}
        </tr>
        <tr>
          {rawData.map((item, index) => {
            if (item.hasAwakeningEffect.value) {
              if (item.valueType?.value === 'FIXED') {
                return Object.entries(item.value).map(([key, value]) => {
                  if (item.awakeningModifier?.value === 'PERCENT' && key === 'awaken') {
                    return (
                      <td className='px-3 py-1 min-w-max text-center border border-gray-300 dark:border-gray-600' key={index}>
                        {`${numberFormat(calculateFixedPercent(item.value))}${item.suffix.value}`}
                        <span className='dark:text-green-400 text-green-400 ml-1'>{`(${value}%)↑`}</span>
                      </td>
                    )
                  }
                  return (
                    <td className='px-3 py-1 min-w-max text-center border border-gray-300 dark:border-gray-600' key={index}>
                      {`${numberFormat(value)}${item.suffix.value}`}
                    </td>
                  )
                })
              }
              return Object.entries(item.valueRange).map(([key, value]) => {
                if (item.awakeningModifier?.value === 'PERCENT' && key === 'awaken') {
                  return (
                    <td className='px-3 py-1 min-w-max text-center border border-gray-300 dark:border-gray-600' key={index}>
                      {`${numberFormat(calculateRangePercent(item.valueRange, item.value.awaken, 0))}${item.suffix.value} → 
                      ${numberFormat(calculateRangePercent(item.valueRange, item.value.awaken, 1))}${item.suffix.value}`}
                      <span className='dark:text-green-400 text-green-400 ml-1'>{`(${item.value.awaken}%)↑`}</span>
                    </td>
                  )
                }
                return (
                  <td className='px-3 py-1 min-w-max text-center border border-gray-300 dark:border-gray-600' key={index}>
                    {`${numberFormat(value[0])}${item.suffix.value} → ${numberFormat(value[1])}${item.suffix.value}`}
                  </td>
                )
              })
            }
            return (
              null
            )
          })}
        </tr>
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes.array,
}

const dummy = [
  {
    fieldName: 'Shockwave',
    attributes: [
      {
        attributeName: 'Damage',
        flag: {
          label: 'Damage',
          value: 'DMG',
        },
        isDealingDamage: true,
        damageType: {
          label: 'Physical',
          value: 'PHY',
        },
        valueType: {
          label: 'Fixed',
          value: 'FIXED',
        },
        hasAwakeningEffect: {
          label: 'Yes',
          value: true,
        },
        awakeningModifier: {
          label: 'Percentage',
          value: 'PERCENT',
        },
        value: {
          normal: '4117',
          awaken: '35',
        },
        valueRange: {
          normal: [
            '',
            '',
          ],
          awaken: [
            '',
            '',
          ],
        },
        suffix: {
          label: '%',
          value: '%',
        },
      },
      {
        attributeName: 'Max Hits',
        flag: {
          label: 'Max Hits',
          value: 'MH',
        },
        isDealingDamage: false,
        damageType: {
          label: 'Physical',
          value: 'PHY',
        },
        valueType: {
          label: 'Fixed',
          value: 'FIXED',
        },
        hasAwakeningEffect: {
          label: 'No',
          value: false,
        },
        awakeningModifier: {
          label: 'Flat',
          value: 'FLAT',
        },
        value: {
          normal: '1',
          awaken: '',
        },
        valueRange: {
          normal: [
            '',
            '',
          ],
          awaken: [
            '',
            '',
          ],
        },
        suffix: {
          label: 'none',
          value: '',
        },
      },
      {
        attributeName: 'Faint Duration',
        flag: {
          label: 'Duration',
          value: 'DUR',
        },
        isDealingDamage: false,
        damageType: {
          label: 'Physical',
          value: 'PHY',
        },
        valueType: {
          label: 'Fixed',
          value: 'FIXED',
        },
        hasAwakeningEffect: {
          label: 'Yes',
          value: true,
        },
        awakeningModifier: {
          label: 'Flat',
          value: 'FLAT',
        },
        value: {
          normal: '2',
          awaken: '3',
        },
        valueRange: {
          normal: [
            '',
            '',
          ],
          awaken: [
            '',
            '',
          ],
        },
        suffix: {
          label: 'Seconds',
          value: 's',
        },
      },
    ],
  },
  {
    fieldName: 'Fall',
    attributes: [
      {
        attributeName: 'Damage',
        flag: {
          label: 'Damage',
          value: 'DMG',
        },
        isDealingDamage: true,
        damageType: {
          label: 'Physical',
          value: 'PHY',
        },
        valueType: {
          label: 'Range',
          value: 'RANGE',
        },
        hasAwakeningEffect: {
          label: 'Yes',
          value: true,
        },
        awakeningModifier: {
          label: 'Percentage',
          value: 'PERCENT',
        },
        value: {
          normal: '',
          awaken: '15',
        },
        valueRange: {
          normal: [
            '511',
            '721',
          ],
          awaken: [
            '',
            '',
          ],
        },
        suffix: {
          label: '%',
          value: '%',
        },
      },
      {
        attributeName: 'Max Hits',
        flag: {
          label: 'Max Hits',
          value: 'MH',
        },
        isDealingDamage: false,
        damageType: {
          label: 'Physical',
          value: 'PHY',
        },
        valueType: {
          label: 'Range',
          value: 'RANGE',
        },
        hasAwakeningEffect: {
          label: 'Yes',
          value: true,
        },
        awakeningModifier: {
          label: 'Flat',
          value: 'FLAT',
        },
        value: {
          normal: '',
          awaken: '',
        },
        valueRange: {
          normal: [
            '10',
            '22',
          ],
          awaken: [
            '15',
            '34',
          ],
        },
        suffix: {
          label: 'none',
          value: '',
        },
      },
    ],
  },
]
