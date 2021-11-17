/* eslint-disable @next/next/no-img-element */
import { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import ContributionLayout from 'layouts/contribution-layout'
import Modal from 'components/common/modal'
import ClassTree from 'components/page-fragment/contribution/class-tree'
import clsx from 'clsx'
import baseClass from 'constant/characters/base-class'

export default function Combo() {
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
      <main className='text-general px-2 bg-paper-general sm:p-3 sm:mb-10 mb-2 pt-3'>
        <h2 className='text-3xl font-semibold dark:text-sky-400 text-sky-600 font-titillium'>
          Create Character Combos
        </h2>
        <p className='my-2'>
          Choose which character you want to add combo information:
        </p>
        <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 max-w-screen-sm'>
          {baseClass.map((item) => (
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
              <span className={clsx(
                item.hoverTextColor ? 'text-gray-600' : 'text-white',
                'ml-2 font-titillium',
              )}
              >
                {item.name}
              </span>
            </button>
          ))}
        </div>
        <Modal
          closeModal={() => setIsVisible(false)}
          isVisible={isVisible}
          render={(
            <ClassTree
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

Combo.getLayout = (page) => (
  <ContributionLayout>
    {page}
  </ContributionLayout>
)
