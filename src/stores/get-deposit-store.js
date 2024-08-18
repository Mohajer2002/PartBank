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
    useGetDepositAccount() {
      connectToGetDepositApi()
    },
    setLoggedUserAccountData(response) {
      console.log("show res ",response);
      
      // this.loggedUserAccountData = {}

      this.loggedUserAccountData = response
      
      
    }
  }
})
