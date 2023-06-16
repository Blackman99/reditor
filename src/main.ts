import 'uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { Quasar } from 'quasar'
import Page from './templates/index.vue'
import App from './App.vue'
import { I18n, Templates, isLegalI18n, isLegalTemplate } from './types'
import { locale, templateName } from '@/store'
import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import { t } from '@/i18n'

const routes = [
  {
    path: '/:locale/:template',
    component: Page,
  },
  { path: '/:pathMatch(.*)*', redirect: '/en/simple' },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((to) => {
  const paths = to.path.split('/')
  if (paths.length < 3)
    return `/${I18n.EN}/${Templates.Simple}`

  const [, nextLocale, nextTemplate] = paths

  if (!isLegalI18n(nextLocale) || !isLegalTemplate(nextTemplate))
    return `/${I18n.EN}/${Templates.Simple}`

  locale.value = nextLocale as unknown as I18n
  templateName.value = nextTemplate as unknown as Templates
})

const app = createApp(App)

const templates = import.meta.glob('./templates/*/index.vue', { eager: true })

// register src/templates/foo/index.vue to <Foo /> component
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

// global translation injection with TS type tips
app.config.globalProperties.$t = t

app.mount('#app')
