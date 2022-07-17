import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store'

Vue.use(VueRouter);

const routes = [
    {
        path: '/todo',
        name: 'todo',
        component: () => import('@/views/ToDo.vue'),
        meta: { requiresLogout: true }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: { requiresLogin: true }
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,

});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && store.getters.loggedUser == null) {
        next({ name: 'todo' })
    }
    else if (to.matched.some(record => record.meta.requiresLogout) && store.getters.loggedUser != null) {
        next({name: 'login'})
    }
    else {
        next()
    }
})

export default router;