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



#app {
  min-height: 100vh;
  font-family: 'ZenDots', Arial, sans-serif;
  overflow: hidden;
}

/*基本样式*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
    scroll-behavior: smooth;
} 

body {
  margin: 0;
  padding: 0;
}

.scroll-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.scroll-content {
  transition: transform 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  will-change: transform;
}
</style>
