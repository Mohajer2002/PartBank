import { defineStore } from 'pinia'
import { connectToCreateAccounttApi } from '@/repository/create-account'
import { connectToDeleteAccounttApi } from '@/repository/delete-account'

export const useCreateAccountStore = defineStore('createAccountStore', {
  state: () => {
    return {
      personalInformation: {},
      accountResponse: {},
      deleteAccountResualt:{},
    }
  },
  persist: true,

  actions: {
    setPersonalInformation(data) {
      this.personalInformation = data
    },

    createAccount() {
      connectToCreateAccounttApi(this.personalInformation)
    },

    getCreatedAccountData(response) {
      this.accountResponse = response
    },
    deleteAccount() {
      connectToDeleteAccounttApi()
    },
    setDeleteAccountResualt(response){
     this.deleteAccountResualt=response
    }
  }
})
