import SKILL_CATEGORIES from 'constant/skill-categories'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  skillName: yup.string().required('Skill Name is required!'),
  skillDescription: yup.string().required('Skill Description is required!'),
  skillCategory: yup.string().oneOf(SKILL_CATEGORIES.map((item) => item.value)).required('Skill Category is required!'),
  skillIcon: yup.array().required('Skill Icon is required!').length(1),
  table: yup.array(),
})

export default yupResolver(schema)