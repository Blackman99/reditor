import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '',
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
      rules: [
        [
          /^bg-([\w\d]{6})$/,
          ([_, d]) => ({
            'background-color': `#${d}`,
          }),
        ],
        [
          /^b-([\w\d]{6})$/,
          ([_, d]) => ({
            'border-color': `#${d}`,
          }),
        ],
        [
          /^t-([\w\d]{6})$/,
          ([_, d]) => ({
            color: `#${d}`,
          }),
        ],
      ],
      presets: [presetAttributify(), presetUno(), presetIcons()],
    }),
  ],
})
