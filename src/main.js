import Vue11 from 'vue'
import Vue from './vue2'
import VueRouter from 'vue-router'
import {configRouter} from './route-config'
// 判断iOS版本, 兼容旧版本的系统
const iOSVersion = navigator.appVersion || '' // str.match(/cpu iphone os (.*?) like mac os/)
var appVersion = iOSVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
appVersion = (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) === true ? parseInt(appVersion[1], 10) : 99 // 最大值
if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && appVersion < 5) {
  var app = new Vue11(require('./AppiOS5.vue')) // .$mount('#app')
  console.log(typeof app)
} else {
  // 如果版本大于iOS 6.0就使用Vue2
  // install router
  Vue.use(VueRouter)
  // create router
  const router = new VueRouter({
    history: false,
    saveScrollPosition: true
  })
  // configure router
  configRouter(router)
  // start app
  var App = Vue.extend(require('./App.vue'))
  router.start(App, '#app')
}
