<script setup>
import { ref, watch } from 'vue'

import CustomInput from '@/components/common/CustomInput.vue'
import CustomButton from '@/components/common/CustomButton.vue'
import { useRouter } from 'vue-router'
import { useCreateAccountStore } from '@/stores/api-stores/account-store'

import { checkObjectIsEmpty } from '@/composables/validation'

const router = useRouter()
const createAccountStore = useCreateAccountStore()
const disabledNextSteptButton = ref(true)

const personalInformationInputs = ref([
  {
    name: 'firstName',
    label: 'نام',
    placeholder: 'نام فارسی',
    class: 'md-width',
    componentType: 'input',
    type: 'text',
    value: null
  },
  {
    name: 'lastName',
    label: 'نام خانوادگی',
    placeholder: 'نام خانوادگی به صورت کامل',
    class: 'md-width',
    componentType: 'input',
    type: 'text',
    value: null
  },

  {
    name: 'postalCode',
    label: 'کدپستی',
    placeholder: 'کدپستی',
    class: 'md-width',
    componentType: 'input',
    type: 'text',
    value: null
  },

  {
    name: 'address',
    label: 'محل سکونت',
    placeholder: 'محل سکونت',
    class: 'md-width',
    componentType: 'textarea',
    type: 'text',
    value: null
  }
])

const saveData = (name, value) => {
  createAccountStore.setPersonalInformation({
    ...createAccountStore.personalInformation,
    [name]: value
  })
}

watch(
  () => createAccountStore.personalInformation,
  () => {
    if (checkObjectIsEmpty(createAccountStore.personalInformation)) {
      disabledNextSteptButton.value = false
    } else {
      disabledNextSteptButton.value = true
    }
  },
  { deep: true }
)
</script>
<template>
{{createAccountStore.personalInformation}}
  <div class="form-group">
    <div
      :class="input.componentType == 'textarea' ? 'form-group__textarea' : 'form-group__inputs'"
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
        :component-type="input.componentType"
        :type="input.type"
        @change="saveData(input.name, input.value)"
      ></component>
    </div>
  </div>
  <div class="button-group">
    <div class="button-group__button">
      <CustomButton type="secondary" text="قبلی" :disabledButton="true" />
    </div>
    <div class="button-group__button">
      <CustomButton
        type="primary"
        text="ثبت و ادامه"
        @click="router.push('upload-card')"
        :disabledButton="disabledNextSteptButton"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-group {
  @include global.customFlex(row, space-between, center, 2rem);
  flex-wrap: wrap;
  &__inputs {
    width: 24rem;
  }
  &__textarea {
    flex-basis: 100%;
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
