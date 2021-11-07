import Layout from 'layouts'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import FormSchema from 'components/page-fragment/contribution/skills/contribution-skills-form-schema'
import ContributionSkillsForm from 'components/page-fragment/contribution/skills/contribution-skills-form'

export default function Skills() {
  const form = useForm({
    resolver: FormSchema,
  })

  const onSubmit = (data) => {
    console.log('__DATA FINAL', data)
  }

  return (
    <div>
      <Head>
        <title>Elfun - Contributor</title>
        <meta content='Contribution guide for filling submission article form' name='description' />
        <meta content='Elfun Contribution Guide, Contribution Elfun, Elfun' name='keywords' />
      </Head>
      <main className='px-2'>
        <ContributionSkillsForm
          form={form}
          onSubmit={onSubmit}
        />
      </main>
    </div>
  )
}

Skills.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
