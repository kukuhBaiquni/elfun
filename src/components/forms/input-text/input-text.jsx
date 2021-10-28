/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types'
import { memo } from 'react'
import { FormFieldWrapper } from '../FormFieldWrapper'

function InputText(props) {
  const {
    name, label, placeholder, defaultValue, register, errors,
  } = props

  const errorMessage = Object.keys(errors).includes(name) ? errors[name].message : ''

  return (
    <FormFieldWrapper bordered errorMessage={errorMessage} label={label} name={name}>
      <input
        {...register(name)}
        autoComplete='off'
        autoFocus={false}
        className='w-full outline-none placeholder-gray-500 bg-transparent text-sm p-2'
        defaultValue={defaultValue}
        id={name}
        placeholder={placeholder}
        spellCheck={false}
        type='text'
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
}

InputText.defaultProps = {
  name: 'Name',
  label: '',
  placeholder: 'placeholder',
  defaultValue: '',
  errors: {},
}
