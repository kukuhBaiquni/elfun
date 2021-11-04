import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import _ from 'lodash/get'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import { FormFieldWrapper } from '../FormFieldWrapper'

export default function InputSwitch(props) {
  const {
    label, name, control, errors,
    className, defaultValue, disabled,
  } = props

  const { field: { onChange, value } } = useController({
    name,
    control,
    defaultValue,
  })

  const errorMessage = _(errors, `${name}.message`) ?? ''
  return (
    <FormFieldWrapper
      className={className}
      disabled={disabled}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
      <Switch
        checked={value}
        className={clsx(
          value ? 'bg-sky-500' : 'bg-gray-500',
          'relative inline-flex flex-shrink-0 h-[24px] w-[48px] border-2 border-transparent',
          'focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-75',
          'rounded-full cursor-pointer transition-colors ease-in-out duration-200',
        )}
        onChange={onChange}
      >
        <span className='sr-only'>Use setting</span>
        <span
          aria-hidden='true'
          className={clsx(
            value ? 'translate-x-6' : 'translate-x-0',
            'pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg',
            'transform ring-0 transition ease-in-out duration-200',
          )}
        />
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
}
