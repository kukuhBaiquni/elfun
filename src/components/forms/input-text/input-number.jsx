/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types'
import { memo } from 'react'
import _ from 'lodash/get'
import NumberFormat from 'react-number-format'
import { useController } from 'react-hook-form'
import { FormFieldWrapper } from '../FormFieldWrapper'

function InputText(props) {
  const {
    name, label, placeholder, defaultValue, control, errors,
    className,
  } = props
  const { field: { onChange, value } } = useController({
    name,
    control,
    defaultValue,
  })
  console.log('DEFAULT NUMBER', defaultValue, value)
  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <FormFieldWrapper
      bordered
      className={className}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
      <NumberFormat
        autoComplete='off'
        className='w-full outline-none placeholder-gray-500 bg-transparent text-sm p-2'
        decimalScale={0}
        defaultValue={defaultValue}
        id={name}
        isNumericString
        placeholder={placeholder}
        thousandSeparator
        value={value}
        onValueChange={(result) => onChange(result.value)}
      />
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
}

InputText.defaultProps = {
  name: 'Name',
  label: '',
  placeholder: 'placeholder',
  defaultValue: '',
  errors: {},
}
