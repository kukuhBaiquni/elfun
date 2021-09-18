import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import JobPath from './job-path'
import elsword from '../../../public/images/avatar/elsword/elsword.png'
import aisha from '../../../public/images/avatar/aisha/aisha.png'
import rena from '../../../public/images/avatar/rena/rena.png'
import raven from '../../../public/images/avatar/raven/raven.png'
import eve from '../../../public/images/avatar/eve/eve.png'
import chung from '../../../public/images/avatar/chung/chung.png'
import ara from '../../../public/images/avatar/ara/ara.png'
import elesis from '../../../public/images/avatar/elesis/elesis.png'
import add from '../../../public/images/avatar/add/add.png'
import lu from '../../../public/images/avatar/lu-ciel/lu.png'
import ciel from '../../../public/images/avatar/lu-ciel/ciel.png'
import rose from '../../../public/images/avatar/rose/rose.png'
import ain from '../../../public/images/avatar/ain/ain.png'
import laby from '../../../public/images/avatar/laby/laby.png'
import noah from '../../../public/images/avatar/noah/noah.png'

function Characters() {
  return (
    <Fragment>
      Characters
      <ul className='my-2'>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-elsword px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/elsword'>
            <a className='flex items-center'>
              <Image
                alt='Elsword'
                className='rounded-full object-cover'
                height={30}
                src={elsword}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-elsword'>Elsword</p>
            </a>
          </Link>
          <JobPath number={0} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-aisha px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/aisha'>
            <a className='flex items-center'>
              <Image
                alt='Aisha'
                className='rounded-full object-cover'
                height={30}
                src={aisha}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-aisha'>Aisha</p>
            </a>
          </Link>
          <JobPath number={1} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-rena px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/rena'>
            <a className='flex items-center'>
              <Image
                alt='Rena'
                className='rounded-full object-cover'
                height={30}
                src={rena}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-rena'>Rena</p>
            </a>
          </Link>
          <JobPath number={2} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-raven px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/raven'>
            <a className='flex items-center'>
              <Image
                alt='Raven'
                className='rounded-full object-cover'
                height={30}
                src={raven}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-raven'>Raven</p>
            </a>
          </Link>
          <JobPath number={3} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-eve px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/eve'>
            <a className='flex items-center'>
              <Image
                alt='Eve'
                className='rounded-full object-cover'
                height={30}
                src={eve}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-eve'>Eve</p>
            </a>
          </Link>
          <JobPath number={4} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-chung px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/chung'>
            <a className='flex items-center'>
              <Image
                alt='Chung'
                className='rounded-full object-cover'
                height={30}
                src={chung}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-chung'>Chung</p>
            </a>
          </Link>
          <JobPath number={5} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-ara px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/ara'>
            <a className='flex items-center'>
              <Image
                alt='Ara'
                className='rounded-full object-cover'
                height={30}
                src={ara}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-ara'>Ara</p>
            </a>
          </Link>
          <JobPath number={6} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-elesis px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/elesis'>
            <a className='flex items-center'>
              <Image
                alt='Elesis'
                className='rounded-full object-cover'
                height={30}
                src={elesis}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-elesis'>Elesis</p>
            </a>
          </Link>
          <JobPath number={7} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-add px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/add'>
            <a className='flex items-center'>
              <Image
                alt='Add'
                className='rounded-full object-cover'
                height={30}
                src={add}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-add'>Add</p>
            </a>
          </Link>
          <JobPath number={8} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-luciel px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/lu'>
            <a className='flex items-center'>
              <Image
                alt='Lu'
                className='rounded-full object-cover'
                height={30}
                src={lu}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-luciel'>Lu</p>
            </a>
          </Link>
          <JobPath number={9} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-luciel px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/ciel'>
            <a className='flex items-center'>
              <Image
                alt='Ciel'
                className='rounded-full object-cover'
                height={30}
                src={ciel}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-luciel'>Ciel</p>
            </a>
          </Link>
          <JobPath number={10} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-rose px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/rose'>
            <a className='flex items-center'>
              <Image
                alt='Rose'
                className='rounded-full object-cover'
                height={30}
                src={rose}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-rose'>Rose</p>
            </a>
          </Link>
          <JobPath number={11} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-ain px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/ain'>
            <a className='flex items-center'>
              <Image
                alt='Ain'
                className='rounded-full object-cover'
                height={30}
                src={ain}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-ain'>Ain</p>
            </a>
          </Link>
          <JobPath number={12} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-laby px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/laby'>
            <a className='flex items-center'>
              <Image
                alt='Laby'
                className='rounded-full object-cover'
                height={30}
                src={laby}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-laby'>Laby</p>
            </a>
          </Link>
          <JobPath number={13} />
        </li>
        <li className='py-2 relative z-10 whitespace-nowrap group font-normal hover:bg-noah px-2 hover:translate-x-2 text-gray-400 rounded cursor-pointer transition-transform duration-300'>
          <Link href='/character/noah'>
            <a className='flex items-center'>
              <Image
                alt='Noah'
                className='rounded-full object-cover'
                height={30}
                src={noah}
                width={30}
              />
              <p className='ml-1.5 group-hover:text-gray-200 text-noah'>Noah</p>
            </a>
          </Link>
          <JobPath number={14} />
        </li>
      </ul>
    </Fragment>
  )
}

export default Characters
