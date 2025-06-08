import { createApp } from 'vue'
import App from './App.vue'
import Vant from 'vant'
import router from './router/index'
import 'amfe-flexible'
createApp(App).use(router).use(Vant).mount('#app')
