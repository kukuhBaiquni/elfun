import PropTypes from 'prop-types'
import _ from 'lodash/get'
import { FormFieldWrapper } from '../FormFieldWrapper'

export default function Textarea(props) {
  const {
    name, label, placeholder, defaultValue, register, errors,
    rows = 6, showInfo,
  } = props

  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <FormFieldWrapper
      bordered
      errorMessage={errorMessage}
      label={label}
      name={name}
      showInfo={showInfo}
    >
      <textarea
        {...register(name)}
        autoComplete='off'
        className='w-full outline-none placeholder-gray-500 bg-transparent text-sm p-2 resize-none custom-scroll'
        defaultValue={defaultValue}
        id={name}
        placeholder={placeholder}
        rows={rows}
        spellCheck={false}
        type='text'
      />
    </FormFieldWrapper>
  )
}

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  rows: PropTypes.number,
  showInfo: PropTypes.bool,
}

Textarea.defaultProps = {
  name: 'Name',
  label: 'Label',
  placeholder: 'placeholder',
  defaultValue: '',
}
