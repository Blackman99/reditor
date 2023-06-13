import 'uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Page from './templates/index.vue'
import EditableSpan from './components/EditableSpan.vue'
import App from './App.vue'
import { locale } from '@/store'

const routes = [{ path: '/:pathMatch(.*)*', component: Page }]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((to) => {
  const paths = to.fullPath.split('/')
  if (paths.length < 2)
    return

  locale.value = (paths[1] || '/') as I18n
})

const app = createApp(App)

const templates = import.meta.glob('./templates/*/index.vue', { eager: true })

Object.entries(templates).forEach(([path, templateComponent]) => {
  let name = path.split('/')[2]
  name = name.slice(0, 1).toUpperCase() + name.slice(1)

  app.component(name, (templateComponent as any).default)
})

app.use(router)

app.component('EditableSpan', EditableSpan)

app.mount('#app')
