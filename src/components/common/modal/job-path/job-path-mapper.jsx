/* eslint-disable react/prop-types */
import { Fragment } from 'react'
import Image from 'next/image'
import { ChevronDoubleDownIcon, CheckCircleIcon } from '@heroicons/react/solid'

export default function JobPath(props) {
  const {
    data, selectedCharacter, onSelectCharacter,
  } = props
  return (
    <Fragment>
      <div className={`text-white p-2 text-lg ${data?.bgColor}`}>
        <h5>Choose Character Path</h5>
      </div>
      <div className='p-2 mt-3 flex flex-col'>
        <div className='flex flex-col justify-center items-center'>
          <div className={`p-0.5 mb-1 flex flex-col items-center ${data?.bgColor} cursor-pointer hover:opacity-75 transition-all duration-300 rounded relative`}>
            <Image
              alt={data?.name}
              height={54}
              src={data?.img}
              width={54}
              onClick={() => onSelectCharacter(data?.name, data?.img, data?.bgColor)}
            />
          </div>
          <span>{data?.name}</span>
          <SecondPath data={data} />
        </div>
        <button
          className={`text-base px-12 py-2 ${data?.bgColor} text-white rounded ml-auto hover:opacity-75 sm:w-3/4 disabled:bg-gray-500 disabled:cursor-not-allowed mt-8 mb-0 sm:mb-2 w-full mx-auto`}
          disabled
          type='button'
          // onClick={() => setIsVisible(false)}
        >
          Start Now!
        </button>
      </div>
    </Fragment>
  )
}

function SecondPath(props) {
  const { data } = props
  return (
    <div className={`grid ${data?.child.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-3 mt-1`}>
      {data?.child.map((item) => (
        <Fragment key={item.name}>
          <div className='flex flex-col items-center'>
            <ChevronDoubleDownIcon className={`w-5 h-5 mb-2 ${data?.textColor}`} />
            <div className={`p-0.5 mb-1 flex flex-col items-center ${data?.bgColor} cursor-pointer hover:opacity-75 transition-all duration-300 rounded relative`}>
              <Image
                alt={item.name}
                height={54}
                src={item.img}
                width={54}
                // onClick={() => onSelectCharacter(item.name, item.img, data?.bgColor)}
              />
            </div>
            <span>{item.name}</span>
            <LastPath bgColor={data.bgColor} data={item} textColor={data.textColor} />
          </div>
        </Fragment>
      ))}
    </div>
  )
}

function LastPath(props) {
  const { data, textColor, bgColor } = props
  return (
    <div className='grid grid-cols-1 gap-3 mt-3'>
      {data.child.map((job) => (
        <div className='flex flex-col items-center' key={job.name}>
          <ChevronDoubleDownIcon className={`w-5 h-5 mb-2 ${textColor}`} />
          <div className={`p-0.5 mb-1 flex flex-col items-center ${bgColor} cursor-pointer hover:opacity-75 transition-all duration-300 rounded relative`}>
            <Image
              alt={job.name}
              height={54}
              src={job.img}
              width={54}
              // onClick={() => onSelectCharacter(job.name, job.img, data?.bgColor)}
            />
          </div>
          <span>{job.name}</span>
        </div>
      ))}
    </div>
  )
}
