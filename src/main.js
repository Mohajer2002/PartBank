import './assets/styles/sass/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import CustomToast from "@/components/global/CustomToast.vue"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("CustomToast",CustomToast)

app.mount('#app')
