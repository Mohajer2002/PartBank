import { defineStore } from 'pinia'

export const useDashboardDataStore = defineStore('dashboardDataStore', {
  state: () => {
    return {
      dashboardUserInfo: {}
    }
  },
  persist: true,

  actions: {
    setDashboardData(dashboardUserInfoObject) {
      this.dashboardUserInfo = dashboardUserInfoObject
    }
  }
})
