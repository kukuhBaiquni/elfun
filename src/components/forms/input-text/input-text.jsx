/* eslint-disable jsx-a11y/no-autofocus */
import PropTypes from 'prop-types'
import { memo } from 'react'
import resolvePath from 'utils/resolvePath'
import { FormFieldWrapper } from '../FormFieldWrapper'

function InputText(props) {
  const {
    name, label, placeholder, defaultValue, register, errors,
    className,
  } = props

  const errorMessage = resolvePath(errors, `${name}.message`) ?? ''
  console.log('name >>>', name)
  return (
    <FormFieldWrapper
      bordered
      className={className}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
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

export default memo(InputText)

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
