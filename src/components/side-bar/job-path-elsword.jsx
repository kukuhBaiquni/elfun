import Image from 'next/image'
import swordKnight from '../../../public/images/avatar/sword-knight.png'
import lordKnight from '../../../public/images/avatar/lord-knight.png'
import lordKnightTrans from '../../../public/images/avatar/lord-knight-trans.png'
import knightEmperor from '../../../public/images/avatar/knight-emperor.png'
import magicKnight from '../../../public/images/avatar/magic-knight.png'
import sheathKnight from '../../../public/images/avatar/sheath-knight.png'
import rootKnight from '../../../public/images/avatar/root-knight.png'
// import runeSlayer from '../../../public/images/avatar/sword-knight.png'

function JobPath() {
  return (
    <ul className='absolute floatig-list w-48 z-10 hidden group-hover:flex flex-col top-0 left-1/2 bg-red-300 drop-shadow-2xl group-hover:translate-x-10 transition-transform duration-300'>
      <li className='job-nesting text-gray-500 hover:bg-elsword hover:text-gray-200 py-2 px-5 relative'>
        <span className='flex items-center'>
          <Image
            alt='Sword Knight'
            className='rounded-full object-cover'
            height={30}
            src={swordKnight}
            width={30}
          />
          <p className='ml-1.5'>Sword Knight</p>
        </span>
        <div className='opacity-0'>
          <ul className='absolute z-20 p-2 rounded bg-elsword left-40 top-0'>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Lord Knight
            </li>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Lord Knight Transcendent
            </li>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Knight Emperor
            </li>
          </ul>
        </div>
      </li>
      <li className='job-nesting text-gray-500 hover:bg-elsword hover:text-gray-200 py-2 px-5 relative'>
        <span className='flex items-center'>
          <Image
            alt='Magic Knight'
            className='rounded-full object-cover'
            height={30}
            src={magicKnight}
            width={30}
          />
          <p className='ml-1.5'>Magic Knight</p>
        </span>
        <div className='opacity-0'>
          <ul className='absolute z-20 p-2 rounded bg-elsword left-40 top-0'>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Rune Slayer
            </li>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Rune Slayer Transcendent
            </li>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Rune Master
            </li>
          </ul>
        </div>
      </li>
      <li className='job-nesting text-gray-500 hover:bg-elsword hover:text-gray-200 py-2 px-5 relative'>
        <span className='flex items-center'>
          <Image
            alt='Sheath Knight'
            className='rounded-full object-cover'
            height={30}
            src={sheathKnight}
            width={30}
          />
          <p className='ml-1.5'>Sheath Knight</p>
        </span>
        <div className='opacity-0'>
          <ul className='absolute z-20 p-2 rounded bg-elsword left-40 top-0'>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Rune Slayer
            </li>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Rune Slayer Transcendent
            </li>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Rune Master
            </li>
          </ul>
        </div>
      </li>
      <li className='job-nesting text-gray-500 hover:bg-elsword hover:text-gray-200 py-2 px-5 relative'>
        <span className='flex items-center'>
          <Image
            alt='Root Knight'
            className='rounded-full object-cover'
            height={30}
            src={rootKnight}
            width={30}
          />
          <p className='ml-1.5'>Root Knight</p>
        </span>
        <div className='opacity-0'>
          <ul className='absolute z-20 p-2 rounded bg-elsword left-40 top-0'>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Rune Slayer
            </li>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Rune Slayer Transcendent
            </li>
            <li className='text-gray-200 hover:bg-white hover:text-elsword transition-all duration-300 rounded py-2 px-5'>
              Rune Master
            </li>
          </ul>
        </div>
      </li>
    </ul>
  )
}

export default JobPath
