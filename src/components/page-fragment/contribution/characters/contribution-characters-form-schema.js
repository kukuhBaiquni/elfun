import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  name: yup.string().required('Name is Required!'),
  class: yup.string().required('Class is Required!'),
  quote: yup.string().required('Quote is Required!'),
  innate: yup.string().required('Innate is Required!'),
  specialAbility: yup.string(),
  weapon: yup.string().required('Weapon is Required!'),
  background: yup.string().required('background is Required!'),
  age: yup.string().required('Age is Required!'),
  race: yup.string().required('Race is Required!'),
  statistic: yup.object({
    speed: yup.object({
      label: yup.string(),
      value: yup.string(),
    }).required('Race is Required!'),
    attackRange: yup.object({
      label: yup.string(),
      value: yup.string(),
    }).required('Attack Range is Required!'),
    difficulty: yup.object({
      label: yup.string(),
      value: yup.string(),
    }).required('Difficulty is Required!'),
  }),
  damageType: yup.object({
    label: yup.string(),
    value: yup.string(),
  }).required('Damage Type is Required!'),
  tipsAndDetail: yup.array().of(
    yup.object({
      description: yup.string().required('Description is Required!'),
    }),
  ),
  trivia: yup.array().of(
    yup.object({
      description: yup.string().required('Description is Required!'),
    }),
  ),
  reference: yup.array().of(
    yup.object({
      variable: yup.string().required('Variable is Required!'),
      link: yup.string().required('Link is Required!'),
    }),
  ),
  advancement: yup.array().of(
    yup.object({
      prerequisites: yup.string().required('Quest Acceptance Prerequisites is Required!'),
      objectives: yup.string().required('Objectives is Required!'),
      description: yup.string().required('Description is Required!'),
    }),
  ),
})

export default yupResolver(schema)
