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



export async function fetchData(config) {
  let data;
  let errorMessage;

  try {
    const response = await axiosInstance(config)
    data = response.data
  } catch (error) {
    errorMessage = error?.response ? error.response.data.data.message.fa : 'خطای سرور'
  }

  return { data, errorMessage }
}
