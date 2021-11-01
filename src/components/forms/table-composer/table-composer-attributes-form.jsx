import { PlusIcon, TrashIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'
import _ from 'lodash/get'
import InputText from '../input-text/input-text'
import InputNumber from '../input-text/input-number'
import InputSelect from '../input-select/input-select'
import { FormFieldWrapper } from '../FormFieldWrapper'

export default function TableComposerAttributeForm(props) {
  const {
    control, register, name, errors, clearErrors, defaultValues = {},
  } = props
  const { fields, append, remove } = useFieldArray({
    name,
    control,
    keyName: '$id',
  })

  const addAttributes = () => {
    if (!Array.isArray(_(errors, name))) {
      clearErrors(name)
      append({
        attributeName: '',
        value: '',
      })
    }
  }

  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <div className='bg-sky-50 dark:bg-gray-900 cursor-default rounded'>
      {fields.map((field, index) => (
        <div className='dark:bg-gray-900 bg-sky-50 p-2 border-b dark:border-gray-600 border-gray-300' key={field.$id}>
          <div className='grid grid-cols-1 sm:grid-cols-12 gap-2 flex-grow'>
            <InputText
              className='sm:col-span-12'
              defaultValue={defaultValues[index]?.attributeName}
              errors={errors}
              label='Attribute Name'
              name={`${name}.${index}.attributeName`}
              placeholder='Attribute Name'
              register={register}
            />
            <InputNumber
              className='sm:col-span-6'
              control={control}
              defaultValue={defaultValues[index]?.value.amount}
              errors={errors}
              label='Amount'
              name={`${name}.${index}.value`}
              placeholder='Value'
            />
            <InputSelect
              className='sm:col-span-6'
              control={control}
              defaultValue={defaultValues[index]?.value.suffix}
              label='Suffix'
              name={`${name}.${index}.suffix`}
              options={[
                { label: '%', value: '%' },
                { label: 'Seconds', value: 's' },
                { label: 'MP', value: 'mp' },
              ]}
            />
          </div>
          <div className='mt-2'>
            <Button
              label='Remove this Attribute'
              leftIcon={<TrashIcon className='h-3.5 w-3.5 mr-1' />}
              size='sm'
              variant='danger-solid'
              onClick={() => remove(index)}
            />
          </div>
        </div>
      ))}
      <FormFieldWrapper
        errorMessage={errorMessage}
        name={name}
      >
        <div className='flex justify-start px-2'>
          <Button
            label='Add Attribute'
            leftIcon={<PlusIcon className='h-3.5 w-3.5' />}
            size='sm'
            onClick={addAttributes}
          />
        </div>
      </FormFieldWrapper>
    </div>
  )
}

TableComposerAttributeForm.propTypes = {
  control: PropTypes.object,
  register: PropTypes.func,
  name: PropTypes.string,
  errors: PropTypes.object,
  clearErrors: PropTypes.func,
  defaultValues: PropTypes.object,
}
