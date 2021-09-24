/* eslint-disable react/prop-types */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'

export default function Example({ isVisible, setIsVisible, data }) {
  const cancelButtonRef = useRef(null)
  return (
    <Transition.Root as={Fragment} show={isVisible}>
      <Dialog as='div' className='fixed z-50 inset-0 overflow-y-auto' initialFocus={cancelButtonRef} onClose={setIsVisible}>
        <div className='flex items-end sm:items-center justify-center min-h-screen text-center sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span aria-hidden='true' className='hidden sm:inline-block sm:align-middle sm:h-screen'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block w-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs sm:text-sm whitespace-nowrap text-center sm:text-left overflow-hidden shadow-xl font-titillium max-w-lg transform transition-all' ref={cancelButtonRef}>
              <div className={`text-white p-2 text-lg ${data?.bgColor}`}>
                <h5>Choose Character Path</h5>
              </div>
              <div className='p-2 mt-3'>
                <div className='flex flex-col justify-center items-center'>
                  <div className={`p-0.5 mb-1 flex flex-col items-center ${data?.bgColor} rounded`}>
                    <Image alt={data?.name} height={54} src={data?.img} width={54} />
                  </div>
                  <span>{data?.name}</span>
                  <div className={`grid ${data?.child.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-3 mt-3`}>
                    {data?.child.map((item) => (
                      <Fragment key={item.name}>
                        <div className='p-2 flex flex-col items-center'>
                          <div className={`p-0.5 mb-1 flex flex-col items-center ${data?.bgColor} rounded`}>
                            <Image alt={item.name} height={54} src={item.img} width={54} />
                          </div>
                          <span>{item.name}</span>
                          <div className='grid grid-cols-1 gap-3 mt-3'>
                            {item.child.map((job) => (
                              <div className='p-2 flex flex-col items-center' key={job.name}>
                                <div className={`p-0.5 mb-1 flex flex-col items-center ${data?.bgColor} rounded`}>
                                  <Image alt={job.name} height={54} src={job.img} width={54} />
                                </div>
                                <span>{job.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Fragment>

                    ))}
                  </div>
                </div>
                <button
                  ref={cancelButtonRef}
                  type='button'
                  onClick={() => setIsVisible(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
