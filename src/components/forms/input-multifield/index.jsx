import { MenuAlt2Icon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { useFieldArray } from 'react-hook-form'
import _ from 'lodash/get'
import PropTypes from 'prop-types'
import { FormFieldWrapper } from '../FormFieldWrapper'

export default function InputMultifield(props) {
  const {
    components, name, control, errors, label,
  } = props
  const { fields, append, remove } = useFieldArray({
    name,
    control,
    keyName: '$id',
  })

  const errorMessage = _(errors, `${name}.message`) ?? ''

  return (
    <FormFieldWrapper errorMessage={errorMessage} label={label} name={name}>
      <Button
        label='Add Special Feature'
        leftIcon={<MenuAlt2Icon className='h-5 w-5 mr-2' />}
        onClick={() => {}}
      />
    </FormFieldWrapper>
  )
}

InputMultifield.propTypes = {
  components: PropTypes.array,
  name: PropTypes.string,
  control: PropTypes.object,
  errors: PropTypes.object,
  label: PropTypes.string,
}
