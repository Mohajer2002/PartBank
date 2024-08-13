import axios from 'axios'

const BASE_URL = 'https://college.apipart.ir/'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 2000,
  headers: {
    'gateway-system': 'turboFront'
  }
})
