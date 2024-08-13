import { ref } from 'vue'
import { axiosInstance } from './apiSetting'

export const fetchData = async (config) => {
  const data = ref(null)
  const error = ref(null)
  const loading = ref(false)
  loading.value = true
  error.value = null
  try {
    const response = await axiosInstance(config)
    data.value = response.data
  } catch (error) {
    error.value = error.message
    console.log('show me error', error)
  } finally {
    loading.value = false
  }
  //   console.log(data.value)

  return { data, error, loading }
}
