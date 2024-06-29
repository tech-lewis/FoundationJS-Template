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
#app {
  font-family: Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  background: #ccc;
}

body {
  margin: 0;
  padding: 0;
}
</style>
