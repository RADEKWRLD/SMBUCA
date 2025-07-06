<template>
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
  <ForthPage />
  <FifthPage />
  <SixthPage />
</template>

<script setup>
import DotSphere from '@/components/DotSphere.vue';
import SecondPage from '@/views/SecondPage.vue';
import ThirdPage from '@/views/ThirdPage.vue';
import ForthPage from '@/views/ForthPage.vue';
import FifthPage from '@/views/FifthPage.vue';
import SixthPage from '@/views/SixthPage.vue';
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
