<template>
  <div id='container'>
    <h1>This is app component</h1>
    <div class="tab-item" v-show="tabIndex === 1">
      <div v-component = 'user-view'></div>
    </div>
    <div class="tab-item" v-show="tabIndex === 2">
      <div v-component = 'news-view'></div>
    </div>
    
    <div class="footer">
      <button v-on="click:selectTab1">User</button>
      <button v-on="click:selectTab2">News</button>
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
      tabIndex: 1 // 默认显示user view
    }
  },
  methods: {
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
    'item-view': require('./views/item-view.vue'),
    'user-view': require('./views/user-view.vue')
  }
}
</script>
<style scoped>
#container {
  height: 50px;
}
.footer {
  height: 30px;
}
.tab-item {
  height:moz-calc(100% - 80px);
  height:-webkit-calc(100% - 80px);
  height:calc(40% - 1px);
  overflow:scroll;
}
</style>