<template>
  <div>
    <hr>
    <header><h1>development tips</h1></header>
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
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>