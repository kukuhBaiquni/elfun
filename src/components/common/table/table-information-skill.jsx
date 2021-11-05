import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Table(props) {
  const { data } = props

  return (
    <table className='border-collapse'>
      <tbody>
        <tr>
          {dummy.map((item) => (
            <th
              className={clsx(
                'px-3 py-1 min-w-max text-left border border-gray-300 dark:border-gray-600 transition-all duration-300',
              )}
              colSpan={3}
              key={item.fieldName}
            >
              {item.fieldName}
            </th>
          ))}
        </tr>
        <tr>
          {new Array(12).fill('s').map((item, index) => (
            <th
              className={clsx(
                'px-3 py-1 min-w-max text-left border border-gray-300 dark:border-gray-600 transition-all duration-300',
              )}
              key={index}
            >
              item {index}
            </th>
          ))}
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
