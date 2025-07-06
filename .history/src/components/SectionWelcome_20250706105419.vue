<template>
  <section class="section welcome-section">
    <div class="logo" ref="logo">🧠💻🎉</div>
    <h1 ref="title">欢迎来到 SMBUCA！</h1>
    <p ref="desc">这是一个由热爱技术、脑洞清奇的同学组成的计算机社团。我们写代码，也写生活的彩蛋！</p>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const logo = ref(null)
const title = ref(null)
const desc = ref(null)

onMounted(() => {
  gsap.from(logo.value, {
    x: -100, opacity: 0, duration: 1,
    scrollTrigger: { trigger: logo.value, start: 'top 80%' }
  })
  gsap.from(title.value, {
    opacity: 0, y: 50, duration: 1, delay: 0.3,
    scrollTrigger: { trigger: title.value, start: 'top 80%' }
  })
  gsap.from(desc.value, {
    opacity: 0, y: 30, duration: 1, delay: 0.6,
    scrollTrigger: { trigger: desc.value, start: 'top 80%' }
  })
})
</script>

<style scoped>
.welcome-section {
  background: #f5f7fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style> 