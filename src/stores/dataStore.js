import { defineStore } from 'pinia'

export const useDataStore = defineStore('dataStore', {
  state: () => {
    return {
      userInfo: {},
      phoneNumber: null,
      dashboardUserInfo: {}
    }
  },
  persist: true,

  actions: {
    setUserInfo(userInfoObject) {
      this.userInfo = userInfoObject
    },
    setDashboardUserInfo(dashboardUserInfoObject) {
      this.dashboardUserInfo = dashboardUserInfoObject
    },
    setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber
    }
  }
})
