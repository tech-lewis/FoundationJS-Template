import Vue from 'vue'
import navConfig from './nav.config.json'

// import App from './App'
import VueRouter from 'vue-router'
// import {configRouter} from './route-config'
// import router from './router'
// import * as echarts from 'echarts'
import ElementUI from 'element-ui' // 全局引入
Vue.use(ElementUI)
/* eslint-disable no-new */
// import { Button } from 'vux'
// import 'styles/base.css'
// import 'styles/index.css'
// Vue.component('v-button', Button)
// install router
Vue.use(VueRouter)
// create router
const router = new VueRouter({
  history: false,
  saveScrollPosition: true
})
const registerRoute = (config) => {
  let route = {}
  config.map(nav => nav.list.map(page => {
    try {
      route[page.path] = {
        component: require(`./docs${page.path}.vue`),
        title: page.title || page.name,
        description: page.description
      }
    } catch (e) {
      console.error(e)
      page.disabled = true
    }
  }))

  return { route, navs: config }
}

const route = registerRoute(navConfig)

// const navs = route.navs
function configRouter (router) {
  router.map(Object.assign({
    '*': {
      component: require('./docs/home.vue')
    }
  }, route.route))

  router.beforeEach(transition => {
    document.title = transition.to.title || document.title
    transition.to.router.app.$broadcast('element.example.reload')
    transition.next()
  })
}
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
