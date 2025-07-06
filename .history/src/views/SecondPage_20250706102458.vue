<template>
    <div class="second-container">
        <div class="second-content">
            <div class="second-content-title">
                <h2>我们是谁/About Us</h2>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
/*第二页面样式 */
.second-container {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    background: radial-gradient(circle, #dcdcdc 20%, transparent 50%); /* 添加点阵纹理 */
    background-size: 200px 200px; /* 设置背景大小，控制点阵的密度 */
    animation: pulse 3s infinite; /* 添加动画 */
}

@keyframes pulse {
    0% {
        background-size: 200px 200px; /* 初始大小 */
    }
    50% {
        background-size: 300px 300px; /* 中间大小，辐射状放大 */
    }
    100% {
        background-size: 200px 200px; /* 结束大小 */
    }
}

.second-content {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.second-content-title {
    padding-top: 18vh;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
}
.second-content-title h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
}
</style>
