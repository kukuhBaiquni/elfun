import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'

export default function Example(props) {
  const { children } = props
  return (
    <Popover className='relative'>
      {({ open }) => (
        <Fragment>
          <Popover.Button>
            {children}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 w-screen max-w-sm px-4 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl'>
              <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative grid gap-8 bg-white p-7 lg:grid-cols-2'>
                  Inner
                </div>
                <div className='p-4 bg-gray-50'>
                  <a
                    className='flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
                    href='##'
                  >
                    <span className='flex items-center'>
                      <span className='text-sm font-medium text-gray-900'>
                        Documentation
                      </span>
                    </span>
                    <span className='block text-sm text-gray-500'>
                      Start integrating products and tools
                    </span>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Fragment>
      )}
    </Popover>
  )
}
