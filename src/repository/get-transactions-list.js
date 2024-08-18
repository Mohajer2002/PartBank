import { fetchData } from '@/services/api'
import { transactionListConfig } from '@/services/apiConfigs'
import { useGetTransactionstStore } from '@/stores/get-transactions-list'

export const connectToGettransactionstApi = async () => {
  const getTransactionstStore = useGetTransactionstStore()

  // loginConfig['data'] = JSON.stringify(loginForm)
  const { data, errorMessage } = await fetchData(transactionListConfig)
  
  
  getTransactionstStore.setTransactionsList(data.data.results)

}
