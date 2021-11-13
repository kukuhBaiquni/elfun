/* eslint-disable @next/next/no-img-element */
import { ExternalLinkIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'
import CONTRIBUTION from 'constant/contribution'

const elwiki = <a className='text-sky-500 hover:underline' href='https://elwiki.net' rel='noreferrer' target='_blank'>elwiki.net</a>

export default function Contribution() {
  return (
    <section className='mt-8'>
      <h3 className='text-2xl font-semibold font-titillium dark:text-sky-400 text-sky-600'>Contribute</h3>
      <p className='mt-2'>
        If you know anything about Elsword, you can contribute to this website.
      </p>
      <p>
        There is several form corresponding to their category, you can contribute with fill the
        input with information from {elwiki}, then your submission will be checked by internal
        admin. If your submission is valid, you will get contribution point, and the information
        from your submission will saved in our database.
      </p>
      <p>You can participate to contribute in these following categories: </p>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4 text-sm'>
        {CONTRIBUTION.map((item) => (
          <div className='bg-gray-200 dark:bg-gray-700 px-2 py-2 relative transition-all duration-300' key={item.name}>
            <Link href={item.path}>
              <a className='font-titillium text-base hover:underline text-lime-600 flex items-center py-1 px-2 bg-gray-300 dark:bg-gray-800 transition-all duration-300'>
                <Image alt={item.name} className='object-cover' height={20} src={item.img} width={20} />
                <span className='mx-1'>{item.name}</span>
                <ExternalLinkIcon className='w-4 h-4' />
              </a>
            </Link>
            <ul className='list-disc pl-5 pr-1 mt-2'>
              {item.list.map((act, index) => (
                <li key={index}>{act}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button className='bg-sky-500 hover:bg-sky-600 text-white rounded transition-all duration-300 mt-5' type='button'>
        <Link href='/contribution'>
          <a className='flex items-center px-6 py-2 hover:underline'>
            Start Contribute Now
            <ArrowSmRightIcon className='w-5 h-5' />
          </a>
        </Link>
      </button>
    </section>
  )
}
