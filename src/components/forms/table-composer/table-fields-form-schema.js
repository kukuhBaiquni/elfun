import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  tableName: yup.string().required('Table Name is required!'),
  tableFields: yup.array().required().min(1, 'Table Field is required!').of(
    yup.object({
      attributes: yup.array().required().min(1, 'Attributes is required!').of(
        yup.object({
          attributeName: yup.string().required('Attribute Name is required!'),
          value: yup.string().required('Value is Required'),
        }),
      ),
      fieldName: yup.string().required('Field Name is required!'),
    }),
  ),
})

export default yupResolver(schema)
