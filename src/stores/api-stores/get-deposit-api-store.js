import { defineStore } from 'pinia'
import { connectToGetDepositApi } from '@/repository/get-deposit-account'

export const useGetDepositApiStore = defineStore('getDepositApiStore', {
  state: () => {
    return {
      loggedUserData: {}
    }
  },
  // persist: true,

  actions: {
    useGetDepositAccount() {
      connectToGetDepositApi()
    },
    setLoggedUserData(response) {
      this.loggedUserData = response
      
    }
  }
})
