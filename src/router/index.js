import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import WorkPage from '../views/WorkPage'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', component: HomePage },
        { path: '/work/', component: WorkPage },
        // { path: '/accessories/', component: ProductPage, props: { page: 'accessories' } },
    ]
})

export default router