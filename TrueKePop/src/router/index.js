import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomeView.vue';
import Login from '@/components/auth/Login.vue';
import DirectoView from '@/views/categorias/DirectoView.vue';
import NovedadesView from '@/views/categorias/NovedadesView.vue';
import EscuchoOfertasView from '@/views/categorias/EscuchoOfertasView.vue';
import UrgenteView from '@/views/categorias/UrgenteView.vue';
import TePuedeInteresar from '@/components/Categorias/TePuedeInteresar.vue';
import TruekesMasUrgentes from '@/components/Categorias/TruekesMasUrgentes.vue';
import AdminView from '@/views/users/AdminView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },

  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },



 

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/Directo',
    name: 'directo',
    component: DirectoView,
  },

  {
    path: '/Novedades',
    name: 'Novedades',
    component: NovedadesView,
  },

  
  {
    path: '/EscuchoOfertas',
    name: 'EscuchoOfertas',
    component: EscuchoOfertasView,
  },

  {
    path: '/Urgente',
    name: 'Urgente',
    component: UrgenteView,
  },

  {
    path: '/tepuedeinteresar',
    name: 'TePuedeInteresar',
    component: TePuedeInteresar,
  },

  {
    path: '/truekesmasurgentes',
    name: 'TruekeMasUrgentes',
    component: TruekesMasUrgentes,
  },

  {
    path: '/Admin',
    name: 'Admin',
    component: AdminView,
  },

 
 
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
  
