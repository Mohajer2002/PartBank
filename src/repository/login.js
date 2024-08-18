import { fetchData } from '@/services/api'
import { loginConfig } from '@/services/apiConfigs'
import { useLoginApiStore } from '@/stores/api-stores/login-api-store'
import Hash from '@/helper/Storages'

export const connectToLoginApi = async (loginForm) => {
  const loginApiStore = useLoginApiStore()
  const customStorage = new Hash('localStorage')

  loginConfig['data'] = JSON.stringify(loginForm)
  const { data, errorMessage } = await fetchData(loginConfig)

  if (data) {
    customStorage.setItem('token', data.data.token)
    loginApiStore.getLoginData({
      type: 'success',
      resualt:{
        phoneNumber:loginForm.phoneNumber,
        firstName:data.data.firstName,
        lastName:data.data.lastName,
        idNumber:data.data.idNumber,
      }
    })
  } else {
    loginApiStore.getLoginData({
      type: 'error',
      resualt: errorMessage
    })
  }
}
