<template>
    <div class="container">
      home
    </div>
  </template>
  
  <script>
  import Group from 'vux/components/group/'
  import Cell from 'vux/components/cell/'
  
  export default {
    components: {
      Group,
      Cell
    },
    data () {
      return {
        msg: 'Hello World!',
        isShow: false,
        values: ['中文', 'English', '日本語', 'Français', 'Español']
      }
    },
    methods: {
      handle () {
        if (/Firefox/.test(window.navigator.userAgent)) {
          alert('firefox')
        } else {
          this.isShow = true
        }
      }
    }
  }
  </script>
  
  <style>
  @import '~vux/vux.css';
  .container {
    width: 100%;
    background: #ccc;
  }
  .hello {
    text-align: center;
  }
  </style>