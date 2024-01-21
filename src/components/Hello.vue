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
      msg: 'Hello World!',
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
      ],
      countries: [
        { title: 'Safari 0.8', languages: ['Pashto', 'Dari'] },
        { title: 'Safari', languages: ['Albanian'] },
        { title: 'Safari', languages: ['Arabic'] },
        { title: 'Safari', languages: ['Catalan'] },
        { title: 'Safari', languages: ['Portuguese'] },
        { title: 'Safari', languages: ['English'] },
        { title: 'Safari', languages: ['Spanish'] },
        { title: 'Safari', languages: ['Armenian'] },
        { title: 'Safari', languages: ['English'] },
        { title: 'Safari', languages: ['German'] },
        { title: 'Safari', languages: ['Azerbaijani'] },
        { title: 'Safari', languages: ['English'] },
        { title: 'Safari', languages: ['Arabic'] },
        { title: 'Safari', languages: ['Bengali'] },
        { title: 'Safari', languages: ['English'] },
        { title: 'Safari', languages: ['Belarusian', 'Russian'] },
        { title: 'Safari', languages: ['Dutch', 'French', 'German'] },
        { title: 'Safari', languages: ['English'] },
        { title: 'Safari', languages: ['French'] },
        { title: 'Safari', languages: ['Dzongkha'] },
        { title: 'Safari', languages: ['Spanish', 'Quechua', 'Aymara'] },
        { title: 'SafariSafari', languages: ['Bosnian', 'Croatian', 'Serbian'] },
        { title: 'Botswana', languages: ['English', 'Setswana'] },
        { title: 'Brazil', languages: ['Portuguese'] },
        { title: 'Brunei', languages: ['Malay'] },
        { title: 'Bulgaria', languages: ['Bulgarian'] },
        { title: 'Burkina Faso', languages: ['French'] },
        { title: 'Burundi', languages: ['Kirundi', 'French'] },
        { title: 'Cabo Verde', languages: ['Portuguese'] },
        { title: 'Cambodia', languages: ['Khmer'] },
        { title: 'Cameroon', languages: ['English', 'French'] },
        { title: 'Canada', languages: ['English', 'French'] },
        { title: 'Central African Republic', languages: ['French', 'Sango'] },
        { title: 'Chad', languages: ['French', 'Arabic'] },
        { title: 'Chile', languages: ['Spanish'] },
        { title: 'China', languages: ['汉语', '藏语', '维吾尔语', '蒙古语', '壮语', '苗语', '朝鲜语'] },
        { title: 'Colombia', languages: ['Spanish'] },
        { title: 'Comoros', languages: ['Comorian', 'Arabic', 'French'] },
        { title: 'Democratic Republic of the Congo', languages: ['French'] },
        { title: 'Republic of the Congo', languages: ['French'] },
        { title: 'Costa Rica', languages: ['Spanish'] },
        { title: 'Côte d\'Ivoire', languages: ['French'] },
        { title: 'Croatia', languages: ['Croatian'] },
        { title: 'Cuba', languages: ['Spanish'] },
        { title: 'Cyprus', languages: ['Greek', 'Turkish'] },
        { title: 'Czech Republic', languages: ['Czech'] },
        { title: 'Denmark', languages: ['Danish'] },
        { title: 'Djibouti', languages: ['French', 'Arabic'] },
        { title: 'Dominica', languages: ['English'] },
        { title: 'Dominican Republic', languages: ['Spanish'] },
        { title: 'Ecuador', languages: ['Spanish'] },
        { title: 'Egypt', languages: ['Arabic'] },
        { title: 'El Salvador', languages: ['Spanish'] },
        { title: 'Equatorial Guinea', languages: ['Spanish', 'French', 'Portuguese'] },
        { title: 'Eritrea', languages: ['Tigrinya', 'Arabic', 'English'] },
        { title: 'Estonia', languages: ['Estonian'] },
        { title: 'Eswatini', languages: ['Swazi', 'English'] },
        { title: 'Ethiopia', languages: ['Amharic'] },
        { title: 'Fiji', languages: ['English', 'Fijian', 'Hindi'] },
        { title: 'Finland', languages: ['Finnish', 'Swedish'] },
        { title: 'France', languages: ['French'] },
        { title: 'Gabon', languages: ['French'] },
        { title: 'Gambia', languages: ['English'] },
        { title: 'Georgia', languages: ['Georgian'] },
        { title: 'Germany', languages: ['German'] },
        { title: 'Ghana', languages: ['English'] },
        { title: 'Greece', languages: ['Greek'] },
        { title: 'Grenada', languages: ['English'] },
        { title: 'Guatemala', languages: ['Spanish'] },
        { title: 'Guinea', languages: ['French'] },
        { title: 'Guinea-Bissau', languages: ['Portuguese'] },
        { title: 'Guyana', languages: ['English'] },
        { title: 'Haiti', languages: ['French', 'Haitian Creole'] },
        { title: 'Honduras', languages: ['Spanish'] },
        { title: 'Hungary', languages: ['Hungarian'] },
        { title: 'Iceland', languages: ['Icelandic'] },
        { title: 'India', languages: ['Hindi', 'English'] },
        { title: 'Indonesia', languages: ['Indonesian'] },
        { title: 'Iran', languages: ['Persian'] },
        { title: 'Iraq', languages: ['Arabic', 'Kurdish'] },
        { title: 'Ireland', languages: ['Irish', 'English'] },
        { title: 'Israel', languages: ['Hebrew', 'Arabic'] },
        { title: 'Italy', languages: ['Italian'] },
        { title: 'Jamaica', languages: ['English'] },
        { title: 'Japan', languages: ['Japanese'] },
        { title: 'Jordan', languages: ['Arabic'] },
        { title: 'Kazakhstan', languages: ['Kazakh', 'Russian'] },
        { title: 'Kenya', languages: ['Swahili', 'English'] },
        { title: 'Kiribati', languages: ['English', 'Gilbertese'] },
        { title: 'Kosovo', languages: ['Albanian', 'Serbian'] },
        { title: 'Kuwait', languages: ['Arabic'] },
        { title: 'Kyrgyzstan', languages: ['Kyrgyz', 'Russian'] },
        { title: 'Laos', languages: ['Lao'] },
        { title: 'Latvia', languages: ['Latvian'] },
        { title: 'Lebanon', languages: ['Arabic'] },
        { title: 'Lesotho', languages: ['Sesotho', 'English'] },
        { title: 'Liberia', languages: ['English'] },
        { title: 'Libya', languages: ['Arabic'] },
        { title: 'Liechtenstein', languages: ['German'] },
        { title: 'Lithuania', languages: ['Lithuanian'] },
        { title: 'Luxembourg', languages: ['Luxembourgish', 'French', 'German'] },
        { title: 'Madagascar', languages: ['Malagasy', 'French'] },
        { title: 'Malawi', languages: ['Chichewa', 'English'] },
        { title: 'Malaysia', languages: ['Malay'] },
        { title: 'Maldives', languages: ['Dhivehi'] },
        { title: 'Mali', languages: ['French'] },
        { title: 'Malta', languages: ['Maltese', 'English'] },
        { title: 'Marshall Islands', languages: ['Marshallese', 'English'] },
        { title: 'Mauritania', languages: ['Arabic'] },
        { title: 'Mauritius', languages: ['English', 'French', 'Mauritian Creole'] },
        { title: 'Mexico', languages: ['Spanish'] },
        { title: 'Micronesia', languages: ['English'] },
        { title: 'Moldova', languages: ['Romanian'] },
        { title: 'Monaco', languages: ['French'] },
        { title: 'Mongolia', languages: ['Mongolian'] },
        { title: 'Montenegro', languages: ['Montenegrin'] },
        { title: 'Morocco', languages: ['Arabic'] },
        { title: 'Mozambique', languages: ['Portuguese'] },
        { title: 'Myanmar', languages: ['Burmese'] },
        { title: 'Namibia', languages: ['English'] },
        { title: 'Nauru', languages: ['Nauruan', 'English'] },
        { title: 'Nepal', languages: ['Nepali'] },
        { title: 'Netherlands', languages: ['Dutch'] },
        { title: 'New Zealand', languages: ['English', 'Maori'] },
        { title: 'Nicaragua', languages: ['Spanish'] },
        { title: 'Niger', languages: ['French'] },
        { title: 'Nigeria', languages: ['English'] },
        { title: 'North Korea', languages: ['Korean'] },
        { title: 'North Macedonia', languages: ['Macedonian'] },
        { title: 'Norway', languages: ['Norwegian'] },
        { title: 'Oman', languages: ['Arabic'] },
        { title: 'Pakistan', languages: ['Urdu', 'English'] },
        { title: 'Palau', languages: ['English'] },
        { title: 'Palestine', languages: ['Arabic'] },
        { title: 'Panama', languages: ['Spanish'] },
        { title: 'Papua New Guinea', languages: ['Tok Pisin', 'English'] },
        { title: 'Paraguay', languages: ['Spanish', 'Guarani'] },
        { title: 'Peru', languages: ['Spanish', 'Quechua'] },
        { title: 'Philippines', languages: ['Filipino', 'English'] },
        { title: 'Poland', languages: ['Polish'] },
        { title: 'Portugal', languages: ['Portuguese'] },
        { title: 'Qatar', languages: ['Arabic'] },
        { title: 'Romania', languages: ['Romanian'] },
        { title: 'Russia', languages: ['Russian'] },
        { title: 'Rwanda', languages: ['Kinyarwanda', 'French', 'English'] },
        { title: 'Saint Kitts and Nevis', languages: ['English'] },
        { title: 'Saint Lucia', languages: ['English'] },
        { title: 'Saint Vincent and the Grenadines', languages: ['English'] },
        { title: 'Samoa', languages: ['Samoan', 'English'] },
        { title: 'San Marino', languages: ['Italian'] },
        { title: 'Sao Tome and Principe', languages: ['Portuguese'] },
        { title: 'Saudi Arabia', languages: ['Arabic'] },
        { title: 'Senegal', languages: ['French'] },
        { title: 'Serbia', languages: ['Serbian'] },
        { title: 'Seychelles', languages: ['English', 'French', 'Seselwa'] },
        { title: 'Sierra Leone', languages: ['English'] },
        { title: 'Singapore', languages: ['English', 'Mandarin', 'Malay', 'Tamil'] },
        { title: 'Slovakia', languages: ['Slovak'] },
        { title: 'Slovenia', languages: ['Slovenian'] },
        { title: 'Solomon Islands', languages: ['Solomon Islands Pijin', 'English'] },
        { title: 'Somalia', languages: ['Somali', 'Arabic'] },
        { title: 'South Africa', languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English'] },
        { title: 'South Korea', languages: ['Korean'] },
        { title: 'South Sudan', languages: ['English'] },
        { title: 'Spain', languages: ['Spanish'] },
        { title: 'Sri Lanka', languages: ['Sinhala', 'Tamil'] },
        { title: 'Sudan', languages: ['Arabic', 'English'] },
        { title: 'Suriname', languages: ['Dutch'] },
        { title: 'Sweden', languages: ['Swedish'] },
        { title: 'Switzerland', languages: ['German', 'French', 'Italian', 'Romansh'] },
        { title: 'Syria', languages: ['Arabic'] },
        { title: 'Taiwan', languages: ['Mandarin'] }
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