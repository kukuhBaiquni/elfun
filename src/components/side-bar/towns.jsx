import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import towns from './town-data'
import Dungeons from './dungeons'

function Towns() {
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')

  return (
    <Fragment>
      {towns.map((item) => (
        <li
          className={`relative hover:text-white cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white group ${item.hoverBgColor} hover:translate-x-2 transition-transform-opacity duration-300`}
          key={item.name}
        >
          <Link href={`/town/${url(item.name)}`}>
            <a className='flex items-center p-1 group-hover:text-white'>
              <Image
                alt={item.name}
                className='object-cover'
                height={20}
                loading='eager'
                src={item.img}
                width={20}
              />
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
