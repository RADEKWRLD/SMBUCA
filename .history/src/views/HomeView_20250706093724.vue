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

  <DotSphere class="background-sphere"/>


  <div class="main-container">
    <div class="main-content">
      <div class="main-content-text">
        <h1 class="welcome">
          <span class="letter" v-for="(letter, index) in welcomeText" :key="index">{{ letter }}</span>
        </h1>
        <p class="association">
          <span class="char" v-for="(char, index) in associationText" :key="index">{{ char }}</span>
        </p>
      </div>
    </div>
  </div>


  <div class="second-container">
    <div class="second-content">
      <p>关于我们</p>
    </div>
  </div>
</template>


<script setup>
import DotSphere from '@/components/DotSphere.vue';
import {gsap} from 'gsap';
import {onMounted, ref} from 'vue';

const welcomeText = ref('WELCOME');
const associationText = ref('深圳北理莫斯科计算机协会');

onMounted(() => {
  WelcomeAnimation();
  AssociationAnimation();
})

function WelcomeAnimation(){
  // 为每个字母创建动画
  gsap.fromTo('.letter', 
    {
      opacity: 0,
      y: 50,
      rotationX: -90,
      scale: 0.5
    },
    {
      opacity: 1,
      y: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }
  );

  // 添加持续的浮动动画
  gsap.to('.letter', {
    y: -10,
    duration: 2,
    stagger: 0.1,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    delay: 2
  });
}

function AssociationAnimation(){
  // 为每个字符创建动画
  gsap.fromTo('.char', 
    {
      opacity: 0,
      x: -30,
      scale: 0.8
    },
    {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out",
      delay: 1
    }
  );

  // 添加颜色变化动画
  gsap.to('.char', {
    color: '#4a90e2',
    duration: 3,
    stagger: 0.1,
    repeat: -1,
    yoyo: true,
    ease: "power2.inOut",
    delay: 3
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
  color: #000;
  margin-left: 10vw;
}

.main-content-text h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
  padding: 0;
  display: flex;
  gap: 0.5rem;
}

.main-content-text p {
  font-size: 2rem;
  margin-top: 1rem;
  display: flex;
  gap: 0.2rem;
}

.letter {
  display: inline-block;
  transform-style: preserve-3d;
  transition: all 0.3s ease;
}

.char {
  display: inline-block;
  transition: all 0.3s ease;
}

.letter:hover {
  transform: scale(1.2) rotateY(10deg);
  color: #4a90e2;
  text-shadow: 0 0 10px rgba(74, 144, 226, 0.5);
}

.char:hover {
  transform: scale(1.1);
  color: #e74c3c;
  text-shadow: 0 0 8px rgba(231, 76, 60, 0.5);
}

/*第二页面样式 */
.second-container {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
}

.second-content {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 40vh;
}
</style>
