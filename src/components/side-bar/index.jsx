import { Fragment } from 'react'
import Characters from './characters'
import Towns from './towns'

const navigation = [{
  name: 'Main Page',
  child: [],
}, {
  name: 'Recent Changes',
  child: [],
}, {
  child: [],
  name: 'Npc\'s',
}, {
  child: [],
  name: 'Titles',
}]

function Sidebar() {
  return (
    <div className='p-2 bg-gray-200 dark:bg-gray-700 w-60 hidden sm:block transition-all duration-300'>
      <ul className='py-1 px-2'>
        {navigation.map(({ name, child }) => (
          <li className='hover:bg-sky-500 px-2 py-1 cursor-pointer hover:text-white dark:hover:text-white mt-1 text-gray-600 dark:text-gray-400' key={name}>
            {child.length ? (
              <Fragment>
                <div className='relative bg-gray-200 dark:bg-gray-700'>
                  {name}
                  <ul>
                    {child.map((item) => (
                      <li className='py-1.5 relative pl-2 z-10 whitespace-nowrap group font-normal text-gray-600 hover:translate-x-2 hover:text-sky-500 rounded cursor-pointer transition-transform duration-300 mt-0.5' key={item.name}>
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            ) : name}
          </li>
        ))}
        <Characters />
        <Towns />
      </ul>
    </div>
  )
}

export default Sidebar
