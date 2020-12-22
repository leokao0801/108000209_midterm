<template>
  <div>
    <!-- <bg01></bg01>
    <bg02></bg02> -->
    <!-- <banner></banner> -->
    <headBar01>聯絡資訊</headBar01>
    <headLine01></headLine01>
    <headBar02>藝術學報</headBar02>
    <headLine02></headLine02>
    <headBar03>學院影音</headBar03>
    <headLine03></headLine03>
    <headBar04>榮譽榜</headBar04>
    <headLine04></headLine04>
    <headBar05>招生訊息</headBar05>
    <headLine05></headLine05>
    <headBar06>規章</headBar06>
    <headLine06></headLine06>
    <headBar07>師資</headBar07>
    <headLine07></headLine07>
    <headBar08>關於</headBar08>
    <headLine08></headLine08>
    <headBar09>首頁</headBar09>
    <notice>學院最新消息</notice>

    <g01-date>12/08/2020</g01-date>
    <g02-date>12/01/2020</g02-date>
    <g03-date>12/01/2020</g03-date>
    <g04-date>09/24/2020</g04-date>
    <g05-date>09/09/2020</g05-date>
    <g06-date>07/31/2020</g06-date>
    <g07-date>07/22/2020</g07-date>
    <g08-date>07/03/2020</g08-date>
    <g09-date>06/11/2020</g09-date>
    <g10-date>04/27/2020</g10-date>
    <g11-date>04/01/2020</g11-date>
    <g12-date>04/01/2020</g12-date>

    <g01-text>
      <!-- <a
        href = "https://art.nthu.edu.tw/?p=2072"
        target = "_current"
      > -->
        藝設系學生獲獎－109年林務局「國產材設計商品比賽」決選
      <!-- </a> -->
    </g01-text>
    <g02-text>2021 年藝術學院教育發展基金</g02-text>
    <g03-text>【開放報名】2020國立清華大學藝術與設計學系研究生論文研討會</g03-text>
    <g04-text>【徵稿】2020國立清華大學藝術與設計學系研究生論文研討會</g04-text>
    <g05-text>ARS 2020 – Tsing Hua Garden</g05-text>
    <g06-text>清華藝術學報</g06-text>
    <g07-text>藝設系設計組-異質對話-（360展區1）</g07-text>
    <g08-text>華山烏梅劇場「Face to face」實驗性跨領域展演 × 四組劇場表演與一組互動裝置</g08-text>
    <g09-text>藝術學院-畢業典禮</g09-text>
    <g10-text>藝設系學生獲獎－第14屆福爾摩沙珠寶設計教育推廣競賽</g10-text>
    <g11-text>科技藝術策展人講座系列 – Metabolism at Contemporary (2020.04.07)</g11-text>
    <g12-text>清明連假後防疫措施</g12-text>

    <b01-title>訊息類別</b01-title>
    <b02-title>相關網站</b02-title>
    <b03-title>聯絡資訊</b03-title>

    <b01-link01>頭條 Tpp News</b01-link01>
    <b01-link02>合作交流</b01-link02>
    <b01-link03>國際交流</b01-link03>
    <b01-link04>學生獲獎</b01-link04>
    <b01-link05>學院公告</b01-link05>
    <b01-link06>招生訊息</b01-link06>
    <b02-link01>清大音樂系</b02-link01>
    <b02-link02>清大藝設系</b02-link02>
    <b02-link03>藝術學院學士班</b02-link03>
    <b02-link04>藝術與創新科技碩士學程</b02-link04>
    <b02-link05>春之藝術專題講座</b02-link05>
    <b02-link06>科技藝術研究中心</b02-link06>
    <b03-link01>Facebook</b03-link01>
    <b03-link02>Twitter</b03-link02>
    <b03-link03>Email</b03-link03>
    <b03-link04>Telephone</b03-link04>
    <b03-link05>Google Map</b03-link05>

    <bLine01></bLine01>
    <bLine02></bLine02>
  </div>
</template>

