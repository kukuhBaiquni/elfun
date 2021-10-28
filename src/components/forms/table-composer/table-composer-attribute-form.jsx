import {
  PlusIcon, SwitchVerticalIcon, TrashIcon, PencilIcon,
} from '@heroicons/react/solid'
import { ReactSortable } from 'react-sortablejs'
import { useFieldArray, useForm } from 'react-hook-form'
import Button from 'components/common/button'
import { Fragment } from 'react'
import InputText from '../input-text/input-text'

let render = 0
export default function TableComposerBodyForm() {
  const {
    control, register, watch, setValue,
  } = useForm()
  console.log('NEST FORM___', watch())
  const {
    fields, append, remove, move,
  } = useFieldArray({
    name: 'tableAttributes',
    control,
    keyName: '$id',
  })

  render += 1
  console.log('RE-RENDER', render)
  return (
    <Fragment>
      <div className='h-[700px] overflow-y-auto custom-scroll pr-2'>
        <InputText
          label='Table Name'
          name='tableName'
          placeholder='Table Name..'
          register={register}
        />
        <ReactSortable
          animation={150}
          filter='.filtered'
          ghostClass='opacity-60'
          handle='.handle'
          list={fields}
          setList={() => { }}
          onEnd={(evt) => move(evt.oldIndex, evt.newIndex)}
        >
          {fields.map((field, index) => (
            <div className='bg-gray-300 dark:bg-gray-900 rounded mb-2 p-2 handle cursor-grab' key={field.$id}>
              <div className='flex justify-between'>
                <div className='flex gap-2'>
                  <SwitchVerticalIcon className='h-5 w-5' />
                </div>
                <div className='flex'>
                  <PencilIcon className='h-6 w-6 hover:bg-gray-800 cursor-pointer p-1 text-sky-500' />
                  <TrashIcon
                    className='h-6 w-6 hover:bg-gray-800 cursor-pointer p-1 text-red-500'
                    onClick={() => remove(index)}
                  />
                </div>
              </div>
              <InputText
                defaultValue={field.name}
                label='Attribute Name'
                name={`tableAttributes.${index}.name`}
                placeholder='Attribute Name..'
                register={register}
              />
            </div>
          ))}
        </ReactSortable>
        <Button
          label='Add Attribute'
          leftIcon={<PlusIcon className='h-3.5 w-3.5 mr-1' />}
          size='sm'
          onClick={() => append({
            name: 'TJIMENC',
          })}
        />
      </div>
      <div className='flex justify-end mb-1'>
        <Button
          label='Done'
        />
      </div>
    </Fragment>
  )
}
