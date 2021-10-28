import {
  PlusIcon, XIcon, SwitchVerticalIcon, TrashIcon, PencilIcon, ChevronDownIcon,
} from '@heroicons/react/solid'
import Button from 'components/common/button'
import { Fragment } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import { ReactSortable } from 'react-sortablejs'
import InputText from '../input-text/input-text'
import TableComposerAttributeForm from './table-composer-attribute-form'

export default function TableComposerBody(props) {
  const { closeModal, assignTable } = props
  const {
    control, register, handleSubmit,
  } = useForm()
  const {
    fields, append, remove, move,
  } = useFieldArray({
    name: 'tableField',
    control,
    keyName: '$id',
  })

  const onSubmit = (data) => {
    assignTable(data)
    closeModal()
  }

  return (
    <Fragment>
      <div className='bg-sky-500 dark:bg-gray-700 text-white py-2 px-3 text-lg flex justify-between items-center'>
        <h5>Create Table</h5>
        <XIcon className='w-6 h-6 cursor-pointer' onClick={closeModal} />
      </div>
      <div className='py-2 pl-3 pr-2 mt-3'>
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
                    <p>{field.name}</p>
                  </div>
                  <div className='flex items-center'>
                    <TrashIcon
                      className='h-7 w-7 dark:hover:bg-gray-800 hover:bg-gray-200 cursor-pointer p-1 text-red-500'
                      onClick={() => remove(index)}
                    />
                  </div>
                </div>
                <InputText
                  defaultValue={field.name}
                  label='Field Name'
                  name={`tableField.${index}.fieldName`}
                  placeholder='Field Name..'
                  register={register}
                />
                <TableComposerAttributeForm
                  fieldIndex={index}
                  name={`tableField.${index}.attributes`}
                  {...{ control, register }}
                />
              </div>
            ))}
          </ReactSortable>
          <Button
            label='Add Field'
            leftIcon={<PlusIcon className='h-3.5 w-3.5 mr-1' />}
            size='sm'
            onClick={() => append({
              fieldName: '',
            })}
          />
        </div>
        <div className='flex justify-end mt-2 mb-1 gap-2'>
          <Button
            label='Cancel'
            variant='danger-solid'
            onClick={closeModal}
          />
          <Button
            label='Done'
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </div>
    </Fragment>
  )
}

TableComposerBody.propTypes = {
  closeModal: PropTypes.func,
  assignTable: PropTypes.func,
}
