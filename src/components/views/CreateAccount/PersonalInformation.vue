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
    <div class="form-group__inputs" v-for="(input, index) in personalInformationInputs" :key="index">
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
  </div>
</template>

<style lang="scss" scoped>
.form-group {
  @include global.customFlex(row, space-between, center, 2rem);
  flex-wrap: wrap;
  &__inputs{
    width: 26rem;
  }
  
}

</style>
