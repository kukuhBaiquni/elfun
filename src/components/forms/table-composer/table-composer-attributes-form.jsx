import { PlusIcon, TrashIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'
import _ from 'lodash/get'
import {
  VALUE_SUFFIX, INPUT_TYPE, SKILL_ATTRIBUTES, YES_NO, DAMAGE_TYPE,
} from 'constant/options'
import InputText from '../input-text/input-text'
import InputSelect from '../input-select/input-select'
import { FormFieldWrapper } from '../FormFieldWrapper'
import InputSwitch from '../input-switch'
import InputRadio from '../input-radio'
import TableComposerAttributeConditionalInput from './table-composer-attributes-conditional-input'

export default function TableComposerAttributeForm(props) {
  const { name, defaultValues = [], form } = props
  const {
    control, register, watch, clearErrors, formState: { errors },
  } = form
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
        value: {
          normal: '',
          awaken: '',
        },
        flag: { label: 'none', value: '' },
        damageType: DAMAGE_TYPE[0],
        valueRange: {
          normal: ['', ''],
          awaken: ['', ''],
        },
        hasAwakeningEffect: YES_NO[0],
        valueType: INPUT_TYPE[0],
        suffix: VALUE_SUFFIX[0],
      })
    }
  }

  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <div className='bg-sky-50 dark:bg-gray-900 cursor-default rounded'>
      {fields.map((field, index) => (
        <div className='dark:bg-gray-900 bg-sky-50 p-2 border-b dark:border-gray-600 border-gray-300' key={field.$id}>
          <div className='grid grid-cols-1 sm:grid-cols-12 gap-x-2 gap flex-grow'>
            <InputText
              className='sm:col-span-12'
              defaultValue={defaultValues[index]?.attributeName}
              errors={errors}
              label='Attribute Name'
              name={`${name}.${index}.attributeName`}
              placeholder='Attribute Name'
              register={register}
            />
            <InputSelect
              className='sm:col-span-12'
              control={control}
              defaultValue={defaultValues[index]?.flag}
              label='Flag'
              name={`${name}.${index}.flag`}
              options={SKILL_ATTRIBUTES}
            />
            <InputSwitch
              className='sm:col-span-12'
              control={control}
              defaultValue={defaultValues[index]?.isDealingDamage}
              label='Is Dealing Damage'
              name={`${name}.${index}.isDealingDamage`}
            />
            <InputRadio
              className='sm:col-span-12'
              control={control}
              defaultValue={defaultValues[index]?.damageType}
              disabled={!watch(`${name}.${index}.isDealingDamage`)}
              label='Damage Type'
              name={`${name}.${index}.damageType`}
              options={DAMAGE_TYPE}
            />
            <InputRadio
              className='sm:col-span-6'
              control={control}
              defaultValue={defaultValues[index]?.valueType}
              errors={errors}
              label='Value Type'
              name={`${name}.${index}.valueType`}
              options={INPUT_TYPE}
            />
            <InputRadio
              className='sm:col-span-6'
              control={control}
              defaultValue={defaultValues[index]?.hasAwakeningEffect}
              errors={errors}
              label='Awakening Effect'
              name={`${name}.${index}.hasAwakeningEffect`}
              options={YES_NO}
            />
            <TableComposerAttributeConditionalInput
              attributeIndex={index}
              control={control}
              defaultValues={defaultValues[index]}
              identifier='normal'
              inputName={`${name}.${index}`}
              inputType={watch(`${name}.${index}.valueType`)?.value}
            />
            <TableComposerAttributeConditionalInput
              attributeIndex={index}
              control={control}
              defaultValues={defaultValues[index]}
              disabled={!watch(`${name}.${index}.hasAwakeningEffect`)?.value}
              identifier='awaken'
              inputName={`${name}.${index}`}
              inputType={watch(`${name}.${index}.valueType`)?.value}
            />
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
  name: PropTypes.string,
  defaultValues: PropTypes.array,
  form: PropTypes.object,
}
