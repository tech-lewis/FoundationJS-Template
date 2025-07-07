<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Cell from '@/components/XUI/xCell/index.vue'
import Group from '@/components/XUI/Group/index.vue'
import Date from '@/components/XUI/DateCell/index.vue'
import Loading from '@/components/XUI/MyLoading/index.vue'
import MyInput from '@/components/XUI/MyInput/index.vue'
import xButton from '@/components/XUI/Button/index.vue'
import Switch from '@/components/XUI/SwitchCell/index.vue'
import Number from '@/components/XUI/MyNumberInput/index.vue'
var test = [
  {text: '基金产品', age: 10010, label: 'Overseas'}
]


function tick (i, cb) {
  setTimeout(function () {
    i++
    cb(i)
    if (i < 100) {
      tick(i, cb)
    }
  }, 50)
}

export default {
  components: {
    Cell,
    Date,
    Group,
    MyInput,
    xButton,
    Loading,
    Switch,
    Number
  },
  data () {
    return {
      show1: false,
      text1: '开始处理'
    }
  },
  methods: {
    show1change (val) {
      const _this = this
      if (val) {
        tick(0, function (percent) {
          if (percent === 100) {
            _this.show1 = false
            _this.text1 = '开始处理'
            return
          }
          _this.text1 = `完成${percent}%`
        })
      }
    }
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
      <Switch title="显示Loading" v-model="show1" @change="show1change"></Switch>
      <Date title="生日"></Date>
    </Group>
    <Group title="Default">
      <Number title="Number"></Number>
    </Group>
      
    <Group title="listen to change events">
      <Number title="Number" :value=0 :min=0 @change="change"></Number>
    </Group>
    <Group title="set width=100">
      <Number title="Number" :width=100></Number>
    </Group>
    <Group title="set step=0.5">
      <Number title="Number" :step=0.5></Number>
    </Group>

    <Group title="set value=1, min=-5 and max=8">
      <Number title="Number" :min=-5 :max=8 :value=1></Number>
    </Group>
    <Group title="set value and readonly">
      <Number :value=10 :readonly=true title="Number"></Number>
    </Group>
    <Group title='with other element'>
      <Number title="Number" :min=-5 :max=8 :value=1 type="inline"></Number>
      <Number title="Number" :min=-5 :max=8 :value=1 type="inline"></Number>
      <Switch title="Other element" :value=true></Switch>
    </Group>
    <Cell title="功能消息免打扰" inlineDesc="副标题" :is_link='true'></Cell>
    <Cell title="功能消息免打扰" inlineDesc="富文本" :is_link='true'></Cell>
    <div style="text-align: center;">
      <p>xButton Demo{{show1}}</p>
      <div class="demo" style="margin: 16px;">
        <xButton type="primary" text="按钮"></xButton>
      </div>
    </div>
    <Loading v-show="show1" :text="text1"></Loading>
  </div>
</template>

<style>
.list {
  width: 100vw;
}
</style>