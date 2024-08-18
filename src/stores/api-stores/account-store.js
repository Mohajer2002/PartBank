import { defineStore } from 'pinia'
// import { connectToGettransactionstApi } from '@/repository/get-transactions-list'

export const useCreateAccountStore = defineStore('createAccountStore', {
  state: () => {
    return {
      personalInformation: {}
    }
  },
  persist: true,

  actions: {
    setPersonalInformation(data) {
        this.personalInformation=data
    },
    // setTransactionsList(response) {
    //   this.transactionsList = response
    // }
  }
})
