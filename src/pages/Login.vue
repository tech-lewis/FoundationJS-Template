<template>
	<div class="box">
		<p>登录页面</p>
		<button @click="hello">Login</button>
	</div>
</template>
<script>
  export default {
    data () {
      return {
        msg: 'Hello World!',
        isShow: false,
        values: ['中文', 'English', '日本語', 'Français', 'Español']
      }
    },
    methods: {
      hello () {
        alert('Welcome to EasyNavigator')
        this.$router.push('/app')
      }
    }
  }
</script>
<style></style>
