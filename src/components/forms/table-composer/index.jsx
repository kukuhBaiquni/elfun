import { useState } from 'react'
import Button from 'components/common/button'
import { TemplateIcon } from '@heroicons/react/solid'
import PropTypes from 'prop-types'

import Modal from 'components/common/modal'
import { FormFieldWrapper } from '../FormFieldWrapper'
import TableComposerBody from './table-composer-body'

export default function TableComposer(props) {
  const {
    label, name, setValue,
  } = props
  const [isVisible, setIsVisible] = useState(false)

  return (
    <FormFieldWrapper label={label} name={name}>
      <Button
        label='Create Table'
        leftIcon={<TemplateIcon className='h-5 w-5 mr-2' />}
        onClick={() => setIsVisible(true)}
      />
      <Modal
        closeModal={() => setIsVisible(false)}
        isVisible={isVisible}
        render={(
          <TableComposerBody
            closeModal={() => setIsVisible(false)}
            setValue={setValue}
          />
        )}
        size='max-w-xl'
      />
    </FormFieldWrapper>
  )
}

TableComposer.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  setValue: PropTypes.func,
}
