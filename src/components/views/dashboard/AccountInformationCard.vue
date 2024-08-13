<script setup>
import CustomButton from '../../common/CustomButton.vue'

const props = defineProps({
  headerTitle: {
    type: String,
    required: false,
    default: 'عنوان'
  },
  buttonTitle: {
    type: String,
    required: false,
    default: 'پرداخت'
  }
})
</script>
<template>
  <div class="account-information-preview__account-card-information account-information">
    <div class="account-information__card">
      <div class="account-information__header">
        <h5 class="account-information__header-title">{{ props.headerTitle }}</h5>
        <div class="account-information__header-icon">
        <slot name="prepend-icon"></slot>

        </div>
        <!-- <img
          class="account-information__header-icon"
          src="../../../public/assets/icons/info-circle.svg"
        /> -->
      </div>
      
      <slot name="content"> </slot>
      <div class="card-action">
        <CustomButton type="secondary" :text="props.buttonTitle" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.account-information-preview {
  @include global.customFlex($gap: 1rem);
}

.account-information {
  width: 60%;
  display: flex;
  gap: 1rem;
  &__header {
    @include global.customFlex(row, space-between, center);
  }
  &__header-title {
    @include global.fontStyle(1.25rem, 700);
    color: var(--black-500);
  }


  &__card {
    background-color: var(--white);
    width: 50%;
    height: 100%;
    padding: 1.5rem;
    border-radius: 0.75rem;
    @include global.customFlex(column, space-between);
  }
}

.card-action {
  @include global.customFlex($justifyContent: center);
  &__button {
    width: 100%;
    background-color: var(--primary-50);
    color: var(--black-500);
  }
}
</style>
