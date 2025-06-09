<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'


var test = [
  {text: '基金产品', age: 10010, label: 'Overseas'}
]
export default {
  setup () {
    const isLogin = ref({
      ...test
    })
    const list = ref([
      ...test,
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
    const router = useRouter()
    const toLogin = () => {
        router.push('/login')
    }
    return {
      isLogin,
      list,
      toLogin,
      checkLogin: function () {
        console.log('checkLogin')
        // isLogin.value = true
      }
    }
  }
};
</script>


<template>
  <div class="home">
    <van-cell-group class="list">
      <van-cell title="单元格" value="内容" />
      <van-cell v-for="(item, index) in list" :key="index" :title="item.text" :value="item.age" :label="item.label" @click="toLogin" />
    </van-cell-group>
  </div>
</template>

<style>
.list {
  width: 100vw;
}
</style>