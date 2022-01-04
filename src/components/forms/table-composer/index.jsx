import { useState } from 'react'
import Button from 'components/common/button'
import {
  PencilIcon, TemplateIcon, TrashIcon,
} from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { useFieldArray } from 'react-hook-form'
import Modal from 'components/common/modal'
import _ from 'lodash/get'
import TableInformation from 'components/common/table/table-information-skill'
import { FormFieldWrapper } from '../FormFieldWrapper'
import TableComposerBodyForm from './table-composer-body-form'

export default function TableComposer(props) {
  const {
    label, name, control, errors,
  } = props
  const [isVisible, setIsVisible] = useState(false)
  const [focusedData, setFocusedData] = useState({})
  const [focusedDataIndex, setFocusedDataIndex] = useState(-1)

  const {
    fields, append, remove, update,
  } = useFieldArray({
    name: 'table',
    control,
    keyName: '$id',
  })

  const onSubmit = (data) => {
    if (focusedDataIndex === -1) {
      append(data)
    } else {
      update(focusedDataIndex, data)
    }
    setIsVisible(false)
  }

  const errorMessage = _(errors, `${name}.message`) ?? ''
  return (
    <FormFieldWrapper errorMessage={errorMessage} label={label} name={name}>
      <div className='mb-2'>
        {fields.map((field, index) => (
          <div key={field.$id}>
            <div className='p-2 dark:bg-gray-800 border-input rounded bg-sky-300 flex items-center justify-between max-w-xl'>
              <h6 className='uppercase font-bold'>{`${field.tableName}`}</h6>
              <div className='flex'>
                <PencilIcon
                  className='w-5 h-5 text-sky-500 action-icon'
                  onClick={() => {
                    setIsVisible(true)
                    setFocusedData(field)
                    setFocusedDataIndex(index)
                  }}
                />
                <TrashIcon
                  className='w-5 h-5 text-red-500 action-icon'
                  onClick={() => remove(index)}
                />
              </div>
            </div>
            <TableInformation data={field.tableFields} />
          </div>
        ))}
      </div>
      <Button
        label='Create Table'
        leftIcon={<TemplateIcon className='h-5 w-5 mr-2' />}
        onClick={() => {
          setFocusedData({})
          setIsVisible(true)
          setFocusedDataIndex(-1)
        }}
      />
      <Modal
        fullHeight
        isVisible={isVisible}
        render={(
          <TableComposerBodyForm
            closeModal={() => setIsVisible(false)}
            defaultValues={focusedData}
            onSubmit={onSubmit}
          />
        )}
        size='max-w-screen'
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
