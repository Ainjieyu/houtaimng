import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/home/Home.vue'),
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('../views/mall/mall.vue'),
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/user/user.vue'),
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../views/page1.vue'),
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../views/page2.vue'),
            },

        ]

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