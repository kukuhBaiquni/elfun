import SKILL_CATEGORIES from 'constant/skill-categories'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  skillName: yup.string().required(),
  skillDescription: yup.string().required(),
  skillCategory: yup.string().oneOf(SKILL_CATEGORIES.map((item) => item.value)).required(),
  skillIcon: yup.array().required().length(1),
  table: yup.object({
    tableName: yup.string().required(),
    tableField: yup.array().required().of(
      yup.object({
        attributes: yup.array().of(
          yup.object({
            attributeName: yup.string().required(),
            value: yup.string().required(),
          }),
        ),
        fieldName: yup.string().required(),
      }),
    ),
  }),
})

export default yupResolver(schema)
