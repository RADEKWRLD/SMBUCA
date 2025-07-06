<template>
    <div class="fifth-container">
        <div class="fifth-content">
            <div class="fifth-content-title">
                <h2>「SMBUCA Lab」</h2>
            </div>
            <div class="works-showcase" ref="showcaseRef">
                <div class="works-container">
                    <div class="work-item" v-for="(work, index) in works" :key="index">
                        <img :src="work.image" :alt="work.title">
                        <h3>{{ work.title }}</h3>
                        <p>{{ work.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    const worksContainer = showcase.querySelector('.works-container');
    
    const totalScroll = worksContainer.scrollWidth - showcase.offsetWidth;
    
    gsap.to(worksContainer, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
            trigger: showcase,
            start: "top top",
            end: `+=${totalScroll}`,
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
    position: absolute;
    height: 100%;
    will-change: transform;
}

.work-item {
    flex: 0 0 auto;
    width: 60vw;
    height: 100%;
    padding: 2rem;
    margin-right: 4rem;
    background: #f5f5f5;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
}

.work-item img {
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 0.5rem;
}

.work-item h3 {
    margin: 1rem 0;
    font-size: 1.5rem;
    font-weight: bold;
}

.work-item p {
    font-size: 1rem;
    line-height: 1.5;
    color: #666;
}

.works-container {
    padding-left: 8vw;
}
</style>
