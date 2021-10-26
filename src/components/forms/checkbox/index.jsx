/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types'
import { Fragment, useEffect } from 'react'
import { CheckIcon } from '@heroicons/react/solid'
import { useFormContext } from 'react-hook-form'

export default function Checkbox(props) {
  const {
    name, label, options = [],
  } = props
  const {
    setValue, register, watch,
  } = useFormContext()

  const currentValue = watch(name) ?? []

  useEffect(() => {
    register(name) // registering virtual input
  }, [name, register])

  const onCheckboxClick = (item) => {
    if (currentValue.includes(item.value)) {
      // if checked item is already in value, we remove them from value
      setValue(name, currentValue.filter((val) => val !== item.value))
    } else {
      // otherwise add it to the value
      setValue(name, [...watch(name), item.value])
    }
  }
  return (
    <div className='py-2 text-general font-titillium'>
      <span className='font-semibold block'>{label}</span>
      <div className='grid grid-cols-3 gap-2'>
        {options.map((item) => (
          <Fragment key={item.label}>
            <button className='flex items-center' type='button' onClick={() => onCheckboxClick(item)}>
              <div className='h-4 w-4 rounded border border-input flex items-center justify-center relative'>
                {currentValue.includes(item.value) && <CheckIcon className='w-4 h-4 text-sky-500' />}
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
}
