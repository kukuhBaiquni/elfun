import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import PropTypes from 'prop-types'

export default function ContributionCharacterFormLeft(props) {
  const { baseData, form } = props
  const { register, formState: { errors } } = form

  return (
    <section className='max-w-xl'>
      <InputText
        defaultValue={baseData.realName}
        disabled
        errors={errors}
        label='Name'
        name='name'
        placeholder='Character Name..'
        register={register}
      />
      <InputText
        defaultValue={baseData.name}
        disabled
        errors={errors}
        label='Class'
        name='class'
        placeholder='Class..'
        register={register}
      />
      <InputText
        errors={errors}
        label='Quote'
        name='quote'
        placeholder='Quote e.g: "Time for true display of skills!"'
        register={register}
      />
      <InputText
        errors={errors}
        label='Innate'
        name='innate'
        placeholder='Innate e.g: Specialized in close combat'
        register={register}
      />
      <Textarea
        errors={errors}
        label='Description'
        name='description'
        placeholder='Description e.g: innate description'
        register={register}
        rows={2}
      />
      {baseData?.classId === 0 && (
        <Textarea
          label='Special Ability'
          name='specialAbility'
          placeholder='Special Ability e.g: Imbued by nature energy, this character is powerful to overpower enemy..'
          register={register}
        />
      )}
      <InputText
        errors={errors}
        label='Weapon'
        name='weapon'
        placeholder='Weapon e.g: Sword, Bow, Kick'
        register={register}
      />
      <Textarea
        errors={errors}
        label='Background'
        name='background'
        placeholder='Background e.g: Background story of this character'
        register={register}
        rows={5}
      />
    </section>
  )
}

ContributionCharacterFormLeft.propTypes = {
  baseData: PropTypes.object,
  form: PropTypes.object,
}
