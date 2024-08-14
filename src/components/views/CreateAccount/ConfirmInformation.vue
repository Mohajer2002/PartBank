<script setup>
import { ref } from 'vue'
import { useDataStore } from '@/stores/dataStore'
const dataStore = useDataStore()
const informationForm = ref(dataStore.userInfo)
</script>
<template>
  {{ dataStore.userInfo }}

  <section class="confirm-information">
    <div class="information-form">
      <div class="information-form__form-content">
        <span class="information-form__title"> نام: </span>
        <span class="information-form__value" id="firstname">{{ informationForm.firstname }}</span>
      </div>
      <div class="information-form__form-content">
        <span class="information-form__title"> نام خانوادگی: </span>
        <span class="information-form__value" id="lastname"> {{ informationForm.lastname }} </span>
      </div>
      <div class="information-form__form-content">
        <span class="information-form__title"> کدپستی: </span>
        <span class="information-form__value" id="code"> {{ informationForm.code }} </span>
      </div>
      <div class="information-form__form-content information-form__form-content--address">
        <span class="information-form__title"> محل سکونت: </span>
        <span class="information-form__value" id="address">
          {{ informationForm.address }}
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.information-form {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;

  &__form-content {
    display: flex;
    flex-direction: column;
    row-gap: 0.25rem;
    width: 24rem;
    &--address {
      flex-basis: 100%;
    }
  }

  &__title {
    color: var(--text-gray);
    font-size: 0.875rem;
    font-weight: 600;
    padding-right: 0.5rem;
  }
  &__input {
    background-color: #f9fafb;
    border-radius: 0.375rem;
    color: var(--black-500);
    border: 1px solid #ececee;
    height: 3rem;
    padding: 0rem 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;

    &--address {
      resize: none;
      height: 7.5rem;
      padding-top: 1rem;
    }
  }

  &__value {
    color: var(--black-500);
    padding-right: 0.5rem;
    font-weight: 600;
  }
}
</style>
