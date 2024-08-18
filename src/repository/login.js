import { fetchData } from '@/services/api'
import { loginConfig } from '@/services/apiConfigs'
import { useLoginStore } from '@/stores/login-store'
import Hash from '@/helper/custom-storage'

export const connectToLoginApi = async (loginForm) => {
  const loginStore = useLoginStore()
  const customStorage = new Hash('localStorage')

  loginConfig['data'] = JSON.stringify(loginForm)
  const { data, errorMessage } = await fetchData(loginConfig)

  if (data) {
    customStorage.setItem('token', data.data.token)
    loginStore.getLoginData({
      type: 'success',
      resualt:{
        phoneNumber:loginForm.phoneNumber,
        firstName:data.data.firstName,
        lastName:data.data.lastName,
        idNumber:data.data.idNumber,
      }
    })
  } else {
    loginStore.getLoginData({
      type: 'error',
      resualt: errorMessage
    })
  }
}
