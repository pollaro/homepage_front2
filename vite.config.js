import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'

// https://vitejs.dev/config/
const defaultConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  envDir: '.'
}
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    const isDev = mode === 'development'
    return {
      ...defaultConfig,
      server: {
        proxy: {
          '/hbl/login/': {
            target: isDev ? 'https://127.0.0.1:8000' : 'https://jimpollaro.com:8000',
            changeOrigin: true,
            secure: false
          },
          '/hbl/check/': {
            target: isDev ? 'https://127.0.0.1:8000' : 'https://jimpollaro.com:8000',
            changeOrigin: true,
            secure: false
          }
        }
      }
    }
  } else {
    return defaultConfig
  }
})
