/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import CharacterDetail from 'layouts/character-details'
import { ArrowSmRightIcon } from '@heroicons/react/solid'
import OptimusCut from '../../../public/images/example/optimus-skill-cut.png'
import optimus from '../../../public/images/example/optimus.png'
import magic from '../../../public/images/magic-dealer.png'
import cover from '../../../public/images/cover.png'

const avatar = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Foptimus.png?alt=media&token=5b1f9adb-fee0-4c1a-9cde-d86e7bdadbbc'
const rose = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Frose.png?alt=media&token=dcad2e1b-f12b-4c47-a67c-4da32edf4a9a'
const metalHeart = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fmetal-heart.png?alt=media&token=55f7918c-61cb-4712-97db-f36d36727c28'
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
        <section className='max-w-screen-2xl h-[400px] bg-gradient-to-r from-sky-500 to-rose flex justify-end relative sm:p-3 mb-3'>
          <Image
            alt='Optimus Skin Cut'
            className='object-cover'
            quality={100}
            src={OptimusCut}
          />
          <div className='flex items-center absolute left-2 bottom-2 sm:left-3 sm:bottom-3'>
            <Image alt='Optimus' height={54} src={avatar} width={54} />
            <h2 className='text-3xl font-semibold text-rose font-titillium ml-3'>Optimus</h2>
          </div>
        </section>

        <section className='bg-gradient-to-r max-w-7xl dark:from-gray-700 flex from-gray-200 relative justify-between items-center p-3'>
          <div className='max-w-full sm:max-w-3xl self-start mr-4'>
            <h3 className='text-2xl text-sky-500 font-semibold'>Basic Information</h3>
            <div className='sm:max-w-screen-lg overflow-x-auto mt-3'>
              <div className='grid grid-cols-5 w-[400px] sm:w-full sm:max-w-lg'>
                <div className='border border-gray-600 px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Name</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-4'>Anna Testarossa (Rose)</div>
                <div className='border border-gray-600 px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Class</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-4 text-rose'>Optimus</div>
                <div className='border border-gray-600 px-2 py-1 border-b-0 flex items-center font-semibold dark:text-gray-300 text-gray-700'>Weapon</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-3'>
                  <ul className='list-disc pl-5'>
                    <li>Guns (Auto-guns)</li>
                    <li>Robot Assistants</li>
                    <li>G-Cores</li>
                    <li>Mecha Volt MX</li>
                  </ul>
                </div>
                <div className='border border-gray-600 px-2 border-b-0 border-l-0 flex items-center flex-col py-2'>
                  <Image alt='Magic Emblem' src={magic} />
                  <p>Magical</p>
                </div>
                <div className='border border-gray-600 px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Age</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-4'>22</div>
                <div className='border border-gray-600 px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Race</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 col-span-4'>Human</div>
                <div className='border border-gray-600 px-2 border-b-0 py-1 flex items-center font-semibold dark:text-gray-300 text-gray-700'>Class Tree</div>
                <div className='border border-gray-600 px-2 border-l-0 py-2 col-span-4 flex border-b-0 justify-between items-center'>
                  <Image alt='rose' height={40} src={rose} width={40} />
                  <ArrowSmRightIcon className='w-5 h-5' />
                  <Image alt='rose' height={40} src={metalHeart} width={40} />
                  <ArrowSmRightIcon className='w-5 h-5' />
                  <Image alt='rose' height={40} src={avatar} width={40} />
                  <ArrowSmRightIcon className='w-5 h-5' />
                  <Image alt='rose' height={40} src={optimusT} width={40} />
                  <ArrowSmRightIcon className='w-5 h-5' />
                  <Image alt='rose' height={40} src={primeOperator} width={40} />
                </div>

                <div className='border border-gray-600 row-span-3 px-2 py-1 flex items-center font-semibold dark:text-gray-300 text-gray-700'>Statistic</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 font-semibold dark:text-gray-300 text-gray-700'>Speed:</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1'>Slow</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 bg-rose text-gray-600'>Average</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1'>Fast</div>

                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 font-semibold dark:text-gray-300 text-gray-700'>Range:</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1'>Short</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1 bg-rose text-gray-600'>Medium</div>
                <div className='border border-gray-600 px-2 border-l-0 border-b-0 py-1'>Long</div>

                <div className='border border-gray-600 px-2 border-l-0 py-1 font-semibold dark:text-gray-300 text-gray-700'>Difficulty:</div>
                <div className='border border-gray-600 px-2 border-l-0 py-1'>Easy</div>
                <div className='border border-gray-600 px-2 border-l-0 py-1'>Normal</div>
                <div className='border border-gray-600 px-2 border-l-0 py-1 bg-rose text-gray-600'>Hard</div>
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
