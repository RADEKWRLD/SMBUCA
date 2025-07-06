<template>
  <div class="scroll-container">
    <div class="scroll-content" :style="{ transform: `translateY(${-scrollY}px)`, transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }">
      <div id="app">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
let ticking = false

const updateScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      scrollY.value = window.scrollY
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  // 初始化内容高度
  const content = document.querySelector('.scroll-content')
  if (content) {
    document.body.style.height = `${content.offsetHeight}px`
  }
  
  window.addEventListener('scroll', updateScroll)
  window.addEventListener('resize', () => {
    if (content) {
      document.body.style.height = `${content.offsetHeight}px`
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
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
  /* 确保内容可以正常流动 */
  width: 100%;
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
  will-change: transform;
}
</style>
