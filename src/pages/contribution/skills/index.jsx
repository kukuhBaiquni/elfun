import Layout from 'layouts'
import Head from 'next/head'
import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import Select from 'components/forms/input-select/input-select'
import InputImage from 'components/forms/input-image'
import { useForm, useFieldArray } from 'react-hook-form'

import SKILL_CATEGORIES from 'constant/skill-categories'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers'
import TableComposer from 'components/forms/table-composer'

export default function Skills() {
  // const schema = yup.object().shape({
  //   skillName: yup.string().required(),
  //   skillDescription: yup.string().required(),
  //   skillCategory: yup.string().oneOf(SKILL_CATEGORIES.map((item) => item.value)).required(),
  //   skillAttributes: yup.

  //   password: yup.string().required(),
  //   siblings: yup.string().required(),
  //   gender: yup.string().required(),
  //   name: yup.string().required(),
  //   period: yup.lazy((val) => (Array.isArray(val)
  //     ? yup.array().ensure().of(yup.number()).length(2) : yup.number().required())),
  //   passwordConfirmation: yup.string()
  //     .oneOf([yup.ref('password'), null], 'Passwords must match'),
  // })

  const {
    register, setValue, watch, control, formState: { errors },
  } = useForm({
    defaultValues: {
      skillName: '',
      skillDescription: '',
      // skillCategory: '',
      // skillAttributes: [],
      skillIcon: {},
      table: [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    name: 'table',
    control,
    keyName: '$id',
  })

  console.log('📝', watch())
  return (
    <div>
      <Head>
        <title>Elfun - Contributor</title>
        <meta content='Contribution guide for filling submission article form' name='description' />
        <meta content='Elfun Contribution Guide, Contribution Elfun, Elfun' name='keywords' />
      </Head>
      <main className='px-2'>
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
          {fields.map((field, index) => {
            console.log('FIELD', field)
            return (
              <div className='p-2 bg-lime-500' key={field.$id}>
                {field.tableName}
              </div>
            )
          })}
          <TableComposer
            assignTable={(tableData) => append(tableData)}
            label='Table Information'
            name='table'
          />
        </section>
      </main>
    </div>
  )
}

Skills.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
