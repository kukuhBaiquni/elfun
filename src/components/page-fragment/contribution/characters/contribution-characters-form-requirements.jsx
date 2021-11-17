import PropTypes from 'prop-types'
import Textarea from 'components/forms/input-text/textarea'

export default function ContributionCharacterFormRequirements(props) {
  const { form, defaultValues = {}, name } = props
  const { formState: { errors }, register } = form

  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 gap-x-10 p-2'>
      <section>
        <Textarea
          errors={errors}
          label='Quest Acceptance Prerequisites'
          name={`${name}.prerequisites`}
          placeholder='Achieve Level 15'
          register={register}
          rows={3}
        />
        <Textarea
          errors={errors}
          label='Objectives'
          name={`${name}.objectives`}
          placeholder='Clear a dungeon 0/1'
          register={register}
          rows={4}
        />
      </section>
      <section>
        <Textarea
          errors={errors}
          label='Description'
          name={`${name}.description`}
          placeholder='Elesis felt that she was slowly losing control over the power of fire within her..'
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
