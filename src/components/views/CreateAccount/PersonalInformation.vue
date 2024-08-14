<script setup>
import { ref } from 'vue'

import CustomInput from '@/components/common/CustomInput.vue'
import CustomButton from '@/components/common/CustomButton.vue'
import { useRouter, useRoute } from 'vue-router'
import { useDataStore } from '@/stores/dataStore'

const router = useRouter()
const dataStore = useDataStore()

const personalInformationInputs = ref([
  {
    name: 'firstName',
    label: 'نام',
    placeholder: 'نام فارسی',
    class: 'md-width',
    type: 'input',
    value: null
  },
  {
    name: 'lastName',
    label: 'نام خانوادگی',
    placeholder: 'نام خانوادگی به صورت کامل',
    class: 'md-width',
    type: 'input',

    value: null
  },

  {
    name: 'postalCode',
    label: 'کدپستی',
    placeholder: 'کدپستی',
    class: 'md-width',
    type: 'input',
    value: null
  },

  {
    name: 'address',
    label: 'محل سکونت',
    placeholder: 'محل سکونت',
    class: 'md-width',
    type: 'textarea',
    value: null
  }
])

const saveData = (name, value) => {
  dataStore.setUserInfo({
    ...dataStore.userInfo,
    [name]: value
  })
}
</script>
<template>
  {{ dataStore.userInfo }}
  <!-- {{localStorage.getItem("userInfo")}} -->
  <div class="form-group">
    <div
      class="form-group__inputs"
      v-for="(input, index) in personalInformationInputs"
      :key="index"
    >
      <component
        v-model="input.value"
        :is="CustomInput"
        :name="input.name"
        :label="input.label"
        :placeholder="input.placeholder"
        :class="input.class"
        :type="input.type"
        @change="saveData(input.name, input.value)"
      ></component>
    </div>
  </div>
  <div class="button-group">
    <div class="button-group__button">
      <CustomButton type="secondary" text="قبلی" disabled />
    </div>
    <div class="button-group__button">
      <CustomButton type="primary" text="ثبت و ادامه" @click="router.push('upload-card')" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-group {
  @include global.customFlex(row, space-between, center, 2rem);
  flex-wrap: wrap;
  &__inputs {
    width: 26rem;
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
