import Image from 'next/image'
import character from './character-data'

function JobPath() {
  const { color } = character[0]
  return (
    <ul className='absolute floatig-list w-48 z-10 hidden group-hover:flex flex-col top-0 left-1/2 bg-white drop-shadow-2xl group-hover:translate-x-10 transition-transform duration-300'>
      {character[0].child.map((item) => (
        <li className={`job-nesting text-gray-500 hover:bg-${color} hover:text-gray-200 py-2 px-5 relative`} key={item.name}>
          <span className='flex items-center'>
            <Image
              alt={item.name}
              className='rounded-full object-cover'
              height={30}
              src={item.img}
              width={30}
            />
            <p className='ml-1.5'>{item.name}</p>
          </span>
          <div className='opacity-0'>
            <ul className='absolute z-20 w-72 bg-white left-40 top-0 drop-shadow-2xl'>
              {item.child.map((job, index) => (
                <li className={`text-${color} hover:bg-${color} hover:text-gray-200 py-2 px-5`} key={job.name}>
                  <span className='flex items-center'>
                    <Image
                      alt={job.name}
                      className={`rounded${index === 0 ? '-full' : ''} object-cover`}
                      height={30}
                      src={job.img}
                      width={30}
                    />
                    <p className='ml-1.5'>{job.name}</p>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default JobPath
