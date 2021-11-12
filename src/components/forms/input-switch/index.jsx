import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import _ from 'lodash/get'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import { XIcon } from '@heroicons/react/solid'
import { FormFieldWrapper } from '../FormFieldWrapper'

export default function InputSwitch(props) {
  const {
    label, name, control = {}, errors, clearErrors,
    className, defaultValue, disabled,
  } = props

  const { field: { onChange, value } } = useController({
    name,
    control,
    defaultValue: defaultValue || false,
  })

  const errorMessage = _(errors, `${name}.message`) ?? ''
  return (
    <FormFieldWrapper
      className={className}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
      <Switch
        checked={disabled ? false : value}
        className={clsx(
          value && !disabled ? 'bg-sky-500' : 'bg-gray-500',
          disabled && 'bg-gray-500 cursor-not-allowed',
          'relative inline-flex flex-shrink-0 h-[22px] w-[46px] border-2 border-transparent',
          'focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-75',
          'rounded-full cursor-pointer transition-colors ease-in-out duration-200',
        )}
        onChange={disabled ? () => {} : (val) => {
          onChange(val)
          if (clearErrors) {
            clearErrors()
          }
        }}
      >
        <span className='sr-only'>Use setting</span>
        <span
          aria-hidden='true'
          className={clsx(
            value ? 'translate-x-6' : 'translate-x-0',
            'pointer-events-none inline-block h-[18px] w-[18px] rounded-full bg-white shadow-lg',
            'transform ring-0 transition ease-in-out duration-200',
          )}
        >
          {disabled && <XIcon />}
        </span>
      </Switch>
    </FormFieldWrapper>
  )
}

InputSwitch.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.object,
  errors: PropTypes.object,
  className: PropTypes.string,
  defaultValue: PropTypes.bool,
  disabled: PropTypes.bool,
  clearErrors: PropTypes.func,
}
