import { Disclosure, Transition } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'

export default function ChangeJobQuest() {
  return (
    <div className='w-full mt-3 bg-gray-700'>
      <Disclosure>
        {({ open }) => (
          <Fragment>
            <Disclosure.Button className='flex justify-between w-full px-4 py-2 font-medium text-left text-purple-900 bg-gray-700 hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
              <span>What is your refund policy?</span>
              <ChevronUpIcon
                className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >

              <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                If you&apos;re unhappy with your purchase for any reason, email us
                within 90 days and we&apos;ll refund you in full, no questions asked.
              </Disclosure.Panel>
            </Transition>
          </Fragment>
        )}
      </Disclosure>
      <Disclosure as='div' className='mt-2'>
        {({ open }) => (
          <Fragment>
            <Disclosure.Button className='flex justify-between w-full px-4 py-2 font-medium text-left text-purple-900 bg-gray-700 hover:bg-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
              <span>What is your refund policy?</span>
              <ChevronUpIcon
                className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Transition
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'
            >

              <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                If you&apos;re unhappy with your purchase for any reason, email us
                within 90 days and we&apos;ll refund you in full, no questions asked.
              </Disclosure.Panel>
            </Transition>
          </Fragment>
        )}
      </Disclosure>
    </div>
  )
}
