/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from 'layouts'
import characters from 'store/character-data'
import Modal from 'components/common/modal'
import JobPathMapper from 'components/common/modal/job-path/job-path-mapper'
import clsx from 'clsx'

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
      <main className='text-general px-2'>
        <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>Create New Character Information</h2>
        <p className='my-2'>
          Choose which character you want to add information:
        </p>
        <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 max-w-screen-sm'>
          {characters.map((item) => (
            <button
              className={clsx(
                'p-1 flex items-center hover:opacity-70',
                item.bgColor,
              )}
              key={item.name}
              type='button'
              onClick={() => showModalAndSetData(item)}
            >
              <img alt={item.name} height={20} src={item.img} width={20} />
              <span className={clsx(item.hoverTextColor ? 'text-gray-600' : 'text-white', 'ml-2 font-titillium')}>{item.name}</span>
            </button>
          ))}
        </div>
        <Modal
          closeModal={() => setIsVisible(false)}
          isVisible={isVisible}
          render={(
            <JobPathMapper
              closeModal={() => setIsVisible(false)}
              data={data}
              selectedCharacter={selectedCharacter}
              setSelectedCharacter={setSelectedCharacter}
            />
          )}
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
