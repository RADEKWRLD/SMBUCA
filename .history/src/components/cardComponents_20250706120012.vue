<template>
    <div class="card-container">
        <div class="single-card">
            <div class="card">
                <div class="content">
                    <slot name="image"></slot>
                    <div>
                        <slot name="heading"></slot>
                        <slot name="description"></slot>
                        <slot name="link"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// No additional script needed for this simple component
</script>

<style scoped>
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
}
.single-card {
    position: relative;
    flex: 1 1 300px;
    max-width: 320px;
}
.card {
    position: relative;
    width: 100%;
    height: 450px;
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.6s ease;
    cursor: pointer;
}
.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background:#ff5733;
    transform: skewX(-25deg);
    transition: left 0.6s ease;
    z-index: 1;
}
h2 {
    margin: 15px 0;
    font-size: 24px;
    color: #333;
    transition: color 0.6s ease;
}
p {
    margin: 0;
    color: #666;
    font-size: 14px;
    line-height: 1.7;
}
.card:hover {
    transform: translateY(-30px) rotate(2deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
.card:hover::before {
    left: 100%;
}
.content {
    padding: 20px;
    text-align: center;
    position: relative;
    z-index: 2;
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    transition: transform 0.6s ease;
}
.card:hover .card-image {
    transform: scale(1.05);
}
.card a {
    text-decoration: none;
    display: inline-block;
    background: #262626;
    margin-top: 15px;
    padding: 10px 30px;
    color: #fff;
    border-radius: 50px;
}
.card:hover a {
    background: #ff5733;
}
@media (max-width: 768px) {
    .single-card {
        flex: 1 1 100%;
        max-width: 400px;
    }
}
</style>
