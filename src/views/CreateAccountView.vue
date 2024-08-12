<script setup>
import CreateAccountLayot from '@/layouts/CreateAccountLayout.vue'
</script>
<template>
  <div class="create-account-body">
    <CreateAccountLayot header-title="اطلاعات فردی">
      <!-- CreateAccountView
      <router-view /> -->
    </CreateAccountLayot>
  </div>
</template>

<style lang="scss" scoped>
.create-account-body {
  background-color: var(--basic-background);
  height: 100vh;
  //   @include global.customFlex(row, center, center);
  padding-top: 2.6rem;
}
</style>
