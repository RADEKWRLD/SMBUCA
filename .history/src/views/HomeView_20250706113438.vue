<template>
  <nav class="navbar">
    <div class="navContent">
      <span class="nav-title">S M B U C A</span>
    </div>

    <div class="navRight">
      <ul>
        <li>
          <button>
            <div class="li-content">首页</div>
          </button>
        </li>
        <li>
          <button>
            <div class="li-content">友链</div>
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <DotSphere class="background-sphere" />


  <div class="main-container">
    <div class="main-content">
      <div class="main-content-text">
        <div class="welcome">
          <span class="letter" v-for="(letter, index) in letters" :key="index">{{ letter }}</span>
        </div>
        <span class="char" v-for="(char, index) in chars" :key="index">{{ char }}</span>
      </div>
    </div>
    <div class="mask"></div>
  </div>
  <SecondPage />
  <ThirdPage />
</template>


<script setup>
import DotSphere from '@/views/DotSphere.vue';
import SecondPage from '@/views/SecondPage.vue';
import ThirdPage from '@/views/ThirdPage.vue';
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

onMounted(() => {
  WelcomeAnimation();
})

/**初始化文字 */
const letters = ref('WELCOME_');
const chars = ref('MSU-BIT@Shenzhen');
function WelcomeAnimation() {
  /**WELCOME动画 */
  gsap.fromTo('.letter', {
    opacity:0,
    y: 50,
    scale: 0.5,
    rotationY: 180,
  },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationY: 0,
      duration: 3,
      ease: 'power2.inOut',
      stagger: 0.1,
    });

  /**深圳北理莫斯科计算机协会动画 */
  gsap.fromTo(".char", {
    opacity: 0,
    x: 100,
    scale: 0.5,
    rotationZ: 360,
  },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      rotationZ: 0,
      duration: 0.2,
      ease: 'power2.inOut',
      stagger: 0.1,
      delay: 0.5,
      repeat:-1,
      yoyo:true,
      repeatDelay:0.5
    });
}


</script>


<style scoped>
.navbar {
  /*固定顶部 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  /**基础样式 */
  background-color: rgba(255, 255, 255, 0.8);
  /* 半透明白色背景 */
  backdrop-filter: blur(8px);
  /* 背景模糊效果 */
  -webkit-backdrop-filter: blur(8px);
  /* Safari 兼容 */
  padding: 10px 20px;
  /* 内边距 */
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  /* 固定高度 */
}

.navContent {
  display: flex;
  align-items: center;
  height: 100%;
}


.nav-title {
  padding-left: 10rem;
}

.navRight {
  padding-right: 5rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

.li-content {
  font-size: 1.2rem;
  font-weight: bold;
}

button {
  width: 6rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.3s ease;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

/* 背景球 */
.background-sphere {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* 主容器 */
.main-container {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
}


.main-content {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 40vh;
}


.main-content-text {
  position: relative;
  z-index: 2;
  text-align: left;
  color: #ff5733;
  margin-left: 10vw;
}

.main-content-text .welcome {
  color: #000;
  margin-bottom: 0.2rem;

}

.main-content-text .letter {
  font-size: 6rem;
  font-weight: bold;
  gap: 0.5rem;
  padding: 0;
}

.main-content-text .char {
  font-family: 'Newsreader';
  font-size: 2.5rem;
  font-weight: lighter;
  line-height: 1.5;
  margin-top: 1rem;
}

/*遮罩 */
.mask {
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 0;
  width: 100%;
  height:30%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  pointer-events: none;
}


</style>
