import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import JobPath from './job-path'
import character from './character-data'

function Characters() {
  return (
    <Fragment>
      Characters
      <ul className='my-2'>
        {character.map((item, index) => (
          <li className={`py-2 relative z-10 whitespace-nowrap group font-normal hover:${item.bgColor} px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300`} key={item.name}>
            <Link href={`/character/${item.name}`}>
              <a className='flex items-center'>
                <Image
                  alt={item.name}
                  className='rounded-full object-cover'
                  height={25}
                  src={item.img}
                  width={25}
                />
                <p className='ml-1.5 group-hover:text-gray-200 text-gray-500'>{item.name}</p>
              </a>
            </Link>
            <JobPath number={index} />
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default Characters
