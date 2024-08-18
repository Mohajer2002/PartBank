import Hash from '@/helper/custom-storage'
import axios from 'axios'

const BASE_URL = 'https://college.apipart.ir/'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000
})
const customSorage = new Hash('localStorage')

axiosInstance.interceptors.request.use(
  function (config) {
    const header = {}
    if (config.type != 'login') {
      header['gateway-token'] = customSorage.getItem('token')
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
