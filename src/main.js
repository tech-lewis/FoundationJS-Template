import Vue from 'vue'
// import App from './App'
import VueRouter from 'vue-router'
import {configRouter} from './route-config'
// import router from './router'
// import * as echarts from 'echarts'
import KeenUI from 'keen-ui' // 全局引入
import 'keen-ui/dist/keen-ui.css'
Vue.use(KeenUI)
/* eslint-disable no-new */
import { Button } from 'vux'
// import 'styles/base.css'
// import 'styles/index.css'
Vue.component('v-button', Button)
// install router
Vue.use(VueRouter)
// create router
const router = new VueRouter({
  history: false,
  saveScrollPosition: true
})
// configure router
configRouter(router)
// new Vue({
//   el: 'body',
//   router: router,
//   components: { App }
// }) // 如果你再创建一个new Vue instance，那么无法接管 el: 'body'，只可以一一对应的哦
// boostrap the app
const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')

// just for debugging
window.router = router
