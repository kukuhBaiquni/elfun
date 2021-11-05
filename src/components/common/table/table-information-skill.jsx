import PropTypes from 'prop-types'
import clsx from 'clsx'
import _ from 'lodash/startCase'

export default function Table(props) {
  const { data } = props
  const fieldNames = dummy.map((item) => ({
    fieldName: item.fieldName,
    attributeLength: item.attributes.length,
  }))
  const rawData = dummy.map((item) => item.attributes).flat()
  console.log(fieldNames)
  return (
    <table className='border-collapse'>
      <tbody>
        <tr>
          {fieldNames.map((item) => (
            <th
              className={clsx(
                'px-3 py-1 min-w-max text-left border border-gray-300 dark:border-gray-600 transition-all duration-300',
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
                'px-3 py-1 min-w-max text-left border border-gray-300 dark:border-gray-600 transition-all duration-300',
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
                  <th className='dark:bg-gray-900 font-bold bg-gray-100 text-general py-2' key={key}>
                    {_(key)}
                  </th>
                ),
              )
            }
            return (
              <td className=' text-white py-7 bg-coolGray-500 dark:bg-warmGray-600' key={index}>
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
