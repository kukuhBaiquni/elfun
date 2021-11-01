import { useState } from 'react'
import Button from 'components/common/button'
import { TemplateIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { useFieldArray } from 'react-hook-form'
import Modal from 'components/common/modal'
import _ from 'lodash/get'
import { FormFieldWrapper } from '../FormFieldWrapper'
import TableComposerBody from './table-composer-body-form'

export default function TableComposer(props) {
  const {
    label, name, control, errors,
  } = props
  const [isVisible, setIsVisible] = useState(false)

  const { fields, append } = useFieldArray({
    name: 'table',
    control,
    keyName: '$id',
  })

  const onSubmit = (data) => {
    append(data)
    setIsVisible(false)
  }

  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <FormFieldWrapper errorMessage={errorMessage} label={label} name={name}>
      <div className='mb-2'>
        {fields.map((field) => (
          <div className='bg-gray-900 p-2' key={field.$id}>
            {field.tableName}
            <section className='grid grid-cols-4'>
              {field.tableFields.map((item) => (
                <div className='col-span-2' key={item.fieldName}>
                  {item.fieldName}
                </div>
              ))}
            </section>
          </div>
        ))}
      </div>
      <Button
        label='Create Table'
        leftIcon={<TemplateIcon className='h-5 w-5 mr-2' />}
        onClick={() => setIsVisible(true)}
      />
      <Modal
        isVisible={isVisible}
        render={(
          <TableComposerBody
            closeModal={() => setIsVisible(false)}
            onSubmit={onSubmit}
          />
        )}
        size='max-w-xl'
      />
    </FormFieldWrapper>
  )
}

TableComposer.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.object,
  errors: PropTypes.object,
}
