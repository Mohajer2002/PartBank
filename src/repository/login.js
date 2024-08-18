import { fetchData } from '@/services/api'
import { loginConfig } from '@/services/apiConfigs'
import { useApiStore } from '@/stores/api-store'

export const connectToLoginApi = async (loginForm) => {
  const apiStore = useApiStore()

  loginConfig['data'] = JSON.stringify(loginForm)
  const { responseData, errorMessage } = await fetchData(loginConfig)
  apiStore.getLoginData(responseData)
  if (responseData.value) {
    apiStore.getLoginData(responseData)
  } else {
    apiStore.getLoginError(errorMessage)
  }
}
