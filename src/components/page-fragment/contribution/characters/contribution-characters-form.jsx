import InputNumber from 'components/forms/input-text/input-number'
import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import InputRadio from 'components/forms/input-radio'
import PropTypes from 'prop-types'
import { STATISTIC, DAMAGE_TYPE } from 'constant/options'
import InputMultifield from 'components/forms/input-multifield'

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
        {baseData?.classId === 0 && (
          <Textarea
            label='Special Ability'
            name='specialAbility'
            placeholder='Special Ability..'
            register={register}
          />
        )}
        <InputText
          errors={errors}
          label='Weapon'
          name='weapon'
          placeholder='Weapon..'
          register={register}
        />
        <Textarea
          label='Background'
          name='background'
          placeholder='Background..'
          register={register}
          rows={5}
        />
      </section>
      <section>
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
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-2'>
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
        </div>
        <InputMultifield
          buttonLabel='Add Tips and Details'
          components={[
            {
              Node: Textarea,
              props: {
                name: 'description', label: 'Description', placeholder: 'Tips and Details..', rows: 2,
              },
            },
          ]}
          form={form}
          label='Tips And Details'
          name='tipsAndDetails'
        />
        <InputMultifield
          buttonLabel='Add Trivia'
          components={[
            {
              Node: Textarea,
              props: {
                name: 'description', label: 'Description', placeholder: 'Trivia..', rows: 2,
              },
            },
          ]}
          form={form}
          label='Trivia'
          name='trivia'
        />
      </section>
    </div>
  )
}

ContributionCharacterForm.propTypes = {
  baseData: PropTypes.object,
  form: PropTypes.object,
}
