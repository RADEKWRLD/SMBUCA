<template>
    <div class="forth-container">
        <div class="forth-content">
            <div class="forth-content-title">
                <h2>「What We Do」</h2>
                <div class="forth-content-card">
                    <div v-for="(card, index) in cards" :key="index" class="card">
                        <div class="icon">{{ card.icon }}</div>
                        <div class="card-desc">
                            <div class="title">{{ card.title }}</div>
                            <div class="text">{{ card.text }}</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted,ref } from 'vue';

onMounted(() => {
})

const cards = ref([
    {
        icon: '💻',
        title: '算法竞赛',
        text: 'LeetCode、CCPC、蓝桥杯系统训练'
    },
    {
        icon: '🧰',
        title: '项目开发',
        text: '我们擅长使用HTML、CSS和JavaScript等前端技术，打造出美观、响应式的网页。'
    },{
        icon: '💻',
        title: 'Web Development',
        text: '我们擅长使用HTML、CSS和JavaScript等前端技术，打造出美观、响应式的网页。'
    }
])


</script>

<style scoped>
/*第四页面样式 */
.forth-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    padding-bottom: 5rem;
}

.forth-content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 8vw;
    padding-top: 15vh;
}

.forth-content-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
}

.forth-content-title h2 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2vh;
    letter-spacing: 0.05em;
}

.forth-content-text {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    justify-content: flex-start;
    padding-left: 0vw;
    font-size: 5rem;
    font-weight: lighter;
    line-height: 1.5;
}
</style>
