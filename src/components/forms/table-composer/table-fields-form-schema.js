import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  tableName: yup.string().required('Table Name is required!'),
  tableFields: yup.array().required().min(1, 'Table Field is required!').of(
    yup.object({
      attributes: yup.array().required().min(1, 'Attributes is required!').of(
        yup.object({
          flag: yup.object(),
          attributeName: yup.string().required('Attribute Name is required!'),
          value: yup.object({
            normal: yup.string(),
            awaken: yup.string(),
          }),
          type: yup.object(),
          valueRange: yup.object({
            normal: yup.array().of(yup.string()),
            awaken: yup.array().of(yup.string()),
          }),
          damageType: yup.object({
            label: yup.string(),
            value: yup.string(),
          }),
          suffix: yup.object({
            label: yup.string(),
            value: yup.string(),
          }),
          hasAwakeningEffect: yup.object({
            label: yup.string(),
            value: yup.bool(),
          }),
        }),
      ),
      fieldName: yup.string().required('Field Name is required!'),
    }),
  ),
})

export default yupResolver(schema)
