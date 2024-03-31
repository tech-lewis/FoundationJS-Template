<template>
  <div id="app" style="background:black;">
    <div class="logo" @click="changeStyle" style="height: 100%;background: gray;"><img style="width: 50px;height:50px;margin: 0 auto;" src="./assets/logo.png"></div>
    <div :class="{basic: authenticating}">
      <!-- :class = '{name: boolValue}'动态绑定样式适用 样式名确定好个数确定好，动态决定用不用的场景 -->
      <!-- :class=‘random’的名字写法 可用在样式类名不确定 需要动态绑定的场景 -->
      <!-- s数组的写法 个数不确定，名字不确定都不确定的场景 -->

      <!-- style内联样式的绑定的 Vue对象写法 VUE要求小驼峰写出来-->
      <!-- 还有一种:style=[arr] 写法使用的少 -->
      <span :style="basic">点击图标切换样式</span>
      <!-- 这种写法的使用比数组的写法更多， 对象数组就不太常用的写法 -->
      <!-- <template  v-show="isShow"> 不能这么写的 性能更好但是会修改层级 -->
      <template v-if="isShow">
        <p style="color: white;" :style="{
          fontSize : mySize
        }">当前文字颜色值: {{basic}}</p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      basic: {
        color: 'red',
        isShow: false,
        backgroundColor: 'black', // 需要JS存在的样式，而且多个单词需要驼峰命名写出来
        backgeoundColor: 'black' // 需要JS存在的样式，而且多个单词需要驼峰命名写出来 这个是无效的
      },
      mySize: '10px', // 需要完整的值
      authenticating: false
    }
  },
  methods: {
    getRandomColor () {
      let color = '#'
      const hexValues = '0123456789ABCDEF'
      for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)]
      }
      return color
    },
    changeStyle () {
      this.isShow = !this.isShow
      this.basic.color = this.getRandomColor()
      this.basic.backgroundColor = this.getRandomColor()
    }
  }
}
</script>

<style>
</style>
