/* eslint-disable import/prefer-default-export */
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import clsx from 'clsx'

/**
 *
 * @param {node} Component
 * @param {object} props
 * @param {string} props.name form field name for registering in react-hook-form (required)
 * @param {string} props.label text label that displayed above input (required)}
 * @returns {*} Enhanced Component
 */

export function FormFieldWrapper(props) {
  const { name, label, children, bordered } = props
  // eslint-disable-next-line no-console
  console.log('📝', props)
  return (
    <div className='py-2 font-titillium text-general'>
      <label className='font-semibold' htmlFor={name}>{label}</label>
      <div className={clsx(
        bordered && 'border-input focus-within:border-input-focus',
        'flex items-center w-full my-1 px-2 font-nunito rounded transition-all duration-300'
      )}>
        {children}
      </div>
      <div className='flex items-center'>
        <ExclamationCircleIcon className='w-4 h-4 text-red-500 dark:text-red-700' />
        <span className='text-red-500 dark:text-red-700 ml-1 text-sm' role='alert'>Error Message!</span>
      </div>
    </div>
  )
}

FormFieldWrapper.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  bordered: PropTypes.bool,
}
