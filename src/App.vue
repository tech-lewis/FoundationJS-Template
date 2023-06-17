<template>
  <div id="app">
    <!-- <div class="logo"><img src="./assets/logo.png"></div> -->
    <p v-show="authenticating" style="color:red">Authenticating...</p>
    <h1 class="header">Header</h1>
    <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
    <div class="footer">
      <a v-link="{ path: '/user/1234/profile/what' }">user</a>
      <a v-link="{ path: '/welcome' }">主页</a>
      <a v-link="{ path: '/forbidden' }">forbidden</a>
      <a v-link="{ path: '/about' }">about</a>
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello'

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
  background: black;
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
  color: orange;
  background: white;
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
}
.footer>a{
  display: inline;
  padding: 5px;
  line-height: 20px;
  color: red;
  text-decoration: none;
}
</style>
