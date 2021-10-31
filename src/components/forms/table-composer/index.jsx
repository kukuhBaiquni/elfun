import { useState } from 'react'
import Button from 'components/common/button'
import { TemplateIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { useFieldArray } from 'react-hook-form'
import Modal from 'components/common/modal'
import { FormFieldWrapper } from '../FormFieldWrapper'
import TableComposerBody from './table-composer-body-form'

export default function TableComposer(props) {
  const {
    label, name, control,
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

  return (
    <FormFieldWrapper label={label} name={name}>
      <Button
        label='Create Table'
        leftIcon={<TemplateIcon className='h-5 w-5 mr-2' />}
        onClick={() => setIsVisible(true)}
      />
      {fields.map((field) => (
        <div className='p-2 bg-lime-500' key={field.$id}>
          {field.tableName}
        </div>
      ))}
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
}
