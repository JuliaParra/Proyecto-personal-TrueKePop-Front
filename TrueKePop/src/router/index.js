import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomeView.vue';
import Registre from '@/components/auth/Registre.vue';
import Login from '@/components/auth/Login.vue';
import DirectoView from '@/views/DirectoView.vue';
import NovedadesView from '@/views/NovedadesView.vue';
import EscuchoOfertasView from '@/views/EscuchoOfertasView.vue';
import UrgenteView from '@/views/UrgenteView.vue';
import TePuedeInteresar from '@/components/Categorias/TePuedeInteresar.vue';
import TruekesMasUrgentes from '@/components/Categorias/TruekesMasUrgentes.vue';



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

 
 
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
  
