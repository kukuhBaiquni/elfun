import _ from 'lodash/startCase'

const tableColumnsGenerator = (data) => data.map((val) => ({
  Header: val.fieldName,
  columns: val.attributes.map((item) => (
    {
      Header: item.attributeName,
      columns: (() => {
        if (item.hasAwakeningEffect.value) {
          if (item.valueType.value === 'FIXED') {
            return Object.keys(item.value).map((key) => (
              {
                Header: _(key),
                accessor: key,
              }
            ))
          }
          return Object.keys(item.valueRange).map((key) => (
            {
              Header: _(key),
              accessor: (value) => value[key].join('-'),
            }
          ))
        }
        if (item.valueType.value === 'FIXED') {
          return {
            Header: '',
            accessor: (value) => value.value.normal,
          }
        }
        return {
          Header: '',
          accessor: (value) => value[Object.keys(item.valueRange)[0]].join('~'),
        }
      })(),
    }
  )),
}
))

export default tableColumnsGenerator
