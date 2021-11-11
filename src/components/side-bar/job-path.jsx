/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PropTypes from 'prop-types'
import clsx from 'clsx'

function JobPath({ data }) {
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')

  return (
    <ul className='absolute floatig-list w-52 z-10 hidden group-hover:flex flex-col top-0 left-28 bg-gray-200 dark:bg-gray-700 drop-shadow-xl group-hover:translate-x-10 transition-transform duration-300'>
      {data.child.map((item) => (
        <li
          className={clsx(
            data.textColor, data.hoverBgColor, data.hoverTextColor || 'hover:text-white dark:hover:text-white',
            'job-nesting relative',
          )}
          key={item.name}
        >
          <Link href={`/character/${url(item.name)}`}>
            <a className='py-1 px-2 flex items-center'>
              <img alt={item.name} height={20} src={item.img} width={20} />
              <p className='ml-1.5'>{item.name}</p>
            </a>
          </Link>
          <div className='opacity-0'>
            <ul className='absolute z-10 min-w-max bg-gray-200 dark:bg-gray-700 left-52 top-0 drop-shadow-md'>
              {item.child.map((job) => (
                <li key={job.name}>
                  <Link href={`/character/${url(job.name)}`}>
                    <a className={clsx(
                      data.textColor, data.hoverBgColor, data.hoverTextColor || 'hover:text-white dark:hover:text-white', 'flex items-center py-1 px-2 pr-16',
                    )}
                    >
                      <img alt={job.name} height={20} src={job.img} width={20} />
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
  data: PropTypes.object,
}

export default JobPath
