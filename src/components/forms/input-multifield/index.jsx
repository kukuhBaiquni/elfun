import { MenuAlt2Icon } from '@heroicons/react/solid'
import { useState } from 'react'
import Button from 'components/common/button'
import { useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'
import Modal from 'components/common/modal'
import { FormFieldWrapper } from '../FormFieldWrapper'
import InputMultifieldBody from './input-multifield-body'

export default function InputMultifield(props) {
  const [isVisible, setIsVisible] = useState(false)
  const {
    components, name, label, defaultValues = [], form,
  } = props
  const { control } = form

  const { fields, append, remove } = useFieldArray({
    name,
    control,
    keyName: '$id',
  })

  const formSubmit = (data) => {
    console.log('DATA__', data)
  }

  return (
    <FormFieldWrapper label={label} name={name}>
      <Button
        label='Add Special Feature'
        leftIcon={<MenuAlt2Icon className='h-5 w-5 mr-2' />}
        onClick={() => setIsVisible(true)}
      />
      <Modal
        isVisible={isVisible}
        render={(
          <InputMultifieldBody
            closeModal={() => setIsVisible(false)}
            components={components}
            defaultValues={defaultValues}
            formSubmit={formSubmit}
            modalTitle='Add Special Feature'
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
  defaultValues: PropTypes.array,
}
