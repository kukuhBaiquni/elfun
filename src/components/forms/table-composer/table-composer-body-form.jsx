import { PlusIcon, XIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { Fragment } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import PropTypes from 'prop-types'
import _ from 'lodash/get'
import InputText from '../input-text/input-text'

import FormSchema from './table-fields-form-schema'
import { FormFieldWrapper } from '../FormFieldWrapper'
import TableComposerFieldsForm from './table-composer-fields-form'

export default function TableComposerBody(props) {
  const { closeModal, onSubmit, defaultValues = {} } = props
  const form = useForm({
    defaultValues,
    resolver: FormSchema,
  })

  const {
    control, register, handleSubmit, formState: { errors },
    clearErrors, watch,
  } = form

  const name = 'tableFields'
  const {
    fields, append, remove,
  } = useFieldArray({
    name,
    control,
    keyName: '$id',
  })

  const formSubmit = () => {
    if (!Object.keys(errors).length) {
      handleSubmit(onSubmit)()
    }
  }

  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <Fragment>
      <div className='bg-sky-500 dark:bg-gray-700 text-white py-2 px-3 text-lg flex justify-between items-center'>
        <h5>Create Table</h5>
        <XIcon className='w-6 h-6 cursor-pointer' onClick={closeModal} />
      </div>
      <div className='py-2 pl-3 pr-2 mt-3'>
        <div className='h-[700px] overflow-y-auto custom-scroll pr-2'>
          <InputText
            defaultValue={defaultValues?.tableName}
            errors={errors}
            label='Table Name'
            name='tableName'
            placeholder='Table Name..'
            register={register}
          />
          <TableComposerFieldsForm
            defaultValues={defaultValues?.tableFields}
            fields={fields}
            form={form}
            name={name}
            remove={remove}
          />
          <FormFieldWrapper
            errorMessage={errorMessage}
            name={name}
          >
            <Button
              label='Add Field'
              leftIcon={<PlusIcon className='h-3.5 w-3.5 mr-1' />}
              size='sm'
              onClick={() => {
                clearErrors(name)
                append({
                  fieldName: '',
                  attributes: [],
                })
              }}
            />
          </FormFieldWrapper>
        </div>
        <div className='flex justify-end mt-2 mb-1 gap-2'>
          <Button
            label='Cancel'
            variant='danger-solid'
            onClick={closeModal}
          />
          <Button
            label='Done'
            onClick={formSubmit}
          />
        </div>
      </div>
    </Fragment>
  )
}

TableComposerBody.propTypes = {
  closeModal: PropTypes.func,
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.object,
}
