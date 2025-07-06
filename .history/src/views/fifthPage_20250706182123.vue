<template>
    <div class="fifth-container">
        <div class="fifth-content">
            <div class="fifth-content-title">
                <h2>「SMBUCA Lab」</h2>
            </div>
            <div class="scroll-container">
                <div class="fifth-content-wrapper">
                    <div class="wrap-cards" ref="cardsContainer">
                        <div class="wrap-card" style="background-image: url('/SMBUCA_1.png')">
                            <div class="wrap-card-title">
                                <h3>「NaviR导航」</h3>
                            </div>
                        </div>
                        <div class="wrap-card" style="background-image: url('/images/card2.jpg')">
                            <div class="wrap-card-title">
                                <h3>「SMBUCA Lab」</h3>
                            </div>
                        </div>
                        <div class="wrap-card" style="background-image: url('/images/card3.jpg')">
                            <div class="wrap-card-title">
                                <h3>「SMBUCA Lab」</h3>
                            </div>
                        </div>
                        <div class="wrap-card" style="background-image: url('/images/card4.jpg')">
                            <div class="wrap-card-title">
                                <h3>「SMBUCA Lab」</h3>
                            </div>
                        </div>
                        <div class="wrap-card" style="background-image: url('/images/card5.jpg')">
                            <div class="wrap-card-title">
                                <h3>「SMBUCA Lab」</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom-space"></div>
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
        init() {
            this.resize();
            window.addEventListener("resize", this.resize.bind(this));
            this.create_scrolltrigger();
        },
        create_scrolltrigger() {
            ScrollTrigger.create({
                trigger: ".scroll-container",
                pin: true,
                start: "top top",
                end: () => `+=${this.distance}`,
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(this.container, {
                        x: -this.distance * self.progress,
                        duration: 0
                    });
                }
            });
        },
        resize() {
            this.distance = this.container.offsetWidth - window.innerWidth + 100;
            document.querySelector('.scroll-container').style.height = `${this.distance}px`;
            document.querySelector('.bottom-space').style.height = `${window.innerHeight * 1.5}px`;
        }
    };
    scrollbox.init();
});
</script>

<style scoped>
/*第五页面样式 */
.fifth-container {
    width: 100%;
    position: relative;
    display: flex;
}

.fifth-content {
    width: 100%;
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
    margin-bottom: 5vh;
}

.fifth-content-title h2 {
    padding-left: 8vw;
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 0.05em;
}

.scroll-container {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.fifth-content-wrapper {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
}

.wrap-cards {
    display: flex;
    gap: 3rem;
    padding: 0 8vw;
    height: 100%;
    align-items: center;
    will-change: transform;
}

.wrap-card {
    width: 50vw;
    height: 50vh;
    background-color: #f0f0f0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
}


.wrap-card-title {
    text-align: right;
    position: relative;
    z-index: 2;
}

.wrap-card-title h3 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: #ff5733;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.bottom-space {
    width: 100%;
    height: 80vh; 
}
</style>

