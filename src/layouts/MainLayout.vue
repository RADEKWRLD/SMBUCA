<template>
  <nav class="navbar">
    <div class="navContent">
      <span class="nav-title">S M B U C A</span>
    </div>

    <div class="navRight">
      <ul>
        <li>
          <button @click="$router.push('/')">
            <div class="li-content">首页</div>
          </button>
        </li>
        <li>
          <button @click="$router.push('/friend')">
            <div class="li-content">友链</div>
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <!-- 路由出口 -->
  <router-view></router-view>

  <footer>
    <div class="footer-content">
      <p class="designer-credit">Designed & Developed by RADEKWRLD</p>
      <p class="copyright">© 2025 SMBU Computer Association. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
}

.navContent {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-title {
  padding-left: 10rem;
}

.navRight {
  padding-right: 5rem;
}

/* 添加移动端响应式支持 */
@media screen and (max-width: 600px) {
  .navbar {
    padding: 10px;
    height: 80px;
  }

  .nav-title {
    padding-left: 1rem;
  }

  .navRight {
    padding-right: 1rem;
  }

  ul {
    gap: 0.5rem;
  }

  button {
    width: 4rem;
    padding: 6px 12px;
  }

  .li-content {
    font-size: 1rem;
  }
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

/* 底部样式 */
footer {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-top: 1px solid #e0e0e0;
  padding: 20px 0;
  width: 100%;
  position: relative;
  z-index: 2;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;
}

.footer-content .designer-credit {
  margin: 0 0 8px 0;
  color: #333;
  font-size: 0.95rem;
  font-weight: 500;
}

.footer-content .copyright {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style> 