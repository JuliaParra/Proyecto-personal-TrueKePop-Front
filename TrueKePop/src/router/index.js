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
import UserView from '@/views/users/UserView.vue';
import FavoritosView from '@/views/categorias/FavoritosView.vue';
import { useAuthStore } from '@/stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/directo',
      name: 'Directo',
      component: DirectoView,
    },
    {
      path: '/novedades',
      name: 'Novedades',
      component: NovedadesView,
    },
    {
      path: '/escuchoOfertas',
      name: 'EscuchoOfertas',
      component: EscuchoOfertasView,
    },
    {
      path: '/urgente',
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
      path: '/Admindashboard',
      name: 'Admindashboard',
      component: AdminView,
      meta: { requiresAuth: true, requiredRole: 'ROLE_ADMIN' },
    },
    {
      path: '/User',
      name: 'User',
      component: UserView,
      meta: { requiresAuth: true, requiredRole: 'ROLE_USER' },
    },
    {
      path: '/favoritos',
      name: 'Favoritos',
      component: FavoritosView,
    }
  ]
});

// Protege las rutas con `beforeEach`
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Verifica si la ruta requiere autenticación
  if (to.meta.requiresAuth) {
    // Verifica si el usuario está autenticado
    if (!authStore.isAuthenticated) {
      next('/login'); // Redirige al login si no está autenticado
    } else {
      // Verifica el rol requerido para la ruta
      const userRole = authStore.user?.roles[0];
      if (to.meta.requiredRole && userRole !== to.meta.requiredRole) {
        next('/'); // Redirige a Home si no tiene el rol adecuado
      } else {
        next(); // Permite el acceso si cumple con los requisitos
      }
    }
  } else {
    next(); // Permite el acceso si la ruta no requiere autenticación
  }
});

export default router;
