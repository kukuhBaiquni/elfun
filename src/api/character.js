/* eslint-disable import/prefer-default-export */
import API from 'utils/api'

const basePath = (extra = '') => `/character${extra}`

export const addCharacterInformation = (data) => {
  console.log('SENDING DATA', data)
  API({
    method: 'POST',
    path: basePath(),
    data,
  })
}
