<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';


const route = useRoute();
const authStore = useAuthStore();
</script>

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
        <router-link to="/subir-trueke" class="nav-link nav-button" :class="{ active: $route.path === '/subir-trueke' }">Subir Trueke</router-link>
      </div>
      
    </div>
  </nav>

  

  <nav class="navigation navbar navbar-expand-md py-1" v-else>
    <div class="container-fluid">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link nav-button">Home</router-link>
        <router-link to="/login" class="nav-link nav-button">Login</router-link>
        <router-link to="/register" class="nav-link nav-button">Register</router-link>
      </div>
   
    
    </div>
  </nav>

  <main>
   
  </main>
</template>

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
  box-shadow: 0 4px 8px rgba(78, 207, 233, 0.3); 
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
