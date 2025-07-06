<template>
    <div class="fifth-container">
        <div class="fifth-content">
            <div class="fifth-content-title">
                <h2>「SMBUCA Lab」</h2>
            </div>
            <div class="fifth-content-wrapper">
                <div class="wrap-cards" ref="cardsContainer">
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

const cardsContainer = ref(null);

onMounted(() => {
    const scrollbox = {
        container: cardsContainer.value,
        distance: 0,
        if_leave: false,
        init() {
            this.resize();
            window.addEventListener("resize", this.resize.bind(this));
            this.create_scrolltrigger();
        },
        create_scrolltrigger() {
            ScrollTrigger.create({
                trigger: ".fifth-content-wrapper",
                start: "top top",
                end: "bottom bottom",
                onUpdate: (self) => {
                    this.container.style.transform = `translateX(-${self.progress * this.distance}px)`;
                },
                onLeave: () => {
                    this.if_leave = true;
                },
                onEnterBack: () => {
                    this.if_leave = false;
                }
            });
        },
        resize() {
            this.distance = this.container.offsetWidth - window.innerWidth;
            document.querySelector('.fifth-content-wrapper').style.height = `${this.distance}px`;
            if (this.if_leave) this.container.style.transform = `translateX(-${this.distance}px)`;
        }
    };
    scrollbox.init();
});
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
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    overflow: hidden;
}

.wrap-cards {
    display: flex;
    gap: 3rem;
    padding: 0 8vw;
    align-items: center;
    height: 100%;
}

.wrap-card {
    width: 50vw;
    height: 50vh;
    background-color: #f0f0f0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.wrap-card-title h3 {
    font-size: 2rem;
    font-weight: 700;
}
</style>

