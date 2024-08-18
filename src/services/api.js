import { ref } from 'vue'
import { axiosInstance } from './apiSetting'

// export async function useFetch(config) {

//   async function fetchData(config) {
//     isLoading.value = true
//     errorMessage.value = null
//     try {
//       const response = await axiosInstance(config)
//       responseData.value = response.data
//     } catch (error) {
//       errorMessage.value = error?.response?.data?.data?.message?.fa
//       console.log("show me error",error);

//     } finally {
//       isLoading.value = false
//     }
//   }
//   await fetchData(config)

//   return { responseData, errorMessage, isLoading }
// }

const responseData = ref(null)
const errorMessage = ref(null)
const isLoading = ref(false)

export async function fetchData(config) {
  try {
    const response = await axiosInstance(config)
    responseData.value = response.data
    console.log('show me responseData', responseData)
  } catch (error) {
    errorMessage.value = error?.response ? error.response.data.data.message.fa : 'خطای سرور'
    console.log('show me error', error)
  } finally {
    isLoading.value = false
  }

  return { responseData, errorMessage }
}
