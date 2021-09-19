import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import towns from './town-data'

function Towns() {
  const [collapse, setCollapse] = useState(true)

  const url = (text) => text.toLowerCase().replace(/\s/g, '-')

  return (
    <div className='relative z-10'>
      <span className='px-2 py-1 flex items-center hover:text-white cursor-pointer text-gray-600 dark:text-gray-400 hover:bg-gray-400 dark:hover:bg-gray-600' onClick={() => setCollapse((old) => !old)}>
        <p className='mr-2'> Town ({towns.length}) </p>
        <ChevronDownIcon className={`w-5 h-5 ${collapse ? 'transform -rotate-180' : 'transform rotate-0'} transition-transform duration-300`} />
      </span>
      <ul className={`px-2.5 mt-1 ${collapse ? 'h-0' : 'h-[540px]'} transition-all duration-300`}>
        {towns.map((item) => (
          <li className={`relative ${collapse ? 'opacity-0' : 'opacity-100'} hover:text-white cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white group hover:bg-sky-500 hover:translate-x-2 transition-all duration-300`} key={item.name}>
            <Link href={`/town/${url(item.name)}`}>
              <a className='flex items-center p-1 group-hover:text-white'>
                <p className='ml-1.5'>{item.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Towns
