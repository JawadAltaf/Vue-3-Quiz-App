<script setup>
    import { defineProps } from 'vue';

    const {question} = defineProps(['question']);
</script>

<template>
    <div>
        <div class="question-container">
            <h1 class="question">
                {{ question.text }}
            </h1>
        </div>

        <div class="options-contanier">
            <div v-for="option in question.options" :key="option.id" class="option">
                <p class="option-label">{{ option.label }}</p>
                <div class="option-value">
                    <p>{{ option.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.question-container{
    margin-top: 20px;
}
.question{
    font-size: 30px;
    margin-bottom: 20px;
    color: black;
}
.option{
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}
.option-label{
    color: black;
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value{
    background-color: rgb(244,239,239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
    color: black;
}
</style>