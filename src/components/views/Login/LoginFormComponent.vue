<script setup>
import { ref, computed, watch } from 'vue'

import CustomInput from '@/components/common/CustomInput.vue'
import CustomButton from '@/components/common/CustomButton.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
import { useDataStore } from '@/stores/dataStore'
import { loginConfig } from '@/services/apiConfigs'
import { useFetch } from '@/services/api'
import {useRouter} from "vue-router"

const dataStore = useDataStore()
const router=useRouter()

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


const toastOptions = ref({})


const form = computed(() => {
  return {
    phoneNumber: loginInputs.value[0].value,
    password: loginInputs.value[1].value
  }
})

const submitLogin = async () => {
  loginConfig['data'] = JSON.stringify(form.value)

  const { errorMessage } = await useFetch(loginConfig)


  if (errorMessage.value) {
 

    toastOptions.value = {
      type: 'error',
      text: errorMessage,
      position: 'top-right',
      show: true
    }
  }
  else
  {
    router.push("/dashboard")
    dataStore.setPhoneNumber(form.value.phoneNumber);
    
  }


}

const closeToast = (value) => {
  toastOptions.value.show = value
}
</script>

<template>
  <CustomToast :config="toastOptions" @toasterTimeOut="closeToast">
    <template v-slot:append-icon>
      <IconCheck />
    </template>
  </CustomToast>

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
    <CustomButton type="primary" text="ورود" size="lg-button" @click="submitLogin" />
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
