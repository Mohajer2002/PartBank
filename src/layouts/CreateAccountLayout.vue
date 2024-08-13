<script setup>
import { useRouter, useRoute } from 'vue-router'
import CustomButton from '@/components/common/CustomButton.vue'
import { ref, watch } from 'vue'

const router = useRouter()
const route = useRoute()

const layoutHeaderTitle = ref()
const layoutNextStep = ref()
watch(
  () => route.path,
  () => {
    console.log("here")
    layoutHeaderTitle.value = route.meta.headerTitle
    layoutNextStep.value = route.meta.nextStep
  },
  { immediate: true }
)
</script>
<template>
  <main class="information-box-container">
    
    <div class="information-box">
      <h4 class="information-box__header">{{ layoutHeaderTitle }}</h4>
      <hr class="information-box__divider" />
      <router-view />

      <div class="information-box__button-group">
        <div class="information-box__button">
          <CustomButton type="secondary" text="قبلی" />
        </div>
        <div class="information-box__button">
          <CustomButton
            type="primary"
            :text="route.name == 'confirm-information' ? 'افتتاح حساب' : 'ثبت و ادامه'"
            @click="router.push(layoutNextStep)"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.information-box-container {
  @include global.customFlex(row, center, center);
}

.information-box {
  background-color: var(--white);
  border-radius: 0.75rem;
  width: 82.5rem;
  padding: 2.5rem;

  &__header {
    color: var(--black-500);
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
  }
  &__divider {
    margin: 2.5rem;
    background-color: var(--hr-color);
    border: none;
    height: 1px;
  }

  &__button-group {
    @include global.customFlex(row, flex-end, center, 1rem);
    width: 100%;
    padding-top: 2.5rem;
  }
  &__button {
    width: 11rem;
  }
}
</style>
