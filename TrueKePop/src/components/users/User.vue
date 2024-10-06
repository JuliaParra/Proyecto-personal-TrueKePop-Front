<template>
  <nav class="navigation navbar navbar-expand-md py-1" v-if="authStore.isAuthenticated">
    <div class="container-fluid">
      <div class="navbar-nav">
        <router-link to="/urgente" class="nav-link nav-button" :class="{ active: $route.path === '/urgente' }">Urgente</router-link>
        <router-link to="/escuchoOfertas" class="nav-link nav-button" :class="{ active: $route.path === '/escuchoOfertas' }">Escucho Ofertas</router-link>
        <router-link to="/directo" class="nav-link nav-button" :class="{ active: $route.path === '/directo' }">Directo</router-link>
        <router-link to="/novedades" class="nav-link nav-button" :class="{ active: $route.path === '/novedades' }">Novedades</router-link>
        <router-link to="/favoritos" class="nav-link nav-button" :class="{ active: $route.path === '/favoritos' }">Favoritos</router-link>
        <router-link to="/mensajes" class="nav-link nav-button" :class="{ active: $route.path === '/mensajes' }">Mensajes</router-link>
        <button class="nav-link nav-button" @click="toggleModal">Subir Trueke</button>
      </div>
      
    </div>
    
    <CrearTrueke :isVisible="showModal" @close="toggleModal" />
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import CrearTrueke from '@/components/CrearTrueke.vue';

const authStore = useAuthStore();
const showModal = ref(false);

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
