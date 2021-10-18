/* eslint-disable jsx-a11y/label-has-associated-control */
import Layout from 'layouts'
import Head from 'next/head'
import InputText from 'components/forms/input-text'
import Select from 'components/forms/select'
import Checkbox from 'components/forms/checkbox'
import { useForm } from 'react-hook-form'
import SKILL_SPECIAL_ACTIVE_OPTIONS from 'constant/skill-special-active-options'

export default function Skills() {
  const { register, control, watch } = useForm()

  console.log('watch', watch())

  return (
    <div>
      <Head>
        <title>Elfun - Contributor</title>
        <meta content='Contribution guide for filling submission article form' name='description' />
        <meta content='Elfun Contribution Guide, Contribution Elfun, Elfun' name='keywords' />
      </Head>
      <main>
        <section className='max-w-xl'>
          <InputText label='Add Skill Property' />
          <InputText />
          <Select />
          <Checkbox
            control={control}
            defaultValue={[]}
            label='Skills'
            name='specialActive'
            options={SKILL_SPECIAL_ACTIVE_OPTIONS}
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
