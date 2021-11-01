import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import _ from 'lodash/get'
import { useController } from 'react-hook-form'
import { FormFieldWrapper } from '../FormFieldWrapper'

export default function InputRadio(props) {
  const {
    label, name, control, errors, options = [],
    className,
  } = props
  const { field: { onChange, value } } = useController({
    name,
    control,
  })
  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <FormFieldWrapper
      className={className}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
      <RadioGroup value={value || options[0]} onChange={onChange}>
        <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
        <div className='flex'>
          {options.map((item) => (
            <RadioGroup.Option
              className={({ checked }) => clsx(
                checked ? 'bg-sky-500 text-white' : 'bg-transparent',
                'relative px-3 py-1 cursor-pointer flex focus:outline-none border-input',
                'border-l-0 border-r-0 first:border-l last:border-r',
              )}
              key={item.label}
              value={item}
            >
              {({ checked }) => (
                <div className='text-sm'>
                  <RadioGroup.Label
                    as='p'
                    className={clsx(checked ? 'text-white' : 'text-general')}
                  >
                    {item.label}
                  </RadioGroup.Label>
                </div>
              )}
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
}
