import { fetchData } from '@/services/api'
import { transactionListConfig } from '@/services/apiConfigs'
import { useGettransactionstApiStore } from '@/stores/api-stores/get-transactions-list'

export const connectToGettransactionstApi = async () => {
  const getTransactionstApiStore = useGettransactionstApiStore()

  // loginConfig['data'] = JSON.stringify(loginForm)
  const { data, errorMessage } = await fetchData(transactionListConfig)
  
  
  getTransactionstApiStore.setTransactionsList(data.data.results)

  // if (data) {
  //   apiStore.getLoginData(data)
  // } else {
  //   apiStore.getLoginData(errorMessage)
  // }
}
