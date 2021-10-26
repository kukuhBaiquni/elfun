import PropTypes from 'prop-types'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormFieldWrapper } from '../FormFieldWrapper'

function Textarea(props) {
  const {
    name, label, placeholder, defaultValue,
  } = props

  const { register, formState: { errors } } = useFormContext()
  const errorMessage = Object.keys(errors).includes(name) ? errors[name].message : ''

  return (
    <FormFieldWrapper bordered errorMessage={errorMessage} label={label} name={name}>
      <textarea
        {...register(name)}
        autoComplete='off'
        className='w-full outline-none placeholder-gray-500 bg-transparent text-sm p-2 resize-none'
        defaultValue={defaultValue}
        id={name}
        placeholder={placeholder}
        rows={4}
        spellCheck={false}
        type='text'
      />
    </FormFieldWrapper>
  )
}

export default memo(
  Textarea,
  (prevProps, nextProps) => prevProps.isDirty === nextProps.isDirty,
)

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
}

Textarea.defaultProps = {
  name: 'Name',
  label: 'Label',
  placeholder: 'placeholder',
  defaultValue: '',
}
