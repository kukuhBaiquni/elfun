import { XIcon } from '@heroicons/react/solid'
import Button from 'components/common/button'
import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

export default function InputMultifieldBody(props) {
  const {
    closeModal, formSubmit, components,
    defaultValues = {}, modalTitle,
  } = props
  const { formState: { errors }, register, handleSubmit } = useForm({
    defaultValues,
  })

  return (
    <Fragment>
      <div className='bg-sky-500 dark:bg-gray-700 text-white py-2 px-3 text-lg flex justify-between items-center'>
        <h5>{modalTitle}</h5>
        <XIcon className='w-6 h-6 cursor-pointer' onClick={closeModal} />
      </div>
      <div className='py-2 pl-3 pr-2 mt-3'>
        <div className='max-h-[700px] min-h-[300px] overflow-y-auto custom-scroll pr-2'>
          {components.map((Component) => (
            <Component.Node
              defaultValue={defaultValues[Component.name]}
              errors={errors}
              key={Component.name}
              label={Component.label}
              name={Component.name}
              placeholder={Component.placeholder}
              register={register}
            />
          ))}
        </div>
        <div className='flex justify-end mt-2 mb-1 gap-2'>
          <Button
            label='Cancel'
            variant='danger-solid'
            onClick={closeModal}
          />
          <Button
            label='Done'
            onClick={handleSubmit(formSubmit)}
          />
        </div>
      </div>
    </Fragment>
  )
}

InputMultifieldBody.propTypes = {
  closeModal: PropTypes.func,
  formSubmit: PropTypes.func,
  components: PropTypes.array,
  defaultValues: PropTypes.object,
  modalTitle: PropTypes.string,
}
