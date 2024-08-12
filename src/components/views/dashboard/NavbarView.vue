<script setup>
import { ref, shallowRef } from 'vue'
import IconDashboard from '@/components/icons/IconDashboard.vue'
import IconWallet from '@/components/icons/IconWallet.vue'
import IconStrongbox from '@/components/icons/IconStrongbox.vue'
import IconCards from '@/components/icons/IconCards.vue'
import IconRecipt from '@/components/icons/IconRecipt.vue'
import IconCardPos from '@/components/icons/IconCardPos.vue'
import IconLogout from '@/components/icons/IconLogout.vue'
import DashboardView from '@/views/DashboardView.vue'

const sideMenuItems = shallowRef([
  {
    id: 1,
    name: 'داشبورد',
    action: () => {
      return DashboardView
    },
    icon: IconDashboard,
    activeStyle: 'navbar-button--active',
    baseStyle: 'navbar__navbar-button navbar-button '
  },
  {
    id: 2,
    name: 'حساب',
    action: () => {
      return ''
    },
    icon: IconWallet,
    activeStyle: 'navbar-button--active',
    baseStyle: 'navbar__navbar-button navbar-button '
  },
  {
    id: 3,
    name: 'تسهیلات',
    action: () => {
      return ''
    },
    icon: IconStrongbox,
    activeStyle: 'navbar-button--active',
    baseStyle: 'navbar__navbar-button navbar-button '
  },
  {
    id: 4,
    name: 'عملیات کارت',
    action: () => {
      return ''
    },
    icon: IconCards,
    activeStyle: 'navbar-button--active',
    baseStyle: 'navbar__navbar-button navbar-button '
  },
  {
    id: 5,
    name: 'سفته الکترونیک',
    action: () => {
      return ''
    },
    icon: IconRecipt,
    activeStyle: 'navbar-button--active',
    baseStyle: 'navbar__navbar-button navbar-button '
  },
  {
    id: 6,
    name: 'خدمات',
    action: () => {
      return ''
    },
    icon: IconCardPos,
    activeStyle: 'navbar-button--active',
    baseStyle: 'navbar__navbar-button navbar-button '
  },
  {
    id: 7,
    name: 'خروج',
    action: () => {
      return 'logout'
    },
    icon: IconLogout,
    activeStyle: 'navbar-button--exit-active',
    baseStyle: 'navbar__navbar-button navbar-button navbar-button--exit'
  }
])

const activeMenuItem = ref(1)

const handleClick = (itemId) => {
  activeMenuItem.value = itemId
}
</script>
<template>
  <nav class="side-menu__navbar navbar">
    <button
      v-for="item in sideMenuItems"
      :key="item.id"
      :class="[item.baseStyle, activeMenuItem == item.id ? item.activeStyle : '']"
      @click="handleClick(item.id)"
    >
      <component :is="item.icon" svgColor="currentColor" />

      <span>{{ item.name }}</span>
    </button>
  </nav>
</template>

<style scoped lang="scss">
$active-button-color: #f9fafb;

.navbar {
  padding: 0 0.5rem;
  gap: 0.125rem;
  &__navbar-button {
    color: var(--text-gray);
    width: 100%;
    background-color: var(--white);
  }
}

.navbar-button {
  @include global.customFlex($alignItem: center, $gap: 0.5rem);

  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  &--exit {
    color: var(--fail-500);
  }
  &--exit-active {
    background-color: var(--fail-50);
  }
  &--active {
    background-color: $active-button-color;
    color: var(--primary-500);
    font-weight: 700;
    .navbar-button__icon {
      background-color: var(--primary-500);
    }
  }
  &__icon {
    width: 1.2rem;
    height: 1.2rem;
    background-color: var(--text-gray);
  }
  &__icon--exit {
    background-color: var(--fail-500);
  }
}
</style>
