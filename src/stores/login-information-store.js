import { defineStore } from 'pinia'

export const useLoginDataStore = defineStore('loginDataStore', {
  state: () => {
    return {
      phoneNumber: null
    }
  },
  persist: true,

  actions: {
    setLoginData(phoneNumber) {
      this.phoneNumber = phoneNumber
    }
  }
})
