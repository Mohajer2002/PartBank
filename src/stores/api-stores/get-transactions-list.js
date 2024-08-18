import { defineStore } from 'pinia'
import { connectToGettransactionstApi } from '@/repository/get-transactions-list'

export const useGettransactionstApiStore = defineStore('getTransactionstApiStore', {
  state: () => {
    return {
      transactionsList: []
    }
  },
  persist: true,

  actions: {
    useGetDepositAccount() {
      connectToGettransactionstApi()
    },
    setTransactionsList(response) {
      this.transactionsList = response
    }
  }
})
