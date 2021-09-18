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
    <div className='bg-white p-4 border-r border-gray-300 border-solid'>
      <ul>
        {navigation.map(({ name, child }) => (
          <li className={`py-2 px-4 font-black ${child.length ? '' : 'hover:bg-sky-400 hover:text-gray-200 rounded cursor-pointer'} duration-200 text-gray-500 transition-all`} key={name}>
            {child.length ? (
              <Fragment>
                {name}
                <ul className='mt-1'>
                  {child.map((item, index) => (
                    <li className='py-1.5 whitespace-nowrap group p-4 font-normal text-gray-500 hover:bg-sky-400 hover:translate-x-2 hover:text-gray-200 rounded cursor-pointer transition-all duration-300 relative z-10' key={item.name}>
                      {item.name}
                      {index === 0 && (
                        <ul className='absolute group-hover:opacity-100 opacity-0 -bottom-full p-2 rounded -right-full z-50 bg-white drop-shadow-2xl border border-gray-200 border-solid group-hover:translate-x-2 transition-all duration-300'>
                          <li className='text-gray-500 hover:bg-sky-400 transition-all duration-300 hover:text-gray-200 rounded p-2'>Sword Knight</li>
                          <li className='text-gray-500 hover:bg-sky-400 transition-all duration-300 hover:text-gray-200 rounded p-2'>Magic Knight Knight</li>
                          <li className='text-gray-500 hover:bg-sky-400 transition-all duration-300 hover:text-gray-200 rounded p-2'>Sheath Knight</li>
                          <li className='text-gray-500 hover:bg-sky-400 transition-all duration-300 hover:text-gray-200 rounded p-2'>Root Knight</li>
                        </ul>
                      )}
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
