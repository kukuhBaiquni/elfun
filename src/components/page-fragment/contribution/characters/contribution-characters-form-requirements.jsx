import InputText from 'components/forms/input-text/input-text'
import { useFieldArray } from 'react-hook-form'
import PropTypes from 'prop-types'
import Button from 'components/common/button'
import { PlusIcon } from '@heroicons/react/solid'

export default function ContributionCharacterFormRequirements(props) {
  const { form, defaultValues = {}, name } = props
  const { formState: { errors }, register, control } = form
  const { fields, append, remove } = useFieldArray({
    control,
    name: `${name}.prerequisites`,
  })
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-10 p-2'>
      <section>
        <h6>Quest Acceptance Prerequisites</h6>
        {fields.map((field, index) => (
          <InputText
            errors={errors}
            key={field.$id}
            name={`${name}.prerequisites.${index}`}
            placeholder='Weapon e.g: Sword, Bow, Kick'
            register={register}
          />
        ))}
        <Button
          label='Add Prerequisites'
          leftIcon={<PlusIcon className='w-4 h-4 mr-1' />}
          size='sm'
          onClick={() => append({
            description: '',
          })}
        />
      </section>
      <section>
        <InputText
          errors={errors}
          label='Quest Acceptance Prerequisites'
          name='prerequisites'
          placeholder='Weapon e.g: Sword, Bow, Kick'
          register={register}
        />
      </section>
    </div>
  )
}

ContributionCharacterFormRequirements.propTypes = {
  form: PropTypes.object,
  defaultValues: PropTypes.object,
  name: PropTypes.string,
}
