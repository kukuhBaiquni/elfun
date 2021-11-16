import InputNumber from 'components/forms/input-text/input-number'
import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import InputRadio from 'components/forms/input-radio'
import PropTypes from 'prop-types'
import { STATISTIC, DAMAGE_TYPE } from 'constant/options'
import InputMultifield from 'components/forms/input-multifield'
import Link from 'next/link'

export default function ContributionCharacterFormRight(props) {
  const { form } = props
  const { register, control, formState: { errors } } = form

  return (
    <section>
      <InputNumber
        control={control}
        label='Age'
        name='age'
        placeholder='Age e.g: 20 or 0 for "Unknown"'
      />
      <InputText
        errors={errors}
        label='Race'
        name='race'
        placeholder='Race e.g: Human, Elf, Nasod'
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
              name: 'description',
              label: 'Description',
              placeholder: 'Tips and Details e.g: Press X to fire arrow',
              rows: 2,
            },
          },
        ]}
        form={form}
        itemRender={(field) => <p className='text-sm'>{field.description}</p>}
        label='Tips And Details'
        name='tipsAndDetails'
      />
      <InputMultifield
        buttonLabel='Add Trivia'
        components={[
          {
            Node: Textarea,
            props: {
              name: 'description',
              label: 'Description',
              placeholder: 'Trivia e.g: Aisha full name is "Aisha Landar"',
              rows: 2,
            },
          },
        ]}
        form={form}
        itemRender={(field) => <p className='text-sm'>{field.description}</p>}
        label='Trivia'
        name='trivia'
      />
      <InputMultifield
        buttonLabel='Add Reference Link'
        components={[
          {
            Node: InputText,
            props: {
              name: 'variable',
              label: 'Variable',
              placeholder: 'Variable e.g: Elsword, Ruben, Altera Core',
            },
          },
          {
            Node: InputText,
            props: {
              name: 'link',
              label: 'Link',
              placeholder: 'Link e.g: /character/elsword',
            },
          },
        ]}
        disableSwitch
        form={form}
        itemRender={(field) => (
          <div className='flex items-center gap-2'>
            <p>
              {`${field.variable}: `}
            </p>
            <Link href={field.link}>
              <a className='text-sky-500 font-titillium mb-1 hover:text-opacity-75 hover:underline'>{field.link}</a>
            </Link>
          </div>
        )}
        label='Reference'
        name='reference'
      />
    </section>
  )
}

ContributionCharacterFormRight.propTypes = {
  form: PropTypes.object,
}
