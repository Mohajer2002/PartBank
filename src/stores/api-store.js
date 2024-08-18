import { defineStore } from 'pinia'
import { connectToLoginApi } from '@/repository/login.js'

export const useApiStore = defineStore('apiStore', {
  state: () => {
    return {
      loginResponse: null,
      // loginError: null
    }
  },
  // persist: true,

  actions: {
    postLoginData(form) {
     
      connectToLoginApi(form)
    },
    getLoginData(response) {
      this.loginResponse = null
      this.loginResponse = response
    },
    // getLoginError(error) {
    //   this.loginError = error
    // }
  }
})
