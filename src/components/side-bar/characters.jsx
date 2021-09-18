import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import JobPath from './job-path'
import elsword from '../../../public/images/avatar/elsword/elsword.png'
import aisha from '../../../public/images/avatar/aisha/aisha.png'

function Characters() {
  return (
    <Fragment>
      Characters
      <ul className='my-2'>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-elsword px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/elsword'>
            <a className='flex items-center'>
              <Image
                alt='Elsword'
                className='rounded-full object-cover'
                height={30}
                src={elsword}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-elsword'>Elsword</p>
            </a>
          </Link>
          <JobPath number={0} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-aisha px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/aisha'>
            <a className='flex items-center'>
              <Image
                alt='Aisha'
                className='rounded-full object-cover'
                height={30}
                src={aisha}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-aisha'>Aisha</p>
            </a>
          </Link>
          <JobPath number={1} />
        </li>
      </ul>
    </Fragment>
  )
}

export default Characters
