import { PlusIcon, XIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { Fragment } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import PropTypes from 'prop-types'
import { ReactSortable } from 'react-sortablejs'
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
      <div className='bg-sky-500 dark:bg-gray-800 text-white py-2 px-3 text-lg flex justify-between items-center'>
        <h5>Create Table</h5>
        <XIcon className='w-6 h-6 cursor-pointer' onClick={() => setIsVisible(false)} />
      </div>
      <div className='py-2 px-3 mt-3'>
        <InputText
          label='Table Name'
          name='tableName'
          placeholder='Table Name..'
        />
        <Button
          label='Add Attribute'
          leftIcon={<PlusIcon className='h-3.5 w-3.5 mr-1' />}
          size='sm'
          onClick={() => append({
            name: `JNCX ${Math.random()}`,
          })}
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
          {fields.map((item, index) => (
            <div className='bg-pink-400 p-2 cursor-grab handle' key={item.$id}>{item.name}</div>
          ))}
        </ReactSortable>
      </div>
    </Fragment>
  )
}

TableComposerBody.propTypes = {
  setIsVisible: PropTypes.func,
}
