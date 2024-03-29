import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useImmer } from 'use-immer'
import { Fragment, useCallback } from 'react'
import TOWNS from 'constant/towns'
import clsx from 'clsx'
import Characters from './characters'
import Towns from './towns'

const routes = [{
  name: 'Main Page',
  path: '/',
}, {
  name: 'Recent Changes',
  path: '/changes',
}, {
  name: 'Characters',
  path: '',
  childData: true,
  childRenderer: <Characters />,
  collapsed: true,
  h: 'h-[480px]',
}, {
  name: 'Towns',
  path: '',
  childData: true,
  childRenderer: <Towns data={TOWNS} />,
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

export default function LeftNavigation() {
  const [navigation, setNavigation] = useImmer(routes)

  const onToggle = useCallback((name) => {
    setNavigation((old) => {
      const nav = old.find((nv) => nv.name === name)
      nav.collapsed = !nav.collapsed
    })
  }, [setNavigation])

  return (
    <nav className='font-titillium mr-0 sm:mr-3 hidden lg:block mb-10'>
      <ul className='py-2 px-2 bg-paper-general w-52 transition-general'>
        <div className='relative z-20'>
          {navigation.map((item) => (
            item.childData ? (
              <Fragment key={item.name}>
                <span
                  className='px-2 py-1 flex items-center hover:text-white cursor-pointer text-general hover:bg-gray-400 dark:hover:bg-gray-600'
                  onClick={() => onToggle(item.name)}
                >
                  <p className='mr-2'> {item.name}</p>
                  <ChevronDownIcon className={clsx(
                    item.collapsed ? 'transform rotate-0' : 'transform -rotate-180',
                    'w-5 h-5 transition-transform duration-300',
                  )}
                  />
                </span>
                <ul className={clsx(
                  item.collapsed ? 'opacity-0' : 'opacity-100',
                  item.collapsed ? 'h-0 overflow-hidden' : `${item.h} overflow-visible`,
                  'px-2.5 mt-1 transition-all duration-300',
                )}
                >
                  {item.childRenderer}
                </ul>
              </Fragment>
            ) : (
              <Link href={item.path} key={item.name}>
                <a>
                  <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white text-general'>
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
