<template>
  <div class='container'>
    <div class='hello'>
      <h1 @click='handle'>{{ msg }}</h1>
      <button @click='handle'>Show List</button>
      <label for='name'>name</label>
      <input type='text' v-model='msg'>
      
      <button @click='toUserPage'>回到用户中心</button>
    </div>
    <Counter></Counter>
    <group v-if='isShow'>
      <cell @click='showDetail(item.name)' v-for='item in countries' :key='item' v-bind:title='item.name' value='点击查看详情(i)'></cell>
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
import Counter from './Counter'
export default {
  components: {
    Counter,
    Group,
    Cell,
    // Datetime,
    Alert
  },
  data () {
    return {
      msg: 'Hello World!',
      isShow: false,
      countries: [
        { name: 'Afghanistan', languages: ['Pashto', 'Dari'] },
        { name: 'Albania', languages: ['Albanian'] },
        { name: 'Algeria', languages: ['Arabic'] },
        { name: 'Andorra', languages: ['Catalan'] },
        { name: 'Angola', languages: ['Portuguese'] },
        { name: 'Antigua and Barbuda', languages: ['English'] },
        { name: 'Argentina', languages: ['Spanish'] },
        { name: 'Armenia', languages: ['Armenian'] },
        { name: 'Australia', languages: ['English'] },
        { name: 'Austria', languages: ['German'] },
        { name: 'Azerbaijan', languages: ['Azerbaijani'] },
        { name: 'Bahamas', languages: ['English'] },
        { name: 'Bahrain', languages: ['Arabic'] },
        { name: 'Bangladeshƒ', languages: ['Bengali'] },
        { name: 'Barbados', languages: ['English'] },
        { name: 'Belarus', languages: ['Belarusian', 'Russian'] },
        { name: 'Belgium', languages: ['Dutch', 'French', 'German'] },
        { name: 'Belize', languages: ['English'] },
        { name: 'Benin', languages: ['French'] },
        { name: 'Bhutan', languages: ['Dzongkha'] },
        { name: 'Bolivia', languages: ['Spanish', 'Quechua', 'Aymara'] },
        { name: 'Bosnia and Herzegovina', languages: ['Bosnian', 'Croatian', 'Serbian'] },
        { name: 'Botswana', languages: ['English', 'Setswana'] },
        { name: 'Brazil', languages: ['Portuguese'] },
        { name: 'Brunei', languages: ['Malay'] },
        { name: 'Bulgaria', languages: ['Bulgarian'] },
        { name: 'Burkina Faso', languages: ['French'] },
        { name: 'Burundi', languages: ['Kirundi', 'French'] },
        { name: 'Cabo Verde', languages: ['Portuguese'] },
        { name: 'Cambodia', languages: ['Khmer'] },
        { name: 'Cameroon', languages: ['English', 'French'] },
        { name: 'Canada', languages: ['English', 'French'] },
        { name: 'Central African Republic', languages: ['French', 'Sango'] },
        { name: 'Chad', languages: ['French', 'Arabic'] },
        { name: 'Chile', languages: ['Spanish'] },
        { name: 'China', languages: ['汉语', '藏语', '维吾尔语', '蒙古语', '壮语', '苗语', '朝鲜语'] },
        { name: 'Colombia', languages: ['Spanish'] },
        { name: 'Comoros', languages: ['Comorian', 'Arabic', 'French'] },
        { name: 'Democratic Republic of the Congo', languages: ['French'] },
        { name: 'Republic of the Congo', languages: ['French'] },
        { name: 'Costa Rica', languages: ['Spanish'] },
        { name: 'Côte d\'Ivoire', languages: ['French'] },
        { name: 'Croatia', languages: ['Croatian'] },
        { name: 'Cuba', languages: ['Spanish'] },
        { name: 'Cyprus', languages: ['Greek', 'Turkish'] },
        { name: 'Czech Republic', languages: ['Czech'] },
        { name: 'Denmark', languages: ['Danish'] },
        { name: 'Djibouti', languages: ['French', 'Arabic'] },
        { name: 'Dominica', languages: ['English'] },
        { name: 'Dominican Republic', languages: ['Spanish'] },
        { name: 'Ecuador', languages: ['Spanish'] },
        { name: 'Egypt', languages: ['Arabic'] },
        { name: 'El Salvador', languages: ['Spanish'] },
        { name: 'Equatorial Guinea', languages: ['Spanish', 'French', 'Portuguese'] },
        { name: 'Eritrea', languages: ['Tigrinya', 'Arabic', 'English'] },
        { name: 'Estonia', languages: ['Estonian'] },
        { name: 'Eswatini', languages: ['Swazi', 'English'] },
        { name: 'Ethiopia', languages: ['Amharic'] },
        { name: 'Fiji', languages: ['English', 'Fijian', 'Hindi'] },
        { name: 'Finland', languages: ['Finnish', 'Swedish'] },
        { name: 'France', languages: ['French'] },
        { name: 'Gabon', languages: ['French'] },
        { name: 'Gambia', languages: ['English'] },
        { name: 'Georgia', languages: ['Georgian'] },
        { name: 'Germany', languages: ['German'] },
        { name: 'Ghana', languages: ['English'] },
        { name: 'Greece', languages: ['Greek'] },
        { name: 'Grenada', languages: ['English'] },
        { name: 'Guatemala', languages: ['Spanish'] },
        { name: 'Guinea', languages: ['French'] },
        { name: 'Guinea-Bissau', languages: ['Portuguese'] },
        { name: 'Guyana', languages: ['English'] },
        { name: 'Haiti', languages: ['French', 'Haitian Creole'] },
        { name: 'Honduras', languages: ['Spanish'] },
        { name: 'Hungary', languages: ['Hungarian'] },
        { name: 'Iceland', languages: ['Icelandic'] },
        { name: 'India', languages: ['Hindi', 'English'] },
        { name: 'Indonesia', languages: ['Indonesian'] },
        { name: 'Iran', languages: ['Persian'] },
        { name: 'Iraq', languages: ['Arabic', 'Kurdish'] },
        { name: 'Ireland', languages: ['Irish', 'English'] },
        { name: 'Israel', languages: ['Hebrew', 'Arabic'] },
        { name: 'Italy', languages: ['Italian'] },
        { name: 'Jamaica', languages: ['English'] },
        { name: 'Japan', languages: ['Japanese'] },
        { name: 'Jordan', languages: ['Arabic'] },
        { name: 'Kazakhstan', languages: ['Kazakh', 'Russian'] },
        { name: 'Kenya', languages: ['Swahili', 'English'] },
        { name: 'Kiribati', languages: ['English', 'Gilbertese'] },
        { name: 'Kosovo', languages: ['Albanian', 'Serbian'] },
        { name: 'Kuwait', languages: ['Arabic'] },
        { name: 'Kyrgyzstan', languages: ['Kyrgyz', 'Russian'] },
        { name: 'Laos', languages: ['Lao'] },
        { name: 'Latvia', languages: ['Latvian'] },
        { name: 'Lebanon', languages: ['Arabic'] },
        { name: 'Lesotho', languages: ['Sesotho', 'English'] },
        { name: 'Liberia', languages: ['English'] },
        { name: 'Libya', languages: ['Arabic'] },
        { name: 'Liechtenstein', languages: ['German'] },
        { name: 'Lithuania', languages: ['Lithuanian'] },
        { name: 'Luxembourg', languages: ['Luxembourgish', 'French', 'German'] },
        { name: 'Madagascar', languages: ['Malagasy', 'French'] },
        { name: 'Malawi', languages: ['Chichewa', 'English'] },
        { name: 'Malaysia', languages: ['Malay'] },
        { name: 'Maldives', languages: ['Dhivehi'] },
        { name: 'Mali', languages: ['French'] },
        { name: 'Malta', languages: ['Maltese', 'English'] },
        { name: 'Marshall Islands', languages: ['Marshallese', 'English'] },
        { name: 'Mauritania', languages: ['Arabic'] },
        { name: 'Mauritius', languages: ['English', 'French', 'Mauritian Creole'] },
        { name: 'Mexico', languages: ['Spanish'] },
        { name: 'Micronesia', languages: ['English'] },
        { name: 'Moldova', languages: ['Romanian'] },
        { name: 'Monaco', languages: ['French'] },
        { name: 'Mongolia', languages: ['Mongolian'] },
        { name: 'Montenegro', languages: ['Montenegrin'] },
        { name: 'Morocco', languages: ['Arabic'] },
        { name: 'Mozambique', languages: ['Portuguese'] },
        { name: 'Myanmar', languages: ['Burmese'] },
        { name: 'Namibia', languages: ['English'] },
        { name: 'Nauru', languages: ['Nauruan', 'English'] },
        { name: 'Nepal', languages: ['Nepali'] },
        { name: 'Netherlands', languages: ['Dutch'] },
        { name: 'New Zealand', languages: ['English', 'Maori'] },
        { name: 'Nicaragua', languages: ['Spanish'] },
        { name: 'Niger', languages: ['French'] },
        { name: 'Nigeria', languages: ['English'] },
        { name: 'North Korea', languages: ['Korean'] },
        { name: 'North Macedonia', languages: ['Macedonian'] },
        { name: 'Norway', languages: ['Norwegian'] },
        { name: 'Oman', languages: ['Arabic'] },
        { name: 'Pakistan', languages: ['Urdu', 'English'] },
        { name: 'Palau', languages: ['English'] },
        { name: 'Palestine', languages: ['Arabic'] },
        { name: 'Panama', languages: ['Spanish'] },
        { name: 'Papua New Guinea', languages: ['Tok Pisin', 'English'] },
        { name: 'Paraguay', languages: ['Spanish', 'Guarani'] },
        { name: 'Peru', languages: ['Spanish', 'Quechua'] },
        { name: 'Philippines', languages: ['Filipino', 'English'] },
        { name: 'Poland', languages: ['Polish'] },
        { name: 'Portugal', languages: ['Portuguese'] },
        { name: 'Qatar', languages: ['Arabic'] },
        { name: 'Romania', languages: ['Romanian'] },
        { name: 'Russia', languages: ['Russian'] },
        { name: 'Rwanda', languages: ['Kinyarwanda', 'French', 'English'] },
        { name: 'Saint Kitts and Nevis', languages: ['English'] },
        { name: 'Saint Lucia', languages: ['English'] },
        { name: 'Saint Vincent and the Grenadines', languages: ['English'] },
        { name: 'Samoa', languages: ['Samoan', 'English'] },
        { name: 'San Marino', languages: ['Italian'] },
        { name: 'Sao Tome and Principe', languages: ['Portuguese'] },
        { name: 'Saudi Arabia', languages: ['Arabic'] },
        { name: 'Senegal', languages: ['French'] },
        { name: 'Serbia', languages: ['Serbian'] },
        { name: 'Seychelles', languages: ['English', 'French', 'Seselwa'] },
        { name: 'Sierra Leone', languages: ['English'] },
        { name: 'Singapore', languages: ['English', 'Mandarin', 'Malay', 'Tamil'] },
        { name: 'Slovakia', languages: ['Slovak'] },
        { name: 'Slovenia', languages: ['Slovenian'] },
        { name: 'Solomon Islands', languages: ['Solomon Islands Pijin', 'English'] },
        { name: 'Somalia', languages: ['Somali', 'Arabic'] },
        { name: 'South Africa', languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English'] },
        { name: 'South Korea', languages: ['Korean'] },
        { name: 'South Sudan', languages: ['English'] },
        { name: 'Spain', languages: ['Spanish'] },
        { name: 'Sri Lanka', languages: ['Sinhala', 'Tamil'] },
        { name: 'Sudan', languages: ['Arabic', 'English'] },
        { name: 'Suriname', languages: ['Dutch'] },
        { name: 'Sweden', languages: ['Swedish'] },
        { name: 'Switzerland', languages: ['German', 'French', 'Italian', 'Romansh'] },
        { name: 'Syria', languages: ['Arabic'] },
        { name: 'Taiwan', languages: ['Mandarin'] }
      ]
    }
  },
  watch: {
    msg (newValue, oldValue) {
      // console.log('修改了名字:' + this.msg)   vm.$watch可以监听第一个参数变量改变 但是需要配置handler对象和方法实现
      console.log(`${oldValue} ======> ${newValue}`)
    },
    'thread.lastMessage': function () {
      this.$nextTick(() => {
        const ul = this.$els.list
        ul.scrollTop = ul.scrollHeight
      })
    }
  },
  created () {
    this.handle()
  },
  methods: {
    showDetail (name) {
      alert(`当前点击的项目:  ${name}`)
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