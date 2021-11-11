import { Fragment, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from 'layouts'
import { useRouter } from 'next/router'
import Modal from 'components/common/modal'
import Warning from 'components/common/modal/feedback/warning'
import { baseClass } from 'constant/characters'

export default function Create() {
  const [isVisible, setIsVisible] = useState(false)
  const { query } = useRouter()
  console.log(query)
  const baseCharacter = baseClass.find((cls) => cls.characterId === +query.characterId)
  console.log(baseCharacter)
  return (
    <Fragment>
      <Head>
        <title>Elfun - Create Character Information</title>
        <meta content='Create Character Information' name='description' />
      </Head>
      <main className='text-general px-2'>
        <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Add {query.name} Information</h2>
        <p className='my-2'>
          Choose which character you want to add information:
        </p>
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
