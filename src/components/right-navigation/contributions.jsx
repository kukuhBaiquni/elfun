import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useImmer } from 'use-immer'
import { Fragment, useCallback } from 'react'
import TOWNS from 'constant/towns'
import clsx from 'clsx'

export default function RightNavigation() {
  return (
    <nav className='font-titillium mr-0 sm:ml-3 hidden xl:block'>
      <ul className='py-2 px-2 bg-gray-200 dark:bg-gray-700 max-h-full w-52 transition-all duration-300'>
        <div className='relative z-20'>
          <h6 className='text-sky-500 font-bold'>
            Contributions
          </h6>
          <Link href='/'>
            <a>
              <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white text-general'>
                Contribution
              </li>
            </a>
          </Link>
        </div>
      </ul>
    </nav>
  )
}
