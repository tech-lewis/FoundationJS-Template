import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'amfe-flexible'
import './styles/base.css'

createApp(App).use(router).mount('#app')
