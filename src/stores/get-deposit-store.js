import { defineStore } from 'pinia'
import { connectToGetDepositApi } from '@/repository/get-deposit-account'

export const useGetDepositStore = defineStore('getDepositStore', {
  state: () => {
    return {
      loggedUserAccountData: {}
    }
  },
  persist: true,

  actions: {
    getDepositAccount() {
      connectToGetDepositApi()
    },
    setLoggedUserAccountData(response) {
     

      this.loggedUserAccountData = response
    }
  }
})
