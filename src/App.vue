<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const list = ref([
      {text: '基金产品', age: 1996, label: 'Overseas OTC'},
      {text: '基金产品', age: 1997, label: 'Overseas OTC'},
      {text: '基金产品', age: 1998, label: 'Overseas OTC'},
      {text: '基金产品', age: 1999, label: 'Overseas OTC'},
      {text: '基金产品', age: 2000, label: 'Overseas OTC'},
      {text: '基金产品', age: 2001, label: 'Overseas OTC'},
      {text: '基金产品', age: 2002, label: 'Overseas OTC'},
      {text: '基金产品', age: 2003, label: 'Overseas OTC'},
      {text: '基金产品', age: 2004, label: 'Overseas OTC'},
      {text: '基金产品', age: 2005, label: 'Overseas OTC'},
      {text: '基金产品', age: 2006, label: 'Overseas OTC'},
      {text: '基金产品', age: 2007, label: 'Overseas OTC'},
      {text: '基金产品', age: 2008, label: 'Overseas OTC'},
      {text: '基金产品', age: 2009, label: 'Overseas OTC'},
      {text: '基金产品', age: 2010, label: 'Overseas OTC'},
      {text: '基金产品', age: 2011, label: 'Overseas OTC'},
      {text: '基金产品', age: 2012, label: 'Overseas OTC'},
      {text: '基金产品', age: 2013, label: 'Overseas OTC'},
      {text: '基金产品', age: 2014, label: 'Overseas OTC'},
      {text: '基金产品', age: 2015, label: 'Overseas OTC'},
      {text: '基金产品', age: 2016, label: 'Overseas OTC'},
      {text: '基金产品', age: 2017, label: 'Overseas OTC'},
      {text: '基金产品', age: 2018, label: 'Overseas OTC'},
      {text: '基金产品', age: 2019, label: 'Overseas OTC'},
      {text: '基金产品', age: 2020, label: 'Overseas OTC'},
      {text: '基金产品', age: 2021, label: 'Overseas OTC'},
      {text: '基金产品', age: 2022, label: 'Overseas OTC'},
      {text: '基金产品', age: 2023, label: 'Overseas OTC'},
      {text: '基金产品', age: 2024, label: 'Overseas OTC'},
      {text: '基金产品', age: 2025, label: 'Overseas OTC'},
      {text: '基金产品', age: 2026, label: 'Overseas OTC'},
    ])
    const inc = () => {
      count.value++
    }

    const tips = () => {
      window.alert('梦瑶就是狸猫')
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
    <router-view class="view"></router-view>
  </div>
</template>


<style>
body { min-height: 100vh;background-color: aqua;}
.container {
  width: 100vw;
  display: flex;
  height: 100vh;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.view {
  width: 100%;
  height: 100%;
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
