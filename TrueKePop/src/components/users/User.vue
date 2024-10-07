<template>
  <nav class="navigation navbar navbar-expand-md py-1">
    <div class="container-fluid">
      <div class="navbar-nav">
        
        <router-link to="/user/urgente" class="nav-link nav-button" :class="{ active: $route.path === '/user/urgente' }">Urgente</router-link>
        <router-link to="/user/escuchoOfertas" class="nav-link nav-button" :class="{ active: $route.path === '/user/escuchoOfertas' }">Escucho Ofertas</router-link>
        <router-link to="/user/novedades" class="nav-link nav-button" :class="{ active: $route.path === '/user/novedades' }">Novedades</router-link>
        <router-link to="/user/favoritos" class="nav-link nav-button" :class="{ active: $route.path === '/user/favoritos' }">Favoritos</router-link>
        <router-link to="/user/mensajes" class="nav-link nav-button" :class="{ active: $route.path === '/user/mensajes' }">Mensajes</router-link>
        <button class="nav-link nav-button" @click="openModal">Subir Trueke</button>
      </div>
    </div>

    <NuevoTrueke v-if="showModal" @close="closeModal" />
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import NuevoTrueke from '@/components/Categorias/NuevoTrueke.vue'; 

const showModal = ref(false); 

const openModal = () => {
  showModal.value = true; 
};

const closeModal = () => {
  showModal.value = false; 
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
  z-index: 10; 
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
