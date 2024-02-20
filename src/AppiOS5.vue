<template>
  <div id='container'>
    <h1>This is app component</h1>
    <div v-component = 'user-view'></div>
    <div v-component = 'news-view'></div>
    <!-- main view -->
    <!-- <div v-component="{{view}}" v-transition></div> -->
    <ul style="list-style: none;">
      <li v-repeat="items">
        <h3>{{$index}} - {{name}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  el: '#app',
  name: 'AppComponent',
  data () {
    return {
      items: [
        { name: '商品1' },
        { name: '商品2' },
        { name: '商品3' }
      ]
    }
  },
  components: {
    'news-view': require('./views/news-view.vue'),
    'item-view': require('./views/item-view.vue'),
    'user-view': require('./views/user-view.vue')
  }
}
</script>