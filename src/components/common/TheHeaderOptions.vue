<script setup>
import IconAngleDown from '../icons/IconAngleDown.vue'
import IconNotification from '../icons/IconNotification.vue'

defineProps({
  phoneNumber: {
    type: String,
    default: '*******'
  }
})
</script>
<template>
  <div class="header__option">
    <button type="button" class="header__option-notif">
      <IconNotification svgColor="currentColor" class="header__option-notif-icon" />
    </button>
    <div class="header__option-user">
      <img src="/src/assets/images/avatar.png" alt="avatar" class="header__option-user-avatar" />

      <h6 class="header__option-user-phone-number">{{ phoneNumber }}</h6>
      <button class="header__more-option">
        <IconAngleDown svgColor="currentColor" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
$background-avatar: #e8e8e8;

.header {
  &__option {
    @include global.customFlex($alignItem: center, $gap: 1rem);
  }
  &__option-notif {
    @include global.customFlex(row, center, center);
    color: var(--text-gray);
  }
  &__option-notif-icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  &__option-user {
    @include global.customFlex($alignItem: center, $gap: 0.5rem);
  }
  &__option-user-avatar {
    width: 2.5rem;
    height: 2.5rem;
    background: $background-avatar;
    border-radius: 50%;
  }
  &__option-user-phone-number {
    @include global.fontStyle(0.875rem);
    color: var(--black-500);
  }
  &__more-option {
    @include global.customFlex(row, center, center);
    width: 1.5rem;
    height: 1.5rem;
    padding-bottom: 0.1rem;
  }
}
</style>
