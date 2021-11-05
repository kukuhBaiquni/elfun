/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types'
import { memo } from 'react'
import _ from 'lodash/get'
import NumberFormat from 'react-number-format'
import { useController } from 'react-hook-form'
import { LockClosedIcon } from '@heroicons/react/solid'
import { FormFieldWrapper } from '../FormFieldWrapper'

function InputText(props) {
  const {
    name, label, placeholder, defaultValue, control, errors,
    className, disabled, limit = 1e8,
  } = props
  const { field: { onChange, value } } = useController({
    name,
    control,
    defaultValue,
  })

  const errorMessage = _(errors, `${name}.message`) ?? ''

  const checkLimit = (val) => {
    const input = val.value
    return input <= limit
  }

  return (
    <FormFieldWrapper
      bordered
      className={className}
      disabled={disabled}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
      <div className='flex justify-between items-center'>
        <NumberFormat
          autoComplete='off'
          className='w-full outline-none disabled:cursor-not-allowed placeholder-gray-500 bg-transparent text-sm p-2'
          decimalScale={0}
          defaultValue={defaultValue}
          disabled={disabled}
          id={name}
          isAllowed={checkLimit}
          isNumericString
          placeholder={placeholder}
          thousandSeparator
          value={value}
          onValueChange={(result) => onChange(result.value)}
        />
        {disabled && <LockClosedIcon className='w-5 h-5 m-2' />}
      </div>
    </FormFieldWrapper>
  )
}

export default memo(InputText)

InputText.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.object,
  className: PropTypes.string,
  control: PropTypes.object,
  disabled: PropTypes.bool,
  limit: PropTypes.number,
}

InputText.defaultProps = {
  name: 'Name',
  label: '',
  placeholder: 'placeholder',
  defaultValue: '',
  errors: {},
}
