import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  tableName: yup.string().required('Table Name is required!'),
  tableFields: yup.array().required().min(1, 'Table Field is required!').of(
    yup.object({
      attributes: yup.array().required().min(1, 'Attributes is required!').of(
        yup.object({
          skipAttributeName: yup.bool(),
          attributeName: yup.string().when('skipAttributeName',
            (skipAttributeName, obj) => (skipAttributeName ? obj : obj.required('Attribute Name is required!'))),
          flag: yup.object(),
          isDealingDamage: yup.bool(),
          damageType: yup.object({
            label: yup.string(),
            value: yup.string(),
          }),
          inputType: yup.object({
            label: yup.string(),
            value: yup.string(),
          }),
          hasAwakeningEffect: yup.bool(),
          awakeningModifier: yup.object({
            label: yup.string(),
            value: yup.string(),
          }),
          value: yup.array().of(
            yup.object({
              flat: yup.object({
                normal: yup.string(),
                awaken: yup.string(),
              }),
              range: yup.object({
                normal: yup.array().of(yup.string()),
                awaken: yup.array().of(yup.string()),
              }),
            }),
          ),
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
