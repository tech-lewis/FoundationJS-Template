<template>
  <div class='container'>
    <div class='hello'>
      <h1>{{ msg }}</h1>
      <button @click='handle'>Show List</button>
      <label for='name'>name</label>
      <input type='text' v-model='msg'>
      
      <button @click='toUserPage'>回到用户中心</button>
    </div>
    <group v-if='isShow'>
      <cell v-for='item in version_history' @click='showDetail(item)' :key='item' v-bind:title='item.version' value='点击查看详情(i)'></cell>
    </group>
    <!-- <group>
    </group> -->
  </div>
</template>

<script>
// import { Group, Cell } from 'vux'
// or you can import the components you need
// by this way, you can reduce webpack bundle size
import Group from 'vux/components/group/'
import Cell from 'vux/components/cell/'
// import Datetime from 'vux/components/button/'
import { Alert } from 'vux'
export default {
  components: {
    Group,
    Cell,
    // Datetime,
    Alert
  },
  data () {
    return {
      msg: 'iTunes version history',
      isShow: false,
      version_history: [
        {
          'version': '1.0',
          'operating_systems': 'Mac: 9',
          'release_date': 'January 9, 2001; 22 years ago',
          'release_notes': 'Original release based on SoundJam MP code.[80]'
        },
        {
          'version': '1.1',
          'operating_systems': 'Mac: 9-10.0',
          'release_date': 'February 21, 2001; 22 years ago',
          'release_notes': 'External burners, improved visual effects, more supported CD burners.[81] Initial Mac OS X version.[82] Bundled with Mac OS X v10.0.'
        },
        {
          'version': '1.1.1',
          'operating_systems': 'Mac: 9-10.0',
          'release_date': 'May 1, 2001; 22 years ago',
          'release_notes': 'Burning CDs, full screen visual effects, stability/performance improvements,[83] available in Dutch, French, German, Italian, Japanese, and Spanish.[citation needed]'
        },
        {
          'version': '1.1.2.0',
          'operating_systems': 'Mac: 9-10.1',
          'release_date': 'September 25, 2001; 22 years ago',
          'release_notes': 'Bundled with Mac OS X v10.1.[84]'
        }
      ]
    }
  },
  methods: {
    showDetail (data) {
      alert(`${data.release_notes}\n${data.release_date}`)
    },
    toUserPage () {
      window.router.go('/user/Hello/profile/Vue')
    },
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