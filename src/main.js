import 'es6-symbol/implement';
// 第一行必须是这个
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'amfe-flexible'
import './styles/base.css'
import focus from './directives/focus';


var app = createApp(App);
app.directive('focus', focus); // 注册组件
app.use(router).mount('#app')
