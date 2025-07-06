<template>
    <div class="forth-container">
        <div class="forth-content">
            <div class="forth-content-title">
                <h2>「What We Do」</h2>
                <div class="forth-content-card">
                    <!-- 算法竞赛卡片 -->
                    <div class="card">
                        <div class="icon"><svg fill="#000000" viewBox="0 0 24 24" version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>code</title>
                                <g transform="scale(0.75)">
                                <path
                                    d="M12 24h4v4h-12v-4h4v-4h4v4zM28 24v-4h-4v4h4zM4 16v4h4v-4h-4zM20 28h4v-4h-4v4zM24 12v4h4v-12h-4v4h-4v4h4zM20 16v-4h-4v-4h4v-4h-12v4h-4v4h4v4h4v4h4v4h4v-4h4v-4h-4z">
                                </path>
                                </g>
                            </svg></div>
                        <div class="card-desc">
                            <div class="title">{{ cards[0].title }}</div>
                            <div class="text">{{ cards[0].text }}</div>
                        </div>
                    </div>

                    <!-- 项目开发卡片 -->
                    <div class="card">
                        <div class="icon"><svg fill="#000000" viewBox="0 0 24 24" version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <title>atom</title>
                                <g transform="scale(0.75)">
                                <path
                                    d="M24.687 16.037c2.293 2.473 3.32 4.906 2.429 6.466-0.889 1.556-3.481 1.877-6.738 1.114-0.975 3.259-2.554 5.387-4.341 5.387-1.789 0-3.367-2.135-4.34-5.403-3.293 0.785-5.916 0.47-6.812-1.098-0.891-1.56 0.137-3.996 2.43-6.472-2.337-2.496-3.389-4.96-2.49-6.532 0.9-1.576 3.548-1.887 6.864-1.087 0.974-3.275 2.558-5.416 4.349-5.416 1.79 0 3.369 2.134 4.342 5.401 3.285-0.78 5.904-0.464 6.799 1.102 0.896 1.573-0.157 4.039-2.492 6.538zM5.752 10.041c-0.688 1.204 0.261 3.178 2.27 5.265 0.819-0.799 1.762-1.592 2.812-2.354 0.128-1.266 0.323-2.467 0.59-3.56-2.807-0.721-4.981-0.56-5.672 0.649zM10.721 14.361c-0.72 0.548-1.377 1.104-1.966 1.659 0.597 0.558 1.241 1.118 1.97 1.67-0.030-0.555-0.051-1.116-0.051-1.69 0-0.556 0.018-1.102 0.047-1.639zM10.833 19.094c-1.051-0.759-1.991-1.55-2.813-2.346-1.973 2.068-2.889 4.019-2.207 5.213 0.687 1.201 2.838 1.368 5.62 0.662-0.267-1.087-0.473-2.269-0.6-3.529zM20.089 19.835c-0.446 0.293-0.902 0.581-1.377 0.858-0.482 0.281-0.964 0.539-1.444 0.785 0.823 0.35 1.628 0.655 2.392 0.889 0.179-0.784 0.318-1.639 0.429-2.532zM16.036 27.92c1.369 0 2.584-1.785 3.37-4.557-1.085-0.312-2.231-0.746-3.399-1.274-1.147 0.521-2.269 0.94-3.337 1.253 0.784 2.779 1.997 4.578 3.366 4.578zM12.423 22.342c0.742-0.231 1.518-0.518 2.316-0.858-0.482-0.247-0.967-0.508-1.451-0.79-0.449-0.263-0.881-0.533-1.304-0.81 0.109 0.877 0.264 1.686 0.439 2.458zM11.986 12.156c0.441-0.289 0.893-0.573 1.362-0.848 0.463-0.271 0.926-0.52 1.388-0.758-0.801-0.342-1.585-0.644-2.331-0.877-0.174 0.77-0.309 1.609-0.419 2.483zM16.036 4.080c-1.373 0-2.594 1.802-3.379 4.594 1.067 0.314 2.191 0.745 3.336 1.267 1.172-0.537 2.318-0.966 3.409-1.284-0.784-2.777-1.996-4.577-3.366-4.577zM19.651 9.655c-0.768 0.239-1.57 0.535-2.398 0.891 0.465 0.239 0.932 0.49 1.398 0.763 0.502 0.293 0.982 0.598 1.451 0.908-0.11-0.915-0.269-1.76-0.451-2.562zM20.24 13.604c-0.67-0.466-1.378-0.921-2.126-1.356-0.716-0.418-1.426-0.783-2.128-1.124-0.693 0.338-1.396 0.713-2.101 1.124-0.713 0.415-1.394 0.849-2.035 1.291-0.062 0.797-0.104 1.613-0.104 2.462 0 0.858 0.035 1.693 0.097 2.499 0.627 0.431 1.289 0.852 1.981 1.256 0.736 0.429 1.466 0.804 2.188 1.152 0.713-0.346 1.437-0.729 2.162-1.152 0.719-0.419 1.402-0.855 2.049-1.302 0.061-0.794 0.104-1.607 0.104-2.453 0-0.822-0.030-1.623-0.087-2.397zM26.187 21.961c0.682-1.192-0.242-3.14-2.211-5.203-0.801 0.774-1.718 1.542-2.736 2.281-0.128 1.282-0.326 2.499-0.598 3.604 2.746 0.685 4.865 0.508 5.545-0.682zM21.353 17.63c0.689-0.526 1.321-1.060 1.891-1.591-0.572-0.54-1.189-1.083-1.887-1.618 0.025 0.519 0.043 1.044 0.043 1.579-0.001 0.554-0.019 1.096-0.047 1.63zM26.247 10.041c-0.686-1.199-2.83-1.369-5.605-0.666 0.273 1.118 0.484 2.339 0.61 3.641 1.019 0.745 1.93 1.52 2.728 2.299 2.013-2.091 2.957-4.068 2.267-5.274zM16.2 18.062c-1.177 0-2.131-0.963-2.131-2.152s0.954-2.152 2.131-2.152c1.176 0 2.13 0.964 2.13 2.152 0 1.19-0.954 2.152-2.13 2.152z">
                                </path>
                                </g>
                            </svg></div>
                        <div class="card-desc">
                            <div class="title">{{ cards[1].title }}</div>
                            <div class="text">{{ cards[1].text }}</div>
                        </div>
                    </div>

                    <!-- AI & 大模型卡片 -->
                    <div class="card">
                        <div class="icon"><svg fill="#000000" viewBox="0 0 24 24" version="1.1"
                                xmlns="http://www.w3.org/2000/svg">
                                <g transform="scale(0.25)">
                                    <g>
                                        <path d="M93.918,45.833L69.799,21.714c-0.75-0.75-2.077-0.75-2.827,0l-5.229,5.229c-0.781,0.781-0.781,2.047,0,2.828
			l17.477,17.475L61.744,64.724c-0.781,0.781-0.781,2.047,0,2.828l5.229,5.229c0.375,0.375,0.884,0.587,1.414,0.587
			c0.529,0,1.039-0.212,1.414-0.587l24.117-24.118C94.699,47.881,94.699,46.614,93.918,45.833z" />
                                        <path d="M32.759,64.724L15.285,47.248l17.477-17.475c0.375-0.375,0.586-0.883,0.586-1.414c0-0.53-0.21-1.039-0.586-1.414
			l-5.229-5.229c-0.375-0.375-0.884-0.586-1.414-0.586c-0.53,0-1.039,0.211-1.414,0.586L0.585,45.833
			c-0.781,0.781-0.781,2.047,0,2.829L24.704,72.78c0.375,0.375,0.884,0.587,1.414,0.587c0.53,0,1.039-0.212,1.414-0.587l5.229-5.229
			C33.542,66.771,33.542,65.505,32.759,64.724z" />
                                        <path d="M60.967,13.6c-0.254-0.466-0.682-0.812-1.19-0.962l-4.239-1.251c-1.058-0.314-2.172,0.293-2.484,1.352L33.375,79.382
			c-0.15,0.509-0.092,1.056,0.161,1.521c0.253,0.467,0.682,0.812,1.19,0.963l4.239,1.251c0.189,0.056,0.38,0.083,0.567,0.083
			c0.863,0,1.66-0.564,1.917-1.435l19.679-66.644C61.278,14.612,61.221,14.065,60.967,13.6z" />
                                    </g>
                                </g>
                            </svg></div>
                        <div class="card-desc">
                            <div class="title">{{ cards[2].title }}</div>
                            <div class="text">{{ cards[2].text }}</div>
                        </div>
                    </div>

                    <!-- 网络安全卡片 -->
                    <div class="card">
                        <div class="icon"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g transform="scale(1)">
                                    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
                                        stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                                        stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M15 3C15.97 5.92 16.46 8.96 16.46 12" stroke="#292D32" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46" stroke="#292D32" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#292D32"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                        d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M22 22L21 21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </g>
                            </svg></div>
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
        text: 'LeetCode,CCPC,蓝桥杯系统训练......'
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
    padding-bottom: 6rem;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    border-bottom: 1px solid #dfdfdf
}

.icon {
    width: 8rem;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.icon svg {
    width: 100%;
    height: 100%;
    padding: 1rem;
    box-sizing: border-box;
    object-fit: contain;
}

.card-desc {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
