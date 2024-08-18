import { fetchData } from '@/services/api'
import { loginConfig } from '@/services/apiConfigs'
import { useLoginApiStore } from '@/stores/api-stores/login-api-store'

export const connectToLoginApi = async (loginForm) => {
  const loginApiStore = useLoginApiStore()

  loginConfig['data'] = JSON.stringify(loginForm)
  const { data, errorMessage } = await fetchData(loginConfig)


  if (data) {
    loginApiStore.getLoginData(data)
  } else {
    loginApiStore.getLoginData(errorMessage)
  }
}
