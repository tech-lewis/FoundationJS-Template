<template>
  <div id="app">
    <!-- <div class="logo"><img src="./assets/logo.png"></div> -->
    <p v-show="authenticating" style="color:red">Authenticating...</p>
    <h1 class="header">Header</h1>
    <ui-button>111</ui-button>
    <div class="footer">
      <a v-link="{ path: '/user/Hello/profile/Mark' }">user</a>
      <a v-link="{ path: '/about' }">about</a>
      <a v-link="{ path: '/welcome' }">主页</a>
      <a v-link="{ path: '/forbidden' }">forbidden</a>
    </div>
    <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Vue from 'vue'
import KeenUI from 'keen-ui'
Vue.use(KeenUI)
export default {
  components: {
    Hello
  },
  data () {
    return {
      authenticating: false
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  background: #ccc;
}
.header {
  background: gray;
  color: white;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.view {
  transition: all .5s ease;
}
.test-enter, .test-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}
.v-link {
  padding: 10px;
  background: white;
}
.v-link-active {
  color: white;
  background: orange;
  box-sizing: border-box;
  padding: 10px;
}
[v-cloak] {
  display: none;
}

#app {
  display: flex;
  justify-self: center;
  align-items: center;
  flex-direction: column;
}

.logo {
  text-align: center;
}

.footer {
  text-align: center;
  margin: 0 auto;
  padding-top: 10px;
  border-bottom: 1px solid orange;
}
.footer>a{
  display: inline;
  padding: 5px;
  line-height: 20px;
  text-decoration: none;
}
</style>
