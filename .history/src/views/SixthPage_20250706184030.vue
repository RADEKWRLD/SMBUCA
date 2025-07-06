<template>
    <div class="sixth-container">
        <div class="sixth-content">
            <div class="sixth-content-title">
                <h2>「Contact Us」</h2>
            </div>
            <div class="contact-us-container">
                <form class="contact-form" @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" v-model="formData.name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="formData.email" required>
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" id="subject" v-model="formData.subject" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" v-model="formData.message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import { onMounted, reactive } from 'vue';

const formData = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
};

onMounted(() => {
    gsap.from('.contact-form', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
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
    padding: 2rem 8vw;
}

.contact-form {
    width: 100%;
    max-width: 600px;
    background: #ffffff;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #666;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #666;
}

.submit-btn {
    width: 100%;
    padding: 1rem;
    background: #000;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background: #333;
}

@media (max-width: 768px) {
    .contact-form {
        padding: 1.5rem;
    }
}
</style>
