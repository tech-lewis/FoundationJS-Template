<template>
  <div id="app">
    <router-view class="view" transition="test" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'AppView',
  data () {
    return {
      authenticating: false
    }
  }
}
</script>

<style lang="css">
/* @import 'assets/styles/common.css'; */
html, body {
  margin: 0;
  padding: 0;
}

body {
  overflow: auto;
}
.app__sidebar {
  width: 230px;
}
.app__content {
  margin-left: 230px;
  overflow-y: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: auto;
}
.app__menu {
  bottom: 0;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #f8f8f9;
  color: #20293b;
}
.app__menu .app__brand {
  color: #20293b;
  font-size: 24px;
  margin: 10px 0 40px;
  text-align: center;
}
.app__menu .app__brand .app__eleme {
  font-weight: 900;
}
.app__menu .app__menu__label {
  color: #20293b;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0 10px 36px;
  position: relative;
}
.app__menu .app__menu__label::after {
  border-color: transparent transparent transparent rgba(170, 170, 170, 0.5);
  border-style: solid;
  border-width: 5px 0 5px 7px;
  content: " ";
  display: block;
  height: 0;
  position: absolute;
  right: 22px;
  top: 14px;
  transition-delay: .1s;
  transition: transform .3s;
  width: 0;
}
.app__menu .app__menu__label.unfold::after {
  transform: rotate(90deg);
}
.app__menu .app__menu__link {
  padding: 12px 0 12px 50px;
  font-size: 14px;
  color: #20293b;
  transition: color, background-color 0.3s;
}
.app__menu .app__menu__link:focus {
  background-color: transparent;
}
.app__menu .app__menu__link.active {
  border-left: 3px solid #2675c3;
  color: #2675c3;
  padding-left: 47px;
}
.app__main .app__description {
  font-size: 14px;
  margin: 0;
  color: #666;
  padding-bottom: 36px;
  margin-bottom: 36px;
  border-bottom: 1px solid #e4e4e4;
}
.app__main .app__description:empty {
  display: none;
}
.app__main h2 {
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin: 60px 0 16px;
  line-height: 1;
}
.app__main h2:first-of-type {
  margin-top: 36px;
}
.app__main h3 {
  color: #333;
  font-size: 16px;
  font-weight: normal;
  line-height: 1;
  margin: 36px 0 16px;
}
.app__main p + div,
.app__main h2 + div,
.app__main h3 + div,
.app__main p + span,
.app__main h2 + span,
.app__main h3 + span {
  margin: 10px 0 24px;
}
.app__main p + span,
.app__main h2 + span,
.app__main h3 + span {
  margin-right: 8px;
}
.app__main p {
  color: #666;
  font-size: 14px;
  margin: 0 0 16px;
  line-height: 1.5;
}
.app__main > table {
  border-collapse: collapse;
  border-style: hidden;
  box-shadow: 0 0 0 1px #e1e1e1;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
}
.app__main > table thead {
  background-color: #f8f8f8;
  font-size: 14px;
}
.app__main > table thead th {
  color: #666;
}
.app__main > table th,
.app__main > table td {
  border: 1px solid #e1e1e1;
  padding: 10px 16px;
  text-align: left;
  font-size: 14px;
  color: #999;
}
.app__main .hljs {
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  font-size: 14px;
  max-height: 90px;
  overflow-y: hidden;
  position: relative;
  margin-bottom: 40px;
  margin-top: 0;
}
.app__main .hljs::before {
  background: linear-gradient(0deg, #fff 0, rgba(255, 255, 255, 0) 80%);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  content: "";
}
.app__main .hljs.open {
  max-height: 100%;
}
.app__main .hljs.open::before {
  content: none;
}
.app__main .hljs.open .hljs__button::before {
  margin-bottom: 0;
  margin-top: 9px;
  transform: rotate(45deg);
}
.app__main .hljs__button {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  height: 28px;
  width: 28px;
}
.app__main .hljs__button::before {
  margin-bottom: 2px;
  margin-top: 0;
  transform: rotate(-135deg);
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  content: "";
  display: inline-block;
  height: 10px;
  width: 10px;
}
.app__header {
  background-color: #2c7dc7;
  color: #fff;
  padding: 42px;
  height: 120px;
  box-sizing: border-box;
}
.app__header .app__headline {
  font-size: 36px;
  font-weight: normal;
  line-height: 1;
  margin: 0 0 10px 0;
}
.slidedown-transition {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
.slidedown-enter,
.slidedown-leave {
  max-height: 0 !important;
}
</style>