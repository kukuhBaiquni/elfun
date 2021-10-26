import React from 'react'
import Button from 'components/common/button'
import { PlusIcon } from '@heroicons/react/solid'
import { TrashIcon } from '@heroicons/react/outline'
import PropTypes from 'prop-types'
import InputText from '../input-text/input-text'

export default function TableComposerTemplate(props) {
  const {
    name, index, tableAttributes, tableName, setIsVisible, remove,
  } = props
  // console.log('TABLE-TEMPLATE-PROPS', props)
  return (
    <section className='dark:bg-gray-900 bg-gray-200 px-3 pb-3 rounded mb-3'>
      <InputText
        defaultValue={tableName}
        label='Table Name'
        name={`${name}.tableName`}
        placeholder='Table Name..'
      />
      <div className='flex gap-2'>
        <Button
          label='Add Attribute'
          leftIcon={<PlusIcon className='h-3.5 w-3.5 mr-1' />}
          size='sm'
          onClick={setIsVisible}
        />
        <Button
          label='Delete Table'
          leftIcon={<TrashIcon className='h-3.5 w-3.5 mr-1' />}
          size='sm'
          onClick={remove}
        />
      </div>
    </section>
  )
}

TableComposerTemplate.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number,
  tableAttributes: PropTypes.array,
  tableName: PropTypes.string,
  setIsVisible: PropTypes.func,
}
