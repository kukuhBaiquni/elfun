import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import InputSelect from 'components/forms/input-select/input-select'
import InputImage from 'components/forms/input-image'
import InputRadio from 'components/forms/input-radio'
import { SKILL_CATEGORIES, SKILL_LEVEL } from 'constant/options'
import TableComposer from 'components/forms/table-composer'
import PropTypes from 'prop-types'
import Button from 'components/common/button'
import InputMultifield from 'components/forms/input-multifield'
import { Fragment } from 'react'
import InputSwitch from 'components/forms/input-switch'
import _ from 'lodash/isEmpty'
import { useRouter } from 'next/router'

export default function ContributionSkillsForm(props) {
  const { form, onSubmit } = props
  const { query } = useRouter()
  const {
    register, watch, control, formState: { errors },
    handleSubmit, setValue,
  } = form

  console.log('📝', watch())
  console.log('❌', errors)
  return (
    <Fragment>
      <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-10'>
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
          <div className='grid grid-cols-2 gap-5'>
            <InputSwitch
              control={control}
              label='Affect Another Skill'
              name='affectAnotherSkill'
            />
            <InputSwitch
              control={control}
              label='Locked'
              name='locked'
            />
          </div>
          <InputImage label='Skill Icon' name='skillIcon' />
        </section>
        <section>
          {!_(query) && (
            <InputRadio
              control={control}
              errors={errors}
              label='Required Level'
              name='requiredLevel'
              options={SKILL_LEVEL[query.classId]}
            />
          )}
          <InputMultifield
            buttonLabel='Add Special Feature'
            components={[
              {
                Node: InputText,
                props: {
                  name: 'name', label: 'Name', placeholder: 'Feature Name..',
                },
              },
              {
                Node: Textarea,
                props: {
                  name: 'description', label: 'Description', placeholder: 'Description..', rows: 3,
                },
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
