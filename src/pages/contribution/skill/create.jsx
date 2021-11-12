/* eslint-disable @next/next/no-img-element */
import Layout from 'layouts'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import FormSchema from 'components/page-fragment/contribution/skills/contribution-skills-form-schema'
import ContributionSkillsForm from 'components/page-fragment/contribution/skills/contribution-skills-form'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import classType from 'constant/class-type'

export default function Skills() {
  const { query } = useRouter()
  console.log('QUERY', query)
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
      <main className='px-2 text-general'>
        <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Add Skill Information: {query.name}</h2>
        <p className='my-2'>
          Fill all the required input field:
        </p>
        <div className='flex items-center gap-2 mb-5'>
          <img
            alt={query.name}
            className={clsx(query.bgColor, 'p-1')}
            height={60}
            src={query.img}
            width={60}
          />
          <div>
            <p className={clsx(query.textColor, 'font-bold font-titillium text-lg')}>{query.name}</p>
            <p className='leading-5 text-sm'>({classType[query.classId]})</p>
          </div>
        </div>
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