<script>
export default {
  name: 'Midterm',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
bg01 {
  height: 1400pt;
  width: 1280px;
  background-color: #808080;
  position: absolute;
  left: -20px;
  margin-top: 520px;
}
bg02 {
  height: 1200pt;
  width: 1180px;
  background-color: #ffffff;
  position: absolute;
  left: 40px;
  margin-top: 600px;
  box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.30);
  border-radius: 20px;
}
banner {
  height: 120pt;
  width: 1280px;
  background-color: #404040;
  position: absolute;
  left: -20px;
  margin-top: 400px;
}
headBar01 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  right: 30px;
  margin-top: 20px;
}
headLine01 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  right: 95px;
  margin-top: 21.5px;
}
headBar02 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  right: 110px;
  margin-top: 20px;
}
headLine02 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  right: 176px;
  margin-top: 21.5px;
}
headBar03 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  right: 190px;
  margin-top: 20px;
}
headLine03 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  right: 256px;
  margin-top: 21.5px;
}
headBar04 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  right: 270px;
  margin-top: 20px;
}
headLine04 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  right: 326px;
  margin-top: 21.5px;
}
headBar05 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  right: 340px;
  margin-top: 20px;
}
headLine05 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  right: 406px;
  margin-top: 21.5px;
}
headBar06 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  right: 420px;
  margin-top: 20px;
}
headLine06 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  right: 460px;
  margin-top: 21.5px;
}
headBar07 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  right: 475px;
  margin-top: 20px;
}
headLine07 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  right: 515px;
  margin-top: 21.5px;
}
headBar08 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  right: 530px;
  margin-top: 20px;
}
headLine08 {
  height: 11pt;
  border: 0.25px solid #000000;
  position: absolute;
  right: 570px;
  margin-top: 21.5px;
}
headBar09 {
  color: rgb(65, 65, 65);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  position: absolute;
  right: 585px;
  margin-top: 20px;
}
notice {
  color: #404040;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 30pt;
  font-weight: bold;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 690px;
  left: 498px;
}
g01-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 810px;
  left: 100px;
}
g01-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 836px;
  left: 100px;
  max-width: 250pt;
}
g02-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 810px;
  left: 470px;
}
g02-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 836px;
  left: 470px;
  max-width: 250pt;
}
g03-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 810px;
  left: 840px;
}
g03-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 836px;
  left: 840px;
  max-width: 250pt;
}
g04-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1130px;
  left: 100px;
}
g04-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1156px;
  left: 100px;
  max-width: 250pt;
}
g05-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1130px;
  left: 470px;
}
g05-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1156px;
  left: 470px;
  max-width: 250pt;
}
g06-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1130px;
  left: 840px;
}
g06-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1156px;
  left: 840px;
  max-width: 250pt;
}
g07-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1450px;
  left: 100px;
}
g07-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1476px;
  left: 100px;
  max-width: 250pt;
}
g08-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1450px;
  left: 470px;
}
g08-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1476px;
  left: 470px;
  max-width: 250pt;
}
g09-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1450px;
  left: 840px;
}
g09-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1476px;
  left: 840px;
  max-width: 250pt;
}
g10-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1770px;
  left: 100px;
}
g10-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1796px;
  left: 100px;
  max-width: 250pt;
}
g11-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1770px;
  left: 470px;
}
g11-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1796px;
  left: 470px;
  max-width: 250pt;
}
g12-date {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1770px;
  left: 840px;
}
g12-text {
  color: rgb(0, 0, 0);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12pt;
  font-weight: bold;
  letter-spacing: 0.5pt;
  position: absolute;
  margin-top: 1796px;
  left: 840px;
  max-width: 250pt;
}
b01-title {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 22pt;
  font-weight: normal;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2180px;
  left: 205px;
}
b01-link01 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2240px;
  left: 207px;
}
b01-link02 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2270px;
  left: 240px;
}
b01-link03 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2300px;
  left: 240px;
}
b01-link04 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2330px;
  left: 240px;
}
b01-link05 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2360px;
  left: 240px;
}
b01-link06 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2390px;
  left: 240px;
}
b02-title {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 22pt;
  font-weight: normal;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2180px;
  left: 565px;
}
b02-link01 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2240px;
  left: 587px;
}
b02-link02 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2270px;
  left: 587px;
}
b02-link03 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2300px;
  left: 570px;
}
b02-link04 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2330px;
  left: 537px;
}
b02-link05 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2360px;
  left: 565px;
}
b02-link06 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2390px;
  left: 565px;
}
b03-title {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 22pt;
  font-weight: normal;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2180px;
  left: 933px;
}
b03-link01 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2240px;
  left: 959px;
}
b03-link02 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2270px;
  left: 970px;
}
b03-link03 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2300px;
  left: 980px;
}
b03-link04 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2330px;
  left: 955px;
}
b03-link05 {
  color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 10pt;
  letter-spacing: 3pt;
  position: absolute;
  margin-top: 2360px;
  left: 949px;
}
bLine01 {
  height: 150pt;
  border: 0.25px solid #ffffff;
  position: absolute;
  left: 425px;
  margin-top: 2198px;
}
bLine02 {
  height: 150pt;
  border: 0.25px solid #ffffff;
  position: absolute;
  right: 425px;
  margin-top: 2198px;
}
</style>
