<template>
    <div class="card-container">
        <div class="card-content">
            <slot name="title"></slot>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.card-container {
    width: 20vw;
    height: 70vh;
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s ease;
    position: relative;
    overflow: hidden;
}

.card-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background: #ff5733;
    transform: skewX(-25deg);
    transition: left 0.6s ease;
    z-index: 1;
}

.card-container:hover {
    transform: translateY(-30px) rotate(2deg);
    box-shadow: 0 20px 40px #ff58331a;
}

.card-container:hover::before {
    left: 100%;
}

.card-content {
    padding: 20px;
    text-align: center;
    position: relative;
    z-index: 2;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-content h3 {
    margin: 15px 0;
    font-size: 24px;
    color: #333;
    transition: color 0.6s ease;
}

.card-content p {
    margin: 0;
    color: #666;
    font-size: 14px;
    line-height: 1.7;
}

.card-container:hover .card-content h3 {
    color: #ff007f;
}
</style>