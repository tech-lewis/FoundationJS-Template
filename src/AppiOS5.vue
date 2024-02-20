<template>
  <div id='container'>
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
  }
}
</script>