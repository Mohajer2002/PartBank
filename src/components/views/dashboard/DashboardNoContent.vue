<script setup>
import CustomButton from '@/components/common/CustomButton.vue'
import IconEmptyStateIllustration from '@/components/icons/IconEmptyStateIllustration.vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const goToCreateAccount = () => {
  router.push('create-account/personal-information')
}
</script>
<template>
  <div class="dashboard-content__no-content no-content">
    <icon-empty-state-illustration />
    <span class="no-content__description">
      برای دسترسی به داشبورد، لطفا ابتدا افتتاح حساب کنید
    </span>
    <div class="no-content__button">
      <CustomButton
        type="primary"
        text="افتتاح حساب"
        class="no-content__create-account-button"
        @click="goToCreateAccount"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.no-content {
  width: 100%;
  height: 100%;
  @include global.customFlex(column, center, center, 2rem);
  position: absolute;
  background-image: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.95)
  );
  z-index: 10;
  border-radius: 0.7rem;
  &__description {
    color: var(--black-500);

    @include global.fontStyle(1rem, 600);
  }

  &__create-account-button {
    width: 12.5rem;
    height: 3rem;
  }
}
</style>
