<template>
  <div class="container">
    <h1>{{title}}</h1>
    <hr />
    <!-- 文档区域 -->
    <div class="reader" style="width:100%;background: black;height:480px">
      <div class="left" style="float:left; max-width:20%;max-height:480px;overflow:scroll;background:gray">
        <div class="link" style="padding: 5px 2px" v-for = "(number, index) of 106" :key="number" @click="changeUrl(index)">
          <a v-if="index < 7 && index > 0" href="#">Node js 0.0.{{index}} doc</a>
          <a v-if="index >= 10" href="#">Node js 0.1.{{index}} doc</a>
        </div>
      </div>
      <div class="right" style="width:90%;float:right;">
        <div v-if="selectUrl === ''" style="text-align:center;color:white;">
          <span style="color:yellow;">Click left menu to load webview</span>
        </div>
        <iframe :src="selectUrl" style="width:100%;height:480px" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from '../vue2'
export default Vue.extend({
  name: 'document-view',
  data () {
    return {
      title: 'document view',
      optionItem: '',
      keyword: '',
      values: ['中文', 'English', '日本語', 'Français', 'Español'],
      selectLanguages: ['中文', 'English', '日本語', 'Français', 'Español'],
      items: [],
      selectItem: {},
      selectUrl: ''
    }
  },
  // ready () {
  //   console.log('ready生命周期方法')
  // },
  methods: {
    changeUrl (index) {
      console.log(index)
      if (index < 7) {
        this.selectUrl = 'https://nodejs.org/docs/v0.0.' + index + '/api.html'
      } else {
        this.selectUrl = 'https://nodejs.org/docs/v0.1.' + index
      }
    },
    inputChanged (e) {
      console.log(this.selectItem)
      var searchItems = this.countries.filter(item => {
        return item.name.indexOf(this.keyword) !== -1 && this.keyword.length > 4
      })
      this.items = searchItems
    },
    clickItem (e) {
      console.log(e.target.nodeName)
      // 事件委托的使用
      if (e.target.nodeName === 'SELECT') {
        var selctId = e.target.value.split('.')[0].trim()
        var selctName = e.target.value.split('.')[1].trim()
        this.keyword = selctName
        this.inputChanged(null)
        this.selectLanguages = this.countries[selctId].languages
      }
      if (e.target.nodeName === 'SPAN') {
        console.log(e.target.innerHTML.split('-')[0].trim())
        var index = e.target.innerHTML.split('-')[0].trim()
        this.selectLanguages = this.countries[index].languages
      }
      console.log(e.target)
      if (e.target.nodeName === 'OPTION') {
        var idx = e.target.innerHTML.split('.')[0].trim()
        this.selectLanguages = this.countries[idx].languages
      }
    }
  }
})
</script>

<style>
/* .list li {
  padding: 0 10px;
  margin-bottom: 18px;
}
.item {
  border: 1px solid #fff;
  padding: 0 10px;
  border-radius: 5px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  width: 100px;
}

.item:hover {
  border: 1px solid orange;
  color: orange;
  width: 100px;
} */
</style>
