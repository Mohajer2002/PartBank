<script setup>
import { ref } from 'vue'

import CustomInput from '@/components/common/CustomInput.vue'
import CustomButton from '@/components/common/CustomButton.vue'

const loginInputs = ref([
  {
    id: '1',
    name: 'phone-number',
    label: 'شماره همراه',
    placeholder: 'مثلا ۰۹۱۲۳۴۵۶۷۸۹',
    class: 'md-width',
    type: 'input',
    value: null
  },
  {
    id: '2',

    name: 'password',
    label: 'رمز عبور',
    placeholder: 'رمز عبور',
    class: 'md-width',
    type: 'input',

    value: null
  }
])
</script>

<template>
  <div v-for="input in loginInputs" :key="input.id" class="form-group">
    <component
      v-model="input.value"
      :is="CustomInput"
      :name="input.name"
      :label="input.label"
      :placeholder="input.placeholder"
      :class="input.class"
      :type="input.type"
    ></component>
  </div>
  <div class="submit-login-button">
    <CustomButton type="primary" text="ورود" size="lg-button" />
  </div>
</template>

<style lang="scss" scoped>
.form-group {
  width: 20rem;
  padding-bottom: 1rem;
}

.submit-login-button {
  width: 20rem;
  padding: 1.5rem 0;
}
</style>
