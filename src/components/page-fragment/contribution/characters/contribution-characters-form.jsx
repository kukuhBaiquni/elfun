import InputNumber from 'components/forms/input-text/input-number'
import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import InputRadio from 'components/forms/input-radio'
import PropTypes from 'prop-types'
import { STATISTIC, DAMAGE_TYPE } from 'constant/options'

export default function ContributionCharacterForm(props) {
  const { baseData, form } = props
  const { register, control, formState: { errors } } = form

  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-10'>
      <section className='max-w-xl'>
        <InputText
          defaultValue={baseData.realName}
          disabled
          errors={errors}
          label='Name'
          name='characterName'
          placeholder='Character Name..'
          register={register}
        />
        <InputText
          defaultValue={baseData.name}
          disabled
          errors={errors}
          label='Class'
          name='className'
          placeholder='Class..'
          register={register}
        />
        <InputText
          errors={errors}
          label='Quote'
          name='quote'
          placeholder='Quote..'
          register={register}
        />
        <InputText
          errors={errors}
          label='Innate'
          name='innate'
          placeholder='Innate..'
          register={register}
        />
        <Textarea
          label='Special Ability'
          name='specialAbility'
          placeholder='Special Ability..'
          register={register}
        />
        <Textarea
          label='Background'
          name='background'
          placeholder='Background..'
          register={register}
        />
      </section>
      <section>
        <InputText
          errors={errors}
          label='Weapon'
          name='weapon'
          placeholder='Weapon..'
          register={register}
        />
        <InputNumber
          control={control}
          label='Age'
          name='age'
          placeholder='Age..'
        />
        <InputText
          errors={errors}
          label='Race'
          name='race'
          placeholder='Race..'
          register={register}
        />
        <InputRadio
          control={control}
          label='Speed'
          name='statistic.speed'
          options={STATISTIC.speed}
        />
        <InputRadio
          control={control}
          label='Attack Range'
          name='statistic.attackRange'
          options={STATISTIC.attackRange}
        />
        <InputRadio
          control={control}
          label='Difficulty'
          name='statistic.difficulty'
          options={STATISTIC.difficulty}
        />
        <InputRadio
          control={control}
          label='Main Damage'
          name='damageType'
          options={DAMAGE_TYPE}
        />
      </section>
    </div>
  )
}

ContributionCharacterForm.propTypes = {
  baseData: PropTypes.object,
  form: PropTypes.object,
}
