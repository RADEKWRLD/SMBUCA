<template>
    <div class="fifth-container">
        <div class="fifth-content">
            <div class="fifth-content-title">
                <h2>「SMBUCA Lab」</h2>
            </div>
            <WorkSection />
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import WorkSection from '../components/WorkSection.vue';

</script>

<style scoped>
/*第五页面样式 */
.fifth-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    padding-bottom: 3rem;
    border-bottom: 1px solid #d5d5d5;
}

.fifth-content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.fifth-content-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
    margin-top: 15vh;
    margin-bottom: 10vh;
}

.fifth-content-title h2 {
    padding-left: 8vw;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 0.05em;
}

.fifth-content-text {
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
