<template>
  <div class="container">
    <h1>{{title}}</h1>
    <div class="box">
      <select v-on="click:clickItem" v-model="optionItem">
        <option v-repeat="countries" v-bind:value="isSelect">{{$index}}.{{name}}</option>
      </select>
      <hr>
      <span>请输入要查询的国家名称:</span>
      <input type="text" v-model="keyword" v-on="input: inputChanged">
      <strong>{{keyword}}</strong>
      <span> speak</span>
      <strong>{{selectLanguages.join('/')}}</strong>
    </div>
    <p style="text-align:center">{{selectLanguages}}</p>
    <ul class="list" style="list-style: none;">
      <li v-repeat="countries" style="padding: 0 10px;margin-bottom: 18px;hover{color: #0a6aa1};">
        <span style="border: 1px solid #ff8800;padding: 0 10px;border-radius: 5px;text-align: center;font-family: Arial, Helvetica, sans-serif;width: 100px;" class="item">{{$index}} - {{name}}</span>
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'User View',
  data () {
    return {
      title: 'User View',
      optionItem: '',
      keyword: '',
      values: ['中文', 'English', '日本語', 'Français', 'Español'],
      selectLanguages: ['中文', 'English', '日本語', 'Français', 'Español'],
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
        { name: 'China', languages: ['汉语', '藏语', '维吾尔语', '蒙古语', '壮语', '苗语', '朝鲜语'], isSelect: true },
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
      ],
      items: [
        { name: '商品1' },
        { name: '商品2' },
        { name: '商品3' }
      ]}
  },
  // ready () {
  //   console.log('ready生命周期方法')
  // },
  methods: {
    clickItem (e) {
      console.log(e.target.nodeName)
      // 事件委托的使用
      if (e.target.nodeName === 'SPAN') {
        console.log(e.target.innerHTML.split('-')[0].trim())
        var index = e.target.innerHTML.split('-')[0].trim()
        this.selectLanguages = this.countries[index].languages
      }
      if (e.target.nodeName === 'OPTION') {
        console.log(this.optionItem)
        var idx = e.target.innerHTML.split('.')[0].trim()
        this.selectLanguages = this.countries[idx].languages
      }
    }
  }
}
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