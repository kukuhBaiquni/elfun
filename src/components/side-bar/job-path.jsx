import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import character from './character-data'

function JobPath({ number }) {
  const { color, name } = character[number]
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')

  return (
    <ul className='absolute floatig-list w-56 z-10 hidden group-hover:flex flex-col top-0 left-20 bg-white drop-shadow-2xl group-hover:translate-x-10 transition-transform duration-300'>
      {character[number].child.map((item) => (
        <li className={`job-nesting text-gray-500 hover:bg-${color} hover:text-gray-200 py-2 px-5 relative`} key={item.name}>
          <Link href={`/character/${url(name)}/${url(item.name)}`}>
            <a className='flex items-center'>
              <Image
                alt={item.name}
                className='rounded-full object-cover'
                height={30}
                src={item.img}
                width={30}
              />
              <p className='ml-1.5'>{item.name}</p>
            </a>
          </Link>
          <div className='opacity-0'>
            <ul className='absolute z-20 min-w-max bg-white left-56 top-0 drop-shadow-2xl'>
              {item.child.map((job, index) => (
                <li className={`text-${color} hover:bg-${color} hover:text-gray-200 py-2 px-5`} key={job.name}>
                  <Link href={`/character/${url(name)}/${url(job.name)}`}>
                    <a className='flex items-center'>
                      <Image
                        alt={job.name}
                        className={`rounded${index === 0 ? '-full' : ''} object-cover`}
                        height={30}
                        src={job.img}
                        width={30}
                      />
                      <p className='ml-1.5'>{job.name}</p>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}

JobPath.propTypes = {
  number: PropTypes.number,
}

export default JobPath
