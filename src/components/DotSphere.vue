<template>
    <div class="dot-sphere" ref="container"></div>
</template>

<script setup>
import { onMounted,ref } from 'vue';
import * as THREE from 'three';

const container = ref(null);

const init = () => {
    // 创建场景
    const scene = new THREE.Scene();

    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 1.3;
    camera.position.x = -0.8;
    camera.position.y = 0.5;

    //创建渲染器
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true,
        antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // 将渲染器的 DOM 元素添加到容器中
    container.value.appendChild(renderer.domElement);

    // 创建球形几何体
    const geometry = new THREE.SphereGeometry(1, 60, 32);
    const material = new THREE.PointsMaterial({
        color: 0x888888,
        size: 0.01,
    });

    // 创建点云
    const pointCloud = new THREE.Points(geometry, material);
    pointCloud.position.set(0, 0, 0);
    scene.add(pointCloud);

    // 添加外层装饰环
    const ring1Geometry = new THREE.TorusGeometry(1.5, 0.02, 16, 100);
    const ring1Material = new THREE.MeshBasicMaterial({
        color: 0x87CEFA,
        transparent: true,
        opacity: 0.3
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.rotation.x = Math.PI / 4;
    ring1.scale.set(1.2,1.2,1.2);
    ring1.position.set(0,0,0);

    // 添加第二个倾斜的装饰环
    const ring2Geometry = new THREE.TorusGeometry(1.5, 0.02, 16, 100);
    const ring2Material = new THREE.MeshBasicMaterial({
        color: 0xFFB6C1,
        transparent: true,
        opacity: 0.3
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    ring2.scale.set(1.2,1.2,1.2);
    ring2.position.set(0,0,0);

    // 添加随机漂浮的小点
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 50;
    const positions = new Float32Array(particlesCount * 3);
    const particleSpeeds = [];

    for(let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 5;
        positions[i + 1] = (Math.random() - 0.5) * 5;
        positions[i + 2] = (Math.random() - 0.5) * 5;
        particleSpeeds.push({
            x: (Math.random() - 0.5) * 0.01,
            y: (Math.random() - 0.5) * 0.01,
            z: (Math.random() - 0.5) * 0.01
        });
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        color: 0xAAAAAA,
        size: 0.02,
        transparent: true,
        opacity: 0.7
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);

    scene.add(pointCloud);
    scene.add(ring1);
    scene.add(ring2);
    scene.add(particles);

    // 创建动画
    const animate = () => {
        requestAnimationFrame(animate);

        // 主球旋转
        pointCloud.rotation.y += 0.001;
        
        // 装饰环旋转
        ring1.rotation.y += 0.002;  // 增加旋转速度
        ring1.rotation.x += 0.002;
        ring2.rotation.y -= 0.002; // 增加反向旋转速度
        ring2.rotation.x -= 0.002;

         // 更新漂浮粒子位置
         const positions = particles.geometry.attributes.position.array;
        for(let i = 0; i < positions.length; i += 3) {
            positions[i] += particleSpeeds[i/3].x;
            positions[i + 1] += particleSpeeds[i/3].y;
            positions[i + 2] += particleSpeeds[i/3].z;

            // 如果粒子飘得太远，将其重置回原点附近
            if(Math.abs(positions[i]) > 3) positions[i] = (Math.random() - 0.5) * 2;
            if(Math.abs(positions[i + 1]) > 3) positions[i + 1] = (Math.random() - 0.5) * 2;
            if(Math.abs(positions[i + 2]) > 3) positions[i + 2] = (Math.random() - 0.5) * 2;
        }
        particles.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    };
    animate();

    // 处理窗口大小变化
    const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // 返回清理函数
    return () => {
        window.removeEventListener('resize', handleResize);
        if (container.value && renderer.domElement) {
            container.value.removeChild(renderer.domElement);
        }
        geometry.dispose();
        material.dispose();
    };
}

onMounted(() => {
    init();
});
</script>

<style scoped>
.dot-sphere {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
</style>

