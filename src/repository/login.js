import { fetchData } from '../services/api'
import { loginConfig } from '../services/apiConfigs'

export const connectToLoginApi = async (loginForm) => {
  loginConfig['data'] = JSON.stringify(loginForm)
  const { responseData } = await fetchData(loginConfig)
  console.log('show responseDataresponseData', responseData)
}
