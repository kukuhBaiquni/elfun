import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import CharacterDetail from 'layouts/character-details'
import OptimusCut from '../../../public/images/example/optimus-skill-cut.png'
import CrimsonRoseCut from '../../../public/images/example/crimson-rose-skill-cut.png'
import CRCut from '../../../public/images/example/c-rose.png'

const avatar = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Foptimus.png?alt=media&token=5b1f9adb-fee0-4c1a-9cde-d86e7bdadbbc'

export default function Optimus() {
  return (
    <Fragment>
      <Head>
        <title>Elfun - Optimus</title>
        <meta content='Optimus - 4th Path of Rose (Elsword)' name='description' />
        <meta content='Elsword, MMORPG, Optimus, Metal Heart, Prime Operator, Rose' name='keywords' />
      </Head>
      <main className='text-gray-600 dark:text-gray-400 px-2 h-[2000px]'>
        <div className='max-w-screen-2xl h-[400px] bg-gradient-to-r from-gray-700 flex justify-end relative p-3'>
          <Image
            alt='Optimus Skin Cut'
            className='object-cover'
            src={OptimusCut}
          />
          <div className='flex items-center absolute left-3 bottom-3'>
            <Image alt='Optimus' height={54} quality={100} src={avatar} width={54} />
            <h2 className='text-3xl font-semibold text-rose font-titillium ml-3'>Optimus</h2>
          </div>
        </div>

        <div className='p-2 max-w-full sm:max-w-3xl mx-auto'>
          <p className='text-sm sm:text-xl text-center text-rose'>
            The ecstasy you get when you design as much driving parts as you want,
            since design was considered a weakness as a weapon, was indescribable!
          </p>
        </div>

      </main>
    </Fragment>
  )
}

Optimus.getLayout = (page) => (
  <CharacterDetail>
    {page}
  </CharacterDetail>
)
