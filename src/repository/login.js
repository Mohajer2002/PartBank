import { fetchData } from '@/services/api'
import { loginConfig } from '@/services/apiConfigs'
import { useApiStore } from '@/stores/api-store'

export const connectToLoginApi = async (loginForm) => {
  const apiStore = useApiStore()

  loginConfig['data'] = JSON.stringify(loginForm)
  const { data, errorMessage } = await fetchData(loginConfig)


  if (data) {
    apiStore.getLoginData(data)
  } else {
    apiStore.getLoginData(errorMessage)
  }
}
