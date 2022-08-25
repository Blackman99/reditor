import 'uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import SimpleTemplate from './templates/simple/index.vue'
import { locale } from './i18n'

import App from './App.vue'

const routes = [
  { path: '/', component: SimpleTemplate },
  { path: '/zh-CN/', component: SimpleTemplate },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach(to => {
  const paths = to.fullPath.split('/')
  if (paths.length < 2) {
    return
  }
  locale.value = (paths[1] || '/') as I18n
})

createApp(App).use(router).mount('#app')
