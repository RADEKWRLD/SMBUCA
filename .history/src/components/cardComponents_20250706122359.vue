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
    width: 15vw;
    height: 60vh;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>