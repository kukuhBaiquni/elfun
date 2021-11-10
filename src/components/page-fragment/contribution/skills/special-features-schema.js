import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  description: yup.string().required('Description is required'),
})

export default yupResolver(schema)
