import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_URL

const API = async (props) => {
  const {
    path, method, params, data, setProgress,
  } = props
  const timeout = setProgress ? 120e3 : 15e3
  const token = localStorage.getItem('token')
  const config = {
    timeout,
    baseURL,
    url: path,
    method,
    params,
    data,
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  }
  if (setProgress) {
    config.onUploadProgress = (e) => setProgress(Math.round((100 * e.loaded) / e.total))
  }
  const response = await axios(config)
  return response.data
}

export default API
