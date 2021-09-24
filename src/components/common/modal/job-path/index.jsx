/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import JobPath from './job-path-mapper'

export default function Example(props) {
  const cancelButtonRef = useRef(null)
  const {
    isVisible, setIsVisible, data, setSelectedCharacter, selectedCharacter,
  } = props

  const onSelectCharacter = (name, img, bgColor) => {
    setSelectedCharacter({ name, img, bgColor })
  }

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
            <div className='inline-block w-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs sm:text-sm whitespace-nowrap text-center sm:text-left overflow-hidden shadow-xl font-titillium max-w-lg transform transition-all'>
              <JobPath
                data={data}
                selectedCharacter={selectedCharacter}
                setIsVisible={setIsVisible}
                onSelectCharacter={onSelectCharacter}
              />
            </div>
          </Transition.Child>
        </div>
        <button className='hidden' ref={cancelButtonRef} type='button' />
      </Dialog>
    </Transition.Root>
  )
}
