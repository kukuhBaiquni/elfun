import PropTypes from 'prop-types'
import { memo } from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'

function InputText(props) {
  const {
    name = 'Name', register = () => {}, label = 'Label', defaultValue = '',
  } = props
  return (
    <div className='py-2 font-titillium text-general'>
      <label className='font-semibold' htmlFor={name}>{label}</label>
      <div className='flex items-center border-input w-full focus-within:border-input-focus my-1 px-2 font-nunito rounded transition-all duration-300'>
        <input
          {...register(name)}
          className='w-full outline-none placeholder-gray-500 bg-transparent text-sm py-2'
          defaultValue={defaultValue}
          id={name}
          placeholder={name}
          type='text'
        />
        <CheckCircleIcon className='w-5 h-5 text-green-600' />
        <XCircleIcon className='w-5 h-5 text-red-500 dark:text-red-700' />
      </div>
      <span className='text-red-500 dark:text-red-700 ml-1 text-sm' role='alert'>Error Message!</span>
    </div>
  )
}

export default memo(InputText, (prevProps, nextProps) => prevProps.isDirty === nextProps.isDirty)

InputText.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
}
