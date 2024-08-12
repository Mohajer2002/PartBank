<script setup>
import TheHeader from '@/components/common/TheHeader.vue'
import SideMenu from '@/components/views/dashboard/SideMenu.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
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
