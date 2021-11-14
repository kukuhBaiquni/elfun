/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types'
import _ from 'lodash/get'
import { LockClosedIcon } from '@heroicons/react/solid'
import { FormFieldWrapper } from '../FormFieldWrapper'

export default function InputText(props) {
  const {
    name = '', label, placeholder, defaultValue = '', register,
    errors = {}, className, disabled,
  } = props

  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <FormFieldWrapper
      bordered
      className={className}
      disabled={disabled}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
      <div className='flex items-center justify-between'>
        <input
          {...register(name)}
          autoComplete='off'
          autoFocus={false}
          className='w-full outline-none disabled:cursor-not-allowed placeholder-gray-500 bg-transparent text-sm p-2'
          defaultValue={defaultValue}
          disabled={disabled}
          id={name}
          placeholder={placeholder}
          spellCheck={false}
          type='text'
        />
        {disabled && <LockClosedIcon className='w-5 h-5 m-2' />}
      </div>
    </FormFieldWrapper>
  )
}

InputText.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}
