/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useMemo } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from 'layouts'
import { useRouter } from 'next/router'
import Modal from 'components/common/modal'
import Warning from 'components/common/modal/feedback/warning'
import { baseClass } from 'constant/characters'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import classType from 'constant/class-type'
import ContributionCharacterForm from 'components/page-fragment/contribution/characters/contribution-characters-form'

export default function Create() {
  const [isVisible, setIsVisible] = useState(false)
  const { query } = useRouter()
  const form = useForm()
  const baseCharacter = baseClass.find((cls) => cls.characterId === +query.characterId)
  const isBaseClass = useMemo(() => +query.classId === 0, [query.classId])

  return (
    <Fragment>
      <Head>
        <title>Elfun - Create Character Information</title>
        <meta content='Create Character Information' name='description' />
      </Head>
      <main className='text-general px-2'>
        <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Add Character Information: {query.name}</h2>
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
        <ContributionCharacterForm form={form} query={query} />
        <Modal
          isVisible={isVisible}
          render={<Warning />}
          setIsVisible={setIsVisible}
        />
      </main>
    </Fragment>
  )
}

Create.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
