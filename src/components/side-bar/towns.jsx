import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import Link from 'next/link'

import towns from './town-data'

function Towns({
  collapse,
}) {
  return (
    <Fragment>
      <span className='flex items-center justify-center' onClick={() => {}}>
        <p className='mr-2'> Towns ({towns.length}) </p>
        <ChevronDownIcon className={`w-5 h-5 ${collapse ? 'transform -rotate-180' : 'transform rotate-0'} transition-all duration-300`} />
      </span>
      <ul className='my-2'>
        {towns.map((item) => (
          <li className='relative z-10 whitespace-nowrap group font-normal hover:translate-x-2 cursor-pointer transition-transform duration-300' key={item.name}>
            <Link href={`/character/${item.name.toLowerCase()}`}>
              <a className='flex items-center p-1 group-hover:text-white'>
                <p className='ml-1.5'>{item.name}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default Towns
