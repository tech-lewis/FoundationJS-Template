<template>
  <div>
    <h2>User Center:  您选择国家{{selectedCountries.name}}使用的语言有{{selectedCountries ? selectedCountries.languages.join('/'): ''}}</h2>
    <p>{{ value }}</p>
    <!-- <group v-if="isShow">
      <cell v-for="item in values" :key="item" title="item" value="切换语言"></cell>
    </group> -->
    <div v-for="item in countries.slice(0, 11)" :key="item">
      <div class="item" @click="showLanguages(item)">{{item.name}}</div>
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
        selectedCountries: null,
        values: ['中文', 'English', '日本語', 'Français', 'Español'],
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
    computed: {
      // selectedTips: {
      //   return this.selectedCountries.join('/')
      // }
    },
    created: function () {
      // `this` points to the vm instance
      console.log('values is: ' + this.values)
    },
    methods: {
      showLanguages (item) {
        console.log(item.languages)
        this.selectedCountries = item
      },
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