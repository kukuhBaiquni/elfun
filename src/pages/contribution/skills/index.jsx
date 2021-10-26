/* eslint-disable jsx-a11y/label-has-associated-control */
import Layout from 'layouts'
import Head from 'next/head'
import InputText from 'components/forms/input-text/input-text'
import Textarea from 'components/forms/input-text/textarea'
import Select from 'components/forms/select'
import Checkbox from 'components/forms/checkbox'
import InputImage from 'components/forms/input-image'
import { useForm } from 'react-hook-form'
import SKILL_CATEGORIES from 'constant/skill-categories'

export default function Skills() {
  const { control } = useForm()

  return (
    <div>
      <Head>
        <title>Elfun - Contributor</title>
        <meta content='Contribution guide for filling submission article form' name='description' />
        <meta content='Elfun Contribution Guide, Contribution Elfun, Elfun' name='keywords' />
      </Head>
      <main>
        <section className='max-w-xl'>
          <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Add New Skill: Optimus</h2>
          <InputText label='Skill Name' placeholder='Skill Name..' />
          <Textarea label='Description' placeholder='Description..' />
          <Select label='Skill Category' name='skillCategory' options={SKILL_CATEGORIES} />
          <Checkbox
            control={control}
            defaultValue={[]}
            label='Skills'
            name='specialActive'
            options={SKILL_CATEGORIES}
          />
          <InputImage />
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
