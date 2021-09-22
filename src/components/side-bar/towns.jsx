import { Fragment } from 'react'
import Link from 'next/link'
import towns from './town-data'

function Towns() {
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')

  return (
    <Fragment>
      {towns.map((item) => (
        <li
          className='relative hover:text-white cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white group hover:bg-sky-500 hover:translate-x-2 transition-transform-opacity duration-300'
          key={item.name}
        >
          <Link href={`/town/${url(item.name)}`}>
            <a className='flex items-center p-1 group-hover:text-white'>
              <p className='ml-1.5'>{item.name}</p>
            </a>
          </Link>
        </li>
      ))}
    </Fragment>
  )
}

export default Towns