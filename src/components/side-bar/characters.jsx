/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Fragment } from 'react'
import clsx from 'clsx'
import JobPath from './job-path'

function Characters({ data }) {
  return (
    <Fragment>
      {data.map((item) => (
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
          <JobPath data={item} />
        </li>
      ))}
    </Fragment>
  )
}

Characters.propTypes = {
  data: PropTypes.array,
}

export default Characters
