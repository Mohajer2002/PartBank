<script setup>
import { ref } from 'vue'

import CustomInput from '@/components/common/CustomInput.vue'

const personalInformationInputs = ref([
  {
    name: 'firstname',
    label: 'نام',
    placeholder: 'نام فارسی',
    class: 'md-width',
    type: 'input',
    value: null
  },
  {
    name: 'lastname',
    label: 'نام خانوادگی',
    placeholder: 'نام خانوادگی به صورت کامل',
    class: 'md-width',
    type: 'input',

    value: null
  },

  {
    name: 'code',
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
  },
])
</script>
<template>
  <div class="form-group">
 
  </div>
</template>

<style lang="scss" scoped>
.form-group {
  @include global.customFlex(row, space-between, center, 2rem);
}
</style>
