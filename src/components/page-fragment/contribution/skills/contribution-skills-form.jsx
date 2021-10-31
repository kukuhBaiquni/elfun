import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import Select from 'components/forms/input-select/input-select'
import InputImage from 'components/forms/input-image'
import SKILL_CATEGORIES from 'constant/skill-categories'
import TableComposer from 'components/forms/table-composer'
import PropTypes from 'prop-types'
import Button from 'components/common/button'

export default function ContributionSkillsForm(props) {
  const { form, onSubmit } = props
  const {
    register, watch, control, formState: { errors },
    handleSubmit,
  } = form

  console.log('📝', watch())
  console.log('🚧', errors)

  return (
    <section className='max-w-xl'>
      <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Add New Skill: Optimus</h2>
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
      <Select
        control={control}
        defaultValue=''
        errors={errors}
        label='Skill Category'
        name='skillCategory'
        options={SKILL_CATEGORIES}
      />
      <InputImage label='Skill Icon' name='skillIcon' />
      <TableComposer
        control={control}
        label='Table Information'
        name='table'
      />
      <Button
        label='Submit'
        onClick={handleSubmit(onSubmit)}
      />
    </section>
  )
}

ContributionSkillsForm.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
}
