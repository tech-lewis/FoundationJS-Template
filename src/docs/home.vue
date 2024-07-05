<template>
  <div>
    <header>
      <h1 class="title">Welcome to My Blog</h1>
      <dev-tip>
        开发中
      </dev-tip>
    </header>
  </div>
</template>

<script>
import DevTip from '../components/UIKit/Dev-tip'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    DevTip
  }
}
</script>

<style>

</style>