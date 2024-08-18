import { fetchData } from '@/services/api'
import { getDepositAccountConfig } from '@/services/apiConfigs'
import { useGetDepositStore } from '@/stores/get-deposit-store'

export const connectToGetDepositApi = async () => {
  const getDepositStore = useGetDepositStore()

  // loginConfig['data'] = JSON.stringify(loginForm)
  const { data, errorMessage } = await fetchData(getDepositAccountConfig)
  
  
  getDepositStore.setLoggedUserAccountData(data.data.result)

}
