<template>
    <div class="card-container">
        <div class="card-content">
            <slot name="title"></slot>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';

const cardContainer = ref(null);

onMounted(() => {
    gsap.fromTo(cardContainer.value, { borderColor: 'transparent' }, { borderColor: 'rgba(255, 255, 255, 0.5)', duration: 1, repeat: -1, yoyo: true });
});
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
    border: 3px solid transparent;
    background-clip: padding-box;
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
    border-radius: 15px;
    background: linear-gradient(45deg, #ff5733, #33ff57, #3357ff, #ff33a1);
    background-size: 400%;
}

.card-container:hover {
    transform: translateY(-30px) rotate(2deg);
    box-shadow: 0 20px 40px #ff58331a;
}

.card-container:hover::before {
    left: 100%;
    animation: gradient-animation 3s ease infinite;
}

@keyframes gradient-animation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.card-content {
    padding: 20px;
    text-align: center;
    position: relative;
    z-index: 2;
    height: 65%;
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
    font-size: 14px;
    line-height: 1.7;
}

.card-container:hover .card-content h3 {
    color: #ff5733;
}
</style>