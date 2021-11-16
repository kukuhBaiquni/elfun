/* eslint-disable @next/next/no-img-element */
import ContributionLayout from 'layouts/contribution-layout'
import { Fragment } from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import FormSchema from 'components/page-fragment/contribution/skills/contribution-skills-form-schema'
import ContributionSkillsForm from 'components/page-fragment/contribution/skills/contribution-skills-form'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import classType from 'constant/class-type'
import FormLoader from 'components/page-fragment/contribution/form-loader'
import { getCharacterUtility } from 'api/character-utility'
import InvalidAccess from 'components/page-fragment/contribution/invalid-access'

export default function Skills() {
  const { query } = useRouter()
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
  ], getCharacterUtility)

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
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
        'bg-paper-general sm:p-3 mb-10',
        baseData
          ? 'px-2 text-general'
          : 'flex items-center justify-center min-h-[50vh]',
      )}
      >
        {isLoading && <FormLoader />}
        {baseData && (
          <Fragment>
            <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Add Skill Information: {baseData.name}</h2>
            <p className='my-2'>
              Fill all the required input fields:
            </p>
            <div className='flex items-center gap-2 mb-5'>
              <img
                alt={baseData.name}
                height={54}
                src={baseData.img}
                width={54}
              />
              <div>
                <p className={clsx(baseData.textColor, 'font-bold font-titillium')}>{baseData.name}</p>
                <p className='leading-5 text-sm'>({classType[baseData.classId]})</p>
              </div>
            </div>
            <ContributionSkillsForm
              form={form}
              onSubmit={onSubmit}
            />
          </Fragment>
        )}
        {isError && <InvalidAccess />}
      </main>
    </div>
  )
}

Skills.getLayout = (page) => (
  <ContributionLayout>
    {page}
  </ContributionLayout>
)
