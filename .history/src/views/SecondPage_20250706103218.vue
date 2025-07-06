<template>
    <div class="second-container">
        <div class="second-content">
            <div class="second-content-title">
                <h2>{ 我们是谁/About Us }</h2>
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
    justify-content: flex-start;
    align-items: flex-start;
}

.second-content-title {
    padding-top: 18vh;
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: left;
    padding-left: 10vw;
}
.second-content-title h2 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.2;
    vertical-align: middle;
    font-family: '微软雅黑', 'Arial', sans-serif;
}
</style>
