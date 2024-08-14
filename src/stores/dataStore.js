import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', {
  state: () => {
    return {
      userInfo:{}

    }
  },

  actions: {
    setUserInfo(userInfoObject) {
      this.userInfo = userInfoObject
      
    }
  }
})
