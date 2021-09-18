import PropTypes from 'prop-types'

function JobPath({ data = [] }) {
  return (
    <ul className='absolute floatig-list z-10 hidden group-hover:flex flex-col group-hover:opacity-100 opacity-0 top-0 py-2 px-2 rounded left-1/2 bg-white drop-shadow-2xl border border-gray-200 border-solid group-hover:translate-x-10 transition-all duration-300'>
      {data.map((firstJob) => (
        <li className='job-nesting text-gray-500 hover:bg-sky-400 transition-all duration-300 hover:text-gray-200 rounded py-2 px-5' key={firstJob.name}>
          {firstJob.name}
          <div className='opacity-0 relative'>
            <ul className='absolute z-20 p-2 rounded bg-sky-400 -right-36 top-0'>
              {firstJob.child.map((secondJob) => <li className='text-gray-500 hover:bg-sky-400 transition-all duration-300 hover:text-gray-200 rounded py-2 px-5' key={secondJob.name}>{secondJob.name}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  )
}

JobPath.propTypes = {
  data: PropTypes.array,
}

export default JobPath
