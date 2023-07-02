import Vue from 'vue'
// import App from './App'
import VueRouter from 'vue-router'
import {configRouter} from './route-config'
// import router from './router'
// import * as echarts from 'echarts'
// import ElementUI from 'element-ui' // 全局引入
// import 'element-ui/lib/theme-default/index.css'
// Vue.use(ElementUI)
/* eslint-disable no-new */
import { Button } from 'vux'
// import 'styles/base.css'
// import 'styles/index.css'
import store from './store'

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})
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
store.actions.getAllMessages()
