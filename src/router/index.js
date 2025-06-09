import Home from '../views/Home/index.vue'
import Login from '../views/Login/index.vue'

import { createRouter, createWebHashHistory } from 'vue-router'
var routes = [{
  path: '/',
  name: 'home',
  component: Home
  // component: () => import("../views/Home/index.vue")
}, {
  path: '/login',
  name: 'login',
  component: Login
  // component: () => import("../views/Login/index.vue")
}];

var router = createRouter({
    history:createWebHashHistory(),
    routes
  }
)
export default router