<template>
    <div class="second-container">
        <div class="second-content">
            <div class="second-content-title">
                <h2>「Join Us」</h2>
            </div>
            <div class="second-content-text">
                <p>欢迎来到<span class="special-text">SMBUCA</span>的世界!</p>
                <p>我们是一个由一群<span class="special-text">热爱技术、脑洞大开</span>的同学组成的计算机社团,在这里,编程不再枯燥,灵感随时闪现!</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
    SecondPageAnimation();
})

/**第二页面动画 */
function SecondPageAnimation() {
    gsap.to(".special-text", {
        color: "#ff5733",
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
    })
}

</script>

<style scoped>
/*第二页面样式 */
.second-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    border-bottom: 1px solid #d5d5d5;
    padding-bottom: 5vh;
}

.second-content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 8vw;
    padding-top: 15vh;
}

.second-content-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
}

.second-content-title h2 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2vh;
    letter-spacing: 0.05em;
}

.second-content-text {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    justify-content: flex-start;
    padding-left: 0vw;
    font-size: 5rem;
    font-weight: lighter;
    line-height: 1.5;
}
</style>
