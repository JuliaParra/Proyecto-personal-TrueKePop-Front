<template>
  <nav class="navigation navbar navbar-expand-md py-1">
    <div class="container-fluid">
      <div class="navbar-nav">
        <router-link to="/urgente" class="nav-link nav-button" :class="{ active: $route.path === '/urgente' }">Urgente</router-link>
        <router-link to="/escuchoOfertas" class="nav-link nav-button" :class="{ active: $route.path === '/escuchoOfertas' }">Escucho Ofertas</router-link>
        <router-link to="/directo" class="nav-link nav-button" :class="{ active: $route.path === '/directo' }">Directo</router-link>
        <router-link to="/novedades" class="nav-link nav-button" :class="{ active: $route.path === '/novedades' }">Novedades</router-link>

        <!-- Mostrar solo si el usuario está logueado -->
        <router-link v-if="isLoggedIn" to="/favoritos" class="nav-link nav-button" :class="{ active: $route.path === '/favoritos' }">Mis Favoritos</router-link>
        <router-link v-if="isLoggedIn" to="/perfil" class="nav-link nav-button" :class="{ active: $route.path === '/perfil' }">Perfil</router-link>

        <button class="nav-link nav-button" @click="toggleModal">Subir Trueke</button>
      </div>
    </div>

    <NuevoTrueke :isVisible="showModal" @close="toggleModal" />
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/authStore'; // Asegúrate de que esta tienda maneje el estado de autenticación
import NuevoTrueke from '../Categorias/NuevoTrueke.vue';

const authStore = useAuthStore();
const showModal = ref(false);

// Computed property para verificar si el usuario está logueado
const isLoggedIn = computed(() => authStore.isLoggedIn);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
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
  position: relative;
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
