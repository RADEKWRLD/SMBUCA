import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './utils/lenis'  // 引入 Lenis 配置

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
