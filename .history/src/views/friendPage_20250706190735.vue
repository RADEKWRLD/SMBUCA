<template>
  <div class="friend-page">
    <h1>友情链接</h1>
    <div class="friend-links">
      <div class="friend-card">
        <img src="/logo.png" alt="Friend Avatar" class="friend-avatar">
        <div class="friend-info">
          <h3>深圳北理莫斯科大学官网</h3>
          <a href="https://www.smbu.edu.cn/index.htm" target="_blank">访问</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  color: #333;
}

.friend-links {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.friend-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease;
}

.friend-card:hover {
  transform: translateY(-5px);
}

.friend-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.friend-info {
  flex: 1;
}

.friend-info h3 {
  margin: 0 0 5px;
  color: #333;
}

.friend-info a {
  display: inline-block;
  padding: 5px 15px;
  background: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 0.9rem;
  transition: background 0.3s ease;
}

.friend-info a:hover {
  background: #555;
}
</style>
