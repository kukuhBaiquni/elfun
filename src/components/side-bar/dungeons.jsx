import Link from 'next/link'
import PropTypes from 'prop-types'
import clsx from 'clsx'

export default function Dungeons({ data }) {
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')

  return (
    <ul className='absolute floatig-list min-w-max z-10 hidden group-hover:flex flex-col top-0 left-28 bg-gray-200 dark:bg-gray-700 drop-shadow-xl group-hover:translate-x-10 transition-transform duration-300'>
      {data.child.map((item) => (
        <li className={clsx(data.textColor, data.hoverBgColor, data.hoverTextColor || 'hover:text-white dark:hover:text-white', 'job-nesting')} key={item.name}>
          <Link href={`/character/${url(item.name)}`}>
            <a className='py-1 pl-2 pr-4 flex'>
              {item.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

Dungeons.propTypes = {
  data: PropTypes.object,
}
