<template>
    <div class="fifth-container">
        <!-- 添加空白区域制造滚动空间 -->
        <div class="empty">KEEP SCROLL</div>
        <div class="empty">KEEP SCROLL</div>
        
        <!-- 修改为匹配原始结构 -->
        <div class="wrapper">
            <div class="container">
                <div class="wrap-cards">
                    <div class="wrap-card" v-for="i in 5" :key="i">
                        <div class="wrap-card-title">
                            <h3>「SMBUCA Lab」</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="empty">KEEP SCROLL</div>
        <div class="empty">KEEP SCROLL</div>
    </div>
</template>

<style scoped>
/* 添加空白区域样式 */
.empty {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80rem;
    margin: 10rem 0;
    background-color: #f7f7f7;
}

/* 修改容器样式以匹配原始实现 */
.wrapper {
    position: relative;
    width: 100%;
}

.container {
    position: sticky;
    top: 0;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.wrap-cards {
    display: flex;
}

.wrap-card {
    justify-content: center;
    align-items: center;
    width: 70rem;
    height: 50rem;
    background-color: #f7f7f7;
    margin-right: 50rem;
    flex-shrink: 0;
}

/* 移除不需要的样式 */
.fifth-container {
    width: 100%;
}
</style>

<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref, nextTick } from 'vue';

gsap.registerPlugin(ScrollTrigger);

const scrollbox = {
    wrapper: null,
    cardsbox: null,
    distance: 0,
    if_leave: false,
    init() {
        // 修改选择器以匹配新的结构
        this.wrapper = document.querySelector('.wrapper');
        this.cardsbox = document.querySelector('.wrap-cards');
        
        if (!this.wrapper || !this.cardsbox) {
            console.error('Required elements not found');
            return;
        }

        this.resize();
        window.addEventListener("resize", this.resize.bind(this));
        this.create_scrolltrigger();
    },
    create_scrolltrigger() {
        ScrollTrigger.create({
            trigger: this.wrapper,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                this.cardsbox.style.transform = `translateX(-${self.progress * this.distance}px)`;
            },
            onLeave: () => {
                this.if_leave = true;
            },
            onEnterBack: () => {
                this.if_leave = false;
            }
        });
    },
    resize() {
        if (!this.wrapper || !this.cardsbox) return;
        
        this.distance = this.cardsbox.offsetWidth - window.innerWidth;
        this.wrapper.style.height = `${this.distance}px`;
        if (this.if_leave) this.cardsbox.style.transform = `translateX(-${this.distance}px)`;
    }
}

onMounted(() => {
    nextTick(() => {
        scrollbox.init();
    });
});
</script>
