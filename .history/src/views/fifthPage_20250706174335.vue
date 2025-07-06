<template>
    <div class="fifth-container">
        <div class="empty">KEEP SCROLL</div>
        <div class="empty">KEEP SCROLL</div>
        <div class="wapper" ref="wrapperRef">
            <div class="container">
                <div class="cardsbox" ref="cardsboxRef">
                    <div class="cardsbox_card" v-for="(_, index) in 5" :key="index">
                        <h3>「SMBUCA Lab」</h3>
                    </div>
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

const wrapperRef = ref(null);
const cardsboxRef = ref(null);

const scrollbox = {
    wapper: null,
    cardsbox: null,
    distance: 0,
    if_leave: false,
    init() {
        this.wapper = wrapperRef.value;
        this.cardsbox = cardsboxRef.value;
        
        this.resize();
        window.addEventListener("resize", this.resize.bind(this));
        this.create_scrolltrigger();
    },
    create_scrolltrigger() {
        ScrollTrigger.create({
            trigger: this.wapper,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                this.cardsbox.style.transform = `translateX(-${self.progress * this.distance}px)`;
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
        this.distance = this.cardsbox.offsetWidth - window.innerWidth;
        this.wapper.style.height = `${this.distance}px`;
        if (this.if_leave) this.cardsbox.style.transform = `translateX(-${this.distance}px)`;
    }
};

// Initialize Lenis for smooth scrolling
const initLenis = () => {
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            autoRaf: true,
        });
    }
};

onMounted(() => {
    // Load Lenis script if not present
    if (typeof Lenis === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/lenis@1.3.4/dist/lenis.min.js';
        script.onload = () => {
            initLenis();
            scrollbox.init();
        };
        document.head.appendChild(script);
    } else {
        initLenis();
        scrollbox.init();
    }
});
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    font-size: 1vmin;
}

div {
    display: flex;
}

p {
    user-select: none;
}

.fifth-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #171717;
}

.empty {
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

.wapper {
    position: relative;
    width: 100%;
}

.container {
    position: sticky;
    top: 0;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.cardsbox {
    display: flex;
}

.cardsbox_card {
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

