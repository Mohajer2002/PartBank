import { defineStore } from 'pinia'
import { connectToGettransactionstApi } from '@/repository/get-transactions-list'

export const useGetTransactionstStore = defineStore('getTransactionstStore', {
  state: () => {
    return {
      transactionsList: []
    }
  },
  persist: true,

  actions: {
    getDepositAccount() {
      connectToGettransactionstApi()
    },
    setTransactionsList(response) {
      this.transactionsList = response
    }
  }
})
