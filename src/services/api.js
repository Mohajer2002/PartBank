import { ref } from 'vue'
import { axiosInstance } from './apiSetting'

export async function useFetch(config) {
  const responseData = ref(null)
  const errorMessage = ref(null)
  const isLoading = ref(false)

  async function fetchData(config) {
    isLoading.value = true
    errorMessage.value = null
    try {
      const response = await axiosInstance(config)
      responseData.value = response.data
    } catch (error) {
      errorMessage.value = error.response.data.data.message.fa
    } finally {
      isLoading.value = false
    }
  }
  await fetchData(config)

  return { responseData, errorMessage, isLoading }
}
