import { ArrowNarrowRightIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'
import _ from 'lodash/capitalize'
import InputNumber from '../input-text/input-number'

export default function TableComposerAttributeConditionalInput(props) {
  const {
    control, inputName, defaultValues, inputType,
    disabled, identifier,
  } = props

  if (inputType === 'RANGE') {
    return (
      <div className='sm:col-span-6'>
        <div className='grid grid-cols-11 gap-2'>
          <InputNumber
            className='col-span-5'
            control={control}
            defaultValue={defaultValues?.valueRange?.[identifier][0]}
            disabled={disabled}
            label={`From (${_(identifier)})`}
            name={`${inputName}.valueRange.${identifier}.0`}
            placeholder='Value'
          />
          <div className='w-full h-10 mt-auto mb-3 flex items-center justify-center'>
            <ArrowNarrowRightIcon className='w-4 h-4' />
          </div>
          <InputNumber
            className='col-span-5'
            control={control}
            defaultValue={defaultValues?.valueRange?.[identifier][1]}
            disabled={disabled}
            label={`To (${_(identifier)})`}
            name={`${inputName}.valueRange.${identifier}.1`}
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
      defaultValue={defaultValues?.value?.identifier}
      disabled={disabled}
      label={`Value (${_(identifier)})`}
      name={`${inputName}.value.${identifier}`}
      placeholder='Value'
    />
  )
}

TableComposerAttributeConditionalInput.propTypes = {
  control: PropTypes.object,
  inputName: PropTypes.string,
  defaultValues: PropTypes.object,
  inputType: PropTypes.string,
  disabled: PropTypes.bool,
  identifier: PropTypes.string,
}
