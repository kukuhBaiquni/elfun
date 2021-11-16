import {
  MenuAlt2Icon, PencilIcon, SwitchVerticalIcon, TrashIcon,
} from '@heroicons/react/solid'
import { useState } from 'react'
import Button from 'components/common/button'
import { useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'
import Modal from 'components/common/modal'
import _ from 'lodash/startCase'
import { ReactSortable } from 'react-sortablejs'
import clsx from 'clsx'
import { FormFieldWrapper } from '../FormFieldWrapper'
import InputMultifieldBody from './input-multifield-body'

export default function InputMultifield(props) {
  const [isVisible, setIsVisible] = useState(false)
  const [focusedData, setFocusedData] = useState({})
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const {
    components, name, label, form, buttonLabel,
    itemRender, disableSwitch,
  } = props
  const { control } = form

  const {
    fields, append, remove, move, update,
  } = useFieldArray({
    name,
    control,
    keyName: '$id',
  })

  const formSubmit = (data) => {
    if (focusedIndex === -1) {
      append(data)
    } else {
      update(focusedIndex, data)
    }
    setIsVisible(false)
  }

  return (
    <FormFieldWrapper label={label} name={name}>
      <div className='mb-2'>
        <div className='max-h-[200px] overflow-y-auto custom-scroll pr-2'>
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
              <div
                className={clsx(
                  'p-2 dark:bg-gray-700 bg-warmGray-300 rounded flex justify-between mb-2 border-input',
                  !disableSwitch && 'cursor-grab handle',
                )}
                key={field.$id}
              >
                <div>
                  {!disableSwitch && <SwitchVerticalIcon className='w-5 h-5' />}
                  {itemRender(field)}
                </div>
                <div className='flex items-start'>
                  <PencilIcon
                    className='w-5 h-5 text-sky-500 action-icon'
                    onClick={() => {
                      setFocusedData(field)
                      setFocusedIndex(index)
                      setIsVisible(true)
                    }}
                  />
                  <TrashIcon
                    className='w-5 h-5 text-red-500 action-icon'
                    onClick={() => remove(index)}
                  />
                </div>
              </div>
            ))}
          </ReactSortable>
        </div>
      </div>
      <Button
        label={buttonLabel}
        leftIcon={<MenuAlt2Icon className='h-5 w-5 mr-2' />}
        onClick={() => {
          setIsVisible(true)
          setFocusedData({})
          setFocusedIndex(-1)
        }}
      />
      <Modal
        isVisible={isVisible}
        render={(
          <InputMultifieldBody
            closeModal={() => setIsVisible(false)}
            components={components}
            defaultValues={focusedData}
            formSubmit={formSubmit}
            modalTitle={label}
          />
        )}
        size='max-w-xl'
      />
    </FormFieldWrapper>
  )
}

InputMultifield.propTypes = {
  components: PropTypes.array,
  name: PropTypes.string,
  label: PropTypes.string,
  form: PropTypes.object,
  buttonLabel: PropTypes.string,
  itemRender: PropTypes.func,
  disableSwitch: PropTypes.bool,
}
