import { createRouter, createWebHistory } from 'vue-router';
import StartPage from '../views/StartPage.vue';
import GamePage from '../views/GamePage.vue';

const routes = [
    {
        path: '/',
        name: 'StartPage',
        component: StartPage
    },
    {
        path: '/game',
        name: 'GamePage',
        component: GamePage
    }, /*
    {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    } */
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;