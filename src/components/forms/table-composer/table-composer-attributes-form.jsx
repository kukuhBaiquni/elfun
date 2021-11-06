import { PlusIcon, TrashIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'
import _ from 'lodash/get'
import {
  VALUE_SUFFIX, INPUT_TYPE, SKILL_ATTRIBUTES, DAMAGE_TYPE,
  PERCENTAGE_OR_FLAT,
} from 'constant/options'
import Collapse from 'components/common/collapse'
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
        skipAttributes: false,
        skipAwakening: false,
        attributeName: '',
        flag: { label: 'none', value: '' },
        isDealingDamage: false,
        damageType: DAMAGE_TYPE[0],
        valueType: INPUT_TYPE[0],
        hasAwakeningEffect: false,
        awakeningModifier: PERCENTAGE_OR_FLAT[0],
        value: {
          normal: '',
          awaken: '',
        },
        valueRange: {
          normal: ['', ''],
          awaken: ['', ''],
        },
        suffix: VALUE_SUFFIX[0],
      })
    }
  }

  const errorMessage = _(errors, `${name}.message`) ?? ''
  console.log(errors)

  return (
    <div className='bg-sky-50 dark:bg-gray-900 cursor-default rounded'>
      {fields.map((field, index) => (
        <Collapse
          additionalToolbar={(
            <TrashIcon
              className='w-5 h-5 text-red-400'
              onClick={() => remove(index)}
            />
          )}
          key={field.$id}
          title={`Attribute ${index + 1} (${field.attributeName})`}
        >
          <div className='dark:bg-gray-900 bg-sky-50 p-2'>
            <div className='grid grid-cols-1 sm:grid-cols-12 gap-x-2 gap flex-grow'>
              <InputSwitch
                className='sm:col-span-6'
                clearErrors={() => clearErrors([`${name}.${index}.attributeName`])}
                control={control}
                defaultValue={defaultValues[index]?.skipAttributes}
                label='Skip Attributes'
                name={`${name}.${index}.skipAttributes`}
              />
              <InputSwitch
                className='sm:col-span-6'
                control={control}
                defaultValue={defaultValues[index]?.skipAwakening}
                label='Skip Awakening Check'
                name={`${name}.${index}.skipAwakening`}
              />
              <InputText
                className='sm:col-span-12'
                defaultValue={defaultValues[index]?.attributeName}
                disabled={watch(`${name}.${index}.skipAttributes`)}
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
                disabled={watch(`${name}.${index}.skipAttributes`)}
                label='Is Dealing Damage'
                name={`${name}.${index}.isDealingDamage`}
              />
              <InputRadio
                className='sm:col-span-6'
                control={control}
                defaultValue={defaultValues[index]?.damageType}
                disabled={!watch(`${name}.${index}.isDealingDamage`) || watch(`${name}.${index}.skipAttributes`)}
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
              <InputSwitch
                className='sm:col-span-6'
                control={control}
                defaultValue={defaultValues[index]?.hasAwakeningEffect}
                disabled={watch(`${name}.${index}.skipAwakening`)}
                label='Has Awakening Effect'
                name={`${name}.${index}.hasAwakeningEffect`}
              />
              <InputRadio
                className='sm:col-span-6'
                control={control}
                defaultValue={defaultValues[index]?.awakeningModifier}
                disabled={!watch(`${name}.${index}.hasAwakeningEffect`) || watch(`${name}.${index}.skipAwakening`)}
                errors={errors}
                label='Awakening Value Modifier'
                name={`${name}.${index}.awakeningModifier`}
                options={PERCENTAGE_OR_FLAT}
              />
              <TableComposerAttributeConditionalInput
                attributeIndex={index}
                control={control}
                defaultValues={defaultValues[index]}
                identifier='normal'
                inputName={`${name}.${index}`}
                inputType={watch(`${name}.${index}.valueType`)?.value}
              />
              {watch(`${name}.${index}.awakeningModifier`)?.value === 'FLAT' ? (
                <TableComposerAttributeConditionalInput
                  attributeIndex={index}
                  control={control}
                  defaultValues={defaultValues[index]}
                  disabled={!watch(`${name}.${index}.hasAwakeningEffect`) || watch(`${name}.${index}.skipAwakening`)}
                  identifier='awaken'
                  inputName={`${name}.${index}`}
                  inputType={watch(`${name}.${index}.valueType`)?.value}
                />
              ) : (
                <TableComposerAttributeConditionalInput
                  attributeIndex={index}
                  control={control}
                  defaultValues={defaultValues[index]}
                  disabled={!watch(`${name}.${index}.hasAwakeningEffect`) || watch(`${name}.${index}.skipAwakening`)}
                  forceFixedInput
                  identifier='awaken'
                  inputName={`${name}.${index}`}
                  inputType={watch(`${name}.${index}.valueType`)?.value}
                  percentage
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
          </div>
        </Collapse>
      ))}
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
  )
}

TableComposerAttributeForm.propTypes = {
  name: PropTypes.string,
  defaultValues: PropTypes.array,
  form: PropTypes.object,
}
