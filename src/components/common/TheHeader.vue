<script setup>
import { useDataStore } from '@/stores/dataStore'
import TheHeaderOptions from './TheHeaderOptions.vue'
const dataStore = useDataStore()
</script>
<template>
  <header class="header">
    <div class="header__logo">
      <img src="/src/assets//images/favicon.svg" alt="Logo" class="header__logo-img" />
      <h6 class="header__logo-title">پارت بانک</h6>
    </div>
    <TheHeaderOptions :phone-number="dataStore.phoneNumber" />
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: var(--white);
  box-shadow: 0px 2px 8px 0px rgba(21, 0, 43, 0.05);
  height: global.$header-height;
  @include global.customFlex(row, space-between, center);
  padding: 0 2.5rem;
  color: var(--black-500);
  &__logo {
    @include global.customFlex($alignItem: center, $gap: 0.75rem);
  }
  &__logo-img {
    width: 1.5rem;
    height: 1.5rem;
  }
  &__logo-title {
    font: {
      size: 1rem;
      weight: 400;
    }
  }
}
</style>
