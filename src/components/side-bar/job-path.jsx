import PropTypes from 'prop-types'

function JobPath({ data = [] }) {
  return (
    <ul className='absolute group-hover:opacity-100 opacity-0 -bottom-full py-2 px-2 rounded -right-3/4 bg-white drop-shadow-2xl border border-gray-200 border-solid group-hover:translate-x-10 transition-all duration-300'>
      {data.map((firstJob) => (
        <li className='job-nesting text-gray-500 group hover:bg-sky-400 transition-all duration-300 hover:text-gray-200 rounded py-2 px-5 relative' key={firstJob.name}>
          {firstJob.name}
          <div className='relative opacity-0'>
            <ul className='absolute p-2 rounded bg-white drop-shadow-2xl border border-gray-200 border-solid'>
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
