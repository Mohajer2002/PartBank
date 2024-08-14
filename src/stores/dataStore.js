import { defineStore } from 'pinia'

export const useDataStore = defineStore(
  'dataStore',
  {
    state: () => {
      return {
        userInfo: {},
        phoneNumber: null
      }
    },
    persist: true,

    actions: {
      setUserInfo(userInfoObject) {
        this.userInfo = userInfoObject
      },
      setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber
      }
    }
  },)
