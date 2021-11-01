import { Fragment, useMemo } from 'react'
import PropTypes from 'prop-types'

export default function TableComponent(props) {
  const { field, fieldIndex } = props
  const { tableName, tableFields } = field

  return (
    <div className='bg-gray-900 p-2 font-titillium rounded mb-2'>
      <h5 className='font-bold'>{tableName}</h5>
      <section className='grid grid-cols-2 mt-1 gap-1'>
        {tableFields.map((item) => (
          <Fragment key={item.fieldName}>
            <div className='p-1 text-center'>
              <div className='bg-gray-700 mb-1 rounded'>
                <p className='font-bold'>{item.fieldName}</p>
              </div>
              <div className='grid grid-cols-2 gap-1'>
                {item.attributes.map((attr) => (
                  <div className='bg-gray-700 p-1 text-sm rounded' key={attr.attributeName}>
                    <p className='mb-0.5'>{attr.attributeName}</p>
                    <p className='bg-gray-900 rounded'>{attr.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Fragment>
        ))}
      </section>
    </div>
  )
}

TableComponent.propTypes = {
  field: PropTypes.object,
  fieldIndex: PropTypes.number,
}
