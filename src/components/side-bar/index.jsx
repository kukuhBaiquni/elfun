import { Fragment } from 'react'
import JobPath from './job-path'

const navigation = [{
  name: 'Main Page',
  child: [],
}, {
  name: 'Recent Changes',
  child: [],
}, {
  name: 'Characters',
  child: [{
    name: 'Elsword',
    child: [{
      name: 'Sword Knight',
      child: [{
        name: 'Lord Knight',
        child: [],
      }, {
        name: 'Knight Emperor',
        child: [],
      }],
    }, {
      name: 'Magic Knight',
      child: [{
        name: 'Rune Slayer',
        child: [],
      }, {
        name: 'Rune Master',
        child: [],
      }],
    }, {
      name: 'Sheath Knight',
      child: [{
        name: 'Infinity Sword',
        child: [],
      }, {
        name: 'Immortal',
        child: [],
      }],
    }, {
      name: 'Root Knight',
      child: [{
        name: 'Sacred Templar',
        child: [],
      }, {
        name: 'Genesis',
        child: [],
      }],
    }],
  }, {
    child: [],
    name: 'Aisha',
  }, {
    child: [],
    name: 'Rena',
  }, {
    child: [],
    name: 'Raven',
  }, {
    child: [],
    name: 'Eve',
  }, {
    child: [],
    name: 'Chung',
  }, {
    child: [],
    name: 'Ara',
  }, {
    child: [],
    name: 'Elesis',
  }, {
    child: [],
    name: 'Add',
  }, {
    child: [],
    name: 'Lu/Ciel',
  }, {
    child: [],
    name: 'Rose',
  }, {
    child: [],
    name: 'Ain',
  }, {
    child: [],
    name: 'Laby',
  }, {
    child: [],
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
                <ul className='mt-1 z-10 relative'>
                  {child.map((item) => (
                    <li className='py-1.5 whitespace-nowrap group p-4 font-normal text-gray-500 hover:bg-sky-400 hover:translate-x-2 hover:text-gray-200 rounded cursor-pointer transition-all duration-300' key={item.name}>
                      {item.name}
                      {item.child?.length && <JobPath data={item.child} />}
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
