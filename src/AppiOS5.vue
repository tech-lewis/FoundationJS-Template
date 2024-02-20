<template>
  <div id='container'>
    <h1>This is app component</h1>
    <div v-component = 'user-view'></div>
    <div v-component = 'news-view'></div>
    <!-- main view -->
    <!-- <div v-component="{{view}}" v-transition></div> -->
  </div>
</template>

<script>
export default {
  el: '#app',
  name: 'AppComponent',
  data () {
    return {}
  },
  components: {
    'news-view': require('./views/news-view.vue'),
    'item-view': require('./views/item-view.vue'),
    'user-view': require('./views/user-view.vue')
  }
}
</script>