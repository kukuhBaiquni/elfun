import { Fragment } from 'react'

const navigation = [{
  child: [],
  name: 'Main Page',
}, {
  child: [],
  name: 'Recent Changes',
}, {
  name: 'Characters',
  child: [{
    name: 'Elsword',
  }, {
    name: 'Aisha',
  }, {
    name: 'Rena',
  }, {
    name: 'Raven',
  }, {
    name: 'Eve',
  }, {
    name: 'Chung',
  }, {
    name: 'Ara',
  }, {
    name: 'Elesis',
  }, {
    name: 'Add',
  }, {
    name: 'Lu/Ciel',
  }, {
    name: 'Rose',
  }, {
    name: 'Ain',
  }, {
    name: 'Laby',
  }, {
    name: 'Noah',
  }],
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
    <div className='bg-white p-4 h-sidebar-overflow'>
      <div className='pr-4 h-sidebar overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-sky-300 scrollbar-track-sky-200'>
        <ul>
          {navigation.map(({ name, child }) => (
            <li className={`py-2 px-4 font-black ${child.length ? '' : 'hover:bg-gray-500 hover:text-gray-200 rounded cursor-pointer'} duration-200 text-gray-500 transition-all`} key={name}>
              {child.length ? (
                <Fragment>
                  {name}
                  <ul className='mt-1'>
                    {child.map((item) => (
                      <li className='py-2 whitespace-nowrap pl-4 font-normal text-gray-500 hover:bg-gray-500 hover:text-gray-200 rounded cursor-pointer transition-all duration-300' key={item.name}>
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
    </div>
  )
}

export default Sidebar
