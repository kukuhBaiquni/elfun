/* eslint-disable import/prefer-default-export */
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export function FormFieldWrapper(props) {
  const {
    name, label, children, bordered, errorMessage,
    className,
  } = props
  // eslint-disable-next-line no-console
  // console.log('📝', props)
  return (
    <div className={clsx(
      'py-2 font-titillium text-general relative',
      className,
    )}
    >
      <label className='font-semibold' htmlFor={name}>{label}</label>
      <div className={clsx(
        bordered && 'border-input focus-within:border-input-focus',
        'w-full my-1 font-nunito rounded transition-all duration-300',
      )}
      >
        {children}
      </div>
      {errorMessage && (
        <div className='flex items-center text-red-500 dark:text-red-600'>
          <ExclamationCircleIcon className='w-4 h-4' />
          <span className='ml-1 text-sm' role='alert'>{errorMessage}</span>
        </div>
      )}
    </div>
  )
}

FormFieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  bordered: PropTypes.bool,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
}

FormFieldWrapper.defaultProps = {
  children: null,
  bordered: false,
}
