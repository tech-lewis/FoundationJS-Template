<template>
  <div id='container'>
    <h1>This is app component</h1>
    <div class="header" style="padding: 20px;">
      <button v-on="click:selectTab1">User</button>
      <button v-on="click:selectTab2">News</button>
      <button v-on="click:selectTab3">About</button>
    </div>
    <div class="tab-item" v-show="tabIndex === 1" style="height=80%;overflow=scroll;">
      <div v-component = 'user-view'></div>
    </div>
    <div class="tab-item" v-show="tabIndex === 2">
      <div v-component = 'news-view'></div>
    </div>
    <div class="tab-item" v-show="tabIndex === 3">
      <div v-component = 'setting-view'></div>
    </div>
  </div>
</template>

<script>
// import Router from './router/vue-router.min.js'
export default {
  el: '#app',
  name: 'AppComponent',
  data () {
    return {
      tabIndex: 3 // 默认显示user view
    }
  },
  methods: {
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
  },
  components: {
    'news-view': require('./views/news-view.vue'),
    'user-view': require('./views/user-view.vue'),
    'setting-view': require('./views/setting-view.vue')
  }
}
</script>
<style scoped>
/* #container {} */
/* .footer {} */
</style>