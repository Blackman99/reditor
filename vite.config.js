import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { QuasarResolver } from 'unplugin-vue-components/resolvers'

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
    Components({
      directoryAsNamespace: true,
      resolvers: [
        QuasarResolver(),
      ],
    }),
    AutoImport({
      include: [
        /\.vue$/, /\.vue\?vue/,
      ],
      imports: [
        'vue',
      ],
    }),
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
      transformers: [transformerDirectives()],
    }),
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/quasar-variables.sass',
    }),
  ],
})
