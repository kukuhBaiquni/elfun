/* eslint-disable @next/next/no-img-element */
import Layout from 'layouts'
import { Fragment } from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import FormSchema from 'components/page-fragment/contribution/skills/contribution-skills-form-schema'
import ContributionSkillsForm from 'components/page-fragment/contribution/skills/contribution-skills-form'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import classType from 'constant/class-type'
import _ from 'lodash/isEmpty'
import Button from 'components/common/button'
import { CogIcon } from '@heroicons/react/solid'
import { getCharacterUtility } from 'api/character-utility'
import { useQuery } from 'react-query'

export default function Skills() {
  const { query, back } = useRouter()
  const form = useForm({
    resolver: FormSchema,
  })

  const queryCharacterUtility = useQuery([
    'CHARACTER-UTILITY',
    {
      characterId: query.characterId,
      classId: query.classId,
      pathId: query.pathId,
    },
  ], getCharacterUtility, {
    // enabled: !_(query),
  })

  const onSubmit = (data) => {
    console.log('__DATA FINAL', data)
  }

  const baseData = queryCharacterUtility.data?.data
  const { isLoading, isError } = queryCharacterUtility

  return (
    <div>
      <Head>
        <title>Elfun - Contributor</title>
        <meta content='Contribution guide for filling submission article form' name='description' />
        <meta content='Elfun Contribution Guide, Contribution Elfun, Elfun' name='keywords' />
      </Head>
      <main className={clsx(
        baseData
          ? 'px-2 text-general'
          : 'flex items-center justify-center min-h-[50vh]',
      )}
      >
        {isLoading && (
          <div className='text-general flex items-center border-input p-2 rounded justify-center'>
            <CogIcon className='animate-spin w-10 h-10 mr-2' />
            <h5 className='text-lg font-titillium'>Preparing Form</h5>
          </div>
        )}
        {baseData && (
          <Fragment>
            <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Add Skill Information: {query.name}</h2>
            <p className='my-2'>
              Fill all the required input field:
            </p>
            <div className='flex items-center gap-2 mb-5'>
              <img
                alt={baseData.name}
                className={clsx(baseData.bgColor, 'p-1')}
                height={60}
                src={baseData.img}
                width={60}
              />
              <div>
                <p className={clsx(baseData.textColor, 'font-bold font-titillium text-lg')}>{baseData.name}</p>
                <p className='leading-5 text-sm'>({classType[baseData.classId]})</p>
              </div>
            </div>
            <ContributionSkillsForm
              form={form}
              onSubmit={onSubmit}
            />
          </Fragment>
        )}
        {isError && (
          <div className='text-center flex items-center justify-center flex-col font-titillium text-red-500'>
            <h4 className='text-3xl font-bold'>Invalid Access!</h4>
            <p className='text-general mb-3'>You visit the right page, but missing requirement to continue.</p>
            <Button
              label='Go to Previous Page'
              onClick={() => back()}
            />
          </div>
        )}
      </main>
    </div>
  )
}

Skills.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
