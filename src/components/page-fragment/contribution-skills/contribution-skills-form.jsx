import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import Select from 'components/forms/input-select/input-select'
import InputImage from 'components/forms/input-image'
import { useForm, useFieldArray } from 'react-hook-form'
import SKILL_CATEGORIES from 'constant/skill-categories'
import TableComposer from 'components/forms/table-composer'
import FormSchema from './form-schema'

export default function ContributionSkillsForm() {
  const {
    register, setValue, watch, control, formState: { errors },
  } = useForm({
    resolver: FormSchema,
  })

  const { fields, append } = useFieldArray({
    name: 'table',
    control,
    keyName: '$id',
  })

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
        register={register}
        setValue={setValue}
        watch={watch}
      />
      <InputImage label='Skill Icon' name='skillIcon' />
      {fields.map((field) => (
        <div className='p-2 bg-lime-500' key={field.$id}>
          {field.tableName}
        </div>
      ))}
      <TableComposer
        assignTable={(tableData) => append(tableData)}
        label='Table Information'
        name='table'
      />
    </section>
  )
}
