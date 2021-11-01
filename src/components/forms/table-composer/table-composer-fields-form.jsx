import { Fragment } from 'react'
import { ReactSortable } from 'react-sortablejs'
import { SwitchVerticalIcon, TrashIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import Collapse from 'components/common/collapse'
import Button from 'components/common/button'
import TableComposerAttributeForm from './table-composer-attributes-form'
import InputText from '../input-text/input-text'

export default function TableComposerFieldsForm(props) {
  const {
    fields, remove, move, control, errors, register,
    clearErrors, name, defaultValues = [],
  } = props

  return (
    // <ReactSortable
    //   animation={150}
    //   filter='.filtered'
    //   ghostClass='opacity-60'
    //   handle='.handle'
    //   list={fields}
    //   setList={() => { }}
    //   onEnd={(evt) => move(evt.oldIndex, evt.newIndex)}
    // >
    <Fragment>
      {fields.map((field, index) => (
        <div className='bg-sky-50 dark:bg-gray-900 rounded mb-2 p-2' key={field.$id}>
          <InputText
            defaultValue={defaultValues[index]?.fieldName}
            errors={errors}
            label='Field Name'
            name={`${name}.${index}.fieldName`}
            placeholder='Field Name..'
            register={register}
          />
          <Collapse
            title='Attributes'
          >
            <TableComposerAttributeForm
              clearErrors={clearErrors}
              defaultValues={defaultValues?.attributes}
              fieldIndex={index}
              name={`${name}.${index}.attributes`}
              {...{ control, register }}
              errors={errors}
            />
          </Collapse>
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
    </Fragment>
    // </ReactSortable>
  )
}

TableComposerFieldsForm.propTypes = {
  fields: PropTypes.array,
  remove: PropTypes.func,
  move: PropTypes.func,
  control: PropTypes.object,
  errors: PropTypes.object,
  register: PropTypes.func,
  defaultValues: PropTypes.array,
}
