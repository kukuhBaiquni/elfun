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
    <div className='px-4 w-[20%] mr-4 bg-gray-200 mt-8'>
      <ul>
        {navigation.map(({ title }) => (
          <li className='py-2 hover:translate-x-1.5 font-semibold hover:text-sky-500 cursor-pointer duration-400 text-gray-500 transition-transform font-' key={title}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
