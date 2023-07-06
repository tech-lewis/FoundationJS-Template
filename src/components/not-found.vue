<template>
  <div>
    <p>默认的404页面</p>
    Clicked: {{ count }} times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import store from '../store'
export default {
  data () {
    return {
      msg: '默认的404页面'
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: store.actions,
  components: {}
}
</script>
