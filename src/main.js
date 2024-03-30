import Vue11 from 'vue'
import Vue from './vue2'
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

// 判断iOS版本, 兼容旧版本的系统
const str = navigator.userAgent.toLowerCase()
const iOSVersion = str.match(/cpu iphone os (.*?) like mac os/)
const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
if (isiOS && iOSVersion < 7) {
  var app = new Vue11(require('./AppiOS5.vue')) // .$mount('#app')
  console.log(typeof app)
} else {
  // 如果版本大于iOS 6.1就使用KeenUI
  var App = Vue.extend(require('./App.vue'))
  router.start(App, '#app')
}
