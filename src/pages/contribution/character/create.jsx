import { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from 'layouts'
import { useRouter } from 'next/router'
import characters from 'store/character-data'
import Modal from 'components/common/modal'
import Warning from 'components/common/modal/feedback/warning'

export default function Create() {
  const [isVisible, setIsVisible] = useState(false)
  const { query } = useRouter()

  console.log(query.character)

  return (
    <Fragment>
      <Head>
        <title>Elfun - Create Character Information</title>
        <meta content='Create Character Information' name='description' />
      </Head>
      <main className='text-gray-600 dark:text-gray-400 px-2'>
        <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Add {query.character} Information</h2>
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
