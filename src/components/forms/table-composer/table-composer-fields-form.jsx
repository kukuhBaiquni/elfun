import { Fragment } from 'react'
import { TrashIcon, SwitchVerticalIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'

import Button from 'components/common/button'
import { ReactSortable } from 'react-sortablejs'
import TableComposerAttributeForm from './table-composer-attributes-form'
import InputText from '../input-text/input-text'

export default function TableComposerFieldsForm(props) {
  const {
    fields, remove, move, form, name, defaultValues = [],
  } = props
  const {
    formState: { errors }, register,
  } = form

  return (
    <Fragment>
      <ReactSortable
        animation={150}
        filter='.filtered'
        ghostClass='opacity-60'
        group='group'
        handle='.handle'
        list={fields}
        setList={() => { }}
        onEnd={(evt) => move(evt.oldIndex, evt.newIndex)}
      >
        {fields.map((field, index) => (
          <div className='bg-sky-50 dark:bg-gray-900 rounded mb-2 p-2 handle cursor-grab' key={field.$id}>
            <SwitchVerticalIcon className='w-5 h-5' />
            <InputText
              defaultValue={defaultValues[index]?.fieldName}
              errors={errors}
              label='Field Name'
              name={`${name}.${index}.fieldName`}
              placeholder='Field Name..'
              register={register}
            />
            <TableComposerAttributeForm
              defaultValues={defaultValues[index]?.attributes}
              form={form}
              name={`${name}.${index}.attributes`}
            />
            <div className='mt-2 flex justify-end'>
              <Button
                label='Remove this Field'
                leftIcon={<TrashIcon className='h-3.5 w-3.5 mr-1' />}
                size='sm'
                variant='danger-solid'
                onClick={() => remove(index)}
              />
            </div>
          </div>
        ))}
      </ReactSortable>
    </Fragment>
  )
}

TableComposerFieldsForm.propTypes = {
  fields: PropTypes.array,
  remove: PropTypes.func,
  name: PropTypes.string,
  form: PropTypes.object,
  defaultValues: PropTypes.array,
  move: PropTypes.func,
}
