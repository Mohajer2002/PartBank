import axios from 'axios'

const BASE_URL = 'https://college.apipart.ir/'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000
})

axiosInstance.interceptors.request.use(
  function (config) {
    const header = {}
    if (config.type != 'login') {
      header['gateway-token'] = JSON.parse(localStorage.getItem('userInfo'))?.token
    }
    header['gateway-system'] = 'turboFront'
    header['Content-Type'] = 'aplication/json'
    config.headers = header
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
