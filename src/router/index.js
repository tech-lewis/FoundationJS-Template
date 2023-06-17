import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/Login'
import home from '../pages/Home'
import hello from '../components/Hello'
// Vue.use(Router)
// const router = new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/hello',
//       name: 'hello',
//       component: hello
//     }
//   ]
// })
const router = new Router()
router.map({
  '/': {
    component: login
  },
  '/hello': {
    component: hello
  },
  '/app': {
    component: home
  }
})
export default router
