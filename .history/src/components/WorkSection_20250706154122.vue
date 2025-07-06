<template>
  <section class="work-section" ref="sectionRef">
    <div class="work-outer">
      <div class="work-inner" ref="containerRef">
        <h2 class="work-title">
          <span class="work-title-inner" ref="titleRef">
            <span class="work-title-letter" v-for="letter in 'WORK'" :key="letter">{{ letter }}</span>
          </span>
        </h2>

        <div class="work-scene" ref="sceneRef">
          <div 
            v-for="(work, index) in works" 
            :key="index"
            class="work-item"
            :style="{
              '--size': 0.5 + Math.random() * 0.5,
              '--y': (0.5 + Math.random() * 0.5) * (index % 2 ? -1 : 1)
            }"
          >
            <video 
              :data-src="work.src"
              muted 
              loop 
              playsinline
              :poster="work.poster"
            ></video>
            <div class="work-item-caption">{{ work.caption }}</div>
          </div>
        </div>

        <canvas class="work-canvas" ref="canvasRef"></canvas>
      </div>

      <div class="work-mask-outer">
        <div class="work-mask" ref="maskRef">
          <svg class="work-mask-svg" ref="maskSvgRef">
            <path class="work-mask-path-inner" ref="maskPathInnerRef" d=""></path>
            <path class="work-mask-path-outer" ref="maskPathOuterRef" d=""></path>
            <path class="work-mask-path-lines" ref="maskPathLinesRef" d=""></path>
          </svg>
        </div>
      </div>

      <div class="work-ruler" ref="rulerRef"></div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Refs
const sectionRef = ref(null)
const containerRef = ref(null)
const titleRef = ref(null)
const sceneRef = ref(null)
const canvasRef = ref(null)
const maskRef = ref(null)
const maskSvgRef = ref(null)
const maskPathInnerRef = ref(null)
const maskPathOuterRef = ref(null)
const maskPathLinesRef = ref(null)
const rulerRef = ref(null)

// State
const points = ref([])
const letters = ref([])
const works = ref([
  {
    caption: 'Project 1',
    src: '/videos/project1.mp4',
    poster: '/images/project1.jpg'
  },
  // Add more works here
])

let ctx
let animationProgress = 0
let pointsProgress = 0
let scrollProgress = 0
let smoothScrollProgress = 0
let isPaused = true
let animationFrame = null

// Methods
const setSize = () => {
  const section = sectionRef.value
  const container = containerRef.value
  if (!section || !container) return

  section.style.setProperty('--height', `${works.value.length * 50}vh`)

  const bounding = container.getBoundingClientRect()
  const canvas = canvasRef.value
  
  if (canvas) {
    canvas.width = bounding.width
    canvas.height = bounding.height
  }
}

const setPoints = () => {
  const container = containerRef.value
  if (!container) return

  const bounding = container.getBoundingClientRect()
  const gap = 24
  const cols = Math.ceil((bounding.width * 1.2) / gap)
  const rows = Math.ceil((bounding.height * 1.2) / gap)

  const offsetX = (bounding.width - cols * gap) * 0.5
  const offsetY = (bounding.height - rows * gap) * 0.5

  const hWidth = bounding.width * 0.5
  const hHeight = bounding.height * 0.5

  points.value = []

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * gap + offsetX
      const y = j * gap + offsetY

      const dx = hWidth - x
      const dy = hHeight - y

      points.value.push({
        x,
        y,
        dx,
        dy,
        m: Math.random(),
        flowX: 0
      })
    }
  }
}

