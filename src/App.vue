<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const list = ref([
      {text: '小梦瑶', age: 1996, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 1997, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 1998, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 1999, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2000, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2001, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2002, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2003, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2004, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2005, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2006, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2007, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2008, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2009, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2010, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2011, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2012, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2013, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2014, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2015, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2016, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2017, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2018, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2019, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2020, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2021, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2022, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2023, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2024, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2025, label: '没有小蛮腰'},
      {text: '小梦瑶', age: 2026, label: '没有小蛮腰'},
    ])
    const inc = () => {
      count.value++
    }

    const tips = () => {
      window.alert('梦瑶一点不可爱，她是大华人')
    }

    return {
      count,
      list,
      tips,
      inc
    }
  }
}
</script>

<template>
  <div class="container">
    <van-cell-group class="list">
      <van-cell title="单元格" value="内容" />
      <van-cell v-for="(item, index) in list" :key="index" :title="item.text" :value="item.age" :label="item.label" @click="tips" />
    </van-cell-group>
  </div>
</template>


<style scoped>
.container {
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.list {
  width: 100%;
}
.title {
  font-size: 20px;
}
img {
  width: 100px;
  background: #ccc;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
