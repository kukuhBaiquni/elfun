/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from 'prop-types'
import { Fragment } from 'react'

export default function Checkbox(props) {
  const { name = 'name', label = 'Label', options = [] } = props
  return (
    <div className='py-2 text-general font-titillium'>
      <label className='inline-flex items-center' htmlFor={name}>
        <input checked className='form-checkbox' type='checkbox' />
        <span className='ml-2'>Option 1</span>
      </label>
      <label className='font-semibold block' htmlFor={name}>{label}</label>
      {options.map((item) => (
        <label className='inline-flex items-center' htmlFor={name} key={item.label}>
          <input checked className='form-checkbox' type='checkbox' />
          <span className='ml-2'>Option 1</span>
        </label>
        // <Fragment key={item.label}>
        //   <input className='rounded-lg p-6 checked:bg-sky-500' id={item.value} name={name} type='checkbox' value={item.value} />
        //   <label className='ml-2' htmlFor={item.value}>{item.label}</label>
        // </Fragment>
      ))}
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
}
