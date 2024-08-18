import { defineStore } from 'pinia'
// import { connectToLoginApi } from '@/repository/index.js'

export const useApiStore = defineStore('apiStore', {
  state: () => {
    return {}
  },
  // persist: true,

  actions: {
    login(form) {
      // connectToLoginApi(form)
    }
  }
})
