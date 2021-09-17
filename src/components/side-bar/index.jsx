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
    <div className='px-2 w-[20%] mr-4 bg-gray-200 mt-8'>
      <ul>
        {navigation.map(({ title }) => (
          <li className='p-2 font-black hover:bg-sky-500 cursor-pointer duration-400 text-gray-500 transition-all' key={title}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
