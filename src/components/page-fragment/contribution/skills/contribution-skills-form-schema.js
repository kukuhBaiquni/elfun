import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  skillName: yup.string().required('Skill Name is required!'),
  skillDescription: yup.string().required('Skill Description is required!'),
  skillCategory: yup.object({
    label: yup.string(),
    value: yup.string(),
  }).required('Skill Category is required!'),
  skillIcon: yup.array().required('Skill Icon is required!').length(1),
  table: yup.array().required().min(1, 'Table Information is required!'),
})

export default yupResolver(schema)
