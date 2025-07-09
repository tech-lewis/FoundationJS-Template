<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Cell from '@/components/XUI/xCell/index.vue'
import Group from '@/components/XUI/Group/index.vue'
import Date from '@/components/XUI/DateCell/index.vue'
import Loading from '@/components/XUI/MyLoading/index.vue'
// import MyInput from '@/components/XUI/MyInput/index.vue'
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
    // MyInput,
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
      {text: '基金产品', age: 1998, label: 'Overseas OTC'}
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
    <!-- <Group title='with other element'>
      <Number title="Number" :min=-5 :max=8 :value=1 type="inline"></Number>
      <Number title="Number" :min=-5 :max=8 :value=1 type="inline"></Number>
      <Switch title="Other element" :value=true></Switch>
    </Group> -->
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