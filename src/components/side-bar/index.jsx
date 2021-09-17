const navigation = [{
  title: 'Main Page',
}, {
  title: 'Recent Changes',
}, {
  title: 'Npc\'s',
}, {
  title: 'Dungeons',
}, {
  title: 'Towns',
}, {
  title: 'Characters',
}, {
  title: 'Titles',
}]

function Sidebar() {
  return (
    <div className='p-4 fixed bg-sky-300'>
      <ul>
        {navigation.map(({ title }) => (
          <li className='py-2 px-4 font-black hover:bg-sky-500 hover:text-gray-200 rounded cursor-pointer duration-300 text-gray-500 transition-all' key={title}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
