import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': resolve(process.cwd(), 'src'),
    },
  },
  plugins: [
    vue(),
    Unocss({
      rules: [[/^bg-([0-9A-Fa-f]{6})/, ([_, d]) => `background-color: #${d};`]],
      presets: [presetAttributify(), presetUno(), presetIcons()],
    }),
  ],
})
