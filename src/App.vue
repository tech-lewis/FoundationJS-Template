<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <!-- <el-button>test</el-button> -->
    <el-button type="primary">primary</el-button>
  </div>
</template>

<script>
import Hello from './components/Hello'
export default {
  components: {
    Hello
  }
}
</script>

<style>
</style>
