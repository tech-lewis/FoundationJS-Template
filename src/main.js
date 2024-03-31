import Vue11 from 'vue'
import Vue from './vue2'
// 判断iOS版本, 兼容旧版本的系统
const iOSVersion = navigator.appVersion || '' // str.match(/cpu iphone os (.*?) like mac os/)
const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
var appVersion = iOSVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)
appVersion = isiOS === true ? parseInt(appVersion[1], 10) : 99 // 最大值
// alert(parseInt(appVersion[1], 10))
if (isiOS && appVersion < 5) {
  var app = new Vue11(require('./AppiOS5.vue')) // .$mount('#app')
  console.log(typeof app)
} else {
  // 如果版本大于iOS 6.0就使用Vue2
  // start app
  var instance = new Vue({
    el: '#app',
    data: {
      showModal: false,
      msg: '当前使用的Vue 2开发版本'
    }
  })
  console.log(instance)
}
