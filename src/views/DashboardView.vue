<script setup>
import { toRaw } from 'vue'

import TheHeader from '@/components/common/TheHeader.vue'
import DashboardContent from '@/components/views/dashboard/DashboardContent.vue'
import SideMenu from '@/components/views/dashboard/SideMenu.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
// import { useFetch } from '@/services/api'
import { dashboardConfig } from '@/services/apiConfigs'
import { useDashboardDataStore } from '@/stores/dashboard-information-store'


const dashboardDataStore = useDashboardDataStore()

const setDataPinia = async () => {
  // const { responseData } = await useFetch(dashboardConfig)
  // dataStore.setDashboardUserInfo(responseData.value)
  dashboardDataStore.setDashboardData(toRaw(responseData.value.data.result))
}

setDataPinia()
</script>
<template>
  <dashboard-layout>
    <template v-slot:header>
      <TheHeader />
    </template>

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
