import { useState } from 'react'
import Button from 'components/common/button'
import { TemplateIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { FormProvider, useForm, useFieldArray } from 'react-hook-form'
import Modal from 'components/common/modal'
import { FormFieldWrapper } from '../FormFieldWrapper'
import TableComposerBody from './table-composer-body'

export default function TableComposer(props) {
  const { label, name } = props
  const [isVisible, setIsVisible] = useState(false)
  const methods = useForm()
  const {
    fields, append, remove, move,
  } = useFieldArray({
    name: 'table',
    control: methods.control,
    keyName: '$id',
  })
  console.log('TEMP____', methods.watch())
  return (
    <FormFieldWrapper label={label} name={name}>
      <Button
        label='Create Table'
        leftIcon={<TemplateIcon className='h-5 w-5 mr-2' />}
        onClick={() => append({
          tableName: '',
          tableAttributes: [],
        })}
      />
      <Modal
        isVisible={isVisible}
        render={(
          <FormProvider {...methods}>
            <TableComposerBody setIsVisible={setIsVisible} />
          </FormProvider>
        )}
        setIsVisible={setIsVisible}
        size='max-w-xl'
      />
    </FormFieldWrapper>
  )
}

TableComposer.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
}
