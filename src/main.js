import './assets/styles/sass/_main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import CustomToast from '@/components/global/CustomToast.vue'

const app = createApp(App)

app.use(createPinia())
app.use(createPinia().use(piniaPluginPersistedstate))
// const pinia = createPinia()
// pinia.use(piniaPluginPersistedstate)
app.use(router)
app.component('CustomToast', CustomToast)

app.mount('#app')
