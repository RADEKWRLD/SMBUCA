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
    transition: transform 0.3s, box-shadow 0.3s;
}

.card-container:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.card-content {
    padding: 20px;
    text-align: center;
}
</style>