<template>
  <div>
    <h2>User Center</h2>
    <p>{{ value }}</p>
    <!-- <group v-if="isShow">
      <cell v-for="item in values" :key="item" title="item" value="切换语言"></cell>
    </group> -->
    <div v-for="item in values" :key="item">
      <div class="item">{{item}}</div>
    </div>
    <router-view></router-view>
  </div>
</template>


<script>
  import {Alert, Msg, Tab, TabItem, Group, Cell} from 'vux'
  export default {
    components: {
      Alert,
      Cell,
      Group,
      Msg,
      Tab,
      TabItem
    },
    data () {
      return {
        msg: 'Hello World!',
        isShow: true,
        value: '',
        values: ['中文', 'English', '日本語', 'Français', 'Español']
      }
    },
    created: function () {
      // `this` points to the vm instance
      console.log('values is: ' + this.values)
    },
    methods: {
      handler () {
        if (/Firefox/.test(window.navigator.userAgent)) {
          alert('firefox')
        } else {
          this.isShow = true
        }
      }
    }
  }
</script>
<style scoped>
.item {
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 8px;
  text-align: center;
  width: 100px;
}

.item:hover {
  border: 1px solid orange;
  color: orange;
  width: 100px;
}
</style>