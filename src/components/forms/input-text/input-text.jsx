import PropTypes from 'prop-types'
import { memo } from 'react'
import { FormFieldWrapper } from '../FormFieldWrapper'

function InputText(props) {
  const {
    name, register, label, placeholder, defaultValue,
  } = props
  return (
    <FormFieldWrapper bordered label={label} name={name}>
      <input
        {...register(name)}
        className='w-full outline-none placeholder-gray-500 bg-transparent text-sm p-2'
        defaultValue={defaultValue}
        id={name}
        placeholder={placeholder}
        type='text'
      />
    </FormFieldWrapper>
  )
}

export default memo(InputText, (prevProps, nextProps) => prevProps.isDirty === nextProps.isDirty)

InputText.propTypes = {
  name: PropTypes.string,
  register: PropTypes.func,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
}

InputText.defaultProps = {
  name: 'Name',
  register: () => {},
  label: 'Label',
  placeholder: 'placeholder',
  defaultValue: '',
}
