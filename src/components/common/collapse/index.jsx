/* eslint-disable react/display-name */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import clsx from 'clsx'
import { Fragment } from 'react'

export default function ChangeJobQuest(props) {
  const { children, title, additionalToolbar } = props
  return (
    <div className='w-full mt-3'>
      <Disclosure>
        {({ open }) => (
          <Fragment>
            <Disclosure.Button className={clsx(
              'w-full p-2 font-medium text-left hover:bg-opacity-80 text-white',
              'rounded-t dark:bg-warmGray-600 bg-coolGray-400 border-white focus-visible:border',
            )}
            >
              <div className='flex justify-between'>
                <span>{title}</span>
                <div className='flex gap-2 items-center'>
                  {additionalToolbar}
                  <ChevronUpIcon className={clsx(
                    open ? '-transform rotate-180' : 'transform rotate-0',
                    'w-5 h-5 text-gray-white transition-all duration-300',
                  )}
                  />
                </div>
              </div>
            </Disclosure.Button>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >
              <Disclosure.Panel className='text-general border-input border-t-0'>
                {children}
              </Disclosure.Panel>
            </Transition>
          </Fragment>
        )}
      </Disclosure>
    </div>
  )
}
