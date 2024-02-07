import Vue from 'vue'
// import App from './App'
import VueRouter from 'vue-router'
import {configRouter} from './route-config'
// import router from './router'
// import * as echarts from 'echarts'
// import 'keen-ui/dist/keen-ui.css'

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
var App = Vue.extend(require('./App.vue'))
const str = navigator.userAgent.toLowerCase()
const iOSVersion = str.match(/cpu iphone os (.*?) like mac os/)
const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
if (isiOS && iOSVersion <= 5) App = Vue.extend(require('./AppiOS5.vue'))

// 如果版本大于5.1就使用KeenUI
router.start(App, '#app')

// just for debugging
window.router = router
