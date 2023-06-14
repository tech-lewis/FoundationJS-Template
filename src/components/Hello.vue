<template>
  <div class="container">
    <div class="hello">
      <h1>{{ msg }}</h1>
      <button @click="handle">Click Me</button>
      <label for="name">name</label>
      <input type="text" v-model="msg">
    </div>
    <group>
      <cell v-for="item in values" :key="item" v-bind:title="item" value="切换语言"></cell>
    </group>
  </div>
</template>

<script>
import Group from 'vux/dist/components/group'
import Cell from 'vux/dist/components/cell'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      msg: 'Hello World!',
      values: ['中文', 'English', '日本語', 'Français', 'Español']
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
@import '~vux/dist/vux.css';
.container {
  width: 100%;
}
.hello {
  text-align: center;
}
</style>