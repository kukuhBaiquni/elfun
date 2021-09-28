import Head from 'next/head'
import { Fragment } from 'react'
import CharacterDetail from 'layouts/character-details'
import ChangeJobQuest from 'components/page-fragment/character/change-job-quest'
import CoverHeader from 'components/page-fragment/character/cover-header'
import Statistic from 'components/page-fragment/character/statistic'
import Portrait from 'components/page-fragment/character/portrait'
import JobInfo from 'components/page-fragment/character/job-info'
import SkillTree from 'components/page-fragment/character/skill-tree'

export default function Optimus() {
  const json = [
    {
      id: 1,
      iconImage: 'https://uifaces.co/our-content/donated/UZ0VIIh3.png',
      consultant: 'Amira',
      category: 'Doctor',
      standBy: 2,
      session: 2,
    },
    {
      id: 2,
      iconImage: 'https://uifaces.co/our-content/donated/UZ0VIIh3.png',
      consultant: 'Ana',
      category: 'Nutriosionist',
      standBy: 2,
      session: 3,
    },
    {
      id: 3,
      iconImage: 'https://uifaces.co/our-content/donated/UZ0VIIh3.png',
      consultant: 'Almara',
      category: 'Product Consultant',
      standBy: 2,
      session: 4,
    },
  ]

  const onClick = () => {
    const head = Object.keys(json[0]).join()
    const val = json.map((x) => Object.values(x)).join('\r\n')
    const blob = new Blob([`${head}\r\n`.concat(val)], { type: 'application/csv;charset=utf-8' })
    const link = document.createElement('a')
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', 'example.csv')
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <Fragment>
      <Head>
        <title>Elfun - Optimus</title>
        <meta content='Optimus - 4th Path of Rose (Elsword)' name='description' />
        <meta content='Elsword, MMORPG, Optimus, Metal Heart, Prime Operator, Rose' name='keywords' />
      </Head>
      <div className='text-gray-600 dark:text-gray-400 px-2 mb-10'>
        <CoverHeader />
        <section className='bg-gradient-to-r dark:from-gray-700 from-gray-200 p-3 lg:flex'>
          <div>
            <Portrait />
            <Statistic />
          </div>
          <div className='lg:ml-3 lg:mt-0 mt-3 text-sm sm:text-base'>
            <JobInfo />
            <ChangeJobQuest />
          </div>
        </section>
        <section className='bg-gradient-to-r from-transparent dark:to-gray-700 to-gray-200 p-3 mt-3'>
          <SkillTree />
        </section>
      </div>
      <button type='button' onClick={onClick}>coy</button>
    </Fragment>
  )
}

Optimus.getLayout = (page) => (
  <CharacterDetail>
    {page}
  </CharacterDetail>
)
