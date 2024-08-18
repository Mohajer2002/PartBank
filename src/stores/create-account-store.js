import { defineStore } from 'pinia'

export const useAccountDataStore = defineStore('accountDataStore', {
  state: () => {
    return {
      accountData: {}
    }
  },
  persist: true,

  actions: {
    setAccountData(accountInfoObject) {
      this.accountData = accountInfoObject
    }
  }
})
