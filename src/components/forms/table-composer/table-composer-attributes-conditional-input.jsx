import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import InputNumber from '../input-text/input-number'

export default function TableComposerAttributeConditionalInput(props) {
  const {
    control, name, defaultValues, attributeIndex, inputType,
  } = props
  if (inputType === 'RANGE') {
    return (
      <div className='sm:col-span-6'>
        <div className='grid grid-cols-11 gap-2'>
          <InputNumber
            className='col-span-5'
            control={control}
            defaultValue={defaultValues?.valueRange[0]}
            label='From (Normal)'
            name={`${name}.valueRange.0`}
            placeholder='Value'
          />
          <div className='w-full h-10 mt-auto mb-3 flex items-center justify-center'>
            <ArrowNarrowRightIcon className='w-4 h-4' />
          </div>
          <InputNumber
            className='col-span-5'
            control={control}
            defaultValue={defaultValues?.valueRange[1]}
            label='To (Normal)'
            name={`${name}.valueRange.1`}
            placeholder='Value'
          />
        </div>
      </div>
    )
  }
  return (
    <InputNumber
      className='sm:col-span-6'
      control={control}
      defaultValue={defaultValues?.value}
      label='Value (Normal)'
      name={`${name}.${attributeIndex}.value`}
      placeholder='Value'
    />
  )
}

TableComposerAttributeConditionalInput.propTypes = {
  control: PropTypes.object,
  name: PropTypes.string,
  defaultValues: PropTypes.array,
  attributeIndex: PropTypes.number,
  inputType: PropTypes.string,
}
