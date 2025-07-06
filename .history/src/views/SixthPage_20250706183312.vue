<template>
    <div class="sixth-container">
        <div class="sixth-content">
            <div class="sixth-content-title">
                <h2>「Join Us」</h2>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';



</script>

<style scoped>
/*第六页面样式 */
.second-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    padding-bottom: 3rem;
    border-bottom: 1px solid #d5d5d5;
}

.second-content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 15vh;
}

.second-content-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
}

.second-content-title h2 {
    padding-left: 8vw;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2vh;
    letter-spacing: 0.05em;
}

.second-content-text {
    width: 90%;
    padding-left: 8vw;
    height: auto;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    justify-content: flex-start;
    font-size: 5rem;
    font-weight: lighter;
    line-height: 1.5;
}
</style>
