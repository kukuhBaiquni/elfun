/* eslint-disable no-shadow */
import { useState, memo } from 'react'
import Transition from 'components/common/transition'
import { ChevronDownIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form'
import clsx from 'clsx'
import _ from 'lodash/get'
import { FormFieldWrapper } from '../FormFieldWrapper'

function Select(props) {
  const {
    name, label, options, errors,
    className, control, defaultValue,
  } = props
  const [isVisible, setIsVisible] = useState(false)
  const { field: { onChange, value } } = useController({
    name,
    control,
    defaultValue: defaultValue || options[0].value,
  })

  const displayLabel = options.find((item) => item.value === value)

  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <FormFieldWrapper
      bordered
      className={className}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
      <button
        className='p-2 w-full flex justify-between text-sm relative'
        type='button'
        onBlur={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
      >
        <span>{displayLabel?.label || options[0].label}</span>
        <ChevronDownIcon className='h-5 w-5' />
      </button>
      <div className='absolute top-20 left-0 z-50 w-full'>
        <Transition isVisible={isVisible}>
          <div className='w-full p-2 bg-sky-100 dark:bg-gray-700 border-input-focus rounded text-xs sm:text-sm shadow-xl'>
            <div className='custom-scroll max-h-[300px] overflow-y-auto pr-2 flex flex-col'>
              {options.map((item, index) => (
                <button
                  className={clsx(
                    item.value === value
                      ? 'bg-sky-500 cursor-default text-white'
                      : 'hover:bg-sky-300 dark:hover:bg-gray-600',
                    'p-2 text-left rounded-sm',
                  )}
                  disabled={item.value === value}
                  key={index}
                  type='button'
                  onClick={() => onChange(item.value)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </Transition>
      </div>
    </FormFieldWrapper>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
  className: PropTypes.string,
  control: PropTypes.object,
  defaultValue: PropTypes.string,
}

Select.defaultProps = {
  options: [],
  label: '',
  errors: {},
  defaultValue: '',
}

export default memo(Select)
