/* eslint-disable no-shadow */
import { useState, useEffect, memo } from 'react'
import Transition from 'components/common/transition'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useFormContext } from 'react-hook-form'
import { FormFieldWrapper } from '../FormFieldWrapper'

function Select(props) {
  const {
    name, label, options,
  } = props
  const [isVisible, setIsVisible] = useState(false)

  const { register, setValue, watch } = useFormContext()
  const currentValue = watch(name)
  const displayLabel = options.find((item) => item.value === currentValue)
  useEffect(() => {
    register(name)
  }, [register, name])

  return (
    <FormFieldWrapper bordered label={label} name={name}>
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
                    item.value === currentValue
                      ? 'bg-sky-500 cursor-default text-white'
                      : 'hover:bg-sky-300 dark:hover:bg-gray-600',
                    'p-2 text-left rounded-sm flex',
                  )}
                  disabled={item.value === currentValue}
                  key={index}
                  type='button'
                  onClick={() => setValue(name, item.value)}
                >
                  {item.label}
                  {item.value === currentValue?.value && (
                    <CheckIcon className='h-5 w-5 text-sky-500 ml-2' />
                  )}
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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

Select.defaultProps = {
  options: [],
}

export default memo(Select)
