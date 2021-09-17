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
  child: [],
  name: 'Dungeons',
}, {
  child: [],
  name: 'Towns',
}, {
  child: [],
  name: 'Npc\'s',
}, {
  child: [],
  name: 'Titles',
}]

function Sidebar() {
  return (
    <div className='p-4 h-sidebar bg-sky-100 flex-grow flex'>
      <ul>
        {navigation.map(({ name, child }) => (
          <li className='py-1 px-4 font-black hover:bg-sky-500 hover:text-gray-200 rounded cursor-pointer duration-300 text-gray-500 transition-all' key={name}>
            {child.length ? (
              <ul>
                {child.map((item) => (
                  <li className='font-normal' key={item.name}>
                    {item.name}
                  </li>
                ))}
              </ul>
            ) : name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
