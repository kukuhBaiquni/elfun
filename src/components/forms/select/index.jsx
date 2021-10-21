/* eslint-disable no-shadow */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon, ExclamationCircleIcon } from '@heroicons/react/solid'

export default function Select({ options = [] }) {
  const [selected, setSelected] = useState(options[0] || '')

  return (
    <div className='w-full text-general py-2 font-titillium'>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative mt-1'>
          <Listbox.Label className='font-semibold'>Skill Property</Listbox.Label>
          <Listbox.Button className='relative w-full border-input my-1 py-2 pl-2 pr-10 text-left text-general rounded cursor-default outline-none sm:text-sm'>
            <span className='block truncate'>{selected.label}</span>
            <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
              <ChevronDownIcon
                aria-hidden='true'
                className='w-5 h-5'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='w-full absolute py-1 mt-1 border-input overflow-auto text-base bg-general text-general rounded shadow-lg max-h-60 sm:text-sm'>
              {options.map((option, options) => (
                <Listbox.Option
                  className={({ active }) => `${active && 'text-sky-600 bg-sky-300 dark:bg-gray-800'} cursor-default select-none relative py-2 pl-10 pr-4`}
                  key={options}
                  value={option}
                >
                  {({ selected }) => (
                    <Fragment>
                      <span
                        className={`${
                          selected ? 'font-semibold text-sky-600 dark:text-sky-400' : 'font-normal'
                        } block truncate`}
                      >
                        {option.label}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                          <CheckIcon aria-hidden='true' className='w-5 h-5 text-sky-600 dark:text-sky-400' />
                        </span>
                      ) : null}
                    </Fragment>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <div className='flex items-center'>
        <ExclamationCircleIcon className='w-4 h-4 text-red-500 dark:text-red-700' />
        <span className='text-red-500 dark:text-red-700 ml-1 text-sm' role='alert'>Error Message!</span>
      </div>
    </div>
  )
}
