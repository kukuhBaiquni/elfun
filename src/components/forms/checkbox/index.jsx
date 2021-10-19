/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'
import { CheckIcon } from '@heroicons/react/solid'
import { useController } from 'react-hook-form'

export default function Checkbox(props) {
  const {
    name = 'name', label = 'Label', options = [], control,
  } = props
  const {
    field: { ref, ...checkbox },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: [],
  })

  return (
    <div className='py-2 text-general font-titillium'>
      <span className='font-semibold block'>{label}</span>
      <div className='grid grid-cols-4 gap-2'>
        {options.map((item) => (
          <Fragment key={item.label}>
            <button className='flex items-center cursor-pointer' type='button' onClick={() => console.log(item)}>
              <div className='h-4 w-4 rounded flex items-center justify-center bg-sky-300'>
                <CheckIcon className='w-4 h-4 text-sky-500' />
              </div>
              <span className='ml-2'>{item.label}</span>
            </button>
            <div>
              <input id={item.value} name={name} {...checkbox} type='checkbox' value={item.value} />
              <label className='ml-2' htmlFor={item.value}>{item.label}</label>
            </div>
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
