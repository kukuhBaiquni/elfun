import Link from 'next/link'
import { useImmer } from 'use-immer'
import Characters from './characters'
import Towns from './towns'

const navigation = [{
  name: 'Npc\'s',
  path: '/npcs',
}, {
  name: 'Titles',
  path: '/titles',
}]

function Sidebar() {
  const [collapse, setCollapse] = useImmer({
    character: true,
    town: true,
  })
  return (
    <div className='p-2 bg-gray-200 dark:bg-gray-700 min-h-[750px] w-60 hidden sm:block transition-all duration-300'>
      <ul className='py-1 px-2'>
        <Link href='/'>
          <a>
            <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white dark:hover:text-white mt-1 text-gray-600 dark:text-gray-400'>
              Main Page
            </li>
          </a>
        </Link>
        <Link href='/changes'>
          <a>
            <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white dark:hover:text-white mt-1 text-gray-600 dark:text-gray-400'>
              Recent Changes
            </li>
          </a>
        </Link>
        <Characters collapse={collapse} setCollapse={setCollapse} />
        <Towns collapse={collapse} setCollapse={setCollapse} />
        <div className='relative z-10'>
          {navigation.map(({ name, path }) => (
            <Link href={path} key={name}>
              <a>
                <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white dark:hover:text-white mt-1 text-gray-600 dark:text-gray-400 '>
                  {name}
                </li>
              </a>
            </Link>
          ))}
        </div>
      </ul>
    </div>
  )
}

export default Sidebar
