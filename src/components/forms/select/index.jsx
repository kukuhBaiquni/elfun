/* eslint-disable no-shadow */
import { Fragment, useState, memo } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { FormFieldWrapper } from '../FormFieldWrapper'

function Select(props) {
  const {
    name, label, options, placeholder,
  } = props
  const [selected, setSelected] = useState(options[0] || '')
  const [isVisible, setIsVisible] = useState(false)

  return (
    <FormFieldWrapper bordered label={label} name={name}>
      <button
        className='p-2 w-full flex justify-between text-sm relative'
        type='button'
        onBlur={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
      >
        <span>Selected</span>
        <ChevronDownIcon className='h-5 w-5' />
        <div className='absolute top-10 left-0 z-50 w-full'>
          <Transition
            as='div'
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            show={isVisible}
          >
            <div className='w-full custom-scroll bg-gray-200 h-[300px] overflow-y-auto dark:bg-gray-700 border-input-focus rounded text-gray-600 dark:text-gray-400 text-xs sm:text-sm shadow-xl'>
              {Array(12).fill('.').map((_, index) => (
                <p className='p-2 text-left hover:bg-gray-500' key={index}>options</p>
              ))}
            </div>
          </Transition>
        </div>
      </button>
    </FormFieldWrapper>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
}

Select.defaultProps = {
  options: [],
  placeholder: 'Please select..',
}

export default memo(
  Select,
  (prevProps, nextProps) => prevProps.isDirty === nextProps.isDirty,
)
