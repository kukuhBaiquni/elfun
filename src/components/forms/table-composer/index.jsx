import { useState } from 'react'
import Button from 'components/common/button'
import { TemplateIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { useFieldArray } from 'react-hook-form'
import Modal from 'components/common/modal'
import _ from 'lodash/get'
import { FormFieldWrapper } from '../FormFieldWrapper'
import TableComposerBodyForm from './table-composer-body-form'
import TableComponent from './table-component'

export default function TableComposer(props) {
  const {
    label, name, control, errors,
  } = props
  const [isVisible, setIsVisible] = useState(false)
  const [focusedData, setFocusedData] = useState({})

  const { fields, append, remove } = useFieldArray({
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
        {fields.map((field, index) => (
          <TableComponent
            deleteTable={() => remove(index)}
            field={field}
            fieldIndex={index}
            key={field.$id}
            openModal={(data) => {
              setIsVisible(true)
              setFocusedData(data)
            }}
          />
        ))}
      </div>
      <Button
        label='Create Table'
        leftIcon={<TemplateIcon className='h-5 w-5 mr-2' />}
        onClick={() => {
          setFocusedData({})
          setIsVisible(true)
        }}
      />
      <Modal
        isVisible={isVisible}
        render={(
          <TableComposerBodyForm
            closeModal={() => setIsVisible(false)}
            defaultValues={focusedData}
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
