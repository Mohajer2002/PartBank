import { fetchData } from '@/services/api'
import { createAccountConfig } from '@/services/apiConfigs'
import { useCreateAccountStore } from '@/stores/account-store'

export const connectToCreateAccounttApi = async (personalInformationForm) => {
  const accountDataStore = useCreateAccountStore()

  createAccountConfig['data'] = JSON.stringify(personalInformationForm)
  const { data, errorMessage } = await fetchData(createAccountConfig)

  accountDataStore.getCreatedAccountData(data.data)
}
