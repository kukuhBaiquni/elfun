import { Fragment } from 'react'
import { TrashIcon, SwitchVerticalIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import Collapse from 'components/common/collapse'
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
          <Collapse
            additionalToolbar={(
              <TrashIcon
                className='w-5 h-5 text-red-400'
                onClick={() => remove(index)}
              />
            )}
            key={field.$id}
            preIcon={<SwitchVerticalIcon className='h-5 w-5 handle cursor-grab' />}
            title={`Field ${index + 1} (${field.fieldName})`}
          >
            <div className='bg-sky-50 dark:bg-gray-900 rounded p-2'>
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
            </div>
          </Collapse>
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
