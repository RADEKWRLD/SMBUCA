<template>
    <div class="fifth-container">
        <div class="empty">KEEP SCROLL</div>
        <div class="empty">KEEP SCROLL</div>
        <div class="wrapper" ref="wrapper">
            <div class="container">
                <div class="cardsbox" ref="cardsbox">
                    <div class="cardsbox_card">KEEP SCROLL</div>
                    <div class="cardsbox_card">KEEP SCROLL</div>
                    <div class="cardsbox_card">KEEP SCROLL</div>
                    <div class="cardsbox_card">KEEP SCROLL</div>
                </div>
            </div>
        </div>
        <div class="empty">KEEP SCROLL</div>
        <div class="empty">KEEP SCROLL</div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const wrapper = ref(null);
const cardsbox = ref(null);
const distance = ref(0);
const ifLeave = ref(false);

const resize = () => {
    if (!wrapper.value || !cardsbox.value) return;
    
    distance.value = cardsbox.value.offsetWidth - window.innerWidth;
    wrapper.value.style.height = `${distance.value}px`;
    
    if (ifLeave.value) {
        cardsbox.value.style.transform = `translateX(-${distance.value}px)`;
    }
};

const createScrollTrigger = () => {
    if (!wrapper.value || !cardsbox.value) return;

    ScrollTrigger.create({
        trigger: wrapper.value,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
            cardsbox.value.style.transform = `translateX(-${self.progress * distance.value}px)`;
        },
        onLeave: () => {
            ifLeave.value = true;
        },
        onEnterBack: () => {
            ifLeave.value = false;
        }
    });
};

onMounted(() => {
    resize();
    window.addEventListener('resize', resize);
    createScrollTrigger();
});
</script>

<style scoped>
.fifth-container {
    width: 100%;
    background-color: #171717;
}

.empty {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80rem;
    margin: 10rem 0;
    background-color: #f7f7f7;
    font-family: impact;
    font-size: 5rem;
    color: #171717;
}

.wrapper {
    position: relative;
    width: 100%;
}

.container {
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #17f700;
    overflow: hidden;
}

.cardsbox {
    display: flex;
    position: absolute;
    left: 0;
    height: 100%;
    padding: 0 5vw;
}

.cardsbox_card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70rem;
    height: 50rem;
    background-color: #f7f7f7;
    margin-right: 50rem;
    font-family: impact;
    font-size: 5rem;
    color: #171717;
    flex-shrink: 0;
}
</style>
