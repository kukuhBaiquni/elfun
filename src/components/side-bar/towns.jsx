/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import Link from 'next/link'
import towns from 'store/town-data'
import clsx from 'clsx'
import Dungeons from './dungeons'

function Towns() {
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')

  return (
    <Fragment>
      {towns.map((item) => (
        <li
          className={clsx(item.hoverBgColor, item.hoverTextColor || 'dark:hover:text-white hover:text-white cursor-pointer', 'relative pl-1 text-gray-600 dark:text-gray-400 group hover:translate-x-2 transition-transform-opacity duration-300')}
          key={item.name}
        >
          <Link href={`/town/${url(item.name)}`}>
            <a className={clsx(item.hoverTextColor ? 'dark:group-hover:text-gray-600 group-hover:text-gray-600' : 'group-hover:text-white', 'flex items-center p-1')}>
              <img alt={item.name} className='w-5 h-5' src={item.img} />
              <p className='ml-1.5'>{item.name}</p>
            </a>
          </Link>
          <Dungeons data={item} />
        </li>
      ))}
    </Fragment>
  )
}

export default Towns
