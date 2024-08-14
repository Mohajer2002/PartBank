import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:3000',
    //       changeOrigin: true,
    //       secure: false,
    //       ws: true
    //     }
    //   }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/assets/styles/sass/_global.scss";`
      }
    }
  }
})
