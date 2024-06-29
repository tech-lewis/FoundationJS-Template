<template>
    <div class="hello" :class="{'red': isChange}">
      <h1>{{ msg }}</h1>
      <div class="container" @click="clickButton">
        Click Me
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      test: {
        type: String,
        default: 'mark'
      }
    },
    data () {
      return {
        isChange: false,
        msg: `Hello World! ${this.test}`
      }
    },
    created () {
      console.log('Hello vue', this.test)
    },
    methods: {
      clickButton () {
        this.isChange = !this.isChange
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  