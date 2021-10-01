import { ArrowSmRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import magic from '../../../../public/images/magic-dealer.png'

const avatar = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Foptimus.png?alt=media&token=5b1f9adb-fee0-4c1a-9cde-d86e7bdadbbc'
const rose = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Frose.png?alt=media&token=dcad2e1b-f12b-4c47-a67c-4da32edf4a9a'
const metalHeart = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fmetal-heart.png?alt=media&token=55f7918c-61cb-4712-97db-f36d36727c28'
const optimusT = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Foptimus-trans.png?alt=media&token=52d3ad29-6186-4dd7-aacd-7a74d94e4629'
const primeOperator = 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fprime-operator.png?alt=media&token=97072598-cd2f-4ebd-9e8a-8771ac1449c7'

export default function Statistic() {
  return (
    <div className='max-w-full'>
      <div className='overflow-x-auto mt-3'>
        <div className='grid grid-cols-5 w-[550px] sm:w-full lg:max-w-lg'>
          <div className='border-general px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Name</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 col-span-4'>Anna Testarossa (Rose)</div>
          <div className='border-general px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Class</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 col-span-4 text-rose'>Optimus</div>
          <div className='border-general px-2 py-1 border-b-0 flex items-center font-semibold dark:text-gray-300 text-gray-700'>Weapon</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 col-span-3'>
            <ul className='list-disc pl-5'>
              <li>Guns (Auto-guns)</li>
              <li>Robot Assistants</li>
              <li>G-Cores</li>
              <li>Mecha Volt MX</li>
            </ul>
          </div>
          <div className='border-general px-2 border-b-0 border-l-0 flex items-center flex-col py-2'>
            <Image alt='Magic Emblem' src={magic} />
            <p className='text-indigo-500'>Magical</p>
          </div>
          <div className='border-general px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Age</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 col-span-4'>22</div>
          <div className='border-general px-2 py-1 border-b-0 font-semibold dark:text-gray-300 text-gray-700'>Race</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 col-span-4'>Human</div>
          <div className='border-general px-2 border-b-0 py-1 flex items-center font-semibold dark:text-gray-300 text-gray-700 whitespace-nowrap'>Class Tree</div>
          <div className='border-general px-2 border-l-0 py-2 col-span-4 flex border-b-0 justify-between items-center'>
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

          <div className='border-general row-span-3 px-2 py-1 flex items-center font-semibold dark:text-gray-300 text-gray-700'>Statistic</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 font-semibold dark:text-gray-300 text-gray-700'>Speed:</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 text-center'>Slow</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 bg-rose text-gray-600 text-center'>Average</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 text-center'>Fast</div>

          <div className='border-general px-2 border-l-0 border-b-0 py-1 font-semibold dark:text-gray-300 text-gray-700'>Range:</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 text-center'>Short</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 bg-rose text-gray-600 text-center'>Medium</div>
          <div className='border-general px-2 border-l-0 border-b-0 py-1 text-center'>Long</div>

          <div className='border-general px-2 border-l-0 py-1 font-semibold dark:text-gray-300 text-gray-700'>Difficulty:</div>
          <div className='border-general px-2 border-l-0 py-1 text-center'>Easy</div>
          <div className='border-general px-2 border-l-0 py-1 text-center'>Normal</div>
          <div className='border-general px-2 border-l-0 py-1 bg-rose text-gray-600 text-center'>Hard</div>
        </div>
      </div>
    </div>
  )
}
