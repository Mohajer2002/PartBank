import { defineStore } from 'pinia'
import { connectToCreateAccounttApi } from '@/repository/create-account'

export const useCreateAccountStore = defineStore('createAccountStore', {
  state: () => {
    return {
      personalInformation: {},
      accountResponse:{}
    }
  },
  persist: true,

  actions: {
    setPersonalInformation(data) {
        this.personalInformation=data
    },

    createAccount(){
      connectToCreateAccounttApi(this.personalInformation)
    },

    getCreatedAccountData(response){
      this.accountResponse=response
    }
  }
})
