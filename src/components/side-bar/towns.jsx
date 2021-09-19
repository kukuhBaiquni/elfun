import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import towns from './town-data'

function Towns({
  collapse,
}) {
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')
  return (
    <div className='whitespace-nowrap'>
      <span className='px-2 py-1 flex items-center hover:text-white cursor-pointer text-gray-600 dark:text-gray-400 hover:bg-gray-400 dark:hover:bg-gray-600' onClick={() => {}}>
        <p className='mr-2'> Town ({towns.length}) </p>
        <ChevronDownIcon className={`w-5 h-5 ${collapse ? 'transform -rotate-180' : 'transform rotate-0'} transition-transform duration-300`} />
      </span>
      <ul className='px-2.5 mt-1'>
        {towns.map((item) => (
          <li className='relative z-10 whitespace-nowrap hover:text-white cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:text-white group hover:bg-sky-500 hover:translate-x-2 transition-transform duration-300' key={item.name}>
            <Link href={`/character/${item.name.toLowerCase()}`}>
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
