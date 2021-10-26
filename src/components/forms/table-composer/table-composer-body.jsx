import { PlusIcon, XIcon, SwitchVerticalIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { Fragment } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PropTypes from 'prop-types'
import { ReactSortable } from 'react-sortablejs'
import Transition from 'components/common/transition'
import InputText from '../input-text/input-text'

export default function TableComposerBody(props) {
  const { setIsVisible } = props
  const { control } = useFormContext()
  const {
    fields, append, remove, move,
  } = useFieldArray({
    name: 'skillAttributes',
    control,
    keyName: '$id',
  })

  return (
    <Fragment>
      <div className='bg-sky-500 dark:bg-gray-700 text-white py-2 px-3 text-lg flex justify-between items-center'>
        <h5>Create Table</h5>
        <XIcon className='w-6 h-6 cursor-pointer' onClick={() => setIsVisible(false)} />
      </div>
      <div className='py-2 pl-3 pr-2 mt-3'>
        <div className='h-[700px] overflow-y-auto custom-scroll pr-2'>
          <InputText
            label='Table Name'
            name='tableName'
            placeholder='Table Name..'
          />
          <ReactSortable
            animation={150}
            filter='.filtered'
            ghostClass='opacity-60'
            handle='.handle'
            list={fields}
            setList={() => { }}
            onEnd={(evt) => move(evt.oldIndex, evt.newIndex)}
          >
            {fields.map((field, index) => (
              <Transition key={field.$id}>
                <div className='bg-gray-300 dark:bg-gray-900 rounded mb-2 p-2'>
                  <SwitchVerticalIcon className='h-5 w-5 handle cursor-grab' />
                  <p>{field.name}</p>
                  <InputText
                    defaultValue={field.name}
                    label='Attribute Name'
                    name={`skillAttributes.${index}.name`}
                    placeholder='Attribute Name..'
                  />
                </div>
              </Transition>
            ))}
          </ReactSortable>
          <Button
            label='Add Attribute'
            leftIcon={<PlusIcon className='h-3.5 w-3.5 mr-1' />}
            size='sm'
            onClick={() => append({
              name: `JNCX ${Math.random()}`,
            })}
          />
        </div>
      </div>
    </Fragment>
  )
}

TableComposerBody.propTypes = {
  setIsVisible: PropTypes.func,
}
