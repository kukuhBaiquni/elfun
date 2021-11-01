import React from 'react'
import { ReactSortable } from 'react-sortablejs'
import { SwitchVerticalIcon, TrashIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import TableComposerAttributeForm from './table-composer-attributes-form'
import InputText from '../input-text/input-text'

export default function TableComposerFieldsForm(props) {
  const {
    fields, remove, move, control, errors, register,
    clearErrors, name,
  } = props
  return (
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
            errors={errors}
            label='Field Name'
            name={`${name}.${index}.fieldName`}
            placeholder='Field Name..'
            register={register}
          />
          <TableComposerAttributeForm
            clearErrors={clearErrors}
            fieldIndex={index}
            name={`${name}.${index}.attributes`}
            {...{ control, register }}
            errors={errors}
          />
        </div>
      ))}
    </ReactSortable>
  )
}

TableComposerFieldsForm.propTypes = {
  fields: PropTypes.array,
  remove: PropTypes.func,
  move: PropTypes.func,
  control: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
}
