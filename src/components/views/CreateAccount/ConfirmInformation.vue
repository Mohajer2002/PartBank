<script setup>
import { ref,watch } from 'vue'
import CustomButton from '@/components/common/CustomButton.vue'
import { createAccountConfig } from '@/services/apiConfigs'
// import { useFetch } from '@/services/api'

import IconCheck from '@/components/icons/IconCheck.vue'
import IconInfoCircle from '@/components/icons/IconInfoCircle.vue'
import { useCreateAccountStore } from '@/stores/account-store'
import { useRouter } from 'vue-router'

const router = useRouter()
const createAccountStore = useCreateAccountStore()
// const informationForm = ref(accountDataStore.accountData)
// const createAccountStore = useCreateAccountStore()
const toastOptions = ref({})

const registerAccount = () => {
  createAccountStore.createAccount()
}

watch(
  () => createAccountStore.accountResponse,
  () => {
    if (createAccountStore.accountResponse.result) {
      toastOptions.value = {
        type: 'success',
        text: 'عملیات با موفقیت انجام شد',
        position: 'top-center',
        show: true
      }
    } else {
      toastOptions.value = {
        type: 'error',
        text: 'عملیات با شکست مواجه شد',
        position: 'top-center',
        show: true
      }
    }
  },
  { deep: true }
)

const closeToast = (value) => {
  toastOptions.value.show = value
}
</script>
<template>
  <CustomToast :config="toastOptions" @toasterTimeOut="closeToast">
    <template v-slot:append-icon-success v-if="toastOptions.type == 'success'">
      <IconCheck svgColor="#fff" />
    </template>
    <template v-slot:append-icon-error v-if="toastOptions.type == 'error'">
      <IconInfoCircle svgColor="#fff" />
    </template>
  </CustomToast>

  <section class="confirm-information">
    <div class="information-form">
      <div class="information-form__form-content">
        <span class="information-form__title"> نام: </span>
        <span class="information-form__value" id="firstname">{{
          createAccountStore.personalInformation.firstName
        }}</span>
      </div>
      <div class="information-form__form-content">
        <span class="information-form__title"> نام خانوادگی: </span>
        <span class="information-form__value" id="lastname">
          {{ createAccountStore.personalInformation.lastName }}
        </span>
      </div>
      <div class="information-form__form-content">
        <span class="information-form__title"> کدپستی: </span>
        <span class="information-form__value" id="code">
          {{ createAccountStore.personalInformation.postalCode }}
        </span>
      </div>
      <div class="information-form__form-content information-form__form-content--address">
        <span class="information-form__title"> محل سکونت: </span>
        <span class="information-form__value" id="address">
          {{ createAccountStore.personalInformation.address }}
        </span>
      </div>
    </div>

    <div class="button-group">
      <div class="button-group__button">
        <CustomButton type="secondary" text="قبلی" @click="router.push('upload-card')" />
      </div>
      <div class="button-group__button">
        <CustomButton type="primary" text="افتتاح حساب" @click="registerAccount()" />
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

.button-group {
  @include global.customFlex(row, flex-end, center, 1rem);
  width: 100%;
  padding-top: 2.5rem;

  &__button {
    width: 11rem;
  }
}
</style>
