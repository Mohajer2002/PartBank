<script setup>
import { onMounted, toRaw } from 'vue'

import TheHeader from '@/components/common/TheHeader.vue'
import DashboardContent from '@/components/views/dashboard/DashboardContent.vue'
import SideMenu from '@/components/views/dashboard/SideMenu.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

import {useGetDepositStore} from '../stores/get-deposit-store'

const getDepositStore = useGetDepositStore()

onMounted(()=>{
getDepositStore.useGetDepositAccount()
})
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
