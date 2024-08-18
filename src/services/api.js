
import { axiosInstance } from './apiSetting'




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
