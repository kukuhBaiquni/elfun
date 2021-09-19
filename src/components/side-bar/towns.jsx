import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import towns from './town-data'

function Towns({
  collapse,
}) {
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')
  return (
    <div className='px-2 whitespace-nowrap mt-1.5'>
      <span className='flex items-center text-gray-600 dark:text-gray-400 justify-between' onClick={() => {}}>
        <p> Towns ({towns.length}) </p>
        <ChevronDownIcon className={`w-5 h-5 ${collapse ? 'transform -rotate-180' : 'transform rotate-0'} transition-all duration-300`} />
      </span>
      <ul className='my-1'>
        {towns.map((item) => (
          <li className='relative z-10 whitespace-nowrap group font-normal text-gray-600 dark:text-gray-400 hover:bg-sky-400 hover:translate-x-2 cursor-pointer transition-transform duration-300' key={item.name}>
            <Link href={`/towns/${url(item.name)}`}>
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
