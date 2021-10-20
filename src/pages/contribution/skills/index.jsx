/* eslint-disable jsx-a11y/label-has-associated-control */
import Layout from 'layouts'
import Head from 'next/head'
import InputText from 'components/forms/input-text'
import Textarea from 'components/forms/input-text/textarea'
import Select from 'components/forms/select'
import Checkbox from 'components/forms/checkbox'
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
          <h3 className='uppercase text-general font-bold'>Add New Skill: Optimus</h3>
          <InputText label='Skill Name' placeholder='Skill Name..' />
          <Textarea label='Description' placeholder='Description..' />
          <Select />
          <Checkbox
            control={control}
            defaultValue={[]}
            label='Skills'
            name='specialActive'
            options={SKILL_CATEGORIES}
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
