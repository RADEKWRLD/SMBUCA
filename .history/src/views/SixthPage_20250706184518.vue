<template>
    <div class="sixth-container">
        <div class="sixth-content">
            <div class="sixth-content-title">
                <h2>「Contact Us」</h2>
            </div>
            <div class="contact-us-container">
                <div class="contact-card">
                    <div class="card-icon">
                        <i class="fab fa-github"></i>
                    </div>
                    <h3>加入我们的社区</h3>
                    <p>对我们的项目有任何疑问或建议?加入我们的GitHub讨论!</p>
                    <a href="https://github.com/RADEKWRLD/SMBUCA/discussions" target="_blank" class="contact-button">
                        Join
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
    gsap.from('.contact-card', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});
</script>

<style scoped>
/*第六页面样式 */
.sixth-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    padding-bottom: 3rem;
    border-bottom: 1px solid #d5d5d5;
}

.sixth-content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 15vh;
}

.sixth-content-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
}

.sixth-content-title h2 {
    padding-left: 8vw;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2vh;
    letter-spacing: 0.05em;
}

.sixth-content-text {
    width: 90%;
    padding-left: 8vw;
    height: auto;
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
    justify-content: flex-start;
    font-size: 5rem;
    font-weight: lighter;
    line-height: 1.5;
}

.contact-us-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem 0;
}

.contact-card {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 90%;
    transition: transform 0.3s ease;
}

.contact-card:hover {
    transform: translateY(-5px);
}

.card-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    color: #333;
}

.contact-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
}

.contact-card p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.contact-button {
    display: inline-block;
    padding: 1.5rem 2rem;
    background: #ff6d4d;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    transition: background 0.3s ease;
}

.contact-button:hover {
    background: #ff5733;
}
</style>
