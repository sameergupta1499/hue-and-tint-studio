import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage'
import WorkPage from '../views/WorkPage'
import WorkListPage from '../views/WorkListPage'
import { data } from '@/assets/const.js';
// Define a function to generate routes
const getRoutes = () => {
    const routes = [];
  
    // Iterate through data.work and create routes for each brand
    data.work.forEach((item) => {
      const route = {
        path: item['page-url'],
        // component: WorkListPage, //till al the brands are there
        component: WorkPage,
        props: {
          brand: item.brand,
        },
      };
      routes.push(route);
    });
  
    return routes;
  };
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', component: HomePage  },
        { path: '/work/', component: WorkPage },
        { path: '/work/titan/', component: WorkListPage, props: { brand: "TITAN" }},
        { path: '/work/secret-alchemist/', component: WorkListPage, props: { brand: "SECRET ALCHEMIST" }},
        { path: '/work/zeme-fresh/', component: WorkListPage, props: { brand: "ZEME FRESH" }},
        { path: '/work/the-pink-foundry/', component: WorkListPage, props: { brand: "THE PINK FOUNDRY" }},
        { path: '/work/vyb-by-fastrack/', component: WorkListPage, props: { brand: "VYB BY FASTRACK" }},
        { path: '/work/ira-soles/', component: WorkListPage, props: { brand: "IRA SOLES" }},
        { path: '/work/see-love/', component: WorkListPage, props: { brand: "SEE LOVE" }},
        ...getRoutes(),

    ]
})

export default router