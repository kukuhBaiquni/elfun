import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/solid'
import JobPath from './job-path'
import characters from './character-data'

function Characters() {
  const [collapse, setCollapse] = useState(true)
  return (
    <Fragment>
      <span className='flex items-center justify-center' onClick={() => setCollapse((old) => !old)}>
        <p className='mr-2'> Characters ({characters.length}) </p>
        <ChevronDownIcon className={`w-5 h-5 ${collapse ? 'transform -rotate-180' : 'transform rotate-0'} transition-all duration-300`} />
      </span>
      <ul className='my-2'>
        {characters.map((item, index) => (
          <li className={`relative z-10 whitespace-nowrap group font-normal ${item.hoverBgColor} hover:translate-x-2 cursor-pointer transition-transform duration-300`} key={item.name}>
            <Link href={`/character/${item.name.toLowerCase()}`}>
              <a className='flex items-center p-1 group-hover:text-white'>
                <Image
                  alt={item.name}
                  className='object-cover'
                  height={20}
                  src={item.img}
                  width={20}
                />
                <p className='ml-1.5'>{item.name}</p>
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
