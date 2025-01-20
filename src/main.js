import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHashHistory()
})

app.use(autoAnimatePlugin)

app.mount('#app')
