<template>
  <div class="friend-page">
    <h1>友情链接</h1>
    <div class="friend-links">
      <!-- 这里可以添加你的友情链接 -->
      <div class="friend-link">
        <img src="https://placeholder.co/100" alt="Friend Site" />
        <div class="friend-info">
          <h3>示例网站</h3>
          <p>示例网站描述</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 如果需要可以在这里添加逻辑
</script>

<style scoped>
.friend-page {
  padding: 120px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

.friend-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}

.friend-link {
  display: flex;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.friend-link:hover {
  transform: translateY(-5px);
}

.friend-link img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
}

.friend-info {
  flex: 1;
}

.friend-info h3 {
  margin: 0 0 5px 0;
  font-size: 1.2rem;
}

.friend-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>
