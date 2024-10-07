<template>
  <!-- Barra de navegación pública -->
  <nav v-if="isPublicRoute" class="navigation navbar navbar-expand-md py-1">
    <div class="container-fluid">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link nav-button" :class="{ active: $route.path === '/' }">Home</router-link>
        <router-link to="/urgente" class="nav-link nav-button" :class="{ active: $route.path === '/urgente' }">Urgente</router-link>
        <router-link to="/escuchoOfertas" class="nav-link nav-button" :class="{ active: $route.path === '/escuchoOfertas' }">Escucho Ofertas</router-link>
        <router-link to="/novedades" class="nav-link nav-button" :class="{ active: $route.path === '/novedades' }">Novedades</router-link>
      </div>
    </div>
  </nav>

  <!-- Barra de navegación del usuario -->
 
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore';
import { computed } from 'vue';

const authStore = useAuthStore();

// Computed property to check if the current route is public
const isPublicRoute = computed(() => {
  const publicRoutes = ['/', '/urgente', '/escuchoOfertas', '/novedades'];
  return publicRoutes.includes(window.location.pathname);
});
</script>

<style scoped>
.nav-button {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 14px;
  margin-right: 20px;
  padding: 10px 15px;
  color: #000000;
  transition: color 0.3s ease, background-color 0.3s ease; 
  border-radius: 10px; 
}

.nav-button:hover {
  color: #ffffff; 
  background: linear-gradient(135deg, #4ecfe9, #FF7A4A); 
}

.nav-button.active {
  color: #ffffff;
  background-color: rgb(34, 207, 207); 
  border-bottom: 2px solid #FF7A4A; 
}

@media (max-width: 768px) {
  .nav-button {
    margin-right: 10px;
    padding: 8px 10px;
    font-size: 12px; 
  }
}
</style>
