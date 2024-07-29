<template>
  <div>
    <hr>
    <header><h1>development tips</h1></header>
    <group @click="getDetail">
      <div v-for="item in tips" :key="item.id" v-bind:class="item.id">
        <cell @click.stop="" v-bind:title="item.name" value="点击查看更多知识点" v-on:click="getDetail(item)"></cell>
      </div>
    </group>
    <group>
      <cell title="微信设置页面" :is_link=true link="demos"></cell>
      <cell title="小蚁摄像设置" :is_link=true link="demo/yi"></cell>
    </group>
    <section>
      <span>Vue 常用的指令</span>
      <ul>
        <li>v-html</li>
        <li>v-text 等价语法大胡子语法</li>
        <li>v-show</li>
        <li>v-if条件渲染</li>
        <li>v-else-if条件渲染</li>
        <li>v-else条件渲染</li>
        <li>v-for(repeat指令的升级版本)</li>
        <li>v-model 双向绑定的使用</li>
        <li>v-bind</li>
        <li>v-on:click</li>
        <li>v-once</li>
        <li>v-slot 空指令-pre/cloak</li>
        <li>v-pre</li>
        <li>v-cloak 总共14个的</li>
      </ul>
      <pre>
        Vue数据代理的实现依赖于ES 5的新特性
        el和data可以用两种写法实现
        Object defineProperty实现数据代理
        v-on:click的两种写法
        @click的简单写法
        事件的修饰符:stop, prevent 默认行为如a标签的跳转功能,
        event.KeyCode判断是键盘的哪个案件: 可以使用修饰符代替你的判断
        Vue常用的键盘事件别名enter delete space tab up down left right
        @keyup
        @keydown
        @mouseup
        @mousedown
        $event可以用来给事件点击参数占位
        vue事件修饰符常用的
      </pre>
    </section>
    <!-- <el-button type="primary">primary</el-button> -->
  </div>
</template>

<script>
const Group = require('vux/components/group/')
const Cell = require('vux/components/cell/')
export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      selectedLanguages: [],
      tips: [
        { id: 0, name: '计算属性和watch的区别和使用', languages: ['watch更全能', '计算属性只能返回 但是watch可以处理async异步任务', 'vue管理的函数不能用箭头函数:', '', ''] },
        { id: 1, name: '计算属性和watch的区别和使用', languages: ['watch更全能', '计算属性只能返回 但是watch可以处理async异步任务', 'vue管理的函数不能用箭头函数:', '', ''] },
        { id: 2, name: '计算属性和watch的区别和使用', languages: ['watch更全能', '计算属性只能返回 但是watch可以处理async异步任务', 'vue管理的函数不能用箭头函数:', '', ''] }
      ]
    }
  },
  created () {
    console.log('Hello develop')
  },
  methods: {
    getDetail (e) {
      alert('Hello', e.target.nodeName)
      console.log(e.target)
    }
  }
}
</script>
<style>

</style>