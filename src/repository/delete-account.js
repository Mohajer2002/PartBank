import { fetchData } from '@/services/api'
import { deleteDepositAccountConfig } from '@/services/apiConfigs'
import { useCreateAccountStore } from '@/stores/account-store'

export const connectToDeleteAccounttApi = async () => {
  const createAccountStore = useCreateAccountStore()

  // loginConfig['data'] = JSON.stringify(loginForm)
  const { data, errorMessage } = await fetchData(deleteDepositAccountConfig)
  createAccountStore.setDeleteAccountResualt(data.data)
}
