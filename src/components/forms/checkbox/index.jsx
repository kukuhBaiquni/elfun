/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types'
import { Fragment } from 'react'

export default function Checkbox(props) {
  const { name = 'name', label = 'Label', options = [] } = props
  return (
    <div className='py-2 text-general font-titillium'>
      <span className='font-semibold block'>{label}</span>
      <div className='grid grid-cols-4'>
        {options.map((item) => (
          <Fragment key={item.label}>
            <div className='flex items-center'>
              <div className='h-4 w-4 border-general rounded' />
            </div>
            <div className='hidden'>
              <input id={item.value} name={name} type='checkbox' value={item.value} />
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
}
