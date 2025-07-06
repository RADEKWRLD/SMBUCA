<template>
    <div class="card-container">
        <div class="card-content">
            <slot name="title"></slot>
            <slot name="icon"></slot>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
    cardAnimation();
})

function cardAnimation() {
    gsap.fromTo(".card-container", {
        opacity: 0,
        y: 100,
    }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
    }, {
        scrollTrigger: {
            trigger: ".card-container",
            start: "top 50%",
            end: "bottom 50%",
        }
    });
}
</script>

<style scoped>
.card-container {
    width: 20vw;
    height: 50vh;
    background-color: #ff5733;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s ease;
    position: relative;
    overflow: hidden;
}

.card-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: #ffffff;
    transform: skewX(-25deg);
    transition: left 0.6s ease;
    z-index: 1;
}

.card-container:hover {
    transform: translateY(-30px) rotate(2deg);
    box-shadow: 0 20px 40px #ff58331a;
}

.card-container:hover::before {
    left: 100%;
}

.card-content {
    padding: 20px;
    text-align: center;
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-content h3 {
    margin: 15px 0;
    font-size: 24px;
    color: #333;
    transition: color 0.6s ease;
}

.card-content p {
    margin: 0;
    color: #666;
    font-size: 3rem;
    line-height: 1.7;
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
}

.card-content span {
    width: 100%;
    height: 100%;
}

.card-container:hover .card-content h3 {
    color: #ff5733;
}
</style>