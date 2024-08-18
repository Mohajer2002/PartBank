import { defineStore } from 'pinia'
import { connectToLoginApi } from '@/repository/login.js'

export const useApiStore = defineStore('apiStore', {
  state: () => {
    return {}
  },
  // persist: true,

  actions: {
    login(form) {
      connectToLoginApi(form)
    }
  }
})
