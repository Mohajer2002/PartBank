import { defineStore } from 'pinia'
import { connectToLoginApi } from '@/repository/login.js'

export const useLoginStore = defineStore('loginStore', {
  state: () => {
    return {
      loginResponse: {
        loggedUserData: {
        
        },
        errorMessage: null

      },
    }
  },
   persist: true,

  actions: {
    postLoginData(form) {
      connectToLoginApi(form)
    },
    savePhoneNumber(phoneNumber) {
      this.loginResponse.loggedUserData.phoneNumber = phoneNumber
    },
    getLoginData(response) {
      this.loginResponse.errorMessage = null
      this.loginResponse.loggedUserData = null


      if (response.type == 'success') {
        this.loginResponse.loggedUserData= response.resualt
      } else {
        this.loginResponse.errorMessage = response.resualt
      }
    }
 
  }
})
