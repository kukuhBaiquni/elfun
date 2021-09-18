import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import JobPathElsword from './job-path-elsword'
import elsword from '../../../public/images/avatar/elsword.png'

function Characters() {
  return (
    <Fragment>
      Characters
      <ul>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-elsword px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character-elsword'>
            <a className='flex items-center'>
              <Image
                alt='Elsword'
                className='rounded-full object-cover'
                height={30}
                src={elsword}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200'>Elsword</p>
            </a>
          </Link>
          <JobPathElsword />
        </li>
      </ul>
    </Fragment>
  )
}

export default Characters
