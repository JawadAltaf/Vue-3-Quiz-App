import { createRouter, createWebHistory } from "vue-router";
import QuizView from '../views/QuizView.vue';
import SingleQuizView from '../views/SingleQuizView.vue';

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'quizes',
            component:QuizView
        },
        {
            path:'/quiz/:id',
            name:'quiz',
            component:SingleQuizView
        }
    ]
});

export default router;