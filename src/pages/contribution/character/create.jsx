/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react'
import Head from 'next/head'
import ContributionLayout from 'layouts/contribution-layout'
import { useRouter } from 'next/router'
import Modal from 'components/common/modal'
import Warning from 'components/common/modal/feedback/warning'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import classType from 'constant/class-type'
import ContributionCharacterForm from 'components/page-fragment/contribution/characters/contribution-characters-form'
import FormLoader from 'components/page-fragment/contribution/form-loader'
import { getCharacterUtility } from 'api/character-utility'
import InvalidAccess from 'components/page-fragment/contribution/invalid-access'
import { useQuery } from 'react-query'

export default function Create() {
  const [isVisible, setIsVisible] = useState(false)
  const { query } = useRouter()
  const form = useForm()

  const queryCharacterUtility = useQuery([
    'CHARACTER-UTILITY',
    {
      characterId: query.characterId,
      classId: query.classId,
      pathId: query.pathId,
    },
  ], getCharacterUtility)

  const baseData = queryCharacterUtility.data?.data
  const { isLoading, isError } = queryCharacterUtility

  return (
    <Fragment>
      <Head>
        <title>Elfun - Create Character Information</title>
        <meta content='Create Character Information' name='description' />
      </Head>
      <main className={clsx(
        baseData
          ? 'px-2 text-general'
          : 'flex items-center justify-center min-h-[50vh]',
      )}
      >
        {isLoading && <FormLoader />}
        {baseData && (
          <Fragment>
            <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Add Character Information: {baseData.name}</h2>
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
            <ContributionCharacterForm baseData={baseData} form={form} />
            <Modal
              isVisible={isVisible}
              render={<Warning />}
              setIsVisible={setIsVisible}
            />
          </Fragment>
        )}
        {isError && <InvalidAccess />}
      </main>
    </Fragment>
  )
}

Create.getLayout = (page) => (
  <ContributionLayout>
    {page}
  </ContributionLayout>
)
