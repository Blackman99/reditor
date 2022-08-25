import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  plugins: [
    vue(),
    Unocss({
      presets: [presetAttributify(), presetUno(), presetIcons()],
    }),
  ],
})
