import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import InputSelect from 'components/forms/input-select/input-select'
import InputImage from 'components/forms/input-image'
import { SKILL_CATEGORIES, YES_NO } from 'constant/options'
import TableComposer from 'components/forms/table-composer'
import PropTypes from 'prop-types'
import Button from 'components/common/button'
import InputMultifield from 'components/forms/input-multifield'
import { Fragment } from 'react'
import InputSwitch from 'components/forms/input-switch'

export default function ContributionSkillsForm(props) {
  const { form, onSubmit } = props
  const {
    register, watch, control, formState: { errors },
    handleSubmit,
  } = form

  console.log('📝', watch())
  console.log('🚧', errors)

  return (
    <Fragment>
      <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-3'>
        <section className='max-w-xl'>
          <InputText
            errors={errors}
            label='Skill Name'
            name='skillName'
            placeholder='Skill Name..'
            register={register}
          />
          <Textarea
            errors={errors}
            label='Description'
            name='skillDescription'
            placeholder='Description..'
            register={register}
          />
          <InputSelect
            control={control}
            errors={errors}
            label='Skill Category'
            name='skillCategory'
            options={SKILL_CATEGORIES}
          />
          <InputSwitch
            control={control}
            label='Affect Another Skill'
            name='affectAnotherSkill'
          />
          <InputImage label='Skill Icon' name='skillIcon' />
        </section>
        <section>
          <InputSelect
            control={control}
            errors={errors}
            label='Required Level'
            name='requiredLevel'
            options={YES_NO}
          />
          <InputMultifield
            buttonLabel='Add Special Feature'
            components={[
              {
                Node: InputText, name: 'name', label: 'Name', placeholder: 'Feature Name..',
              },
              {
                Node: Textarea, name: 'description', label: 'Description', placeholder: 'Description..',
              },
            ]}
            form={form}
            label='Special Features'
            name='specialFeatures'
          />
        </section>
      </div>
      <TableComposer
        control={control}
        errors={errors}
        label='Table Information List'
        name='table'
      />
      <Button
        label='Submit'
        onClick={handleSubmit(onSubmit)}
      />
    </Fragment>
  )
}

ContributionSkillsForm.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
}
