<template>
    <div class="third-container">
        <div class="third-content">
            <div class="third-content-title">
                <h2>「About Us」</h2>
            </div>
            <div class="third-content-card">
              
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';


</script>

<style scoped>
/*第二页面样式 */
.third-container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
}

.third-content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 8vw;
    padding-top: 15vh;
}

.third-content-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
}

.third-content-title h2 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2vh;
    letter-spacing: 0.05em;
}

.third-content-text {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    justify-content: left;
    padding-left: 0vw;
    font-size: 5rem;
    font-weight: lighter;
    line-height: 1.5;
}
</style>
