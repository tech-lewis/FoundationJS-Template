import { createRouter, createWebHashHistory } from 'vue-router'
var routes = [{
  path: '/',
  name: 'home',
  component: () => import("../views/Home/index.vue")
}, {
  path: '/login',
  name: 'login',
  component: () => import("../views/Login/index.vue")
}];

var router = createRouter({
    history:createWebHashHistory(),
    routes
  }
)
export default router