import PropTypes from 'prop-types'
import { memo } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormFieldWrapper } from '../FormFieldWrapper'

function Textarea(props) {
  const {
    name, label, placeholder, defaultValue,
  } = props

  const { register } = useFormContext()

  return (
    <FormFieldWrapper bordered label={label} name={name}>
      <textarea
        {...register(name)}
        className='w-full outline-none placeholder-gray-500 bg-transparent text-sm p-2 resize-none'
        defaultValue={defaultValue}
        id={name}
        placeholder={placeholder}
        rows={4}
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
