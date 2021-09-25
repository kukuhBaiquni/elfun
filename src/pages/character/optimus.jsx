import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import CharacterDetail from 'layouts/character-details'
import OptimusCut from '../../../public/images/example/optimus-skill-cut.png'

const avatar = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Foptimus.png?alt=media&token=5b1f9adb-fee0-4c1a-9cde-d86e7bdadbbc'

export default function Optimus() {
  return (
    <Fragment>
      <Head>
        <title>Elfun - Optimus</title>
        <meta content='Optimus - 4th Path of Rose (Elsword)' name='description' />
        <meta content='Elsword, MMORPG, Optimus, Metal Heart, Prime Operator, Rose' name='keywords' />
      </Head>
      <main className='text-gray-600 dark:text-gray-400 px-2'>
        <div className='max-w-screen-2xl bg-gradient-to-r from-black p-3 flex justify-end'>
          <Image
            alt='Optimus Skin Cut'
            className='object-cover'
            height={600}
            src={OptimusCut}
          />
        </div>

        <h2 className='text-3xl font-semibold text-rose font-titillium'>Optimus</h2>

        <div className='mt-3 flex items-center'>
          <Image alt='Optimus' height={54} quality={100} src={avatar} width={54} />
          <div className='ml-3 p-2'>
            <h6 className='text-rose'>Rose (Optimus)</h6>
            <p className=''>
              The ecstasy you get when you design as much driving parts as you want,
              since design was considered a weakness as a weapon, was indescribable!
            </p>
          </div>
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
