import PropTypes from 'prop-types'
import { memo } from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/solid'

function Textarea(props) {
  const {
    name = 'Name', register = () => {}, placeholder = 'Placeholder',
    label = 'Label', defaultValue = '',
  } = props
  return (
    <div className='py-2 font-titillium text-general'>
      <label className='font-semibold' htmlFor={name}>{label}</label>
      <div className='flex items-center border-input w-full focus-within:border-input-focus my-1 font-nunito rounded transition-all duration-300'>
        <textarea
          {...register(name)}
          className='w-full outline-none placeholder-gray-500 bg-transparent text-sm p-2 resize-none'
          defaultValue={defaultValue}
          id={name}
          placeholder={placeholder}
          rows={4}
          type='text'
        />
      </div>
      <div className='flex items-center'>
        <ExclamationCircleIcon className='w-4 h-4 text-red-500 dark:text-red-700' />
        <span className='text-red-500 dark:text-red-700 ml-1 text-sm' role='alert'>Error Message!</span>
      </div>
    </div>
  )
}

export default memo(Textarea, (prevProps, nextProps) => prevProps.isDirty === nextProps.isDirty)

Textarea.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
}
