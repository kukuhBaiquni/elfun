import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useForm } from 'react-hook-form'
import InputText from '../input-text/input-text'
import Textarea from '../input-text/textarea'

export default function Example() {
  const { register } = useForm()

  return (
    <Popover className='relative'>
      {({ open }) => (
        <Fragment>
          <Popover.Button
            className='text-white group bg-sky-500 px-3 py-2 rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-white'
          >
            <span>Add Special Feature</span>
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
            <Popover.Panel className='absolute z-10 max-w-xl mt-1'>
              <div className='overflow-hidden rounded shadow-lg ring-1 ring-black ring-opacity-5'>
                <div className='relative p-3'>
                  <InputText
                    label='Title'
                    name='title'
                    register={register}
                  />
                  <Textarea
                    label='Description'
                    name='description'
                    register={register}
                  />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Fragment>
      )}
    </Popover>
  )
}
