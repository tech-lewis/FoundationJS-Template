<template>
  <div id='container'>
    <div class="logo" @click="changeStyle" style="height: 100%;background: gray;"><img style="width: 50px;height:50px;margin: 0 auto;" src="./assets/logo.png"></div>
    <h1>This is app component</h1>
    <div class="header" style="padding: 20px;">
      <button @click="selectTab1">Node Docs</button>
      <button @click="selectTab2">News</button>
      <button @click="selectTab3">About</button>
    </div>
    <div class="tab-item" v-show="tabIndex === 1" style="height=80%;overflow=scroll;">
      <news-view></news-view>
    </div>
    <div class="tab-item" v-show="tabIndex === 2">
      <documents-view></documents-view>
    </div>
    <div class="tab-item" v-show="tabIndex === 3">
    </div>
  </div>
</template>

<script>
// import Router from './router/vue-router.min.js'
import NewsView from './views/NewsView'
import DocumentsView from './views/DocumentsView'
import SettingView from './views/NewsView'

export default {
  name: 'AppComponent',
  data () {
    return {
      tabIndex: 3 // 默认显示user view
    }
  },
  components: {
    NewsView,
    SettingView,
    DocumentsView
  },
  methods: {
    changeStyle () {},
    selectTab3 () {
      this.tabIndex = 3
    },
    selectTab2 () {
      this.tabIndex = 2
    },
    selectTab1 (event) {
      console.log(event)
      this.tabIndex = 1
    }
  }
}
</script>
<style scoped>
/* #container {} */
/* .footer {} */
</style>