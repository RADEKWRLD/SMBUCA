<template>
  <nav class="navbar">
    <div class="navContent">
      <h1>S M B U C A</h1>
    </div>

    <div class="navRight">
        <ul>
          <li>
            <button>
              <div class="li-content">首页</div>
            </button>
          </li>
          <li>
              <button>
              <div class="li-content">友链</div>
              </button>
          </li>
        </ul>
      </div>
  </nav>

  <DotSphere class="background-sphere"/>


  <div class="main-container">
    <div class="main-content">
      <div class="main-content-text">
        <h1>W E L C O M E</h1>
        <p>深圳北理莫斯科计算机协会</p>
      </div>
    </div>
  </div>


  <div class="second-container">
    <div class="second-content">
      <p>关于我们</p>
    </div>
  </div>
</template>


<script setup>
import DotSphere from '@/components/DotSphere.vue';
</script>


<style scoped>
.navbar {
  /*固定顶部 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  /**基础样式 */
  background-color: rgba(255, 255, 255, 0.8);
  /* 半透明白色背景 */
  backdrop-filter: blur(8px);
  /* 背景模糊效果 */
  -webkit-backdrop-filter: blur(8px);
  /* Safari 兼容 */
  padding: 10px 20px;
  /* 内边距 */
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  /* 固定高度 */
}

.navContent {
  display: flex;
  align-items: center;
  height: 100%;
}


h1 {
  padding-left: 10rem;
}

.navRight {
  padding-right: 5rem;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

.li-content {
  font-size: 1.2rem;
  font-weight: bold;
}

button {
  width: 6rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  transition: all 0.3s ease;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

/* 背景球 */
.background-sphere {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* 主容器 */
.main-container {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
}

/**第一页面样式 */
.main-content {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 40vh;
}


.main-content-text {
  position: relative;
  z-index: 2;
  text-align: left;
  color: #000;
  margin-left: 10vw;
}

.main-content-text h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
  padding: 0;
}

.main-content-text p {
  font-size: 2rem;
  margin-top: 1rem;
}

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
  padding-top: 40vh;
}
</style>
