import PropTypes from 'prop-types'
import { Fragment } from 'react'

function JobPath({ data = [] }) {
  return (
    <ul className='absolute floatig-list w-48 z-10 hidden group-hover:flex flex-col group-hover:opacity-100 opacity-0 top-0 py-2 px-2 rounded left-1/2 bg-white drop-shadow-2xl border border-gray-200 border-solid group-hover:translate-x-10 transition-all duration-300'>
      {data.map((firstJob) => (
        <Fragment key={firstJob.name}>
          <li className='job-nesting text-gray-500 hover:bg-elsword transition-all duration-300 hover:text-gray-200 rounded py-2 px-5 relative'>
            {firstJob.name}
            <div className='opacity-0  bg-red-400'>
              <ul className='absolute z-20 p-2 rounded bg-elsword left-40 top-0'>
                {firstJob.child.map((secondJob) => <li className='text-gray-200 hover:bg-white hover:text-sky-400 transition-all duration-300 rounded py-2 px-5' key={secondJob.name}>{secondJob.name}</li>)}
              </ul>
            </div>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}

JobPath.propTypes = {
  data: PropTypes.array,
}

export default JobPath
