import { createRouter, createWebHashHistory,useRouter } from 'vue-router'

const routes = [
    {
        path: '/',
        name:'home1',
        component: () => import('../views/Main.vue'),
          path: '/user',
        children:[]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router   