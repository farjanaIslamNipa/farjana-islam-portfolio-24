import HomePage from '@/pages/client/HomePage.vue';
import Dashboard from '@/pages/dashboard/Dashboard.vue';
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
  { 
    path: '/', 
    component: HomePage,
    meta: {layout: 'client'}
   },
  { path: '/dashboard',
   component: Dashboard,
   meta: { layout: 'admin' },
   },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;