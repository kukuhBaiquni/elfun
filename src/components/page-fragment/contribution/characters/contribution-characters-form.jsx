import InputNumber from 'components/forms/input-text/input-number'
import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import InputRadio from 'components/forms/input-radio'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import { STATISTIC, DAMAGE_TYPE } from 'constant/options'

export default function ContributionCharacterForm(props) {
  const { query } = props
  const { register, control } = useForm()

  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-10'>
      <section className='max-w-xl'>
        <InputText
          label='Name'
          name='name'
          placeholder='Character Name..'
          register={register}
        />
        <InputText
          defaultValue={query.name}
          disabled
          label='Class'
          name='class'
          placeholder='Class..'
          register={register}
        />
        <InputText
          label='Quote'
          name='quote'
          placeholder='Quote..'
          register={register}
        />
        <InputText
          label='Innate'
          name='innate'
          placeholder='Innate..'
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
  query: PropTypes.object,
}
