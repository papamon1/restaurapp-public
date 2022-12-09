import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('@/styles/main-styles.scss')

createApp(App).use(router).mount('#app')
