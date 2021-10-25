/* eslint-disable import/prefer-default-export */
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'

/**
 *
 * @param {node} Component
 * @param {object} props
 * @param {string} props.name form field name for registering in react-hook-form (required)
 * @param {string} props.label text label that displayed above input (required)}
 * @returns {*} Enhanced Component
 */

export function FormField(props) {
  const { name, label, children } = props
  // eslint-disable-next-line no-console
  console.log('📝', props)
  return (
    <div className='py-2 font-titillium text-general'>
      <label className='font-semibold' htmlFor={name}>{label}</label>
      <div className='flex items-center border-input w-full focus-within:border-input-focus my-1 px-2 font-nunito rounded transition-all duration-300'>
        {children}
      </div>
      <div className='flex items-center'>
        <ExclamationCircleIcon className='w-4 h-4 text-red-500 dark:text-red-700' />
        <span className='text-red-500 dark:text-red-700 ml-1 text-sm' role='alert'>Error Message!</span>
      </div>
    </div>
  )
}

FormField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
}
