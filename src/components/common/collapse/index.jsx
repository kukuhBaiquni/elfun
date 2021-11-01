/* eslint-disable react/display-name */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'

export default function ChangeJobQuest(props) {
  const { children, title } = props
  return (
    <div className='w-full mt-3'>
      <Disclosure>
        {({ open }) => (
          <Fragment>
            <Disclosure.Button className='flex justify-between w-full p-2 font-medium bg-gray-300 dark:bg-gray-800 border-general text-left hover:bg-opacity-80 text-sky-500'>
              <span>{title}</span>
              <ChevronUpIcon className={clsx(open ? '-transform rotate-180' : 'transform rotate-0', 'w-5 h-5 text-gray-600 transition-all duration-300')} />
            </Disclosure.Button>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Disclosure.Panel className='text-general border-general border-t-0'>
                {children}
              </Disclosure.Panel>
            </Transition>
          </Fragment>
        )}
      </Disclosure>
    </div>
  )
}
