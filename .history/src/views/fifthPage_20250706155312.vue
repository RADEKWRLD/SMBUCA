<template>
    <div class="fifth-container">
        <div class="fifth-content">
            <div class="fifth-content-title">
                <h2>「SMBUCA Lab」</h2>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const showcaseRef = ref(null);

const works = ref([
    {
        title: '作品 1',
        description: '作品描述 1',
        image: '/path/to/image1.jpg'
    },
    {
        title: '作品 2',
        description: '作品描述 2',
        image: '/path/to/image2.jpg'
    },
    {
        title: '作品 3',
        description: '作品描述 3',
        image: '/path/to/image3.jpg'
    },
]);

onMounted(() => {
    const showcase = showcaseRef.value;
    
    const totalWidth = showcase.scrollWidth - showcase.clientWidth;
    
    gsap.to('.works-container', {
        x: -totalWidth,
        ease: 'none',
        scrollTrigger: {
            trigger: showcase,
            start: 'top top',
            end: `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        }
    });
});
</script>

<style scoped>
/*第五页面样式 */
.fifth-container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    padding-bottom: 3rem;
    border-bottom: 1px solid #d5d5d5;
}

.fifth-content {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 15vh;
}

.fifth-content-title {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: left;
}

.fifth-content-title h2 {
    padding-left: 8vw;
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 2vh;
    letter-spacing: 0.05em;
}

.fifth-content-text {
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

.works-showcase {
    width: 100%;
    height: 70vh;
    overflow: hidden;
    position: relative;
    margin-top: 5vh;
}

.works-container {
    display: flex;
    gap: 2rem;
    padding: 0 8vw;
    height: 100%;
}

.work-item {
    min-width: 40vw;
    height: 100%;
    background: #f5f5f5;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.work-item img {
    width: 100%;
    height: 60%;
    object-fit: cover;
}

.work-item h3 {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.work-item p {
    padding: 0 1rem 1rem;
    font-size: 1rem;
    color: #666;
}
</style>
