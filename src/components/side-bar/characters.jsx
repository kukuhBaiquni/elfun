import Image from 'next/image'
import { Fragment, useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/solid'
import JobPath from './job-path'
import characters from './character-data'

function Characters() {
  const [collapse, setCollapse] = useState(true)

  const afterAnimation = (e) => {
    console.log(e.target)
  }

  return (
    <Fragment>
      <span className='px-2 py-1 flex items-center hover:text-white cursor-pointer text-gray-600 dark:text-gray-400 hover:bg-gray-400 dark:hover:bg-gray-600' onClick={() => setCollapse((old) => !old)}>
        <p className='mr-2'> Characters ({characters.length}) </p>
        <ChevronDownIcon className={`w-5 h-5 ${collapse ? 'transform -rotate-180' : 'transform rotate-0'} transition-transform duration-300`} />
      </span>
      <ul className={`px-2.5 mt-1 ${collapse ? 'h-0' : 'h-[480px]'} transition-all duration-300`} onAnimationEnd={afterAnimation}>
        {characters.map((item, index) => (
          <li className={`relative z-10 pl-1 ${collapse ? 'opacity-0' : 'opacity-100'} hover:text-white text-gray-600 dark:text-gray-400 dark:hover:text-white group ${item.hoverBgColor} hover:translate-x-2 cursor-pointer transition-transform-opacity duration-300`} key={item.name}>
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
