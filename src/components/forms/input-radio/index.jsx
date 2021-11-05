import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import _ from 'lodash/get'
import { useController } from 'react-hook-form'
import { FormFieldWrapper } from '../FormFieldWrapper'

export default function InputRadio(props) {
  const {
    label, name, control, errors, options = [],
    className, defaultValue, disabled,
  } = props
  const { field: { onChange, value } } = useController({
    name,
    control,
    defaultValue: defaultValue || options[0],
  })

  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <FormFieldWrapper
      className={className}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
      <RadioGroup
        disabled={disabled}
        value={value || options[0]}
        onChange={onChange}
      >
        <div className='flex'>
          {options.map((item) => (
            <RadioGroup.Option
              className={clsx(
                'relative p-0.5 cursor-pointer flex focus:outline-none border-input',
                'border-l-0 border-r-0 first:border-l last:border-r',
                disabled && 'cursor-not-allowed',
              )}
              key={item.label}
              value={item}
            >
              <div className={clsx(
                'text-sm flex items-center py-1 px-2',
                'transition-all duration-300',
                value.value === item.value ? (disabled ? 'bg-gray-500' : 'bg-sky-500') : 'bg-transparent',
              )}
              >
                <RadioGroup.Label
                  as='p'
                  className={clsx(
                    value.value === item.value
                      ? 'text-white'
                      : 'text-general',
                  )}
                >
                  {item.label}
                </RadioGroup.Label>
              </div>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </FormFieldWrapper>
  )
}

InputRadio.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.object,
  errors: PropTypes.object,
  options: PropTypes.array,
  className: PropTypes.string,
  defaultValue: PropTypes.object,
  disabled: PropTypes.bool,
}
