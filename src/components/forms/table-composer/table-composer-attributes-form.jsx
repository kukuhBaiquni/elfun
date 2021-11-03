import { PlusIcon, TrashIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'
import _ from 'lodash/get'
import { VALUE_SUFFIX, INPUT_TYPE } from 'constant/options'
import InputText from '../input-text/input-text'
import InputNumber from '../input-text/input-number'
import InputSelect from '../input-select/input-select'
import { FormFieldWrapper } from '../FormFieldWrapper'
import InputRadio from '../input-radio'

export default function TableComposerAttributeForm(props) {
  const {
    control, register, name, errors, clearErrors, defaultValues = [],
    watch,
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
  console.log('FORM IN ATTR', defaultValues)

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
            <InputRadio
              className='sm:col-span-12'
              control={control}
              defaultValue={defaultValues[index]?.type}
              errors={errors}
              label='Value Type'
              name={`${name}.${index}.type`}
              options={INPUT_TYPE}
            />
            {watch(`${name}.${index}.type`)?.value === 'RANGE' ? (
              <div className='sm:col-span-6'>
                <div className='grid grid-cols-11 gap-2'>
                  <InputNumber
                    className='col-span-5'
                    control={control}
                    defaultValue={defaultValues[index]?.valueRangeStart}
                    errors={errors}
                    label='From'
                    name={`${name}.${index}.valueRangeStart`}
                    placeholder='Value'
                  />
                  <div className='w-full h-10 mt-auto mb-3 flex items-center justify-center'>
                    <ArrowNarrowRightIcon className='w-4 h-4' />
                  </div>
                  <InputNumber
                    className='col-span-5'
                    control={control}
                    defaultValue={defaultValues[index]?.valueRangeEnd}
                    errors={errors}
                    label='To'
                    name={`${name}.${index}.valueRangeEnd`}
                    placeholder='Value'
                  />
                </div>
              </div>
            ) : (
              <InputNumber
                className='sm:col-span-6'
                control={control}
                defaultValue={defaultValues[index]?.value}
                errors={errors}
                label='Value'
                name={`${name}.${index}.value`}
                placeholder='Value'
              />
            )}
            <InputSelect
              className='sm:col-span-6'
              control={control}
              defaultValue={defaultValues[index]?.suffix}
              label='Suffix'
              name={`${name}.${index}.suffix`}
              options={VALUE_SUFFIX}
            />
          </div>
          <div className='mt-2 flex justify-end'>
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
      <div className='flex justify-start px-2 dark:bg-gray-800 bg-gray-200'>
        <FormFieldWrapper
          errorMessage={errorMessage}
          name={name}
        >
          <Button
            label='Add Attribute'
            leftIcon={<PlusIcon className='h-3.5 w-3.5' />}
            size='sm'
            onClick={addAttributes}
          />
        </FormFieldWrapper>
      </div>
    </div>
  )
}

TableComposerAttributeForm.propTypes = {
  control: PropTypes.object,
  register: PropTypes.func,
  name: PropTypes.string,
  errors: PropTypes.object,
  clearErrors: PropTypes.func,
  defaultValues: PropTypes.array,
  watch: PropTypes.func,
}