const drawPoints = () => {
  const canvas = canvasRef.value
  if (!canvas || !ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()

  points.value.forEach(point => {
    const x = point.x + point.dx * (1 - pointsProgress) * 0.2 + point.flowX
    const y = point.y + point.dy * (1 - pointsProgress) * 0.2

    ctx.rect(x, y, 0.5, 0.5)
  })

  ctx.stroke()
}

const animate = () => {
  if (isPaused) return

  // Update scroll progress
  const section = sectionRef.value
  if (section) {
    scrollProgress = Math.max(
      Math.min(1, ScrollTrigger.positionInViewport(section, 'top')),
      0
    ) * -1 + (1 - Math.max(
      Math.min(1, ScrollTrigger.positionInViewport(section, 'bottom')),
      0
    ))
    
    smoothScrollProgress += (scrollProgress - smoothScrollProgress) * 0.1
    section.style.setProperty('--scroll-progress', String(smoothScrollProgress))
  }

  // Update points
  points.value.forEach(p => {
    p.flowX = (animationProgress * -0.05) % 24
  })

  drawPoints()
  animationFrame = requestAnimationFrame(animate)
}

const initAnimation = () => {
  const section = sectionRef.value
  const container = containerRef.value
  const scene = sceneRef.value
  const mask = maskRef.value
  
  if (!section || !container || !scene || !mask) return

  gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 25%',
      end: 'bottom 75%',
      scrub: 1
    }
  })
  .fromTo(mask, 
    { scale: 1 },
    { scale: 4, duration: 0.75, ease: 'power4.in' }
  )
  .fromTo(scene,
    { scale: 0.75 },
    { scale: 1, duration: 0.75, ease: 'power3.in' },
    0
  )
  .fromTo(container,
    { clipPath: 'inset(0 1rem)' },
    { clipPath: 'inset(0 0rem)', duration: 0.75, ease: 'power3.in' },
    0
  )
}

// Lifecycle
onMounted(() => {
  ctx = canvasRef.value?.getContext('2d')
  if (ctx) {
    ctx.strokeStyle = getComputedStyle(sectionRef.value).getPropertyValue('--color-primary')
  }

  setSize()
  setPoints()
  initAnimation()
  animate()

  window.addEventListener('resize', () => {
    setSize()
    setPoints()
  })
})

onUnmounted(() => {
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<style lang="scss" scoped>
.work-section {
  --height: 100vh;
  --color-primary: #000;
  --color-secondary: #fff;

  position: relative;
  z-index: 2;
  height: var(--height);
  background: var(--color-primary);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 1px;
    background: var(--color-secondary);
  }
}

.work-outer {
  position: relative;
  height: var(--height);
  clip-path: inset(0 -1rem);
}

.work-inner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-secondary);
  color: var(--color-primary);
  transform: translate3d(0, calc(var(--scroll-progress) * -15%), 0);
  will-change: clip-path, transform;
}

.work-title {
  font-size: min(18.75rem, 25vh);
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  width: 0.7em;
  opacity: 0;
  word-break: break-all;

  &-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0.075em 0 -0.125em;
    line-height: 0.85;
  }

  &-letter {
    line-height: 0.85;
  }
}

.work-scene {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  perspective: 40rem;
  will-change: transform;
}

.work-item {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: rotateY(calc(var(--progress, 0) * -20deg))
    translate3d(
      calc(var(--progress, 0) * (50vw + 100%) - 50%),
      calc(var(--y, 0) * 50% - 50%),
      calc(var(--progress, 0) * var(--progress, 0) * -5rem)
    )
    scale(var(--size, 1));
  will-change: transform;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &-caption {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: var(--color-secondary);
    font-size: 1rem;
  }
}

.work-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: translate3d(0, calc(var(--scroll-progress) * -5%), 0);
}

.work-mask {
  &-outer {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
  }

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: scale, transform;

  &-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &-path {
    &-outer,
    &-inner {
      fill: var(--color-primary);
      fill-rule: evenodd;
      stroke: var(--color-secondary);
      stroke-width: 1px;
    }

    &-inner {
      transform: translate3d(0, calc(var(--scroll-progress) * 48px), 0);
      will-change: transform;
    }

    &-lines {
      fill: none;
      stroke: var(--color-secondary);
      stroke-width: 1px;
    }
  }
}

.work-ruler {
  --width: min(16.6667%, 19.625rem);
  position: absolute;
  top: 10vh;
  left: calc(50% - var(--width) / 2);
  width: var(--width);
  height: 80vh;
  pointer-events: none;

  @media (max-width: 1024px) {
    --width: 33.3333%;
  }

  @media (max-width: 768px) {
    --width: 50%;
  }
}

@media (max-width: 768px) {
  .work-inner,
  .work-canvas {
    transform: none;
  }
}
</style> 