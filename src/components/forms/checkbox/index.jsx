/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types'
import { Fragment } from 'react'

export default function Checkbox(props) {
  const { name = 'name', label = 'Label', options = [] } = props
  return (
    <div className='py-2 text-general font-titillium'>
      <label className='font-semibold block' htmlFor={name}>{label}</label>
      {options.map((item) => (
        <Fragment key={item.label}>
          <input className='rounded p-6 checked:bg-sky-500' id='vehicle1' name='vehicle1' type='checkbox' value='Bike' />
          <label className='ml-2' htmlFor='vehicle1' />
        </Fragment>
      ))}
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
}
