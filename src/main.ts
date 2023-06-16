import 'uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Quasar } from 'quasar'
import Page from './templates/index.vue'
import App from './App.vue'
import { locale, templateName } from '@/store'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import { t } from '@/i18n'

const routes = [
  {
    path: '/:locale/:template',
    component: Page,
  },
  { path: '/:pathMatch(.*)*', redirect: '/en/green' },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((to) => {
  const paths = to.fullPath.split('/')
  if (paths.length < 2)
    return
  locale.value = (paths[1] || '/') as I18n
  templateName.value = (paths[2] || 'green') as Templates
})

const app = createApp(App)

const templates = import.meta.glob('./templates/*/index.vue', { eager: true })

Object.entries(templates).forEach(([path, templateComponent]) => {
  let name = path.split('/')[2]
  name = name.slice(0, 1).toUpperCase() + name.slice(1)

  app.component(name, (templateComponent as any).default)
})

app
  .use(router)
  .use(Quasar, {
    plugins: {
      //
    },
  })

app.config.globalProperties.$t = t

app.mount('#app')
