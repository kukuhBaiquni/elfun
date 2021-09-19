import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import JobPath from './job-path'
import character from './character-data'

function Characters() {
  const TextColor = (def) => (def ? 'group-hover:text-gray-500' : 'group-hover:text-white')
  return (
    <Fragment>
      Characters ({character.length})
      <ul className='my-2'>
        {character.map((item, index) => (
          <li className={`relative z-10 whitespace-nowrap group font-normal ${item.hoverBgColor} hover:translate-x-2 cursor-pointer transition-transform duration-300`} key={item.name}>
            <Link href={`/character/${item.name.toLowerCase()}`}>
              <a className='flex items-center p-1'>
                <Image
                  alt={item.name}
                  className='object-cover'
                  height={20}
                  src={item.img}
                  width={20}
                />
                <p className={`ml-1.5 ${TextColor(item.textHoverColor)}`}>{item.name}</p>
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
