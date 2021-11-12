/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { ChevronDoubleDownIcon, CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import {
  firstClass, secondClass, transcendentClass, thirdClass,
} from 'constant/characters'
import clsx from 'clsx'

export default function JobPathMapper(props) {
  const {
    data, selectedCharacter, setSelectedCharacter, closeModal,
  } = props
  const { push, pathname } = useRouter()

  return (
    <Fragment>
      <div className={clsx(
        data?.bgColor, data?.hoverTextColor
          ? 'text-gray-600'
          : 'text-white',
        'py-2 px-3 text-lg flex justify-between items-center',
      )}
      >
        <h5>Choose Character Path</h5>
        <XIcon className='w-6 h-6 cursor-pointer' onClick={closeModal} />
      </div>
      <div className='p-2 mt-3 flex flex-col sm:text-sm text-xs font-titillium'>
        <div className='flex flex-col justify-center items-center'>
          <div className={clsx(
            selectedCharacter?.name === data?.name
              ? data?.bgColor
              : 'dark:bg-gray-500 bg-gray-400',
            'p-1 mb-1 flex flex-col items-center cursor-pointer hover:opacity-75 transition-all duration-300 relative',
          )}
          >
            <img
              alt={data?.name}
              height={54}
              src={data?.img}
              width={54}
              onClick={() => setSelectedCharacter(data)}
            />
          </div>
          <span>{data?.name}</span>
          <SecondPath
            data={data}
            selectedCharacter={selectedCharacter}
            setSelectedCharacter={setSelectedCharacter}
          />
        </div>
        <button
          className={clsx(
            data?.bgColor, data?.hoverTextColor
              ? 'text-gray-600'
              : 'text-white',
            'text-base px-12 py-2 rounded ml-auto hover:opacity-75 sm:w-3/4 disabled:bg-gray-500',
            'disabled:cursor-not-allowed mt-8 mb-0 sm:mb-2 w-full mx-auto transition-all duration-300',
          )}
          disabled={!selectedCharacter}
          type='button'
          onClick={() => push({
            pathname: `${pathname}/create`,
            query: {
              characterId: selectedCharacter.characterId,
              classId: selectedCharacter.classId,
              pathId: selectedCharacter.pathId,
            },
          })}
        >
          Start Now!
        </button>
      </div>
    </Fragment>
  )
}

function SecondPath(props) {
  const { data, setSelectedCharacter, selectedCharacter } = props
  const firstClassData = firstClass.filter((cls) => cls.characterId === data.characterId)
  return (
    <div className={clsx(
      firstClassData?.length === 3 ? 'grid-cols-3' : 'grid-cols-4',
      'grid gap-3 mt-1',
    )}
    >
      {firstClassData.map((item) => (
        <Fragment key={item.name}>
          <div className='flex flex-col items-center'>
            {selectedCharacter?.name === item.name ? (
              <CheckCircleIcon className='w-5 h-5 mb-2 text-green-600' />
            ) : (
              <ChevronDoubleDownIcon className={`w-5 h-5 mb-2 ${data.textColor}`} />
            )}
            <div className={clsx(
              selectedCharacter?.name === item?.name
                ? data.bgColor
                : 'dark:bg-gray-500 bg-gray-400',
              'p-1 mb-1 flex flex-col items-center cursor-pointer hover:opacity-75 transition-all duration-300',
            )}
            >
              <img
                alt={item.name}
                height={54}
                src={item.img}
                width={54}
                onClick={() => setSelectedCharacter(item)}
              />
            </div>
            <span>{item.name}</span>
            <LastPath
              bgColor={data.bgColor}
              data={item}
              selectedCharacter={selectedCharacter}
              setSelectedCharacter={setSelectedCharacter}
              textColor={data.textColor}
            />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

function LastPath(props) {
  const {
    data, textColor, bgColor, setSelectedCharacter, selectedCharacter,
  } = props
  const secondClassData = [
    ...secondClass,
    ...transcendentClass,
    ...thirdClass,
  ].filter((cls) => cls.characterId === data.characterId && cls.pathId === data.pathId)
  return (
    <div className='grid grid-cols-1 gap-3 mt-3'>
      {secondClassData.map((cls) => (
        <div className='flex flex-col items-center' key={cls.name}>
          {selectedCharacter?.name === cls.name ? (
            <CheckCircleIcon className='w-5 h-5 mb-2 text-green-600' />
          ) : (
            <ChevronDoubleDownIcon className={`w-5 h-5 mb-2 ${textColor}`} />
          )}
          <div className={clsx(
            selectedCharacter?.name === cls.name ? bgColor : 'dark:bg-gray-500 bg-gray-400',
            'p-1 mb-1 flex flex-col items-center cursor-pointer hover:opacity-75 transition-all duration-300',
          )}
          >
            <img
              alt={cls.name}
              height={54}
              src={cls.img}
              width={54}
              onClick={
                () => setSelectedCharacter(cls)
              }
            />
          </div>
          <span>{cls.name}</span>
        </div>
      ))}
    </div>
  )
}
