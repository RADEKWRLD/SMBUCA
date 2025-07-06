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
</style>
