<script setup>
    import { ref } from 'vue';
    import Question from '../components/Question.vue';
    import QuizHeaderVue from '../components/QuizHeader.vue';
    import { useRoute } from 'vue-router';
    import quizes from '../data/quizes.json';

    const route = useRoute();
    const quizId = parseInt(route.params.id);
    const quiz = quizes.find(q => q.id === quizId);
    const currentQuestionIndex = ref(0);
</script>

<template>
    <div>
        <QuizHeaderVue/>
        <div>
            <Question :question="quiz.questions[currentQuestionIndex]"/>
        </div>
    </div>
</template>

<style scoped>

</style>