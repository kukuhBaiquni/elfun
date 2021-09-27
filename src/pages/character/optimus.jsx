import Head from 'next/head'
import { Fragment } from 'react'
import CharacterDetail from 'layouts/character-details'
import ChangeJobQuest from 'components/page-fragment/character/change-job-quest'
import CoverHeader from 'components/page-fragment/character/cover-header'
import Statistic from 'components/page-fragment/character/statistic'
import Portrait from 'components/page-fragment/character/portrait'
import JobInfo from 'components/page-fragment/character/job-info'

export default function Optimus() {
  return (
    <Fragment>
      <Head>
        <title>Elfun - Optimus</title>
        <meta content='Optimus - 4th Path of Rose (Elsword)' name='description' />
        <meta content='Elsword, MMORPG, Optimus, Metal Heart, Prime Operator, Rose' name='keywords' />
      </Head>
      <div className='text-gray-600 dark:text-gray-400 px-2 mb-10'>
        <CoverHeader />

        <main className='bg-gradient-to-r dark:from-gray-700 from-gray-200 p-3 lg:flex'>
          <div>
            <Portrait />
            <Statistic />
          </div>
          <div className='lg:ml-3 lg:mt-0 mt-3 text-sm sm:text-base'>
            <JobInfo />
            <ChangeJobQuest />
          </div>
        </main>

      </div>
    </Fragment>
  )
}

Optimus.getLayout = (page) => (
  <CharacterDetail>
    {page}
  </CharacterDetail>
)
