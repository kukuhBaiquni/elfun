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
const background = 'Rose is not satisfied with her creation. Even though she\'s got the capabilities and mechanism down to a T, she felt her creations lacking the aesthetic department. She wanted to create a robot unmatched in power and beauty. In her search, Rose learned about the El Energy extractor used by the Nasods in Altera. This allowed her to remodel her equipment decreasing them in size and making them more visually appealing without compromising their capabilities. She now stands in the battlefield as the Goddess of Machines with refined robots and unstoppable power.'
export default function Optimus() {
  return (
    <Fragment>
      <Head>
        <title>Elfun - Optimus</title>
        <meta content='Optimus - 4th Path of Rose (Elsword)' name='description' />
        <meta content='Elsword, MMORPG, Optimus, Metal Heart, Prime Operator, Rose' name='keywords' />
      </Head>
      <main className='text-gray-600 dark:text-gray-400 px-2 h-[2000px]'>
        <section className='max-w-screen-2xl h-[400px] bg-gradient-to-r from-transparent to-rose flex justify-end relative sm:p-3 mb-3 drop-shadow-lg'>
          <Image
            alt='Optimus Skin Cut'
            className='object-cover'
            quality={100}
            src={OptimusCut}
          />
          <div className='flex items-center absolute bottom-3 left-0 py-2 px-6 rounded-r-full bg-gray-900'>
            <h2 className='text-3xl text-rose font-titillium'>Optimus</h2>
          </div>
        </section>

        <section className='bg-gradient-to-r dark:from-gray-700 from-gray-200 p-3 lg:flex'>
          <div>
            <div className='w-full lg:w-[510px] md:w-full p-3 border dark:border-gray-600 border-gray-300 flex flex-col justify-center items-center'>
              <Image alt='optimus' className='object-cover' src={optimus} />
              <div className='flex justify-center mt-3'>
                <button className='bg-rose text-gray-600 py-1 px-3' type='button'>2nd Job</button>
                <button className='text-rose py-1 px-3 border border-rose' type='button'>Transcendent</button>
              </div>
            </div>
            <div className='max-w-full'>
              <div className='overflow-x-auto mt-3'>
                <div className='grid grid-cols-5 w-[550px] sm:w-full lg:max-w-lg'>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Name</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 col-span-4'>Anna Testarossa (Rose)</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Class</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 col-span-4 text-rose'>Optimus</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 py-1 border-b-0 flex items-center font-semibold dark:text-gray-300 text-gray-700'>Weapon</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 col-span-3'>
                    <ul className='list-disc pl-5'>
                      <li>Guns (Auto-guns)</li>
                      <li>Robot Assistants</li>
                      <li>G-Cores</li>
                      <li>Mecha Volt MX</li>
                    </ul>
                  </div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-b-0 border-l-0 flex items-center flex-col py-2'>
                    <Image alt='Magic Emblem' src={magic} />
                    <p className='text-indigo-500'>Magical</p>
                  </div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Age</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 col-span-4'>22</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Race</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 col-span-4'>Human</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-b-0 py-1 flex items-center font-semibold dark:text-gray-300 text-gray-700 whitespace-nowrap'>Class Tree</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 py-2 col-span-4 flex border-b-0 justify-between items-center'>
                    <Image alt='rose' height={40} quality={100} src={rose} width={40} />
                    <ArrowSmRightIcon className='w-5 h-5' />
                    <Image alt='rose' height={40} quality={100} src={metalHeart} width={40} />
                    <ArrowSmRightIcon className='w-5 h-5' />
                    <div className='bg-rose flex items-center p-0.5'>
                      <Image alt='rose' height={40} quality={100} src={avatar} width={40} />
                    </div>
                    <ArrowSmRightIcon className='w-5 h-5' />
                    <Image alt='rose' height={40} quality={100} src={optimusT} width={40} />
                    <ArrowSmRightIcon className='w-5 h-5' />
                    <Image alt='rose' height={40} quality={100} src={primeOperator} width={40} />
                  </div>

                  <div className='border dark:border-gray-600 border-gray-300 row-span-3 px-2 py-1 flex items-center font-semibold dark:text-gray-300 text-gray-700'>Statistic</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 font-semibold dark:text-gray-300 text-gray-700'>Speed:</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 text-center'>Slow</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 bg-rose text-gray-600 text-center'>Average</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 text-center'>Fast</div>

                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 font-semibold dark:text-gray-300 text-gray-700'>Range:</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 text-center'>Short</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 bg-rose text-gray-600 text-center'>Medium</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 border-b-0 py-1 text-center'>Long</div>

                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 py-1 font-semibold dark:text-gray-300 text-gray-700'>Difficulty:</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 py-1 text-center'>Easy</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 py-1 text-center'>Normal</div>
                  <div className='border dark:border-gray-600 border-gray-300 px-2 border-l-0 py-1 bg-rose text-gray-600 text-center'>Hard</div>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:ml-3 lg:mt-0 mt-3 text-sm sm:text-base'>
            <div className='border dark:border-gray-600 border-gray-300 flex-grow p-2'>
              <span className='text-rose text-lg'>Rose (Optimus): </span>
              <i className=''>The ecstasy you get when you design as much driving parts as you want, since design was considered a weakness as a weapon, was indescribable!</i>
            </div>
            <div className='mt-2'>
              <h6 className='dark:text-gray-300 text-gray-700 font-semibold text-2xl font-titillium mb-1'>Specialization</h6>
              <span className='text-sky-500 font-semibold'>[A genius meister that uses high-powered mechanics.]</span>
              <p>Suppresses enemies with her utilization of mechanics of
                unique technology. A genius of the battlefield.
              </p>
            </div>
            <div className='mt-2'>
              <h6 className='dark:text-gray-300 text-gray-700 font-semibold text-2xl font-titillium mb-1'>Background</h6>
              <p>{background}</p>
            </div>
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
