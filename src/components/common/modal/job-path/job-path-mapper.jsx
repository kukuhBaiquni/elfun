/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ChevronDoubleDownIcon, CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import loader from 'components/common/loader'
import clsx from 'clsx'

export default function JobPathMapper(props) {
  const {
    data, selectedCharacter, setSelectedCharacter, setIsVisible,
  } = props
  const { push, pathname } = useRouter()

  const onSelectCharacter = (name, img, bgColor) => {
    setSelectedCharacter({
      name, img, bgColor,
    })
  }

  return (
    <Fragment>
      <div className={clsx(data?.bgColor, data?.hoverTextColor ? 'text-gray-600' : 'text-white', 'py-2 px-3 text-lg flex justify-between items-center')}>
        <h5>Choose Character Path</h5>
        <XIcon className='w-6 h-6 cursor-pointer' onClick={() => setIsVisible(false)} />
      </div>
      <div className='p-2 mt-3 flex flex-col'>
        <div className='flex flex-col justify-center items-center'>
          <div className={clsx(selectedCharacter?.name === data?.name ? data?.bgColor : 'dark:bg-gray-500 bg-gray-400', 'p-1 mb-1 flex flex-col items-center cursor-pointer hover:opacity-75 transition-all duration-300 relative')}>
            <img
              alt={data?.name}
              // blurDataURL={loader(54, 54)}
              height={54}
              // placeholder='blur'
              // priority
              src={data?.img}
              width={54}
              onClick={() => onSelectCharacter(data?.name, data?.img, data?.bgColor)}
            />
          </div>
          <span>{data?.name}</span>
          <SecondPath
            data={data}
            selectedCharacter={selectedCharacter}
            onSelectCharacter={onSelectCharacter}
          />
        </div>
        <button
          className={clsx(data?.bgColor, data?.hoverTextColor ? 'text-gray-600' : 'text-white', 'text-base px-12 py-2 rounded ml-auto hover:opacity-75 sm:w-3/4 disabled:bg-gray-500 disabled:cursor-not-allowed mt-8 mb-0 sm:mb-2 w-full mx-auto transition-all duration-300')}
          disabled={!selectedCharacter}
          type='button'
          onClick={() => push(`${pathname}/create?character=${selectedCharacter?.name}`)}
        >
          Start Now!
        </button>
      </div>
    </Fragment>
  )
}

function SecondPath(props) {
  const { data, onSelectCharacter, selectedCharacter } = props
  return (
    <div className={`grid ${data?.child.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-3 mt-1`}>
      {data?.child.map((item) => (
        <Fragment key={item.name}>
          <div className='flex flex-col items-center'>
            {selectedCharacter?.name === item.name ? (
              <CheckCircleIcon className='w-5 h-5 mb-2 text-green-600' />
            ) : (
              <ChevronDoubleDownIcon className={`w-5 h-5 mb-2 ${data.textColor}`} />
            )}
            <div className={`p-1 mb-1 flex flex-col items-center ${selectedCharacter?.name === item?.name ? data.bgColor : 'dark:bg-gray-500 bg-gray-400'} cursor-pointer hover:opacity-75 transition-all duration-300`}>
              <img
                alt={item.name}
                // blurDataURL={loader(54, 54)}
                height={54}
                // placeholder='blur'
                // priority
                src={item.img}
                width={54}
                onClick={
                  () => onSelectCharacter(item.name, item.img, data.bgColor)
                }
              />
            </div>
            <span>{item.name}</span>
            <LastPath
              bgColor={data.bgColor}
              data={item}
              selectedCharacter={selectedCharacter}
              textColor={data.textColor}
              onSelectCharacter={onSelectCharacter}
            />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

function LastPath(props) {
  const {
    data, textColor, bgColor, onSelectCharacter, selectedCharacter,
  } = props
  return (
    <div className='grid grid-cols-1 gap-3 mt-3'>
      {data.child.map((job) => (
        <div className='flex flex-col items-center' key={job.name}>
          {selectedCharacter?.name === job.name ? (
            <CheckCircleIcon className='w-5 h-5 mb-2 text-green-600' />
          ) : (
            <ChevronDoubleDownIcon className={`w-5 h-5 mb-2 ${textColor}`} />
          )}
          <div className={`p-1 mb-1 flex flex-col items-center ${selectedCharacter?.name === job.name ? bgColor : 'dark:bg-gray-500 bg-gray-400'} cursor-pointer hover:opacity-75 transition-all duration-300`}>
            <img
              alt={job.name}
              // blurDataURL={loader(54, 54)}
              height={54}
              // placeholder='blur'
              src={job.img}
              width={54}
              onClick={
                () => onSelectCharacter(job.name, job.img, bgColor)
              }
            />
          </div>
          <span>{job.name}</span>
        </div>
      ))}
    </div>
  )
}
