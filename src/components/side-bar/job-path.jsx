/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import firstClass from 'constant/characters/first-class'
import secondClass from 'constant/characters/second-class'
import transcendentClass from 'constant/characters/transcendent-class'
import thirdClass from 'constant/characters/third-class'

function JobPath({ characterIndex }) {
  const url = (text) => text.toLowerCase().replace(/\s/g, '-')
  const dataLevel1 = firstClass.filter((cls) => cls.characterId === characterIndex)
  const dataLevel2 = (index) => [
    ...secondClass,
    ...transcendentClass,
    ...thirdClass,
  ].filter(
    (cls) => cls.characterId === characterIndex && cls.pathId === index,
  )

  return (
    <ul className={clsx(
      'absolute floatig-list w-52 z-10 hidden group-hover:flex flex-col top-0 left-28 bg-gray-200 dark:bg-gray-700',
      'drop-shadow-xl group-hover:translate-x-10 transition-transform duration-300',
    )}
    >
      {dataLevel1.map((item, index) => (
        <li
          className={clsx(
            item.textColor, item.hoverBgColor, item.hoverTextColor || 'hover:text-white dark:hover:text-white',
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
              {dataLevel2(index).map((cls) => (
                <li key={cls.name}>
                  <Link href={`/character/${url(cls.name)}`}>
                    <a className={clsx(
                      cls.textColor, cls.hoverBgColor, cls.hoverTextColor || 'hover:text-white dark:hover:text-white', 'flex items-center py-1 px-2 pr-16',
                    )}
                    >
                      <img alt={cls.name} height={20} src={cls.img} width={20} />
                      <p className='ml-1.5'>{cls.name}</p>
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
  characterIndex: PropTypes.number,
}

export default JobPath
