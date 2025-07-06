<template>
    <div class="forth-container">
        <div class="forth-content">
            <div class="forth-content-title">
                <h2>「What We Do」</h2>
                <div class="forth-content-card">
                    <!-- 算法竞赛卡片 -->
                    <div class="card">
                        <div class="icon"><svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32"
                                version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <title>code</title>
                                <path
                                    d="M12 24h4v4h-12v-4h4v-4h4v4zM28 24v-4h-4v4h4zM4 16v4h4v-4h-4zM20 28h4v-4h-4v4zM24 12v4h4v-12h-4v4h-4v4h4zM20 16v-4h-4v-4h4v-4h-12v4h-4v4h4v4h4v4h4v4h4v-4h4v-4h-4z">
                                </path>
                            </svg></div>
                        <div class="card-desc">
                            <div class="title">{{ cards[0].title }}</div>
                            <div class="text">{{ cards[0].text }}</div>
                        </div>
                    </div>

                    <!-- 项目开发卡片 -->
                    <div class="card">
                        <div class="icon">{{ cards[1].icon }}</div>
                        <div class="card-desc">
                            <div class="title">{{ cards[1].title }}</div>
                            <div class="text">{{ cards[1].text }}</div>
                        </div>
                    </div>

                    <!-- AI & 大模型卡片 -->
                    <div class="card">
                        <div class="icon">{{ cards[2].icon }}</div>
                        <div class="card-desc">
                            <div class="title">{{ cards[2].title }}</div>
                            <div class="text">{{ cards[2].text }}</div>
                        </div>
                    </div>

                    <!-- 网络安全卡片 -->
                    <div class="card">
                        <div class="icon">{{ cards[3].icon }}</div>
                        <div class="card-desc">
                            <div class="title">{{ cards[3].title }}</div>
                            <div class="text">{{ cards[3].text }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';

onMounted(() => {
})

const cards = ref([
    {
        title: '算法竞赛',
        text: 'LeetCode,CCPC,蓝桥杯系统训练'
    },
    {
        title: '项目开发',
        text: 'Web 全栈实战,GitHub 项目协作'
    }, {
        title: 'AI & 大模型',
        text: '掌握 LLM 微调,多模态部署'
    }, {
        title: '网络安全',
        text: 'CTF 竞赛,网络安全攻防实战'
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
    flex-direction: column;
    align-items: flex-start;
}

.forth-content-title h2 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 4vh;
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
    background: white;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;

    gap: 2rem;
}


.icon {
    width: 1rem;
    height: 5rem;
}

.card-desc {
    flex: 1;
}

.card-desc .title {
    color: #ff5733;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.card-desc .text {
    color: #000;
    font-weight: lighter;
    font-size: 5rem;
    line-height: 1.5;
}
</style>
