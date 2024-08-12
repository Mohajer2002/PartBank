<script setup>
import { ref } from 'vue'

import CustomInput from '@/components/common/CustomInput.vue'
import CustomButton from '@/components/common/CustomButton.vue'

const loginInputs = ref([
  {
    name: 'phone-number',
    label: 'شماره همراه',
    placeholder: 'مثلا ۰۹۱۲۳۴۵۶۷۸۹',
    class: 'md-width',
    value: null
  },
  {
    name: 'password',
    label: 'رمز عبور',
    placeholder: 'رمز عبور',
    class: 'md-width',
    value: null
  }
])
</script>

<template>
  <div v-for="(input, index) in loginInputs" :key="index">
    <component
      v-model="input.value"
      :is="CustomInput"
      :name="input.name"
      :label="input.label"
      :placeholder="input.placeholder"
      :class="input.class"
    ></component>
  </div>
  <div class="submit-login-button">
  <CustomButton type="primary" text="ورود" size="lg-button" />

  </div>
</template>

<style lang="scss" scoped>
.submit-login-button {
  width: 22rem;
}

</style>
