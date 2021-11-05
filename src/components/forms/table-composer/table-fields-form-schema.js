import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  tableName: yup.string().required('Table Name is required!'),
  tableFields: yup.array().required().min(1, 'Table Field is required!').of(
    yup.object({
      attributes: yup.array().required().min(1, 'Attributes is required!').of(
        yup.object({
          attributeName: yup.string().required('Attribute Name is required!'),
          flag: yup.object(),
          isDealingDamage: yup.bool(),
          damageType: yup.object({
            label: yup.string(),
            value: yup.string(),
          }),
          valueType: yup.object({
            label: yup.string(),
            value: yup.string(),
          }),
          hasAwakeningEffect: yup.object({
            label: yup.string(),
            value: yup.bool(),
          }),
          awakeningModifier: yup.object({
            label: yup.string(),
            value: yup.string(),
          }),
          value: yup.object({
            normal: yup.string(),
            awaken: yup.string(),
          }),
          valueRange: yup.object({
            normal: yup.array().of(yup.string()),
            awaken: yup.array().of(yup.string()),
          }),
          suffix: yup.object({
            label: yup.string(),
            value: yup.string(),
          }),
        }),
      ),
      fieldName: yup.string().required('Field Name is required!'),
    }),
  ),
})

export default yupResolver(schema)
