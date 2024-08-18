import { fetchData } from '@/services/api'
import { getDepositAccountConfig } from '@/services/apiConfigs'
import { useGetDepositApiStore } from '@/stores/api-stores/get-deposit-api-store'

export const connectToGetDepositApi = async () => {
  const getDepositApiStore = useGetDepositApiStore()

  // loginConfig['data'] = JSON.stringify(loginForm)
  const { data, errorMessage } = await fetchData(getDepositAccountConfig)
  
  
  getDepositApiStore.setLoggedUserAccountData(data.data.result)

  // if (data) {
  //   apiStore.getLoginData(data)
  // } else {
  //   apiStore.getLoginData(errorMessage)
  // }
}
