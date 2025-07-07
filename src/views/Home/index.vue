<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Cell from '@/components/XUI/xCell/index.vue'
import Group from '@/components/XUI/Group/index.vue'
import Date from '@/components/XUI/DateCell/index.vue'
import xButton from '@/components/XUI/Button/index.vue'

var test = [
  {text: '基金产品', age: 10010, label: 'Overseas'}
]
export default {
  components: {
    Cell,
    Date,
    Group,
    xButton
  },
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
    return {
      isLogin,
      list,
      router
    }
  }
};
</script>


<template>
  <div class="home">
    <Group>
      <Date title="生日"></Date>
    </Group>
    <Cell title="功能消息免打扰" inlineDesc="副标题" :is_link='true'></Cell>
    <Cell title="功能消息免打扰" inlineDesc="富文本" :is_link='true'></Cell>
    <div style="text-align: center;">
      <p>xButton Demo</p>
      <div class="demo" style="margin: 16px;">
        <xButton type="primary" text="按钮"></xButton>
      </div>
    </div>
  </div>
</template>

<style>
.list {
  width: 100vw;
}
</style>