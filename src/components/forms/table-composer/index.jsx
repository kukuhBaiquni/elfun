import { useState } from 'react'
import Button from 'components/common/button'
import {
  PencilIcon, SwitchVerticalIcon, TemplateIcon, TrashIcon,
} from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { useFieldArray } from 'react-hook-form'
import Modal from 'components/common/modal'
import _ from 'lodash/get'
import Collapse from 'components/common/collapse'
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
    if (focusedDataIndex !== -1) {
      update(focusedDataIndex, data)
    } else {
      append(data)
    }
    setIsVisible(false)
  }

  const errorMessage = _(errors, `${name}.message`) ?? ''
  return (
    <FormFieldWrapper errorMessage={errorMessage} label={label} name={name}>
      <div className='mb-2'>
        {fields.map((field, index) => (
          <Collapse
            additionalToolbar={(
              <div className='flex gap-1'>
                <PencilIcon
                  className='w-5 h-5 text-sky-500 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-300 p-0.5 rounded'
                  onClick={() => {
                    setIsVisible(true)
                    setFocusedData(field)
                    setFocusedDataIndex(index)
                  }}
                />
                <TrashIcon
                  className='w-5 h-5 text-red-500 cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-300 p-0.5 rounded'
                  onClick={() => remove(index)}
                />
              </div>
            )}
            key={field.$id}
            preIcon={<SwitchVerticalIcon className='h-5 w-5 handle cursor-grab' />}
            title={`${field.tableName}`}
          >
            <div className='overflow-x-auto p-20'>
              <TableInformation data={field.tableFields} />
            </div>
          </Collapse>
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
