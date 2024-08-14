import { ref } from 'vue'
import { axiosInstance } from './apiSetting'

export function useFetch(config) {
  const responseData = ref(null)
  const error = ref(null)
  const isLoading = ref(false)

  async function fetchData(config) {
    isLoading.value = true
    error.value = null
    try {
      const response = await axiosInstance(config)
      responseData.value = response.data
    } catch (error) {
      error.value = error.message
    } finally {
      isLoading.value = false
    }
  }
  fetchData(config)

  return { responseData, error, isLoading }
}
