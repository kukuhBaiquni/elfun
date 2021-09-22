import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useImmer } from 'use-immer'
import { Fragment, useCallback } from 'react'
import Characters from './characters'
import Towns from './towns'
import characters from './character-data'
import towns from './town-data'

const routes = [{
  name: 'Main Page',
  path: '/',
}, {
  name: 'Recent Changes',
  path: '/changes',
}, {
  name: 'Characters',
  path: '',
  childData: characters,
  childRenderer: <Characters data={characters} />,
  collapsed: true,
  h: 'h-[480px]',
}, {
  name: 'Towns',
  path: '',
  childData: towns,
  childRenderer: <Towns data={towns} />,
  collapsed: true,
  h: 'h-[540px]',
}, {
  name: 'Equipments',
  path: '/equipments',
}, {
  name: 'Npc\'s',
  path: '/npcs',
}, {
  name: 'Titles',
  path: '/titles',
}, {
  name: 'Ice Burner (Costumes)',
  path: '/ice-burners',
}, {
  name: 'Character Systems',
  path: '/character-systems',
}, {
  name: 'Miscellaneous',
  path: '/miscellaneous',
}]

function Sidebar() {
  const [navigation, setNavigation] = useImmer(routes)

  const onToggle = useCallback((name) => {
    setNavigation((old) => {
      const nav = old.find((nv) => nv.name === name)
      nav.collapsed = !nav.collapsed
    })
  }, [setNavigation])

  return (
    <nav className='font-titillium mr-0 sm:mr-3 hidden lg:block'>
      <ul className='py-2 px-2 bg-gray-200 dark:bg-gray-700 min-h-[750px] max-h-full w-52 transition-all duration-300'>
        <div className='relative z-10'>
          {navigation.map((item) => (
            item.childData ? (
              <Fragment key={item.name}>
                <span
                  className='px-2 py-1 flex items-center hover:text-white cursor-pointer text-gray-600 dark:text-gray-400 hover:bg-gray-400 dark:hover:bg-gray-600'
                  onClick={() => onToggle(item.name)}
                >
                  <p className='mr-2'> {item.name}({item.childData.length}) </p>
                  <ChevronDownIcon className={`w-5 h-5 ${navigation.collapsed ? 'transform -rotate-180' : 'transform rotate-0'} transition-transform duration-300`} />
                </span>
                <ul className={`px-2.5 mt-1 ${item.collapsed ? 'opacity-0' : 'opacity-100'} ${item.collapsed ? 'h-0 overflow-hidden' : `${item.h} overflow-visible`} transition-all duration-300`}>
                  {item.childRenderer}
                </ul>
              </Fragment>
            ) : (
              <Link href={item.path} key={item.name}>
                <a>
                  <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white dark:hover:text-white text-gray-600 dark:text-gray-400 '>
                    {item.name}
                  </li>
                </a>
              </Link>
            )
          ))}
        </div>
      </ul>
    </nav>
  )
}

export default Sidebar
