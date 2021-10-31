import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  tableName: yup.string().required('Table Name is required!'),
  tableField: yup.array().required('Table Field is required!').of(
    yup.object({
      attributes: yup.array().required('Attributes is required!'),
      fieldName: yup.string().required('Field Name is required!'),
    }),
  ),
})

export default yupResolver(schema)

// .of(
//         yup.object({
//           attributeName: yup.string().required('Attribute Name is required!'),
//           value: yup.string().required('Value is required'),
//         }),
//       ).required('Attributes is required!')
