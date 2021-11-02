import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useController } from 'react-hook-form'
import _ from 'lodash/get'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { FormFieldWrapper } from '../FormFieldWrapper'

export default function InputSelect(props) {
  const {
    name, label, options, errors,
    className, control, defaultValue,
  } = props
  const { field: { onChange, value } } = useController({
    name,
    control,
    defaultValue: defaultValue || options[0],
  })

  const errorMessage = _(errors, `${name}.message`) ?? ''
  return (
    <FormFieldWrapper
      bordered
      className={className}
      errorMessage={errorMessage}
      label={label}
      name={name}
    >
      <Listbox value={value} onChange={onChange}>
        <div className='relative'>
          <Listbox.Button className='relative text-sm w-full p-2 focus:outline-none flex justify-between'>
            <span className='block truncate'>{value?.label || options[0]}</span>
            <ChevronDownIcon
              aria-hidden='true'
              className='w-5 h-5'
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className={clsx(
              'absolute z-50 w-full mt-1 bg-sky-100 p-0 sm:p-2 dark:bg-gray-700 border-input-focus rounded text-xs sm:text-sm shadow-xl',
              'focus:outline-none',
            )}
            >
              <div className='custom-scroll max-h-[300px] overflow-y-auto p-2 sm:pr-2 sm:pl-0 sm:py-0 flex flex-col'>
                {options.map((item) => (
                  <Listbox.Option
                    className={({ selected, active }) => clsx(
                      selected && 'bg-sky-500 cursor-default text-white',
                      active && value.value !== item.value && 'bg-sky-300 dark:bg-gray-600',
                      'p-2 text-left rounded-sm',
                    )}
                    disabled={value.value === item.value}
                    key={item.value}
                    value={item}
                  >
                    <span>
                      {item.label}
                    </span>
                  </Listbox.Option>
                ))}
              </div>
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </FormFieldWrapper>
  )
}

InputSelect.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
  className: PropTypes.string,
  control: PropTypes.object,
  defaultValue: PropTypes.string,
}

InputSelect.defaultProps = {
  options: [],
  label: '',
  errors: {},
  defaultValue: '',
}
