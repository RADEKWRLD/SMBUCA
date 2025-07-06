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
        text: 'Web 全栈实战 + GitHub 项目协作'
    },{
        icon: '🧠',
        title: 'AI & 大模型',
        text: '掌握 LLM 微调 + 多模态部署'
    },{
        icon: '🔍',
        title:'网络安全',
        text: 'CTF 竞赛 + 网络安全攻防实战 + 证书路径 + 攻防原理'
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
    background: #0a0a0a;
    color: white;
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
    flex-direction: column;
    align-items: center;
}

.forth-content-title h2 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 4vh;
    letter-spacing: 0.05em;
    color: white;
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

.forth-content-card {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
}

.card {
    width: 100%;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(123, 104, 238, 0.2);
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(123, 104, 238, 0.3);
    background: rgba(255, 255, 255, 0.15);
}

.icon {
    font-size: 2.5rem;
    padding: 1.5rem;
    background: rgba(123, 104, 238, 0.2);
    border-radius: 1rem;
    transition: all 0.3s ease;
}

.card:hover .icon {
    background: rgba(123, 104, 238, 0.3);
}

.card-desc {
    flex: 1;
}

.card-desc .title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: white;
}

.card-desc .text {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
}
</style>
