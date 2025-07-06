<template>
    <div class="second-container">
        <div class="second-content">
            <div class="second-content-title">
                <h2>「About Us」</h2>
            </div>
            <div class="second-content-text">
                <p>欢迎来到SMBUCA的世界!我们是一个由一群热爱技术、脑洞大开的同学组成的计算机社团,在这里!编程不再枯燥,灵感随时闪现!</p>
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.second-content-title {
    padding-top: 18vh;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
    padding-left: 10vw;
}

.second-content-title h2 {
    text-align: left;
    font-size: 2rem;
    font-weight: bold;
}

.second-content-text {
    width: 100%;
    padding-left: 10vw;
    margin-top: 2vh;
}
</style>
