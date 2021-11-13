/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import Link from 'next/link'
import TOWNS from 'constant/towns'
import clsx from 'clsx'
import Dungeons from './dungeons'

function Towns() {
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')

  return (
    <Fragment>
      {TOWNS.map((item) => (
        <li
          className={clsx(
            item.hoverBgColor, item.hoverTextColor || 'dark:hover:text-white hover:text-white cursor-pointer',
            'relative pl-1 text-gray-600 dark:text-gray-400 group hover:translate-x-2 transition-transform-opacity duration-300',
          )}
          key={item.name}
        >
          <Link href={`/town/${url(item.name)}`}>
            <a className={clsx(
              item.hoverTextColor ? 'dark:group-hover:text-gray-600 group-hover:text-gray-600' : 'group-hover:text-white',
              'flex items-center p-1',
            )}
            >
              <img alt={item.name} height={20} src={item.img} width={20} />
              <p className='ml-1.5'>{item.name}</p>
            </a>
          </Link>
          <Dungeons town={item} townId={item.townId} />
        </li>
      ))}
    </Fragment>
  )
}

export default Towns
