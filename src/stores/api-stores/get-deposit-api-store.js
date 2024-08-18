import { defineStore } from 'pinia'
// import { connectToLoginApi } from '@/repository/get-deposit-account'

export const useGetDepositApiStore = defineStore('apiStore', {
  state: () => {
    return {
      loggedUserData: {
        phoneNumber: null
      }
    }
  },
  // persist: true,

  actions: {
    setLoggedUserData(phoneNumber) {
      this.loggedUserData.phoneNumber = phoneNumber
    }
  }
})
