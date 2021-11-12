/* eslint-disable import/prefer-default-export */
import API from 'utils/api'

const basePath = () => 'character-utility'
export const getCharacterUtility = ({ queryKey }) => {
  const [, params] = queryKey
  return API({
    method: 'GET',
    path: basePath(),
    params,
  })
}
