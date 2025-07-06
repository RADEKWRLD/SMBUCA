<template>
    <div class="second-container">
        <div class="second-content">
            <div class="second-content-title">
                <h2>「About Us」</h2>
            </div>
            <div class="second-content-text">
                <p>欢迎来到SMBUCA的世界!</p>
                <p>我们是一个由一群热爱技术、脑洞大开的同学组成的计算机社团,在这里,编程不再枯燥,灵感随时闪现!</p>
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
}

.second-content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 8vw;
    padding-top: 12vh;
}

.second-content-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
}

.second-content-title h2 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2vh;
    letter-spacing: 0.05em;
}

.second-content-text {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    justify-content: left;
    padding-left: 0vw;
    font-size: 5rem;
    font-weight: lighter;
    line-height: 1.5;
}
</style>
