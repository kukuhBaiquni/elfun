import PropTypes from 'prop-types'
import { memo } from 'react'
import { FormField } from '../common'

function InputText(props) {
  const {
    name = 'Name', register = () => {}, label = 'Label', placeholder = '',
    defaultValue = '',
  } = props
  return (
    <FormField label={label} name={name}>
      <input
        {...register(name)}
        className='w-full outline-none placeholder-gray-500 bg-transparent text-sm py-2'
        defaultValue={defaultValue}
        id={name}
        placeholder={placeholder}
        type='text'
      />
    </FormField>
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
