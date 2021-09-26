/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import CharacterDetail from 'layouts/character-details'
import OptimusCut from '../../../public/images/example/optimus-skill-cut.png'
import optimus from '../../../public/images/example/optimus.png'

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
        <section className='max-w-screen-2xl h-[400px] bg-gradient-to-r from-gray-700 flex justify-end relative sm:p-3 mb-10'>
          <Image
            alt='Optimus Skin Cut'
            className='object-cover'
            src={OptimusCut}
          />
          <div className='flex items-center absolute left-2 bottom-2 sm:left-3 sm:bottom-3'>
            <Image alt='Optimus' height={54} quality={100} src={avatar} width={54} />
            <h2 className='text-3xl font-semibold text-rose font-titillium ml-3'>Optimus</h2>
          </div>
        </section>

        <section className='bg-gray-700 flex relative justify-between p-3'>
          <div className='max-w-full sm:max-w-3xl'>
            <p className='text-sm sm:text-lg text-rose'>
              The ecstasy you get when you design as much driving parts as you want,
              since design was considered a weakness as a weapon, was indescribable!
            </p>
            <div className='sm:max-w-screen-lg overflow-x-auto'>
              <div className='grid grid-cols-4 w-[700px] sm:max-w-lg'>
                <div className='border border-gray-600 px-2 py-1 border-b-0'>Name</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-3'>Anna Testarosa</div>
                <div className='border border-gray-600 px-2 py-1 border-b-0'>Class</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-3'>Optimus</div>
                <div className='border border-gray-600 px-2 py-1 border-b-0'>Weapon</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-3'>Guns (Auto-guns), Robot Assistants, G-Cores, Mecha Volt MX</div>
                <div className='border border-gray-600 px-2 py-1 border-b-0'>Age</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-3'>22</div>
                <div className='border border-gray-600 px-2 py-1'>Race</div>
                <div className='border border-gray-600 px-2 border-l-0 py-1 col-span-3'>Human</div>
              </div>

            </div>
          </div>
          <div className='w-[500px] hidden sm:block'>
            <Image alt='optimus' className='object-cover' src={optimus} />
          </div>
        </section>

      </main>
    </Fragment>
  )
}

Optimus.getLayout = (page) => (
  <CharacterDetail>
    {page}
  </CharacterDetail>
)
