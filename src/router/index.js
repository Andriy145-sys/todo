import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        redirect: '/login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/todo',
        name: 'todo',
        component: () => import('@/views/ToDo.vue'),
        meta: { requiresLogin: true }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: { requiresLogout: true }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && store.getters.loggedUser == null) {
        next({ name: 'login' })
    }
    else if (to.matched.some(record => record.meta.requiresLogout) && store.getters.loggedUser != null) {
        next({name: 'todo'})
    }
    else {
        next()
    }
})

export default router;