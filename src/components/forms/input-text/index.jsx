import PropTypes from 'prop-types'
import { memo } from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'

function InputText(props) {
  const { name = 'Name', register = () => {} } = props
  return (
    <div className='py-2 font-titillium dark:text-gray-400 text-gray-600'>
      <label className='font-semibold' htmlFor={name}>Skill Name</label>
      <div className='flex items-center border-input w-full focus-within:ring-1 ring-sky-600 my-1 px-2 font-nunito rounded transition-all duration-300'>
        <input
          {...register(name)}
          className='w-full outline-none placeholder-gray-500 bg-transparent text-sm py-1.5'
          id={name}
          placeholder={name}
          type='text'
        />
        <CheckCircleIcon className='w-5 h-5 text-green-600' />
      </div>
      <span className='text-red-500 dark:text-red-700 ml-1 text-sm' role='alert'>Error Message!</span>
    </div>
  )
}

export default memo(InputText, (prevProps, nextProps) => prevProps.isDirty === nextProps.isDirty)

InputText.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
}
