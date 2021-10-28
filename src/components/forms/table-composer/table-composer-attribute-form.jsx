import { PlusIcon, TrashIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { useFieldArray } from 'react-hook-form'
import InputText from '../input-text/input-text'

export default function TableComposerAttributeForm(props) {
  const {
    fieldIndex, control, register, name,
  } = props
  const { fields, append, remove } = useFieldArray({
    name,
    control,
    keyName: '$id',
  })

  return (
    <div className='bg-gray-200 dark:bg-gray-800 p-2 cursor-default rounded'>
      <h6 className='text-sky-500 font-titillium font-bold'>Attributes</h6>
      {fields.map((field, index) => (
        <div className='flex items-center' key={field.$id}>
          <div className='grid grid-cols-2 gap-2 flex-grow'>
            <InputText
              name={`${name}.${index}.attributeName`}
              placeholder='Attribute Name'
              register={register}
            />
            <InputText
              name={`${name}.${index}.value`}
              placeholder='Value'
              register={register}
            />
          </div>
          <TrashIcon
            className='h-5 w-5 ml-2 text-red-500 cursor-pointer'
            onClick={() => remove(index)}
          />
        </div>
      ))}
      <div className='flex justify-start'>
        <Button
          label='Add Attribute'
          leftIcon={<PlusIcon className='h-3.5 w-3.5' />}
          size='sm'
          onClick={() => append({
            attributeName: '',
          })}
        />
      </div>
    </div>
  )
}
