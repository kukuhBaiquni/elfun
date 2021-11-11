/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Fragment } from 'react'
import clsx from 'clsx'
import { baseClass } from 'constant/characters'
import JobPath from './job-path'

export default function Characters() {
  return (
    <Fragment>
      {baseClass.map((item, index) => (
        <li
          className={clsx('relative z-10 pl-1 group hover:translate-x-2 cursor-pointer transition-transform-opacity duration-300 dark:text-gray-400 text-gray-600', item.hoverBgColor, item.hoverTextColor || 'hover:text-white dark:hover:text-white')}
          key={item.name}
        >
          <Link href={`/character/${item.name.toLowerCase()}`}>
            <a className={clsx(item.hoverTextColor && 'dark:group-hover:text-gray-600', 'flex items-center p-1')}>
              <img alt={item.name} height={20} src={item.img} width={20} />
              <p className='ml-1.5'>{item.name}</p>
            </a>
          </Link>
          <JobPath characterIndex={index} />
        </li>
      ))}
    </Fragment>
  )
}
