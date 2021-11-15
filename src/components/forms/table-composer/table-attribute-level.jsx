import { ArrowUpIcon, TrashIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { Fragment, useEffect, useCallback } from 'react'
import { useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'
import TableAttributeValueFields from './table-attribute-value-fields'

export default function TableAttributeLevel(props) {
  const {
    name, form, defaultValues = [], inputType, disabled,
    awakeningModifier, modifyLevelCount, attributeIndex,
  } = props
  const { control, watch } = form

  const { fields, append, remove } = useFieldArray({
    name,
    control,
    keyName: '$id',
  })

  useEffect(() => {
    if (fields.length === 0) {
      addData()
    }
  }, [addData, fields.length])

  const addData = useCallback(() => {
    modifyLevelCount(fields.length + 1, attributeIndex)
    append({
      fixed: {
        normal: '',
        awaken: '',
      },
      range: {
        normal: ['', ''],
        awaken: ['', ''],
      },
    })
  }, [append])

  return (
    <Fragment>
      {fields.map((field, index) => (
        <div className='sm:col-span-12 my-2' key={field.$id}>
          <div className='py-1 px-3 bg-gray-700 text-white mb-2 flex justify-between items-center'>
            <p>Level {index + 1}</p>
            <TrashIcon
              className='w-5 h-5 text-red-500 action-icon'
              onClick={() => {
                modifyLevelCount(fields.length - 1, attributeIndex)
                remove(index)
              }}
            />
          </div>
          <div className='sm:col-span-12 grid sm:grid-cols-12 gap-x-2 grid-cols-1 p-1 px-2 bg-gray-800'>
            <TableAttributeValueFields
              control={control}
              defaultValues={defaultValues[index]}
              identifier='normal'
              inputType={inputType}
              levelIndex={index}
              name={`${name}.${index}`}
            />
            {awakeningModifier === 'FLAT' ? (
              <TableAttributeValueFields
                control={control}
                defaultValues={defaultValues[index]}
                disabled={disabled}
                identifier='awaken'
                inputType={inputType}
                levelIndex={index}
                name={`${name}.${index}`}
              />
            ) : (
              <TableAttributeValueFields
                control={control}
                defaultValues={defaultValues[index]}
                disabled={disabled}
                forceFixedInput
                identifier='awaken'
                inputType={inputType}
                levelIndex={index}
                name={`${name}.${index}`}
                percentage
              />
            )}
          </div>
        </div>
      ))}
      <div className='sm:col-span-12 flex justify-end'>
        <Button
          label='Add Skill Level'
          leftIcon={<ArrowUpIcon className='w-3.5 h-3.5 mr-2' />}
          size='sm'
          variant='submit-solid'
          onClick={addData}
        />
      </div>
    </Fragment>
  )
}

TableAttributeLevel.propTypes = {
  name: PropTypes.string,
  form: PropTypes.object,
  defaultValues: PropTypes.array,
  inputType: PropTypes.string,
  disabled: PropTypes.bool,
  awakeningModifier: PropTypes.string,
  modifyLevelCount: PropTypes.func,
  attributeIndex: PropTypes.number,
}
