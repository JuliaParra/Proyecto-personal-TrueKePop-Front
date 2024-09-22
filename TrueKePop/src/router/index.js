import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomeView.vue';
import Registre from '@/components/auth/Registre.vue';
import Login from '@/components/auth/Login.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },



  {
    path: '/registre',
    name: 'Registre',
    component: Registre,
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
 
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
  
