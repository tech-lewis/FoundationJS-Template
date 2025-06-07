<template>
  <div class="container" style="margin: 0 auto;text-align: center;">
    <img src="./logo.png">
    <h1>MENG-ZI(preview)</h1>
    <strong>企业官网</strong>
    <van-button type='primary' @click="inc">你好梦瑶</van-button>
    <button @click="inc">Clicked {{ count }} times.</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const inc = () => {
      count.value++
    }

    return {
      count,
      inc
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
img {
  width: 100px;
  background: #ccc;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
