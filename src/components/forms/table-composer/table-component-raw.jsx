import PropTypes from 'prop-types'

export default function TableComponentRaw(props) {
  const { data } = props
  return (
    <section className='max-h-[300px] overflow-y-auto custom-scroll bg-gray-300 dark:bg-gray-800 p-2'>
      <pre className='font-mono'>
        {JSON.stringify(data, null, 3)}
      </pre>
    </section>
  )
}

TableComponentRaw.propTypes = {
  data: PropTypes.array,
}
