/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import CharacterDetail from 'layouts/character-details'
import OptimusCut from '../../../public/images/example/optimus-skill-cut.png'
import optimus from '../../../public/images/example/optimus.png'

const avatar = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Foptimus.png?alt=media&token=5b1f9adb-fee0-4c1a-9cde-d86e7bdadbbc'
const rose = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Frose.png?alt=media&token=dcad2e1b-f12b-4c47-a67c-4da32edf4a9a'
const metalHeart = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fheavy-barrel.png?alt=media&token=0d3d569a-bb8f-4daf-a612-329c30428ea6'
const optimusT = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Foptimus-trans.png?alt=media&token=52d3ad29-6186-4dd7-aacd-7a74d94e4629'
const primeOperator = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fprime-operator.png?alt=media&token=97072598-cd2f-4ebd-9e8a-8771ac1449c7'

export default function Optimus() {
  return (
    <Fragment>
      <Head>
        <title>Elfun - Optimus</title>
        <meta content='Optimus - 4th Path of Rose (Elsword)' name='description' />
        <meta content='Elsword, MMORPG, Optimus, Metal Heart, Prime Operator, Rose' name='keywords' />
      </Head>
      <main className='text-gray-600 dark:text-gray-400 px-2 h-[2000px]'>
        <section className='max-w-screen-2xl h-[400px] bg-gray-700 flex justify-end relative sm:p-3 mb-4'>
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
            <div className='sm:max-w-screen-lg overflow-x-auto mt-3'>
              <div className='grid grid-cols-4 w-[400px] sm:w-full sm:max-w-lg'>
                <div className='border border-gray-600 px-2 py-1 border-b-0'>Name</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-3'>Anna Testarosa (Rose)</div>
                <div className='border border-gray-600 px-2 py-1 border-b-0'>Class</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-3'>Optimus</div>
                <div className='border border-gray-600 px-2 py-1 border-b-0 flex items-center'>Weapon</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-3'>
                  <ul className='list-disc pl-5'>
                    <li>Guns (Auto-guns)</li>
                    <li>Robot Assistants</li>
                    <li>G-Cores</li>
                    <li>Mecha Volt MX</li>
                  </ul>
                </div>
                <div className='border border-gray-600 px-2 py-1 border-b-0'>Age</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-3'>22</div>
                <div className='border border-gray-600 px-2 py-1 border-b-0'>Race</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-3'>Human</div>
                <div className='border border-gray-600 px-2 py-1 flex items-center'>Class Tree</div>
                <div className='border border-gray-600 px-2 border-l-0 py-2 col-span-3 flex justify-between'>
                  <Image alt='rose' height={40} src={rose} width={40} />
                  <Image alt='rose' height={40} src={metalHeart} width={40} />
                  <Image alt='rose' height={40} src={avatar} width={40} />
                  <Image alt='rose' height={40} src={optimusT} width={40} />
                  <Image alt='rose' height={40} src={primeOperator} width={40} />
                </div>
              </div>

            </div>
          </div>
          <div className='w-[500px] hidden md:block'>
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
