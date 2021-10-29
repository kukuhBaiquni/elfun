import { PlusIcon, TrashIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'
import InputText from '../input-text/input-text'
import InputNumber from '../input-text/input-number'

export default function TableComposerAttributeForm(props) {
  const {
    control, register, name,
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
          <div className='grid grid-cols-11 gap-2 flex-grow'>
            <InputText
              className='col-span-5'
              name={`${name}.${index}.attributeName`}
              placeholder='Attribute Name'
              register={register}
            />
            <InputText
              className='col-span-5'
              name={`${name}.${index}.value`}
              placeholder='Value'
              register={register}
            />
            <InputNumber
              name={`${name}.${index}.suffix`}
              placeholder='Suffix'
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

TableComposerAttributeForm.propTypes = {
  control: PropTypes.object,
  register: PropTypes.func,
  name: PropTypes.string,
}
