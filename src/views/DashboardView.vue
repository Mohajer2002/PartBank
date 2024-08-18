<script setup>
import { onMounted, toRaw } from 'vue'

import TheHeader from '@/components/common/TheHeader.vue'
import DashboardContent from '@/components/views/dashboard/DashboardContent.vue'
import SideMenu from '@/components/views/dashboard/SideMenu.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
// import { useFetch } from '@/services/api'
// import { dashboardConfig } from '@/services/apiConfigs'
import { useDashboardDataStore } from '@/stores/dashboard-information-store'
import {useGetDepositApiStore} from '../stores/api-stores/get-deposit-api-store'


const dashboardDataStore = useDashboardDataStore()
const getDepositApiStore = useGetDepositApiStore()

// const setDataPinia = async () => {
//   // const { responseData } = await useFetch(dashboardConfig)
//   // dataStore.setDashboardUserInfo(responseData.value)
//   dashboardDataStore.setDashboardData(toRaw(responseData.value.data.result))
// }

// setDataPinia()
onMounted(()=>{
getDepositApiStore.useGetDepositAccount()
})
</script>
<template>
  <dashboard-layout>
    <template v-slot:header>
      <TheHeader />
    </template>
    {{getDepositApiStore.loggedUserData}}

    <template v-slot:main>
      <main class="main-dashboard">
        <SideMenu />
        <!-- dashboard-content -->
        <DashboardContent />
      </main>
    </template>
  </dashboard-layout>
</template>

<style scoped lang="scss">
.main-dashboard {
  display: flex;
  gap: 1rem;
  height: 100%;
}
</style>
