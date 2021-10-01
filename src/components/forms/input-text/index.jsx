import PropTypes from 'prop-types'

export default function InputText(props) {
  const { name } = props
  return (
    <div className='py-2 font-titillium color-general'>
      <label className='text-gray' htmlFor={name}>Skill Name</label>
      <input className='block w-full outline-none py-1.5 px-2 border dark:border-gray-600 bg-transparent' id={name} type='text' />
      <span className='text-red-700'>Error Message!</span>
    </div>
  )
}

InputText.propTypes = {
  name: PropTypes.string,
}
