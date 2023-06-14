<template>
  <div id="app">
    <div class="logo"><img src="./assets/logo.png"></div>
    <hello></hello>
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
body {
  font-family: Helvetica, sans-serif;
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
</style>
