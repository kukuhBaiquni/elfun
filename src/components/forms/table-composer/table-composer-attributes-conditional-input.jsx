import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import InputNumber from '../input-text/input-number'

export default function TableComposerAttributeConditionalInput(props) {
  const {
    form, name, defaultValues, attributeIndex,
  } = props
  const { control, watch, formState: { errors } } = form
  if (watch(`${name}.${attributeIndex}.type`)?.value === 'RANGE') {
    return (
      <div className='sm:col-span-6'>
        <div className='grid grid-cols-11 gap-2'>
          <InputNumber
            className='col-span-5'
            control={control}
            defaultValue={defaultValues[attributeIndex]?.valueRange[0]}
            errors={errors}
            label='From (Normal)'
            name={`${name}.${attributeIndex}.valueRange.0`}
            placeholder='Value'
          />
          <div className='w-full h-10 mt-auto mb-3 flex items-center justify-center'>
            <ArrowNarrowRightIcon className='w-4 h-4' />
          </div>
          <InputNumber
            className='col-span-5'
            control={control}
            defaultValue={defaultValues[attributeIndex]?.valueRange[1]}
            errors={errors}
            label='To (Normal)'
            name={`${name}.${attributeIndex}.valueRange.1`}
            placeholder='Value'
          />
        </div>
      </div>
    )
  }
  return (
    <inputNumber
      className='sm:col-span-6'
      control={control}
      defaultValue={defaultValues[attributeIndex]?.value}
      errors={errors}
      label='Value (Normal)'
      name={`${name}.${attributeIndex}.value`}
      placeholder='Value'
    />
  )
}

TableComposerAttributeConditionalInput.propTypes = {
  form: PropTypes.object,
  name: PropTypes.string,
  defaultValues: PropTypes.object,
  attributeIndex: PropTypes.number,
}
