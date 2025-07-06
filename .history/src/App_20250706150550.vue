<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script setup>
</script>


<style>
/*注册字体 */
@font-face {
  font-family: 'ZenDots';
  src: url('./assets/fonts/ZenDots-Regular.ttf');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family:'Newsreader';
  src: url('./assets/fonts/Newsreader-VariableFont_opsz,wght.ttf');
  font-weight: normal;
  font-style: normal;
}

/* 添加平滑滚动 */
:root {
  scroll-behavior: smooth;
}

html, body {
  scroll-behavior: smooth;
}

#app {
  min-height: 100vh;
  font-family: 'ZenDots', Arial, sans-serif;
}

/*基本样式*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

/* 确保所有可滚动容器都有平滑滚动 */
.scroll-container,
[class*='scroll'],
div {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; /* 为 iOS 设备添加惯性滚动 */
}
</style>
