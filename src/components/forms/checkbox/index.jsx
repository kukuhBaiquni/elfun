/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { CheckIcon } from '@heroicons/react/solid'
import { useController, useFormContext } from 'react-hook-form'

export default function Checkbox(props) {
  const {
    name = 'name', label = 'Label', options = [],
  } = props
  const { control, setValue } = useFormContext()

  const {
    field: { ...checkbox },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: [],
  })

  const onCheckboxClick = () => {}
  console.log('cb', checkbox)
  return (
    <div className='py-2 text-general font-titillium'>
      <span className='font-semibold block'>{label}</span>
      <div className='grid grid-cols-3 gap-2'>
        {options.map((item) => (
          <Fragment key={item.label}>
            <button className='flex items-center' type='button'>
              <div className='h-4 w-4 rounded border border-input flex items-center justify-center relative'>
                <CheckIcon className='w-4 h-4 text-sky-500' />
                <input
                  name={name}
                  {...checkbox}
                  className='absolute cursor-pointer opacity-0'
                  type='checkbox'
                  value={item.value}
                />
              </div>
              <span className='ml-2 text-left'>{item.label}</span>
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  control: PropTypes.object,
}
