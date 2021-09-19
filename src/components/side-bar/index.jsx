import { Fragment } from 'react'
import Characters from './characters'

const navigation = [{
  name: 'Main Page',
  child: [],
}, {
  name: 'Recent Changes',
  child: [],
}, {
  name: 'Towns',
  child: [{
    name: 'Ruben',
  }, {
    name: 'Elder',
  }, {
    name: 'Bethma',
  }, {
    name: 'Altera',
  }, {
    name: 'Feita',
  }, {
    name: 'Velder',
  }, {
    name: 'Hamel',
  }, {
    name: 'Sander',
  }, {
    name: 'Lanox',
  }, {
    name: 'Atlas',
  }, {
    name: 'Elysion',
  }, {
    name: 'Elrianode',
  }, {
    name: 'Varnimyr',
  }, {
    name: 'Rigomor',
  }, {
    name: 'Master Road',
  }, {
    name: 'Pruinaum',
  }, {
    name: 'Pruinaum Outskirt',
  }],
}, {
  child: [],
  name: 'Npc\'s',
}, {
  child: [],
  name: 'Titles',
}]

function Sidebar() {
  return (
    <div className='bg-white p-4 border-r border-gray-300 border-solid hidden sm:block'>
      <ul>
        {navigation.map(({ name, child }) => (
          <li className={`py-1 px-4 font-black ${child.length ? '' : 'hover:bg-sky-400 hover:text-gray-200 rounded cursor-pointer'} mt-1 duration-200 text-gray-500 transition-all`} key={name}>
            {child.length ? (
              <Fragment>
                <Characters />
                {name}
                <ul>
                  {child.map((item) => (
                    <li className='py-1.5 relative pl-2 z-10 whitespace-nowrap group font-normal text-gray-400 hover:translate-x-2 hover:text-sky-400 rounded cursor-pointer transition-transform duration-300 mt-0.5' key={item.name}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </Fragment>
            ) : name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
