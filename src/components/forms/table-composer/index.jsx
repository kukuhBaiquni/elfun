import { useState, Fragment } from 'react'
import Button from 'components/common/button'
import { TemplateIcon, XIcon, PlusIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import { FormProvider, useForm } from 'react-hook-form'
import Modal from 'components/common/modal'
import { FormFieldWrapper } from '../FormFieldWrapper'
import InputText from '../input-text/input-text'

export default function TableComposer(props) {
  const { label, name } = props
  const [isVisible, setIsVisible] = useState(false)
  const methods = useForm()

  return (
    <FormFieldWrapper label={label} name={name}>
      <Button
        label='Create Table'
        leftIcon={<TemplateIcon className='h-5 w-5 mr-2' />}
        onClick={() => setIsVisible(true)}
      />
      <Modal
        isVisible={isVisible}
        render={(
          <Fragment>
            <div className='bg-sky-500 dark:bg-gray-800 text-white py-2 px-3 text-lg flex justify-between items-center'>
              <h5>Create Table</h5>
              <XIcon className='w-6 h-6 cursor-pointer' onClick={() => setIsVisible(false)} />
            </div>
            <div className='py-2 px-3 mt-3'>
              <FormProvider {...methods}>
                <InputText
                  label='Table Name'
                  name='tableName'
                  placeholder='Table Name..'
                />
                <Button
                  label='Add Attribute'
                  leftIcon={<PlusIcon className='h-3.5 w-3.5 mr-1' />}
                  size='sm'
                />
              </FormProvider>
            </div>
          </Fragment>
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
