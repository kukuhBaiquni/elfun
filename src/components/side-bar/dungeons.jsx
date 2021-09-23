import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'

export default function JobPath({ data }) {
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')

  return (
    <ul className='absolute floatig-list w-52 z-10 hidden group-hover:flex flex-col top-0 left-28 bg-gray-200 dark:bg-gray-700 drop-shadow-xl group-hover:translate-x-10 transition-transform duration-300'>
      {data.child.map((item) => (
        <li className={`job-nesting ${data.textColor} ${data.hoverBgColor} relative hover:text-white dark:hover:text-white`} key={item.name}>
          <Link href={`/character/${url(item.name)}`}>
            <a className='py-1 px-2 flex items-center'>
              <Image
                alt={item.name}
                className='object-cover'
                height={20}
                src={item.img}
                width={20}
              />
              <p className='ml-1.5'>{item.name}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

JobPath.propTypes = {
  data: PropTypes.object,
}
