/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types'
import { memo, useState } from 'react'
import NumberFormat from 'react-number-format'
import { Controller } from 'react-hook-form'
import { FormFieldWrapper } from '../FormFieldWrapper'

function InputText(props) {
  const {
    name, label, placeholder, defaultValue, control, errors,
    className,
  } = props
  const [number, setNumber] = useState('')

  const filterInput = ({ value }) => {
    if (!isNaN(value)) {
      if (parseInt(value, 10) >= 0 && value[0] !== '0') {
        return +value <= 5e7 ? value : 5e7
      } if (value === '') {
        return +value <= 5e7 ? value : 5e7
      }
    }
    return value
  }

  const errorMessage = Object.keys(errors).includes(name) ? errors[name].message : ''

  return (
    <FormFieldWrapper
      bordered
      className={className}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, value } }) => (
          <NumberFormat
            // customInput={(prop) => (
            //   <input
            //     {...prop}
            //     autoComplete='off'
            //     autoFocus={false}
            //     className='w-full outline-none placeholder-gray-500 bg-transparent text-sm p-2'
            //     // defaultValue={defaultValue}
            //     id={name}
            //     placeholder={placeholder}
            //     spellCheck={false}
            //     type='text'
            //   />
            // )}
            decimalScale={0}
            defaultValue={defaultValue}
            isNumericString
            placeholder={placeholder}
            thousandSeparator
            // value={value}
            onValueChange={onChange}
          />
        )}
      />

    </FormFieldWrapper>
  )
}

export default memo(InputText, (prevProps, nextProps) => prevProps.isDirty === nextProps.isDirty)

InputText.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  className: PropTypes.string,
}

InputText.defaultProps = {
  name: 'Name',
  label: '',
  placeholder: 'placeholder',
  defaultValue: '',
  errors: {},
}
