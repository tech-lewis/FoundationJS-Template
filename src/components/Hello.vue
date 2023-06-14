<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="handle">Click Me</button>
    <label for="name">name</label>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  methods: {
    handle () {
      alert('show')
    }
  }
}
</script>

<style>
.hello {
  text-align: center;
}
</style>
