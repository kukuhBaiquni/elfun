import { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from 'layouts'
import characters from 'store/character-data'
import Modal from 'components/common/modal'
import JobPathMapper from 'components/common/modal/job-path/job-path-mapper'

export default function Character() {
  const [isVisible, setIsVisible] = useState(false)
  const [data, setData] = useState(null)
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  const showModalAndSetData = (character) => {
    setIsVisible(true)
    setData(character)
  }

  useEffect(() => {
    if (isVisible) setSelectedCharacter(null)
  }, [isVisible])

  return (
    <Fragment>
      <Head>
        <title>Elfun - Contributor</title>
        <meta content='Contribution guide for filling submission article form' name='description' />
        <meta content='Elfun Contribution Guide, Contribution Elfun, Elfun' name='keywords' />
      </Head>
      <main className='text-gray-600 dark:text-gray-400 px-2'>
        <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Create New Character Information</h2>
        <p className='my-2'>
          Choose which character you want to add information:
        </p>
        <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 max-w-screen-sm'>
          {characters.map((item) => (
            <button className={`p-1 ${item.bgColor} flex items-center hover:opacity-70`} key={item.name} type='button' onClick={() => showModalAndSetData(item)}>
              <Image alt={item.name} height={20} src={item.img} width={20} />
              <span className='text-white ml-2 font-titillium'>{item.name}</span>
            </button>
          ))}
        </div>
        <Modal
          isVisible={isVisible}
          render={(
            <JobPathMapper
              data={data}
              selectedCharacter={selectedCharacter}
              setIsVisible={setIsVisible}
              setSelectedCharacter={setSelectedCharacter}
            />
          )}
          setIsVisible={setIsVisible}
        />
      </main>
    </Fragment>
  )
}

Character.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
