<template>
    <div class="card-container">
        <div class="card-content">
            <slot name="title"></slot>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
    const card = document.querySelector('.card-container');
    gsap.to(card, {
        boxShadow: '0 0 20px rgba(255, 87, 51, 0.5)',
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: 'power1.inOut',
        modifiers: {
            boxShadow: (value) => {
                const rgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                return value.replace(/rgba\((\d+), (\d+), (\d+), (\d+\.\d+)\)/, rgb);
            }
        }
    });
});
</script>

<style scoped>
.card-container {
    width: 20vw;
    height: 50vh;
    background-color: #ff5733;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(255, 87, 51, 0.5);
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