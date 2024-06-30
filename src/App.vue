<template>
  <div id="app">
  <div class="pure-g">
    <div class="pure-u-1-6 app__sidebar pure-menu pure-menu-scrollable app__menu">
      <a class="pure-menu-heading app__brand" v-link="'/'">
        <span class="app__eleme">Vue</span>admin
      </a>

      <div v-for="nav in navs" :key="nav" class="section">
        <a href="#"
          @click.prevent="navState.$set($index, !navState[$index] || false)"
          class="pure-menu-heading app__menu__label"
          :class="{ 'unfold': !navState[$index] }"
          v-text="nav.group"></a>
        <ul
          class="pure-menu-list"
          transition="slidedown"
          v-show="!navState[$index]"
          :style="{
            maxHeight: nav.list.length * 44 + 'px'
          }">
          <li
            class="pure-menu-item app__menu__item"
            v-for="item in nav.list" :key="item">
            <a
              class="pure-menu-link app__menu__link"
              v-link="{ path: item.path, activeClass: 'active' }"
              v-text="item.name"></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="pure-u-5-6 app__content">
      <header class="app__header">
        <h1 class="app__headline">{{ $route.title || 'element 后台组件' }}</h1>
      </header>
      <section class="app__main" v-el:main>
        <p class="app__description">{{ $route.description }}</p>
        <router-view></router-view>
      </section>
      <toc main=".app__main"></toc>
    </div>
  </div>
  
  <button class="hljs__button" v-el:button>测试el-button</button>
  </div>
</template>

<script>
  // import { navs } from './nav-config'
  // import E from 'oui-dom-events'
  import toc from './components/Toc'
  import { toggleClass, addClass, removeClass } from './dom/class'
  
  export default {
    name: 'app',
    components: {
      toc
    },
    data () {
      return {
        highlights: [],
        navState: [true, true, true],
        navs: [{
          group: '使用说明',
          list: [
            {
              path: '/quickstart',
              name: '快速上手'
            },
            {
              path: '/development',
              name: '开发指南'
            },
            {
              path: '/changelog',
              name: '更新日志'
            }
          ]
        },
        {
          group: '设计指南',
          list: [
            {
              path: '/guideline',
              name: '导航',
              'description': '导航(Navigation) 可以解决用户在访问页面时：在哪里，去哪里，怎么去的问题。一般导航会有「侧栏导航」和「顶部导航」2种类型。'
            }
          ]
        },
        {
          group: '基础组件',
          list: [
            {
              path: '/button',
              name: '按钮 (button)',
              'title': 'Button 按钮'
            },
            {
              path: '/dropdown',
              name: '下拉菜单 (dropdown)',
              'title': 'Dropdown 下拉菜单'
            },
            {
              path: '/icon',
              name: '图标 (icon)',
              'title': 'Icon 图标'
            },
            {
              path: '/pagination',
              name: '分页 (pagination)',
              'title': 'Pagination 分页'
            },
            {
              path: '/select',
              name: '选择器 (select)',
              'title': 'Select 选择器'
            },
            {
              path: '/checkbox',
              name: '多选框 (checkbox)',
              'title': 'Checkbox 多选框',
              'description': '用于在多个可选项中进行多项选择。'
            },
            {
              path: '/radio',
              name: '单选框 (radio)',
              'title': 'Radio 单选框',
              'description': '用于在多个备选项选中单个选项。'
            },
            {
              path: '/input',
              name: '输入框 (input)',
              'title': 'Input 输入框'
            },
            {
              path: '/input-number',
              name: '计数器 (input-number)',
              'title': 'Input Number 计数器'
            },
            {
              path: '/switch',
              name: '开关 (switch)',
              'title': 'Switch 开关',
              'description': '用于两种对立状态的切换。'
            },
            {
              path: '/dialog',
              name: '对话框 (dialog)',
              'title': 'Dialog 对话框',
              'description': '在保留当前页面状态的情况下,告知用户信息并承载相关操作。'
            },
            {
              path: '/table',
              name: '表格 (table)',
              'title': 'Table 表格',
              'description': '用于展示多条结构类似的数据,可对数据进行排序、筛选、对比或其他自定义操作。'
            },
            {
              path: '/time-picker',
              name: '时间选择器',
              'title': '时间选择器',
              'description': '用于选择或输入时间'
            },
            {
              path: '/date-picker',
              name: '日期选择器',
              'title': '日期选择器',
              'description': '用于选择或输入时间'
            }
          ]
        }]
      }
    },
    methods: {
      findAllHighlight () {
        return Array.prototype.slice.call(document.querySelectorAll('.hljs'))
      }
    },
    // created () {
    //   this.navs = navs
    // },
    ready () {
      this.mainContent = document.querySelector('.app__content')
      // E.delegate(this.$els.main, '.hljs__button', 'click.highlight', e => {
      //   const parent = e.target.parentNode
      //   toggleClass(parent, 'open')
      // });
    },

    beforeDestroy () {
      // E.undelegate(this.$els.main, '.hljs', 'click.highlight');
    },
    watch: {
      highlights (list) {
        list.map(item => {
          if (item.offsetHeight <= 100) {
            toggleClass(item, 'open')
          } else {
            item.appendChild(this.$els.button.cloneNode(true))
          }
        })
      }
    },
    events: {
      ['element.example.reload'] () {
        this.$nextTick(() => {
          if (this.mainContent.querySelector('.no-toc')) {
            addClass(this.mainContent, 'no-toc')
          } else {
            removeClass(this.mainContent, 'no-toc')
          }
          this.highlights = this.findAllHighlight()
        })
        this.mainContent.scrollTop = 0
        return true
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
.app__menu .section .group{
  bottom: 0;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #f8f8f9;
  color: #20293b;
}
.app__menu .section .app__brand {
  color: #20293b;
  font-size: 24px;
  margin: 10px 0 40px;
  text-align: center;
}
.app__menu .section .app__brand .app__eleme {
  font-weight: 900;
}
.app__menu .section .app__menu .section__label {
  color: #20293b;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 0 10px 36px;
  position: relative;
}
.app__menu .section .app__menu .section__label::after {
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
.app__menu .section .app__menu .section__label.unfold::after {
  transform: rotate(90deg);
}
.app__menu .section .app__menu .section__link {
  padding: 12px 0 12px 50px;
  font-size: 14px;
  color: #20293b;
  transition: color, background-color 0.3s;
}
.app__menu .section .app__menu .section__link:focus {
  background-color: transparent;
}
.app__menu .section .app__menu .section__link.active {
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

.app__menu__item {
  padding-left: 20px;
  border-left: 3px solid #ff8800;
  list-style: none;
}
</style>