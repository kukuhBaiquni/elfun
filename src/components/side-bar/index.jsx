import { useState } from 'react'
import Link from 'next/link'
import Characters from './characters'
import Towns from './towns'

const navigation = [{
  name: 'Main Page',
  path: '/',
}, {
  name: 'Recent Changes',
  path: '/changes',
}, {
  name: 'Npc\'s',
  path: '/npcs',
}, {
  name: 'Titles',
  path: '/titles',
}]

function Sidebar() {
  const [collapse, setCollapse] = useState({
    character: true,
    town: true,
  })
  return (
    <div className='p-2 bg-gray-200 dark:bg-gray-700 w-60 hidden sm:block transition-all duration-300'>
      <ul className='py-1 px-2'>
        <Characters collapse={collapse} setCollapse={setCollapse} />
        <Towns collapse={collapse} setCollapse={setCollapse} />
        {navigation.map(({ name, path }) => (
          <Link href={path} key={name}>
            <a>
              <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white dark:hover:text-white mt-1 text-gray-600 dark:text-gray-400'>
                {name}
              </li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
