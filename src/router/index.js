import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import WorkPage from '../views/WorkPage'
import WorkListPage from '../views/WorkListPage'
import { BRANDS } from '@/assets/brandNameConst.js';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', component: HomePage  },
        { path: '/work/', component: WorkPage },
        { path: '/work/titan/', component: WorkListPage, props: { brand: BRANDS["titan"] }},
        // { path: '/accessories/', component: ProductPage, props: { page: 'accessories' } },
    ]
})

export default router