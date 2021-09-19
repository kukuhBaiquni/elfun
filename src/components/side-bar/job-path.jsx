import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import character from './character-data'

function JobPath({ number }) {
  const {
    textColor, textHoverColor, hoverBgColor,
  } = character[number]
  const TextColor = (def) => (def ? 'hover:text-gray-500' : 'hover:text-gray-200')
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')

  return (
    <ul className='absolute floatig-list w-56 z-10 hidden group-hover:flex flex-col top-0 left-20 bg-white drop-shadow-xl group-hover:translate-x-10 transition-transform duration-300'>
      {character[number].child.map((item) => (
        <li className={`job-nesting ${textColor} ${hoverBgColor} ${TextColor(textHoverColor)} relative`} key={item.name}>
          <Link href={`/character/${url(item.name)}`}>
            <a className='py-2 px-5 flex items-center'>
              <Image
                alt={item.name}
                className='object-cover'
                height={25}
                src={item.img}
                width={25}
              />
              <p className='ml-1.5'>{item.name}</p>
            </a>
          </Link>
          <div className='opacity-0'>
            <ul className='absolute z-10 min-w-max bg-white left-56 top-0 drop-shadow-md'>
              {item.child.map((job) => (
                <li key={job.name}>
                  <Link href={`/character/${url(job.name)}`}>
                    <a className={`flex items-center ${textColor} ${hoverBgColor} ${TextColor(textHoverColor)} py-2 px-5`}>
                      <Image
                        alt={job.name}
                        className='rounded object-cover'
                        height={25}
                        src={job.img}
                        width={25}
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
