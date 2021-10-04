import PropTypes from 'prop-types'

export default function Checkbox(props) {
  const { name = 'name', label = 'Label' } = props
  return (
    <div className='py-2 text-general font-titillium'>
      <label className='font-semibold block' htmlFor={name}>{label}</label>
      <input id='vehicle1' name='vehicle1' type='checkbox' value='Bike' />
      <label className='ml-2' htmlFor='vehicle1'> I have a bike</label>
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
}
