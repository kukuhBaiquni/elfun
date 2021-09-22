const content = [{
  name: 'Characters',
  list: [
    'Add/Edit Character data (with permission)',
    'Add picture to gallery (with permission)',
    'Suggesting/Repairing broken link or image',
  ],
}, {
  name: 'Towns',
  list: [
    'Add/Edit Town data (with permission)',
    'Add picture to gallery (with permission)',
    'Suggesting/Repairing broken link or image',
  ],
}, {
  name: 'Dungeons',
  list: [
    'Add/Edit Dungeon data (with permission)',
    'Add picture to gallery (with permission)',
    'Suggesting/Repairing broken link or image',
  ],
}, {
  name: 'Titles',
  list: [
    'Add/Edit Character data (with permission)',
    'Suggesting/Repairing broken link or image',
  ],
}]

export default function Contribute() {
  return (
    <section className='mt-6'>
      <h3 className='text-2xl font-semibold font-titillium dark:text-sky-400 text-sky-600'>Contribute</h3>
      <p className='mt-2'>You can contribute to these following categories: </p>
      <div className='grid grid-cols-4 gap-3 mt-4 text-sm'>
        {content.map((item) => (
          <div className='bg-gray-200 dark:bg-gray-700 px-3 py-2 relative' key={item.name}>
            <span className='text-lg font-titillium text-sky-400'>{item.name}</span>
            <ul className='list-disc pl-5 pr-1 mt-1'>
              {item.list.map((act, index) => (
                <li key={index}>{act}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
