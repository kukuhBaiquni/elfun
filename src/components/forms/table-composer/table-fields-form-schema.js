import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import _ from 'lodash/isEqual'
import { INPUT_TYPE } from 'constant/options'

const schema = yup.object().shape({
  tableName: yup.string().required('Table Name is required!'),
  tableFields: yup.array().required().min(1, 'Table Field is required!').of(
    yup.object({
      attributes: yup.array().required().min(1, 'Attributes is required!').of(
        yup.object({
          skipAttributes: yup.bool(),
          skipAwakening: yup.bool(),
          attributeName: yup.string().when('skipAttributes',
            (skipAttributes, obj) => (skipAttributes ? obj : obj.required('Attribute Name is required!'))),
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
          hasAwakeningEffect: yup.bool(),
          awakeningModifier: yup.object({
            label: yup.string(),
            value: yup.string(),
          }),
          value: yup.object({
            normal: yup.string().when('valueType', {
              is: (val) => _(val, INPUT_TYPE[0]),
              then: yup.string().required('This field is required!'),
              otherwise: yup.string(),
            }),
            awaken: yup.string(),
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
console.log(schema)

export default yupResolver(schema)
