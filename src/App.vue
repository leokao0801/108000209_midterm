<template>
  <div id="app">
    <div id="headPic03">
      <img src="./assets/藝術學院標準字.jpg" width="1200px">
    </div>
    <bg01></bg01>
    <bg03></bg03>
    <bg02></bg02>
    <banner></banner>
    <div id="headPic01">
      <img src="./assets/清大logo.png" width="50px">
    </div>
    <div id="headPic02">
      <img src="./assets/清大標準字.jpg" height="35px">
    </div>
    <div id="headPic04">
      <img src="./assets/JMU.jpg" height="120pt">
    </div>
    <div id="headPic05">
      <img src="./assets/JAD.jpg" height="120pt">
    </div>
    <div id="headPic06">
      <img src="./assets/JITA.jpg" height="120pt">
    </div>
    <div id="textPic01">
      <img src="./assets/圖片_01.jpg" height="180pt">
    </div>
    <div id="textPic02">
      <img src="./assets/藝術學院標準字.jpg" height="180pt">
    </div>
    <div id="textPic03">
      <img src="./assets/圖片_02.jpg" height="180pt">
    </div>
    <div id="textPic04">
      <img src="./assets/圖片_03.jpg" height="180pt">
    </div>
    <div id="textPic05">
      <img src="./assets/圖片_04.jpg" height="180pt">
    </div>
    <div id="textPic06">
      <img src="./assets/圖片_05.jpg" height="180pt">
    </div>
    <div id="textPic07">
      <img src="./assets/圖片_06.jpg" height="180pt">
    </div>
    <div id="textPic08">
      <img src="./assets/圖片_07.jpg" height="180pt">
    </div>
    <div id="textPic09">
      <img src="./assets/圖片_08.jpg" height="180pt">
    </div>
    <div id="textPic10">
      <img src="./assets/圖片_09.jpg" height="180pt">
    </div>
    <div id="textPic11">
      <img src="./assets/藝術學院標準字.jpg" height="180pt">
    </div>
    <div id="textPic12">
      <img src="./assets/藝術學院標準字.jpg" height="180pt">
    </div>
    <gray01></gray01>
    <gray02></gray02>
    <gray03></gray03>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
banner {
  height: 120pt;
  width: 1280px;
  background-color: #404040;
  position: absolute;
  left: -20px;
  margin-top: 400px;
}
gray01 {
  height: 100pt;
  width: 20px;
  background-color: #404040;
  position: absolute;
  left: 450px;
  margin-top: 420px;
}
gray02 {
  height: 20px;
  width: 240pt;
  background-color: #404040;
  position: absolute;
  left: 245px;
  margin-top: 410px;
}
gray03 {
  height: 20px;
  width: 240pt;
  background-color: #404040;
  position: absolute;
  left: 245px;
  margin-top: 530px;
}
bg01 {
  height: 1465pt;
  width: 1280px;
  background: linear-gradient(180deg, #808080 0%, #808080 80%, #FFFFFF 100%), #808080;
  /* background-color: #808080; */
  position: absolute;
  left: -20px;
  margin-top: 520px;
}
bg02 {
  height: 1140pt;
  width: 1180px;
  background-color: #ffffff;
  position: absolute;
  left: 40px;
  margin-top: 600px;
  box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.30);
  border-radius: 20px;
}
bg03 {
  height: 280pt;
  width: 1180px;
  background-color: #404040;
  position: absolute;
  left: 40px;
  margin-top: 2100px;
  box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.30);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 30px; */
}

#headPic01 {
  position: absolute;
  margin-top: 15px;
  left: 30px;
}
#headPic02 {
  position: absolute;
  margin-top: 20px;
  left: 90px;
}
#headPic03 {
  position: absolute;
  margin-top: -120px;
  left: 30px;
}
#headPic04 {
  position: absolute;
  margin-top: 420px;
  left: 245px;
}
#headPic05 {
  position: absolute;
  margin-top: 420px;
  left: 520px;
}
#headPic06 {
  position: absolute;
  margin-top: 420px;
  left: 805px;
}

#textPic01 {
  position: absolute;
  margin-top: 895px;
  left: 100px;
}
#textPic02 {
  position: absolute;
  margin-top: 895px;
  left: 470px;
}
#textPic03 {
  position: absolute;
  margin-top: 895px;
  left: 840px;
}
#textPic04 {
  position: absolute;
  margin-top: 1215px;
  left: 100px;
}
#textPic05 {
  position: absolute;
  margin-top: 1215px;
  left: 470px;
}
#textPic06 {
  position: absolute;
  margin-top: 1215px;
  left: 840px;
}
#textPic07 {
  position: absolute;
  margin-top: 1535px;
  left: 100px;
}
#textPic08 {
  position: absolute;
  margin-top: 1535px;
  left: 470px;
}
#textPic09 {
  position: absolute;
  margin-top: 1535px;
  left: 840px;
}
#textPic10 {
  position: absolute;
  margin-top: 1855px;
  left: 100px;
}
#textPic11 {
  position: absolute;
  margin-top: 1855px;
  left: 470px;
}
#textPic12 {
  position: absolute;
  margin-top: 1855px;
  left: 840px;
}
</style>
