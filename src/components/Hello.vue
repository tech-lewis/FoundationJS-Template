<template>
  <div class="container">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <button @click="handle">Show List</button>
      <label for="name">name</label>
      <input type="text" v-model="msg">
      
      <button @click="toUserPage">回到用户中心</button>
    </div>
    <group v-if="isShow">
      <cell v-for="item in values" :key="item" v-bind:title="item" value="切换语言"></cell>
    </group>
    <Datetime />
    <!-- <group>
    </group> -->
  </div>
</template>

<script>
// import { Group, Cell } from 'vux'
// or you can import the components you need
// by this way, you can reduce webpack bundle size
import Group from 'vux/components/group/'
import Cell from 'vux/components/cell/'
import Datetime from 'vux/components/button/'
import { Alert } from 'vux'
export default {
  components: {
    Group,
    Cell,
    Datetime,
    Alert
  },
  data () {
    return {
      msg: 'Hello World!',
      isShow: false,
      values: ['中文', 'English', '日本語', 'Français', 'Español']
    }
  },
  methods: {
    toUserPage () {
      window.router.go('/user/Hello/profile/Vue')
    },
    handle () {
      if (/Firefox/.test(window.navigator.userAgent)) {
        alert('firefox')
      } else {
        this.isShow = true
      }
    }
  }
}
</script>

<style>
@import '~vux/vux.css';
.container {
  width: 100%;
  background: #ccc;
}
.hello {
  text-align: center;
}
</style>