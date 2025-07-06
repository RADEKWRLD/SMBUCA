<template>
    <div class="fifth-container">
        <div class="fifth-content">
            <div class="fifth-content-title">
                <h2>「SMBUCA Lab」</h2>
            </div>
            <div class="fifth-content-wrapper">
                <div class="wrap-cards">
                    <div class="wrap-card">
                        <div class="wrap-card-title">
                            <h3>「SMBUCA Lab」</h3>
                        </div>
                    </div>
                    <div class="wrap-card">
                        <div class="wrap-card-title">
                            <h3>「SMBUCA Lab」</h3>
                        </div>
                    </div>
                    <div class="wrap-card">
                        <div class="wrap-card-title">
                            <h3>「SMBUCA Lab」</h3>
                        </div>
                    </div>
                    <div class="wrap-card">
                        <div class="wrap-card-title">
                            <h3>「SMBUCA Lab」</h3>
                        </div>
                    </div>
                    <div class="wrap-card">
                        <div class="wrap-card-title">
                            <h3>「SMBUCA Lab」</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const scrollbox = {
    wrapper: document.querySelector('.fifth-content-wrapper'),
    cardsbox: document.querySelector('.wrap-cards'),
    distance: 0,
    if_leave: false,
    init() {
        this.resize();
        window.addEventListener("resize", this.resize.bind(this));
        this.create_scrolltrigger();
    }
}



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
    padding-top: 15vh;
}

.fifth-content-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
}

.fifth-content-title h2 {
    padding-left: 8vw;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2vh;
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

.fifth-content-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wrap-cards {
    display: flex;
    gap: 3rem;
    overflow-x: scroll;
}

.wrap-card {
    width: 50vw;
    height: 50vh;
    background-color: #f0f0f0;
    flex-shrink: 0;
}
</style>
