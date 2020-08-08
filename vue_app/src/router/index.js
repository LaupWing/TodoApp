import Vue from 'vue'
import VueRouter from 'vue-router'
import Todos from '../views/Todos.vue'
import Auth from '../views/Auth.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Todos',
        component: Todos
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;