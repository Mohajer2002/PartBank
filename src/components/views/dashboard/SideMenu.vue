<script setup>
import { toRaw } from 'vue'

import { useDashboardDataStore } from '@/stores/dashboard-information-store'
import NavbarView from './NavbarView.vue'
import { useLoginApiStore } from '@/stores/api-stores/login-api-store'

const dashboardDataStore = useDashboardDataStore()
const loginApiStore=useLoginApiStore()

const { firstName, lastName, idNumber } = loginApiStore.loginResponse.loggedUserData
</script>
<template>
  <section class="main-dashboard__side-menu side-menu">
    <div class="side-menu__user-info">
      <!-- user info -->
      <h3 class="side-menu__user-name">
        {{ `${firstName ?? 'نام'} ${lastName ?? 'نام خانوادگی'}` }}
      </h3>
      <div class="side-menu__national-code">
        <span class="side-menu__national-code-label"> کدملی </span>
        <span class="side-menu__national-code-value"> {{ idNumber ?? '********' }} </span>
      </div>
    </div>
    <hr class="side-menu__hr" />
    <NavbarView />
  </section>
</template>

<style lang="scss">
.side-menu {
  width: 18rem;
  padding: 1.5rem 0 12rem 0;
  background-color: var(--white);
  border-radius: 0.75rem;
  height: 100%;

  &__hr {
    background-color: var(--hr-color);
    margin: 1.25rem 0.7rem;
    border: none;
    height: 1px;
  }
  &__user-info {
    text-align: center;
    padding: 0 1.5rem;
    @include global.customFlex(column, $gap: 1.72rem);
  }
  &__user-name {
    color: var(--black-500);
    padding-top: 0.875rem;
    line-height: 1.75rem;

    @include global.fontStyle(1.25rem, 700);
  }
  &__national-code {
    @include global.customFlex($justifyContent: space-between);
  }
  &__national-code-label {
    color: var(--text-gray);

    @include global.fontStyle(0.75rem);
  }
  &__national-code-value {
    color: var(--black-500);

    @include global.fontStyle(0.875rem, 600);
  }
}
</style>
