import 'uno.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Page from './templates/index.vue'
import { locale } from './i18n'
import Green from './templates/green/index.vue'
import Simple from './templates/simple/index.vue'
import App from './App.vue'

const routes = [{ path: '/:pathMatch(.*)*', component: Page }]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach(to => {
  const paths = to.fullPath.split('/')
  if (paths.length < 2) {
    return
  }
  ;``
  locale.value = (paths[1] || '/') as I18n
})

const app = createApp(App)

app.use(router)

app.component('Simple', Simple)
app.component('Green', Green)

app.mount('#app')
